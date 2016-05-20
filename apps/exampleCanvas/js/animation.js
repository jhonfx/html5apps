function tomaObjeto(identidad) {
    return document.getElementById(identidad);
}

function posicionaObjeto(objeto, x, y) {
    if(!objeto)
        return;
        objeto.style.left = x + 'px';
        objeto.style.top = y + 'px';
}

function valorAleatorio(desde, hasta) {
    return desde + Math.floor(Math.random() * (hasta - desde));
}

function mueveHola() {
    var pelotita = tomaObjeto('pelotita');
    posicionaObjeto(pelotita, valorAleatorio(0, 500), valorAleatorio(0, 300));
    setTimeout('mueveHola()', 1000);
    //console.log("se ejecuta funcion al iniviar el navegador!");
}

function detectarClick() {
    var contadorClick = 0;
    $('#pelotita').click( function(){
        contadorClick ++;
        console.log("diste click sobre la caja: " + contadorClick);
        //$('#contador').html(contadorClick)
    });
}

function inicia() {
    //mueveHola();
    //detectarClick();
}

