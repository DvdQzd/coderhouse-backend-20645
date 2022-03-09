const express = require('express')

const app = express()

app.use('/static', express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// https://expressjs.com/en/guide/routing.html

const mascotas = [
    {
        nombre: 'Pepito',
        edad: 2,
        raza: 'Bulldog',
    },
    {
        nombre: 'Pepita',
        edad: 3,
        raza: 'Bulldog',
    },
]

const personas = [
    {
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 30
    },
    {
        nombre: 'Pedro',
        apellido: 'González',
        edad: 40
    },
]

app.route('/mascotas')
    .get((req, res) => {
        res.send(mascotas)
    })
    .post((req, res) => {
        const nuevaMascota = req.body
        mascotas.push(nuevaMascota)
        res.send('post ok')
    })

app.route('/personas')
    .get((req, res) => {
        res.send(personas)
    })
    .post((req, res) => {
        const nuevaPersona = req.body
        personas.push(nuevaPersona)
        res.send('post ok')
    })

app.listen(8080)
