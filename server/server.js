//Cargamos la libreria de express
const express = require('express');
//Cargamos la libreria de path
const path = require('path');
//Inicializamos express
const app = express();
//cargamos y configuramos la libreria de socket
const socketIO = require('socket.io');
const http = require('http');
let server = http.createServer(app);
//Hacer publica la carpeta public
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
//usamos el middleware para habilitar la carpeta publica
app.use(express.static(publicPath));

//IO= Esta es la comunicacion del backend
module.exports.io = socketIO(server);

require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});