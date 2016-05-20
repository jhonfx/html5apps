function Circulo(x, y, radio, color, figura) {
	this.x = x;
	this.y = y;
	this.radio = radio;
    this.color = color;
    this.figura = figura;
}

function Cuadrado(x, y, color, figura) {
	this.x = x;
	this.y = y;
    this.color = color;
    this.figura = figura;
}

var canvas;
var ctx;
var cuadrado;
var circulo;

function cargarCanvas() {
    jQuery('#listaColores').hide();
    $('#btnCambiarColor').toggle(function(){
        $('#listaColores').show();
    }, function() {
        $('#listaColores').hide();
    });

    try {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
    } catch (e){
        document.write("TU NAVEGADOR NO SOPORTA EL USO DE CANVAS" + e);
    }
}

var tipo = {
    'objetoCirculo' : "objetoCirculo",
    'objetoCuadrado' : 'objetoCuadrado'
};

function dibujarCirculo() {

    var x = canvas.width / 2;
    var y = 50;
    var radio = 80;
    var color = 'white';
    var figura = tipo.objetoCirculo;
    circulo = new Circulo(x, y, radio, color, figura);

    ctx.beginPath();
    ctx.arc(circulo.x , circulo.y, circulo.radio, 0, Math.PI*2);
    ctx.fillStyle = circulo.color;
    ctx.strokeStyle = "red";
    ctx.fill();
    ctx.stroke();
}


function dibujarCuadrado() {

    var x = 300;
    var y = 200;
    var color = 'white';
    var figura = tipo.objetoCuadrado;
    cuadrado = new Cuadrado(x, y, color, figura);

    ctx.fillRect(cuadrado.x, cuadrado.y, 300, 300);
    ctx.fillStyle = cuadrado.color;
    ctx.fill();
}

/*function dibujarObjetos(object) {

        if (object.figura == tipo.objetoCirculo) {
                console.log("vamos a dibujar un circulo");

        } else
        if (object.figura == tipo.objetoCuadrado) {
                console.log("vamos a dibujar un cuadrado");
                //ctx.beginPath();

        }
}*/

function cambiarColores(event) {
    var colores = {
        'verde' : 'green',
        'rojo' : 'red'
    };

    try {
        if (object.figura == tipo.objetoCirculo) {
            object.color = colores.verde
        }
        if (object.figura == tipo.objetoCuadrado) {
            object.color = colores.rojo
        }
    } catch (e) {
        console.log("no existe el objeto: " + e)
    }
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

