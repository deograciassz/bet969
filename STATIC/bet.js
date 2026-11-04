function tocarVitoria() {
    var musica = document.getElementById("musicaVitoria");
    musica.currentTime = 0;
    musica.play();
}

function tocarDerrota() {
    var musica = document.getElementById("musicaDerrota");
    musica.currentTime = 0;
    musica.play();
}

const musicaVitoria = new Audio("vitoria.mp3");
const musicaDerrota = new Audio("derrota.mp3");