const inicio = () => console.log('inicio');

const final = () => console.log('final');

async function myfunc() {
    inicio()

    await setTimeout(() => console.log('operacion async'), 1000)

    final()
}

myfunc();