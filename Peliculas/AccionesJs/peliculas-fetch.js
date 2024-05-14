class fetchPeliculas{

    
}

class arrayPeliculas{
constructor(selector){
    this.arrayPeliculas = document.querySelector(selector);

    
}


}

(function(){
    new arrayPeliculas(".peliculas-accion")
    new arrayPeliculas(".peliculas-comedia")
    new arrayPeliculas(".peliculas-drama")
    new arrayPeliculas(".peliculas-recientes")
})()