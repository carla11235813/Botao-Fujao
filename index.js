function fuja() {
    var botaNao = document.getElementById('nao');

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botaNao.offsetWidth;
    var maxY = alturaJanela - botaNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaNao.style.left = aleatorioX + "px";
    botaNao.style.top = aleatorioY + "px";
}