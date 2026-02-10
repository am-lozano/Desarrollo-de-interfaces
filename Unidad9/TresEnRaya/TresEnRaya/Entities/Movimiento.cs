namespace TresEnRayaServer.Entities
{
    public class Movimiento
    {
        public string ConnectionId { get; set; }
        public char Ficha { get; set; }
        public int PosX { get; set; }
        public int PosY { get; set; }

        public Movimiento(string connectionId, char ficha, int posX, int posY)
        {
            ConnectionId = connectionId;
            Ficha = ficha;
            PosX = posX;
            PosY = posY;
        }
    }
}