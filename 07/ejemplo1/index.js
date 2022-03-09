const express = require('express')

const app = express()

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/usuarios', (req, res) => {

    const nombre = req.query.nombre;

    res.send(`Hola ${nombre}!`)
})

app.get('/usuarios/:id', (req, res) => {

    const id = req.params.id;

    res.send(`ID: ${id}`)
})

/************** */

const frase = 'Hola mundo cómo están';

app.get('/api/frase', (req, res) => res.send({frase}))

app.get('/api/letras/:num', (req, res) => {
    
    if (isNaN(req.params.num)) {
        res.send({error: 'El parámetro no es un número'})
        return
    }
    const num = parseInt(req.params.num);
    if(num > frase.length) {
        res.send({error: 'El parámetro está fuera de rango'})
        return
    }
    res.send({letra: frase[num - 1]})
})

app.get('/api/palabras/:num', (req, res) => {
    
    if (isNaN(req.params.num)) {
        res.send({error: 'El parámetro no es un número'})
        return
    }
    const num = parseInt(req.params.num);

    const palabras = frase.split(' ');

    if(num > palabras.length) {
        res.send({error: 'El parámetro está fuera de rango'})
        return
    }

    res.send({letra: palabras[num - 1]})
})