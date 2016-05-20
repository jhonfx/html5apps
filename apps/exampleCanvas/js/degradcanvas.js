function draw() {
    var canvas = document.getElementById("fondo");
    var ctx = null;
    var grad = null;
    var color = 255;
    //var body = document.getElementsByTagName('body');

    if(canvas.getContext('2d')) {
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 600, 600);
        ctx.save();

        grad = ctx.createRadialGradient(0,0,0,0,0,600);
        grad.addColorStop(0, '#000');
        grad.addColorStop(1, 'rgb('+ color +','+ color +','+ color +')');

        ctx.fillStyle = grad;
        ctx.fillRect(0,0,600,600);
        ctx.save();

        canvas.onmousemove = function (event) {
            var width = window.innerWidth,
                height = window.innerHeight,
                x = event.clientX,
                y = event.clientY,
                rx = 600 * x / width,
                ry = 600 * y / height;

            var xc = ~~(256 * x / width);
            var yc = ~~(256 * y / height);

            grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 600);
            grad.addColorStop(0, '#000');
            grad.addColorStop(1, ['rgb(', xc, ', ', (255 - xc), ', ', yc, ')'].join(''));
            ctx.fillStyle = grad;
            ctx.fillRect(0,0,600,600);
        };
    }
}

function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;

}
var circles = [];
var canvas;
var context;

function addRandomCircle() {
    var radius = randomFromTo(10, 60);
    var x = randomFromTo(0, canvas.width);
    var y = randomFromTo(0, canvas.height);

    var colors = ['green', 'blue', 'red'];
    var color = colors[randomFromTo(0, 3)];

    var circle = new Circle(x, y, radius, color);
    circles.push(circle);
    drawCircles();
}

function clearCanvas() {
    circles = [];
    drawCircles();
}

function drawCircles() {
    canvas = document.getElementById("personaje");
    context = canvas.getContext("2d");
    canvas.onmousedown = canvasClick;

    // Clear the canvas.
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Go through all the circles.
    for(var i=0; i<circles.length; i++) {
        var circle = circles[i];

        // Draw the circle.
        context.globalAlpha = 0.85;
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
        context.fillStyle = circle.color;
        context.strokeStyle = "black";

        if (circle.isSelected) {
            context.lineWidth = 5;
        }
        else {
            context.lineWidth = 1;
        }
        context.fill();
        context.stroke();
    }
}

var previousSelectedCircle;

function canvasClick(e) {
    // Get the canvas click coordinates.
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;

    // Look for the clicked circle.
    for(var i=circles.length-1; i>=0; i--) {
        var circle = circles[i];

        var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))
        if (distanceFromCenter <= circle.radius) {
            if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
            previousSelectedCircle = circle;

            circle.isSelected = true;

            drawCircles();
            return;
        }
    }
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function cargarTodo () {
    //draw();
    //drawCircles();
}


window.onload = function() {
    //draw();
    //drawCircles();
};