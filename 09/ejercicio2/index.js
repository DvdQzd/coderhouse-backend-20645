const express = require('express')

const app = express()

const fs = require('fs');
// defino el motor de plantilla
app.engine('cte', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }
    const rendered = content.toString()
                              .replace('^^titulo$$', ''+ options.titulo +'')
                              .replace('^^mensaje$$', ''+ options.mensaje +'')
                              .replace('^^autor$$', ''+ options.autor +'')
                              .replace('^^version$$', ''+ options.version +'')
                              .replace('^^nombre$$', ''+ options.nombre +'')
                              .replace('^^apellido$$', ''+ options.apellido +'')
                              .replace('^^date$$', ''+ options.date +'');

    return callback(null, rendered);
  });
});

app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'cte'); // registra el motor de plantillas


app.get('/cte1', function (req, res) {

    const datos = {
        titulo: 'Prueba de plantilla',
        mensaje: 'Este es un mensaje',
        autor: 'David',
        version: '1.0'
    }
    
    res.render('plantilla1', datos);
});

app.get('/cte2', function (req, res) {

    const datos = {
        nombre: 'Luis',
        apellido: 'Garcia',
        date: '2017-12-12'
    }

    res.render('plantilla2', datos);
});
  

app.listen(8080, () => console.log('ready'))


























 // let rendered = content.toString()
    // for (let key of Object.keys(options)) {
    //   if(typeof options[key] === 'string') {
    //     rendered = rendered.replace(`^^${key}$$`, options[key])
    //   }
    // }