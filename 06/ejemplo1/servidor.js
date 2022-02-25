const http = require('http')
const moment = require('moment')

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Hola mundo')
})

const connectedServer = server.listen(8080, () => {
    const horaActual = moment().format('HH')
    let mensaje
    if(horaActual >= 6 && horaActual <= 12) {
        mensaje = 'Buenos dias!'
    } else if (horaActual >= 13 && horaActual <= 19) {
        mensaje = 'Buenas tardes!'
    } else {
        mensaje = 'Buenas noches!'
    }
    console.log(`${mensaje} - Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
