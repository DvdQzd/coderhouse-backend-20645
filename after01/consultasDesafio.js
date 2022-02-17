class Usuario {

    constructor (nombre, apellido, { datos }) {
        const { mascotas, libros } = datos;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas || [];
        this.libros = libros || [];
    }
}

const usuario = new Usuario('David', 'Quezada', { mascotas, libros })



