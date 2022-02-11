// funcion normal

function saludar (nombre) {
    console.log(`Hola ${nombre}!`);
}

saludar('David');

// funcion anonima

const saludarFuncionAnonima = function (nombre) {
    console.log(`Hola ${nombre}!`);
}

saludarFuncionAnonima('Mundo');

function saludarAJuan () {
    return saludarFuncionAnonima('Juan');
}

saludarAJuan();


// IIFE

(function (nombre) {
    console.log(`General ${nombre}`)
})('Obi Wan');


