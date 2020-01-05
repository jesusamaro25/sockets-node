var socket = io();
//Escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('se ha perdido la conexion con el servidor');
});

//Enviar informacion (emitir)
socket.emit('enviarMensaje', {
    usuario: 'Jesus',
    mensaje: 'Hola vale'
}, function(respuesta) {
    console.log('respuesta servidor', respuesta);
});

//Escuchar informacion del servidor

socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor:', mensaje);

})