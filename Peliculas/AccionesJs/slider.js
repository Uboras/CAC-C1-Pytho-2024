// se saca el elemento que dispara el evento recorriendo el elemento 
class IndexForSiblings{
    static get(el){
      let children = el.parentNode.children;
  
      for (var i = 0; i < children.length; i++) {
        let child = children[i];
        if(child == el) return i;
      }
    }
  }
  
  class Slider{
    constructor(selector,movimiento=true){
      //para mantener el this desde aca y hacer scoope
      this.move = this.move.bind(this);
      this.moveByButton = this.moveByButton.bind(this);
      //selecciona el selector que es enviado por argumentos para que pueda ser cualquier componente no solo slider
      this.slider = document.querySelector(selector);
      //busca todos los elementos que son hijos directos de .container para saber el largo del array 
      this.itemsCount = this.slider.querySelectorAll(".container > *").length;
      //intervalo para el slider automatico
      this.interval = null;
      this.contador = 0;
      //si se quiere el movimiento o no se llena en el argumento
      this.movimiento = movimiento;
      //se inicia el movimiento
      this.start();
      //se construyen los controles
      this.buildControls();
      
      this.bindEvents();
    }
    // Cada 3 segundo se mueve el slider a la sienguiente imagen
    start(){
      if(!this.movimiento) return;
      this.interval = window.setInterval(this.move,3000);
    }
    // cuando se toca un control. se reinicia el intervalo a 0
    restart(){
      if(this.interval) window.clearInterval(this.interval);
      this.start();
    }
    // evento del control. se mueve a la imagen del index del control
    bindEvents(){
      this.slider.querySelectorAll(".controls li")
          .forEach(item =>{
  
            item.addEventListener("click",this.moveByButton)
          });
    }
    //
    moveByButton(event){
      //se saca el index del que dispara el evento para sber el index y se setea el index para mover la imagen y reiniciar el contrador y movimiento
      let index = IndexForSiblings.get(event.currentTarget);
      this.contador = index;
      this.moveTo(index);
      this.restart();
    }
  //se contruyen los controles para cada imagen de forma automatica sacando la cantidad de elemntos
    buildControls(){
      for (var i = 0; i < this.itemsCount; i++) {
        // se itera el active.(clase de muestra visualmente en que posicion esta)
        let control = document.createElement("li");
  
        if(i == 0) control.classList.add("active");
        //se introduce el control creado en una lista no ordenada
        this.slider.querySelector(".controls ul").appendChild(control);
      }
    }
    //movimiento de del controlador
    move(){
      this.contador++;
      if(this.contador > this.itemsCount - 1) this.contador = 0;
      this.moveTo(this.contador);
    }
    // movimiento de los controles el activo. Se quita los active del 
    resetIndicator(){
      this.slider.querySelectorAll(".controls li.active")
          .forEach(item => item.classList.remove("active"));
    }
    //movimiento por click
    moveTo(index){
      //mueve el contenedor en la posicion de la imagen y el control a la posicion del index+1 y la pone activa
      let left = index * 100;
  
      this.resetIndicator();
      this.slider.querySelector(".controls li:nth-child("+(index+1)+")").classList.add("active");
  
      this.slider.querySelector(".container").style.left = "-"+left+"%";
    }
  }
  //ejecucion de la funcion. se pone en parectesis para no interferir en las lineas de js
  (function(){
  
    new Slider(".slider",true);
  
  })();
  