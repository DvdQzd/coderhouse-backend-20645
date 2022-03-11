const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', function (req, res) {

    const datos = {
        nombre: 'Juan',
        apellido: 'Mendoza',
        edad: '43',
        email: 'jm@gmail.com',
        telefono: '12312312123312'   
    }

    res.render('main', datos);
});
  

app.listen(8080)