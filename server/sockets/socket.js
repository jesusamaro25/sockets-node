const { io } = require('../server')

io.on('connection', (client) => {

    console.log('usuario conectado');

    //Emitir mensaje al cliente

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido'
    })

    io.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //Responder a todo el mundo
        client.broadcast.emit('enviarMensaje', data)

        /*console.log(mensaje);
    
        
        //Responder al cliente

        if (mensaje.usuario) {
            callback({
                respuesta: 'Todo ok'
            })
        } else {
            callback({
                respuesta: 'Algo ha salido mal'
            })
        }

        callback();
        */

    })
})