// const min = 1
// const max = 20

// const output = {}

// for (let i = 0; i < 10000; i++) {
//     let numero = Math.floor(Math.random() * (max - min) + min);
    
//     if(output[numero]){
//         output[numero]++
//     } else {
//         output[numero] = 1
//     }
// }

// console.log(output)

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const nombresProductos = productos.map(p => p.nombre).join(', ');
const precioTotal = Math.floor(
    productos
    .map(p => p.precio)
    .reduce((a, b) => a + b, 0)
)
const precioPromedio = Math.floor(precioTotal / productos.length)
const productosOrdenados = productos.sort((a, b) => a.precio - b.precio)
const productoConMenorPrecio = productosOrdenados[0]
const productoConMayorPrecio = productosOrdenados[productosOrdenados.length - 1]

const resultado = {
    nombresProductos,
    precioTotal,
    precioPromedio,
    productoConMenorPrecio,
    productoConMayorPrecio
}

console.log(resultado)

