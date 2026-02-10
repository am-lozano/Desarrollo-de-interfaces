using TresEnRayaServer.Entities;

namespace TresEnRayaServer.Application
{
    public class GameState
    {
        private readonly object _lock = new object();

        public char[,] Tablero { get; private set; }
        public Dictionary<string, Player> Jugadores { get; private set; }
        public string? TurnoActual { get; set; }

        public GameState()
        {
            Tablero = new char[3, 3];
            Jugadores = new Dictionary<string, Player>();
            InicializarTablero();
        }

        private void InicializarTablero()
        {
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    Tablero[i, j] = ' ';
                }
            }
        }

        public void ResetGame()
        {
            lock (_lock)
            {
                InicializarTablero();
                Jugadores.Clear();
                TurnoActual = null;
            }
        }

        public int ObtenerNumJugadores()
        {
            lock (_lock)
            {
                return Jugadores.Count;
            }
        }

        public bool ComprobarVictoria(char ficha)
        {
            // Filas
            for (int i = 0; i < 3; i++)
            {
                if (Tablero[i, 0] == ficha && Tablero[i, 1] == ficha && Tablero[i, 2] == ficha)
                    return true;
            }

            // Columnas
            for (int j = 0; j < 3; j++)
            {
                if (Tablero[0, j] == ficha && Tablero[1, j] == ficha && Tablero[2, j] == ficha)
                    return true;
            }

            // Diagonales
            if (Tablero[0, 0] == ficha && Tablero[1, 1] == ficha && Tablero[2, 2] == ficha)
                return true;

            if (Tablero[0, 2] == ficha && Tablero[1, 1] == ficha && Tablero[2, 0] == ficha)
                return true;

            return false;
        }

        public bool ComprobarEmpate()
        {
            for (int i = 0; i < 3; i++)
            {
                for (int j = 0; j < 3; j++)
                {
                    if (Tablero[i, j] == ' ')
                        return false;
                }
            }
            return true;
        }

        public char[][] ObtenerTableroArray()
        {
            var tablero = new char[3][];
            for (int i = 0; i < 3; i++)
            {
                tablero[i] = new char[3];
                for (int j = 0; j < 3; j++)
                {
                    tablero[i][j] = Tablero[i, j];
                }
            }
            return tablero;
        }
    }
}