using ChatClean;
using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(clsMensajeUsuario mensajeUsuario)
        {
            await Clients.All.SendAsync("ReceiveMessage", mensajeUsuario.nombre, mensajeUsuario.mensaje);
        }
    }
}