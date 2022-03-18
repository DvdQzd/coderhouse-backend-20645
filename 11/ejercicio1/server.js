const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))
// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.get('/', (req, res) => { // Esta ruta carga nuestro archivo index.html en la raíz de la misma
    res.sendFile('index.html', {root: __dirname})
})

httpServer.listen(3000, () => console.log('SERVER ON')) // El servidor funcionando en el puerto 3000


const messages = []

  // Servidor
 io.on('connection', socket => {
    console.log('¡Nuevo cliente conectado!')
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')

    // Servidor
    socket.on('notificacion', data => {
        console.log(data)
    })

    socket.on('inputText', text => {
        io.sockets.emit('newText', text)
    })

    socket.on('saveMessage', message => {
        messages.push(message);
        io.sockets.emit('currentChat', messages)
    })
})
 
