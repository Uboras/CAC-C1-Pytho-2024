//trae las peliculas de la API

// funcion para mostar las peliculas
 function mostrarPeliculasTodas() {
  const PeliculasGuardadas =  fetchPeliculas();
  const peliculasHtml = document.getElementById("peliculasTodas");
  //direccion necesaria para la api funcionen las imagenes con el path de cada
  //objeto a modificar del html
  // se crea el objeto con la apertura de un div con clas para el css.
  let peliculas = "<div class='contenedor-peliculas'>";

  PeliculasGuardadas.forEach((element) => {
    //APERTURA DEL DIV
    let apertura = "<div class='contenedor-card'>";
    //CARDS DE LAS PELICULAS
    let data = `<img class="pelicula-imagen" src="${element.url}"/> 
                  <p class="pelicula-title subtitle">${element.titulo}</p>
                  <p class="pelicula-title subtitle">${element.autor}</p>
                  <p class="pelicula-title subtitle">${element.duracion}</p>`;
    let cierre = "</div>";
    //AGREGA LAS PELICULAS A el objeto tipo String para integrarlo al html
    peliculas += apertura + data + cierre;
  });
  //cierre objeto apertura
  peliculas += "</div>";
  //insertar en html
  peliculasHtml.innerHTML = peliculas;
}
// se llama la funcion y se ejecuta el mostrar la pelicula siguiente a ese llamado
mostrarPeliculasTodas();
