// CLOSURES

// const k = 'hello';

// function example () {
//     const p = 'something';
//     console.log(p);
//     console.log(k);
// }


function saludar (nombre) {
    const textoSaludo = 'Buen dia';
    return function () {
        console.log(`${textoSaludo} ${nombre}`);
    }
}

const saludarACoderhouse = saludar('coderhouse');

saludarACoderhouse();
