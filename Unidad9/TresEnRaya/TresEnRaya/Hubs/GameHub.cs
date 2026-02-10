using Microsoft.AspNetCore.SignalR;
using TresEnRayaServer.Application;
using TresEnRayaServer.Entities;

namespace TresEnRayaServer.Hubs
{
    public class GameHub : Hub
    {
        private readonly GameState _gameState;
        private readonly GameService _gameService;

        public GameHub(GameState gameState, GameService gameService)
        {
            _gameState = gameState;
            _gameService = gameService;
        }

        public override async Task OnConnectedAsync()
        {
            var connectionId = Context.ConnectionId;

            if (_gameState.ObtenerNumJugadores() >= 2)
            {
                await Clients.Caller.SendAsync("Error", "La partida está llena");
                Context.Abort();
                return;
            }

            // Asignar ficha
            char ficha = _gameService.AsignarFicha(connectionId);
            bool esPrimero = _gameState.ObtenerNumJugadores() == 0;

            var player = new Player(connectionId, ficha, esPrimero);
            _gameState.Jugadores[connectionId] = player;

            // Notificar al jugador su ficha
            await Clients.Caller.SendAsync("JugadorAsignado", ficha, esPrimero);

            // Si es el segundo jugador, iniciar el juego
            if (_gameState.ObtenerNumJugadores() == 2)
            {
                // El primero que entró (X) tiene el primer turno
                var primerJugador = _gameState.Jugadores.Values.First(p => p.Ficha == 'X');
                _gameState.TurnoActual = primerJugador.ConnectionId;

                await Clients.All.SendAsync(
                    "JuegoIniciado",
                    _gameState.ObtenerTableroArray(),
                    _gameState.TurnoActual
                );
            }

            await base.OnConnectedAsync();
        }

        public async Task ColocarFicha(int posX, int posY)
        {
            var connectionId = Context.ConnectionId;

            // Verificar que es el turno del jugador
            if (_gameState.TurnoActual != connectionId)
            {
                await Clients.Caller.SendAsync("Error", "No es tu turno");
                return;
            }

            if (!_gameState.Jugadores.ContainsKey(connectionId))
            {
                await Clients.Caller.SendAsync("Error", "Jugador no encontrado");
                return;
            }

            var jugador = _gameState.Jugadores[connectionId];
            var movimiento = new Movimiento(connectionId, jugador.Ficha, posX, posY);

            var resultado = _gameService.ProcesarMovimiento(movimiento);

            if (!resultado.EsValido)
            {
                await Clients.Caller.SendAsync("Error", resultado.Mensaje);
                return;
            }

            // Notificar el movimiento a todos
            await Clients.All.SendAsync(
                "MovimientoRealizado",
                _gameState.ObtenerTableroArray()
            );

            // Comprobar fin del juego
            if (resultado.HayVictoria)
            {
                await Clients.Client(connectionId).SendAsync("JuegoTerminado", "victoria", connectionId);

                var perdedor = _gameState.Jugadores.Values.First(p => p.ConnectionId != connectionId);
                await Clients.Client(perdedor.ConnectionId).SendAsync("JuegoTerminado", "derrota", connectionId);

                _gameState.ResetGame();
                return;
            }

            if (resultado.HayEmpate)
            {
                await Clients.All.SendAsync("JuegoTerminado", "empate", null);
                _gameState.ResetGame();
                return;
            }

            // Cambiar turno
            _gameState.TurnoActual = _gameService.ObtenerSiguienteTurno(connectionId);
            await Clients.All.SendAsync("CambioTurno", _gameState.TurnoActual);
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            var connectionId = Context.ConnectionId;

            if (_gameState.Jugadores.ContainsKey(connectionId))
            {
                _gameState.Jugadores.Remove(connectionId);

                // Notificar al otro jugador
                await Clients.Others.SendAsync("JugadorDesconectado");

                // Resetear el juego
                _gameState.ResetGame();
            }

            await base.OnDisconnectedAsync(exception);
        }
    }
}
