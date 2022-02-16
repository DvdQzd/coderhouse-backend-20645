function operacion (saludo) {
    console.log('Estoy haciendo una operacion');
    saludo();
}

operacion(() => {
    console.log('Hello there!')
});


// ----------------------------------------------------------------

const mapeoDatosEmp1 = (datos) => {
    return {
        name: datos.nombre,
        last_name: datos.apellido
    }
}

const mapeoDatosEmp2 = (datos) => {
    const { nombre, apellido } = datos;
    return {
        nombre_completo: `${nombre} ${apellido}`
    }
}

function obtenerDatos (mapeo) {
    const datos = {
        nombre: 'Chris',
        apellido: 'Redfield'
    }
    return mapeo(datos);
}

console.log(obtenerDatos(mapeoDatosEmp1))
console.log(obtenerDatos(mapeoDatosEmp2))