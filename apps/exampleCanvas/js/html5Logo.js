/**
 * Created with JetBrains WebStorm.
 * User: jhonFx
 * Date: 17/07/12
 * Time: 04:22 PM
 * To change this template use File | Settings | File Templates.
 */
var fontfamily = "65px 'Gill Sans Ultra Bold', sans-serif";
var factorvalue = 1;
var spot;

function initiate() {
    spot = document.getElementById('canvas').getContext('2d');
    spot.font = fontfamily;
    spot.save();
    drawLogo();
}

function drawLogo() {
    var offsety = 80;
    spot.restore();
    spot.save();
    spot.clearRect(0, 0, 600, 400);
    spot.scale(factorvalue, factorvalue);
    //spot.fillText("HTML", 31, 60);
    spot.translate(0, offsety);
    spot.fillStyle = "#E34C26";

    //iniciando path
    spot.beginPath();

    spot.moveTo(39, 250);
    spot.lineTo(17, 0);
    spot.lineTo(262, 0);
    spot.lineTo(239, 250);
    spot.lineTo(139, 278);
    spot.closePath();
    //rellenar con el color indicado
    spot.fill();

    // parte naranja del fondo  a mano derecha más ligero
    //color oficial naranja oscuro
    spot.fillStyle = "#F06529";
    spot.beginPath();
    spot.moveTo(139, 257);
    spot.lineTo(220, 234);
    spot.lineTo(239, 20);
    spot.lineTo(139, 20);
    spot.closePath();
    spot.fill();

    //Color gris, lado izquierdo del 5
    spot.fillStyle = "#B300FF";
    spot.beginPath();
    spot.moveTo(139, 113);
    spot.lineTo(98, 113);
    spot.lineTo(96, 82);
    spot.lineTo(139, 82);
    spot.lineTo(139, 51);
    spot.lineTo(62, 51);
    spot.lineTo(70, 144);
    spot.lineTo(139, 144);
    spot.closePath();
    spot.fill();

    //regresando al punto medio del canvas
    spot.beginPath();
    spot.moveTo(139,193);
    spot.lineTo(105,184);
    spot.lineTo(103,159);
    spot.lineTo(72, 159);
    spot.lineTo(76, 207);
    spot.lineTo(139, 225);
    spot.closePath();
    spot.fill();

    //blanco, lado derecho del 5
    spot.fillStyle="#FFFFF";
    spot.beginPath();
    spot.moveTo(139,113);
    spot.lineTo(139,144);
    spot.lineTo(177,144);
    spot.lineTo(173, 184);
    spot.lineTo(139,193);
    spot.lineTo(139, 225);
    spot.lineTo(202, 207);
    spot.lineTo(210, 113);
    spot.closePath();
    spot.fill();

    //moviéndose al punto medio del canvas
    spot.beginPath();
    spot.moveTo(139,51);
    spot.lineTo(139,82);
    spot.lineTo(213,82);
    spot.lineTo(216,51);
    spot.closePath();
    spot.fill();
}