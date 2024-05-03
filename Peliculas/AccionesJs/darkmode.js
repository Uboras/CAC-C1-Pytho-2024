const botonInicio = document.getElementById("boton-inicio");

// Supongamos que tienes una variable `modoOscuro` que indica si el modo oscuro está activado o no
let modoOscuro = false; // Cambia esto según el estado de tu aplicación
cambiarTextoBoton();

function cambiarModo() {
  modoOscuro = !modoOscuro;
  cambiarTextoBoton();
  /* Si el modo oscuro está activado, 
      agrega la hoja de estilos
       del modo oscuro, de lo contrario, la quíta*/
  if (modoOscuro) {
    agregarHojaEstilos("../style-osc.css");
  } else {
    quitarHojaEstilos("../style-osc.css");
  }
}
//cambia el nombre del boton (agregar un svg con un sol o una luna)
function cambiarTextoBoton() {
  botonInicio.textContent = modoOscuro ? "Oscuro" : "claro";
}
//logica pra agregar la etiqueta link el nuevo oscuro
function agregarHojaEstilos(href) {
  const hojaEstilos = document.createElement("link");
  hojaEstilos.rel = "stylesheet";
  hojaEstilos.href = href;
  hojaEstilos.id = "hoja-estilos-oscuro";
  document.head.appendChild(hojaEstilos);
}
//logica para quitar el estilo de hoja clara
function quitarHojaEstilos(href) {
  const hojaEstilos = document.getElementById("hoja-estilos-oscuro");
  if (hojaEstilos) {
    hojaEstilos.remove();
  }
}
//escucha el evento click y llama a la funcion cambiar modo que es la que agrega y quita hoja de estilos
botonInicio.addEventListener("click", function () {
  cambiarModo();
});