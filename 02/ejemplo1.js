// copia por valor

let a = 'hola';
let b = a;

// console.log({ a });
// console.log({ b });

// cambiamos a
a = 'adios';

// console.log({ a });
// console.log({ b });

//copia por referencia
let x = {
    nombre: 'David',
    apellido: 'Quezada'
};

let z = x.apellido;

// console.log({ x });
// console.log({ z });

x.apellido = 'Redfield';

// console.log({ x });
// console.log({ z });


// shallow clone

let k = {
    nombre: 'Jill',
    apellido: 'Valentine',
    otroDato: {
        // tendremos que usar deep clone
    }
};

let p = { ...k };

k.apellido = 'Chambers';

console.log({ k });
console.log({ p });
