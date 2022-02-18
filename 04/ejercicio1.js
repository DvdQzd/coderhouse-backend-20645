const sleep = ms => new Promise(r => setTimeout(r, ms));

const mostrarLetras = async (texto, operacionFinal) => {
    for ( let i = 0; i < texto.length; i++ ) {
        await sleep(1000)
        console.log(texto[i])
    }
    operacionFinal();
}

const fin = () => console.log('terminé')

setTimeout(mostrarLetras, 0, '¡Hola!', fin)
setTimeout(mostrarLetras, 250, '¡Hola!', fin)
setTimeout(mostrarLetras, 500, '¡Hola!', fin)
