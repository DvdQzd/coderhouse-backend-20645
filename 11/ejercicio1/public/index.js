const socket = io();

// // Cliente
// socket.on('mi mensaje', data => {
//     alert(data)
//     socket.emit('notificacion', 'Mensaje recibido exitosamente')
// })

// get input text
const inputText = document.getElementById('inputText')
// const realTimeText = document.getElementById('realTimeText')
const btnSend = document.getElementById('btnSend')


// emit message to socket when input text changes
inputText.addEventListener('keyup', e => {
    socket.emit('inputText', e.target.value)
})

btnSend.addEventListener('click', () => {
    socket.emit('saveMessage', {
        socketId: socket.id, mensaje: inputText.value
    })
    inputText.value = ''
})

// socket.on('newText', text => {
//     realTimeText.innerText = text
// })

socket.on('currentChat', messages => {
    realTimeText.innerText = ''
    messages.forEach(message => {
        realTimeText.innerHTML += `<p>SocketId: ${message.socketId} - Mensaje: ${message.mensaje}</p>`
    })
})