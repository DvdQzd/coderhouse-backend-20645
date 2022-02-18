const fs = require('fs');

try {
    const ruta = './fyh.txt';
    fs.writeFileSync(ruta, Date().toString())
    const datosArchivo = fs.readFileSync('./yoNoExisto.txt', 'utf-8');
    console.log(datosArchivo)
} catch (e) {
    throw new Error(`Recorcholis, hubo un error!: ${e.message}`)
}