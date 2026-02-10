namespace TresEnRayaServer.Entities
{
    public class Player
    {
        public string ConnectionId { get; set; }
        public char Ficha { get; set; }
        public bool IsTurno { get; set; }

        public Player(string connectionId, char ficha, bool isTurno)
        {
            ConnectionId = connectionId;
            Ficha = ficha;
            IsTurno = isTurno;
        }
    }
}