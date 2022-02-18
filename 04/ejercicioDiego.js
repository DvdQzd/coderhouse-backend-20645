let cadena = "¡Hola!";

function fin() {
  console.log("Terminé");
}
function mostrarLetras(cadena, fin, t) {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < cadena.length) {
      console.log(cadena[i]);
      i++;
    } else {
      clearInterval(intervalId);
      fin();
    }
  }, t);
}

mostrarLetras(cadena, fin, 0);
mostrarLetras(cadena, fin, 250);
mostrarLetras(cadena, fin, 500);