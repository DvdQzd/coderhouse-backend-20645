const express = require('express')
const moment = require('moment')
const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (solicitud, respuesta) => {
    respuesta.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>')
})

let visitas = 0
app.get('/visitas', (solicitud, respuesta) => {
    visitas++
    respuesta.send(`La cantidad de visitas es ${visitas}`)
})

app.get('/fyh', (solicitud, respuesta) => {
    respuesta.send({ fyh: moment().format('YYYY/MM/DD HH:mm:ss') })
})