/**
 * Created with JetBrains WebStorm.
 * User: jhonFx
 * Date: 11/08/12
 * Time: 10:38 PM
 * To change this template use File | Settings | File Templates.
 */
//jhonFX

function generarNumeros() {
    var numerosUno = [];
    var numerosDos = [];
    var tamanio = 10;
    var numerosRandom;

    for (var i = 0; i < tamanio; i++) {
        numerosRandom =  (Math.random()* 20) + 1;
        numerosUno.push(parteEntera(numerosRandom));
    }

    for (var j = 0; j < tamanio; j++) {
        numerosRandom = (Math.random()* 20) + 1;
        numerosDos.push(parteEntera(numerosRandom));
    }

    montarNumeros(numerosUno, numerosDos);
}

function montarNumeros(arregloUno, arregloDos) {
    var div = document.getElementById('operacion');
    var operacion;
    var resultados;
    for( i = 0; i < 10; i++) {
        resultados = arregloUno[i] + arregloDos[i];
        operacion = arregloUno[0] +' + '+ arregloDos[0];
        //console.log(arregloUno[i] + " + " + arregloDos[i] + " = " + resultados);
    }
    div.innerHTML = operacion;
}

function tablaMultiplicar() {
    var multiplo = 5;
    var resultado;
    for (var x = 1; x < 10; x++) {
        resultado = (multiplo*x);
        console.log(multiplo + " x "+ x +" = "+ resultado)
    }
}

function generarTablaNumeros() {
    var div = document.getElementById('numeros');
    var tabla = "<table id='nums' class='nums'>";
    var largo = 3;
    var ancho = 4;
    var incrementador = 1;
    for( var z = 0; z < ancho; z++) {
        tabla += "<tr>";
        for(var x = 0; x < largo; x++) {
            if(incrementador == 14) break;
            tabla += "<td><input id='btn"+ incrementador +"' type='button' class='btnNumero' value='"+ incrementador++ +"'></td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    div.innerHTML = tabla;
}

function cambiarValoresUltimosBotones() {
    var boton10 = document.getElementById('btn10');
    var boton11 = document.getElementById('btn11');
    var boton12 = document.getElementById('btn12');
    boton10.value = '' ;
    boton11.value = '0';
    boton12.value = '';
    console.log(boton10.value);
}

function eventoClickBotones() {
    var botones = jQuery('input[id^=btn]');
    console.log(botones.length);
}

function parteEntera(number) {
    return parseInt(number);
}

function cargarFunciones() {
    generarNumeros();
    generarTablaNumeros();
    cambiarValoresUltimosBotones();
    eventoClickBotones();
    //tablaMultiplicar();
}

window.onload = cargarFunciones;

