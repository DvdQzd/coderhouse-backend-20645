const fs = require('fs')

const prueba = async () => {
    try {
        const contenido = await fs.promises.readFile('./info.txt', 'utf-8');
        console.log(contenido);
        const objetoModificable = JSON.parse(contenido)
        objetoModificable.contenidoObj.author = 'Coderhouse'
        await fs.promises.writeFile('./package.json.coderhouse', JSON.stringify(objetoModificable, null, 2))
    } catch (e) {
        throw new Error('problemas')
    }

}

prueba();