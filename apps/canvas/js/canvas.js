/*function crearTabla() {
    var tCanvas = document.getElementsByTagName('canvas');
    var contentTable = document.getElementById('contentTable');
    var num = [1,2,3,4];
    console.log(tCanvas);
    var tabla = '<table id="central">';
    var largo = 4;
    var alto  = 4;
    var childOfResponses;
    for (var i = 0; i < largo; i++) {
        tabla += '<tr>';
        tabla += '<td>';
        tabla += tCanvas[i].innerHTML + '</td>';
        //for (var j = 0; j < alto; j++) {
//            tabla += '<td>' + tCanvas[i] + '</td>';
            //document.getElementsByTagName('td').innerHTML = tCanvas;
        //}
        tabla += '</tr>';
    }
    tabla += '</table>';
    contentTable.innerHTML = tabla;
}*/

function lineas() {
    var canvas = document.getElementById('lineas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(200, 30);
    context.moveTo(0, 20);
    context.lineTo(150, 50);
    context.moveTo(0, 30);
    context.lineTo(100, 70);
    context.moveTo(0, 40);
    context.lineTo(50, 90);
    context.stroke();
}

function lineWidth() {
    var canvas = document.getElementById('linewidth');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(200, 30);
    context.lineWidth = 2;
    context.stroke();
    context.beginPath();
    context.moveTo(0, 20);
    context.lineTo(150, 50);
    context.lineWidth = 5;
    context.stroke();
    context.beginPath();
    context.moveTo(0, 30);
    context.lineTo(100, 70);
    context.lineWidth = 8;
    context.stroke();
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(50, 90);
    context.lineWidth = 11;
    context.stroke();
}

function lineColor() {
    var canvas = document.getElementById('linecolor');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(200, 30);
    context.lineWidth = 2;
    context.strokeStyle = 'red';
    context.stroke();
    context.beginPath();
    context.moveTo(0, 20);
    context.lineTo(150, 50);
    context.lineWidth = 3;
    context.strokeStyle = 'blue';
    context.stroke();
    context.beginPath();
    context.moveTo(0, 30);
    context.lineTo(100, 70);
    context.lineWidth = 4;
    context.strokeStyle = 'orange';
    context.stroke();
    context.beginPath();
    context.moveTo(0, 40);
    context.lineTo(50, 90);
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.stroke();
}

function lineCap() {
    var canvas = document.getElementById('linecap');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(canvas.width / 2, 10);
    context.lineWidth = 8;
    context.strokeStyle = 'red';
    context.lineCap = 'butt';
    context.stroke();

    context.beginPath();
    context.moveTo(30, 30);
    context.lineTo(canvas.width / 2, 30);
    context.lineWidth = 8;
    context.strokeStyle = 'blue';
    context.lineCap = 'round';
    context.stroke();

    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(canvas.width / 2, 50);
    context.lineWidth = 8;
    context.strokeStyle = 'orange';
    context.lineCap = 'square';
    context.stroke();
}

function arc() {
    var canvas = document.getElementById('arc');
    var context = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = 70;
    var radius = 75;

    context.beginPath();
    context.arc(x, y, radius, Math.PI, 0, false);
    context.lineWidth = 15;
    context.fillStyle = 'orange';
    context.fill();

    context.beginPath();
    context.arc(x, 70, radius, Math.PI, 0, true);
    context.lineWidth = 1;
    context.fillStyle = 'red';
    context.fill();
}


function cargarCanvas() {
    //crearTabla();
    lineas();
    lineWidth();
    lineColor();
    lineCap();
    arc();
}

window.onload = cargarCanvas;