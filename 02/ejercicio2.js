class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentaIndividual = 0;
    }

    static cuentaGlobal = 0;

    obtenerResponsable () {
        return this.nombre;
    }

    obtenerCuentaIndividual () {
        return this.cuentaIndividual;
    }

    obtenerCuentaGlobal () {
        return Contador.cuentaGlobal;
    }

    contar () {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }

}

const contador1 = new Contador('Hugo');
const contador2 = new Contador('Paco');
const contador3 = new Contador('Luis');

console.log('Responsable', contador1.obtenerResponsable())
console.log('Contamos', contador1.contar())
console.log('Contamos', contador1.contar())
console.log('Contamos', contador1.contar())
console.log('Contamos', contador1.contar())
console.log('Cuenta Individual', contador1.obtenerCuentaIndividual())
console.log('Cuenta Global', contador1.obtenerCuentaGlobal())

console.log('Responsable', contador2.obtenerResponsable())
console.log('Contamos', contador2.contar())
console.log('Cuenta Individual', contador2.obtenerCuentaIndividual())
console.log('Cuenta Global', contador2.obtenerCuentaGlobal())

console.log('Responsable', contador3.obtenerResponsable())
console.log('Contamos', contador3.contar())
console.log('Cuenta Individual', contador3.obtenerCuentaIndividual())
console.log('Cuenta Global', contador3.obtenerCuentaGlobal())

console.log('Valor estatico', Contador.cuentaGlobal)