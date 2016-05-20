var canvas;
var context;

function tomaObjeto(identidad) {
    return document.getElementById(identidad);
}

function clock() {
    var date = new Date();
    console.log(date);
    $('#tiempo').html(date.toLocaleTimeString());
}

function startTime() {

    counter = 6;
    setInterval(function() {
        counter--;
        
        if(counter <= 0) {
            $('.content').attr('hidden', 'hidden');
            $('.inicia').removeAttr('hidden');
            document.getElementById('tiempo').innerHTML = "END"
        } else {
        document.getElementById('tiempo').innerHTML = counter.toString();
      }
    }, 1000);
    
}


function posicionaObjeto(objeto, x, y) {
    if(!objeto)
        return;
        objeto.style.left = x + '%';
        objeto.style.top = y + '%';
}

function valorAleatorio(desde, hasta) {
    return desde + Math.floor(Math.random() * (hasta - desde));
}

function mueveBola() {
    var pelotita = tomaObjeto('ball');
    posicionaObjeto(pelotita, valorAleatorio(20, 70), valorAleatorio(45, 80));
    setTimeout('mueveBola()', 1000);
    //console.log("se ejecuta funcion al iniviar el navegador!");
}

function detectarClick() {

    var contadorClick = 0;

    $('#ball').click( function(){
        
        contadorClick ++;
        $('#numeros').html(contadorClick)
        if (contadorClick == 10) {
            $('#ball').css('background-color', 'red');
        } else if (contadorClick == 20) {
            $('#ball').css('background-color', 'green');
            var combo = "NICE COMBO!!!";
            $('#numeros').html(combo);

        } else if (contadorClick == 20) {
            $('#ball').css('background-color', 'green');
            var combo = "BONUS TIME! 20 Seg";
            $('#numeros').html(combo);


        } else if (contadorClick == 30) {
            $('#ball').css('background-color', 'black');
            var combo = "COMBO-BRAKER"
            $('#numeros').html(combo);
        } else if (contadorClick == 40) {
            var combo = "ULTRA-COMBO!!"
            $('#numeros').html(combo);
        }

    });
}

function botonIniciar() {
    
    $('#start').click(function() {
        mueveBola();
        detectarClick();
        startTime();
        document.getElementById('tiempo').innerHTML = "START"
        $('.content').removeAttr('hidden')
        $('.inicia').attr('hidden', 'hidden');
    });
}

window.onload = botonIniciar;

