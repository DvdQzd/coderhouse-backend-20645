
// function mostrarLista (lista) {
//     if(lista?.length > 0) {
//         console.log(lista)
//     } else {
//         console.log("lista vacía")
//     }
// }

// mostrarLista([1, 3, 4, 5, 6]);
// mostrarLista([]);
// mostrarLista();

// (function (lista) {
//     if(lista?.length > 0) {
//         console.log(lista)
//     } else {
//         console.log("lista vacía")
//     }
// })(['a', 'b', 'c', 'd', 'e', 'f']);


const crearMultiplicador = function (multiplicador){
    return function (numero) {
        return multiplicador * numero;
    }
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(2)); // 4
console.log(duplicar(4)); // 8
console.log(triplicar(3)); // 9
console.log(triplicar(5)); // 15