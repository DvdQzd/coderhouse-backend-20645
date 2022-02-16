
console.log('Inicio')

setTimeout(
    nombre => console.log(`Hola ${nombre}`),
    2000,
    'Juan'
)

console.log('Final')
/**
 * Inicio
 * Final
 * Hola Rodrigo
 */


const intervalId = setInterval(
    nombre => console.log(`Hola ${nombre}`),
    1000,
    'Rodrigo'
)

setTimeout(() => clearInterval(intervalId), 5000)

/**
 * Hola Rodrigo en un intervalo de 1 segundo, por 5 segundos.
 */