const express = require('express')

const app = express()

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/sumar/:num1/:num2', (req, res) => {

    const [num1, num2] = [req.params.num1, req.params.num2]

    enviarSuma(num1, num2, res)
})

app.get('/sumar/', (req, res) => {

    const [num1, num2] = [req.query.num1, req.query.num2]

    enviarSuma(num1, num2, res)
})

app.get('/operacion/:op', (req, res) => {

    const [num1, num2] = req.params.op.split('+')

    enviarSuma(num1, num2, res)
})

const enviarSuma = (num1, num2, res) => {
    res.send(`${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}`)
}