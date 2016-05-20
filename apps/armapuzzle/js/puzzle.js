/**
 * Created with JetBrains WebStorm.
 * User: jhonFx
 * Date: 25/07/12
 * Time: 07:34 PM
 * To change this template use File | Settings | File Templates.
 */
//PUZZLE DE PIEZAS DESLIZANTES
//
//Autor: Iván Nieto Pérez
//Este script y otros muchos pueden
//descarse on-line de forma gratuita
//en El Código: www.elcodigo.com

var altura = 5					//numero de piezas eje y
var anchura = 5					//numero de piezas eje x
var blanco = 1
var ruta = '/img/puzzles/'			//carpeta en la que estan ubicadas las imagenes del puzzle
var prefijo = 'lago_espejo_'			//prefijo del nombre de las imagenes (mari1, mari2, ..., mariN)
var extension = '.jpg'				//extension de las imagenes (tipo de imagen)
var ancho_pieza = '108'				//anchura en pixels de cada pieza del puzzle
var alto_pieza = '120'				//altura en pixels de cada pieza del puzzle
var pieza_blanca = '/images/puzzles/blanco.jpg'	//imagen pieza blanca

var salto
var offset_imagen

function MostrarImagen() {
    var imagen = 1;
    var salida = '<table cellspacing="0" cellpadding="0" border="1">\n';
    for (var y = 0; y < altura; y++) {
        salida += '<tr>\n';
    for (var x = 0; x < anchura; x++, imagen++) {
        if (imagen != blanco) {
    salida += '<td><a href="javascript:MoverImagen(' + imagen + ')"><img src="' + ruta + prefijo + imagen + extension + '" width="' + ancho_pieza + '" height="' + alto_pieza + '" border="no"></a></td>\n'
        } else {
    salida += '<td><a href="javascript:MoverImagen(' + imagen + ')"><img src="' + pieza_blanca + '" width="' + ancho_pieza + '" height="' + alto_pieza + '" border="no"></a></td>\n'
        }
    }
    salida += '</tr>\n'
}
    salida += '</table>'
    document.write( salida )
}

function MoverImagen(imagen) {
    if ( (Math.floor((imagen - 1)/anchura) != 0) && (blanco == imagen - anchura) ) {
        Mueve(imagen)
        document.datos.cambios.value++
    } else if ( ((imagen - 1) % anchura != anchura - 1) && (blanco == imagen + 1) ) {
        Mueve(imagen)
        document.datos.cambios.value++
    } else if ( (Math.floor((imagen - 1)/anchura) != altura - 1) && (blanco == imagen + anchura) ) {
        Mueve(imagen)
        document.datos.cambios.value++
    } else if ( ((imagen - 1) % anchura != 0) && (blanco == imagen - 1) ) {
        Mueve(imagen)
        document.datos.cambios.value++
    } else
        alert('Esta pieza no puede moverse. Pulsa sobre\nuna pieza colindante con el espacio en blanco.')
}

function Mueve(imagen) {
    document.images[offset_imagen + blanco - 1].src = document.images[offset_imagen + imagen - 1].src
    blanco = imagen
    document.images[offset_imagen + imagen - 1].src = pieza_blanca
}

function Cambios() {
    this.puzzle = new Array( 4 )
    this.puzzle[0] = 1
    this.puzzle[1] = anchura
    this.puzzle[2] = -1
    this.puzzle[3] = -anchura
}

function DesordenaImagen() {

    ObtenSalto()		//tiene en cuenta el resto de imagenes del documento

    var cambios = new Cambios
    for (var x = 0; x < 200; x++) {				//hace 200 cambios
        var salto = Math.round ( Math.random() * 3 )	//entre 0 y 3
        if ( (blanco + cambios.puzzle[salto] < 1) || (blanco + cambios.puzzle[salto] > anchura * altura) )
            continue
        else if ( ((blanco - 1) % anchura == 0) && salto == 2 )
            salto = 0
        else if ( (blanco % anchura == 0) && salto == 0 )
            salto = 2

        Mueve( blanco + cambios.puzzle[salto] )
    }
}

function ObtenSalto() {
    //si hay otras imagenes en la pagina las tiene en cuenta con esta variable
    offset_imagen = 0
    while ( document.images[offset_imagen].src.indexOf( ruta ) == -1)
        offset_imagen++
}

window.onload = DesordenaImagen
if (document.captureEvents) {				//N4 requiere invocar la funcion captureEvents
    document.captureEvents(Event.LOAD)
}




