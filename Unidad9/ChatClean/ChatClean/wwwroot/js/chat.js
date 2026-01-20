"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//Disable the send button until connection is established.
document.getElementById("sendButton").disabled = true;

// Recibir el objeto completo
connection.on("ReceiveMessage", function (mensajeUsuario) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${mensajeUsuario.nombre} says ${mensajeUsuario.mensaje}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    
    // Crear el objeto clsMensajeUsuario
    var mensajeUsuario = {
        nombre: user,
        mensaje: message
    };
    
    // Enviar el objeto completo
    connection.invoke("SendMessage", mensajeUsuario).catch(function (err) {
        return console.error(err.toString());
    });
    
    event.preventDefault();
});