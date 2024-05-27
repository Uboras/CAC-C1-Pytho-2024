
  async function fetchPeliculas() {
  const APIS_URL ='https://api.themoviedb.org/3/trending/all/day';
  const API_AUTORIZATION="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjgzMDcyZDU5YWMxNTE2MjJlMmY5MjliZGU4MjM0MCIsInN1YiI6IjY2NTM5MmQ1ZDAwMTg4NDgwZDA2ODU1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6LuYOvY7-FvchV4Hqua3gPEp6t8KHxqNXDURCXewTkk";
  
  const URL_IMAGE ="https://image.tmdb.org/t/p/original";
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

fetchPeliculas().then( data => {
  const peliculasTodas = data.results;
  mostrarPeliculasTodas(peliculasTodas);
  console.log(peliculasTodas); // Aquí puedes ver las películas obtenidas
});


function mostrarPeliculasTodas(peliculasTodas){
  const IMAGE_PATH ="https://image.tmdb.org/t/p/original";
  let peliculas= "<div class='contenedor-peliculas'>";
  let peliculasHtml = document.getElementById("peliculasTodas");

  for (let i = 0; i < peliculasTodas.length; i++) {
    const element = peliculasTodas[i];
    let apertura ="<div class='contenedor-card'>"
    let data = `<img class="pelicula-imagen" src="${IMAGE_PATH + element.poster_path}"/> 
                <p class="pelicula-title subtitle">${element.original_title}</p>
                `

    let cierre ="</div>"
    peliculas += apertura + data + cierre;
  }
  peliculas+="</div>"
  peliculasHtml.innerHTML = peliculas;
}
