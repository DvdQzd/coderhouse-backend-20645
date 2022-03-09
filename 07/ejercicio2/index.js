const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))


let frase = 'Frase inicial'

app.get('/api/frase', (req, res) => res.send({frase}))


app.get('/api/palabras/:pos', (req, res) => {
        
        const pos = req.params.pos
        const palabras = frase.split(' ')
        
        if(pos > palabras.length) {
            res.send({error: 'El parámetro está fuera de rango'})
            return
        }
        
        res.send({buscada: palabras[pos - 1]})
})

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra
    
    const palabras = frase.split(' ')
    palabras.push(palabra)

    frase = palabras.join(' ')

    res.send({agregada: palabra, pos: palabras.length})
})

app.put('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos
    const palabra = req.body.palabra
    const palabras = frase.split(' ')
    if(pos > palabras.length) {
        res.send({error: 'El parámetro está fuera de rango'})
        return
    }
    anterior = palabras[pos - 1]
    palabras[pos - 1] = palabra
    frase = palabras.join(' ')
    res.send({actualizada: palabra, anterior})
})

app.delete('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos
    const palabras = frase.split(' ')
    if(pos > palabras.length) {
        res.send({error: 'El parámetro está fuera de rango'})
        return
    }
    anterior = palabras[pos - 1]
    palabras.splice(pos - 1, 1)
    frase = palabras.join(' ')
    res.send({eliminada: anterior, newLength: palabras.length})
})