const operacion = (num1, num2, op) => op(num1, num2)

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
const modulo = (a, b) => a % b
const promedio = (a, b) => (a + b) / 2

console.log(operacion(2, 3, suma))
console.log(operacion(2, 3, resta))
console.log(operacion(2, 3, multiplicacion))
console.log(operacion(2, 3, division))
console.log(operacion(2, 3, modulo))
console.log(operacion(2, 3, promedio))
