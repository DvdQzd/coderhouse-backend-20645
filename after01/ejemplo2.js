const esPar = (numero) => {
    if(numero % 2 == 0) {
        // es par
        return Promise.resolve('Es par');
    }

    return Promise.reject('Es impar, no me sirve.')
}

esPar(8)
    .then(res => {
        console.log(`Nos fue bien! ${res}`);
        return Promise.resolve('celebremos!')
    })
    .then(() => {
        console.log('Hurray!')
    })
    .catch(err => {
        console.log(`Nos fue mal! ${err}`);
    })




