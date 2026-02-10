namespace TresEnRayaServer.Entities
{
    public class ResultadoMovimiento
    {
        public bool EsValido { get; set; }
        public bool HayVictoria { get; set; }
        public bool HayEmpate { get; set; }
        public string Mensaje { get; set; }

        public ResultadoMovimiento()
        {
            Mensaje = string.Empty;
        }
    }
}