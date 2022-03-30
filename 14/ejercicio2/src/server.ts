import { IRespuesta } from "./IRespuesta";
import Perimetro from "./Perimetro";
import Superficie from "./Superficie";

const express = require('express')

const app = express()


    
app.get('/perimetro/cuadrado', (req, res) => {
    const lado = req.query.lado;
    const respuesta: IRespuesta = {
        tipoDeCalculo: "Perimetro",
        resultado: Perimetro.cuadrado(lado),
        figura: "Cuadrado",
        parametros: [
            {
                lado: lado
            }
        ],
    }
    res.send(respuesta);
})

app.get('/perimetro/rectangulo', (req, res) => {
    const base = req.query.base;
    const altura = req.query.altura;
    const respuesta: IRespuesta = {
        tipoDeCalculo: "Perimetro",
        resultado: Perimetro.rectangulo(base, altura),
        figura: "Rectangulo",
        parametros: [
            {
                base: base,
                altura: altura
            }
        ]
    }
    res.send(respuesta);
})

app.get('/perimetro/circulo', (req, res) => {
    const radio = req.query.radio;
    const respuesta: IRespuesta = {
        tipoDeCalculo: 'perimetro',
        resultado: Perimetro.circulo(radio),
        figura: 'circulo',
        parametros: [
            {
                radio: radio
            }
        ]
    }
    res.send(respuesta);
})


app.get('/superficie/cuadrado', (req, res) => {
    const lado = req.query.lado;
    const respuesta: IRespuesta = {
        tipoDeCalculo: 'superficie',
        resultado: Superficie.cuadrado(lado),
        figura: 'cuadrado',
        parametros: [
            {
                lado: lado
            }
        ]
    }
    res.send(respuesta);
})

app.get('/superficie/rectangulo', (req, res) => {
    const base = req.query.base;
    const altura = req.query.altura;
    const respuesta: IRespuesta = {
        tipoDeCalculo: 'superficie',
        resultado: Superficie.rectangulo(base, altura),
        figura: 'rectangulo',
        parametros: [
            {
                base: base,
                altura: altura
            }
        ]
    }
    res.send(respuesta);
})

app.get('/superficie/circulo', (req, res) => {
    const radio = req.query.radio;
    const respuesta: IRespuesta = {
        tipoDeCalculo: 'superficie',
        resultado: Superficie.circulo(radio),
        figura: 'circulo',
        parametros: [
            {
                radio: radio
            }
        ]
    }
    res.send(respuesta);
})

app.listen(8080, () => {
    console.log('conectado al puerto 8080')
})