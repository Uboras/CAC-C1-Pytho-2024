//trae las peliculas de la API
  async function fetchPeliculas() {
  const APIS_URL ='https://api.themoviedb.org/3/trending/all/day';
  const API_AUTORIZATION="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjgzMDcyZDU5YWMxNTE2MjJlMmY5MjliZGU4MjM0MCIsInN1YiI6IjY2NTM5MmQ1ZDAwMTg4NDgwZDA2ODU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6LuYOvY7-FvchV4Hqua3gPEp6t8KHxqNXDURCXewTkk";
  
  // se envian parametros y api key
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + API_AUTORIZATION,
  }
  };
  try {
    const response = await fetch(APIS_URL, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }}
  // funcion para mostar las peliculas
  function mostrarPeliculasTodas(peliculasTodas){ 
    //direccion necesaria para la api funcionen las imagenes con el path de cada
    const IMAGE_PATH ="https://image.tmdb.org/t/p/original";
    //objeto a modificar del html
    let peliculasHtml = document.getElementById("peliculasTodas");

    // se crea el objeto con la apertura de un div con clas para el css.
    let peliculas= "<div class='contenedor-peliculas'>";
    
  
    for (let i = 0; i < peliculasTodas.length; i++) {
      const element = peliculasTodas[i];
      //APERTURA DEL DIV
      let apertura ="<div class='contenedor-card'>"
      //CARDS DE LAS PELICULAS
      let data = `<img class="pelicula-imagen" src="${IMAGE_PATH + element.poster_path}"/> 
                  <p class="pelicula-title subtitle">${element.original_title}</p>`
        let cierre ="</div>"
      //AGREGA LAS PELICULAS A el objeto tipo String para integrarlo al html  
      peliculas += apertura + data + cierre;
    }
    peliculas+="</div>"
    peliculasHtml.innerHTML = peliculas;
  }
// se llama la funcion y se ejecuta el mostrar la pelicula siguiente a ese llamado
fetchPeliculas().then( data => {
  const peliculasTodas = data.results;
  mostrarPeliculasTodas(peliculasTodas);
  console.log(peliculasTodas); // Aquí puedes ver las películas obtenidas
});



