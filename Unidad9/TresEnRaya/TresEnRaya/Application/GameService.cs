using TresEnRayaServer.Entities;

namespace TresEnRayaServer.Application
{
    public class GameService
    {
        private readonly GameState _gameState;
        private readonly object _lock = new object();

        public GameService(GameState gameState)
        {
            _gameState = gameState;
        }

        public char AsignarFicha(string connectionId)
        {
            lock (_lock)
            {
                if (_gameState.Jugadores.Count == 0)
                {
                    return 'X';
                }
                else if (_gameState.Jugadores.Count == 1)
                {
                    return 'O';
                }
                return ' ';
            }
        }

        public bool ValidarMovimiento(int x, int y)
        {
            if (x < 0 || x > 2 || y < 0 || y > 2)
                return false;

            return _gameState.Tablero[x, y] == ' ';
        }

        public ResultadoMovimiento ProcesarMovimiento(Movimiento movimiento)
        {
            lock (_lock)
            {
                var resultado = new ResultadoMovimiento();

                if (!ValidarMovimiento(movimiento.PosX, movimiento.PosY))
                {
                    resultado.EsValido = false;
                    resultado.Mensaje = "Movimiento inválido";
                    return resultado;
                }

                // Colocar ficha
                _gameState.Tablero[movimiento.PosX, movimiento.PosY] = movimiento.Ficha;
                resultado.EsValido = true;

                // Comprobar victoria
                if (_gameState.ComprobarVictoria(movimiento.Ficha))
                {
                    resultado.HayVictoria = true;
                    resultado.Mensaje = "¡Victoria!";
                    return resultado;
                }

                // Comprobar empate
                if (_gameState.ComprobarEmpate())
                {
                    resultado.HayEmpate = true;
                    resultado.Mensaje = "¡Empate!";
                    return resultado;
                }

                resultado.Mensaje = "Movimiento realizado";
                return resultado;
            }
        }

        public string ObtenerSiguienteTurno(string connectionIdActual)
        {
            lock (_lock)
            {
                foreach (var jugador in _gameState.Jugadores.Values)
                {
                    if (jugador.ConnectionId != connectionIdActual)
                    {
                        return jugador.ConnectionId;
                    }
                }
                return connectionIdActual;
            }
        }
    }
}