const video = document.querySelector('video');
const button = document.querySelector('button');


function MedioDeReproduccion(objetoAConfigurar){
    this.medioDeReproduccion = objetoAConfigurar.elemento;
}

const nuevoMedioDeReproduccion = new MedioDeReproduccion(
    {
        elemento: video
    });

MedioDeReproduccion.prototype.reproducir = function(){
    this.medioDeReproduccion.play();
}

MedioDeReproduccion.prototype.pausar = function(){
    this.medioDeReproduccion.pause();
}

button.onclick = () => {
    (video.paused)
        ? nuevoMedioDeReproduccion.reproducir()
        : nuevoMedioDeReproduccion.pausar()
}