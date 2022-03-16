const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');

const datos = []

app.get('/', (req, res) => {
    res.render('form', {datos});
})

app.post('/personas', (req, res) => {
    datos.push(req.body)
    res.render('form', {datos});
})

app.listen(8080, () => console.log('ready'))