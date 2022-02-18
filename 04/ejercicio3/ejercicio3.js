const fs = require('fs');

const ruta = './package.json';
fs.readFile(ruta, 'utf-8', (err, data) => {
    if(err) throw new Error(`No pudimos leer archivo: ${err.message}`);

    const info = {
        contenidoStr: JSON.stringify(data),
        contenidoObj: JSON.parse(data),
        size: fs.statSync(ruta).size
    }

    console.log({ info })

    fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err => {
        if (err) throw new Error(`Todo mal ${err.message}`);
    })
    
});