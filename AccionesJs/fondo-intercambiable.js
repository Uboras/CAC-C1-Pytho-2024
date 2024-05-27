
const banner1 = [`Peliculas\img\index\img-Banner\Banner1\estreno1.jpg`];
const banner2 = ["./img/index/img-Banner/Banner2/estreno1.jpg","./img/index/img-Banner/Banner2/estreno2.jpg","./img/index/img-Banner/Banner2/estreno3.jpg"];
const banner3 = ["./img/index/img-Banner/Banner3/computadoras.jpg","./img/index/img-Banner/Banner3/celulares.jpg"];


function fondosintercambianbles(imagenes, clase) {
    var contenedor = document.querySelector(`.${clase}`);
    var indice = 0;
    
    setInterval(function() {
        indice = (indice + 1) % imagenes.length;
        contenedor.style.backgroundImage = 'url(' + imagenes[indice] + ')';
    }, 4000); // Cambia cada 4 segundos
};

fondosintercambianbles(banner2, "banner2")
fondosintercambianbles(banner3, "banner3")
