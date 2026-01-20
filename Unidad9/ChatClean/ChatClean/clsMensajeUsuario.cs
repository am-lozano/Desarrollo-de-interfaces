namespace ChatClean
{
    public class clsMensajeUsuario
    {
        private string _nombre;
        private string _mensaje;

        public string nombre
        {
            get { return _nombre; }
            set { _nombre = value; }
        }

        public string mensaje
        {
            get { return _mensaje; }
            set { _mensaje = value; }
        }
    }
}
