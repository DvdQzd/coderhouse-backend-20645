function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}

const saludarAnon = function (nombre) {
    console.log(`Hola ${nombre}`)
}

const saludarArrowFunc = (nombre) => {
    console.log(`Hola ${nombre}`)
}

const saludarArrowFunc1 = nombre => {
    console.log(`Hola ${nombre}`)
}

const ejemplo = nombre => `Hola ${nombre}`

console.log(ejemplo('David'))

const ejemplo2 = () => [1, 2, 3, 4]

console.log(ejemplo2())

const ejemplo3 = () => ({ nombre: 'David', apellido: 'Quezada' })

console.log(ejemplo3())