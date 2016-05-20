/**
 * Created with JetBrains WebStorm.
 * User: jhonFx
 * Date: 17/07/12
 * Time: 05:31 PM
 * To change this template use File | Settings | File Templates.
 */
function drawShape(){
    // get the canvas element using the DOM
    var canvas = document.getElementById('tutorial');

    // Make sure we don't execute when canvas isn't supported
    if (canvas.getContext){

        // use getContext to use the canvas for drawing
        var ctx = canvas.getContext('2d');

        // Draw shapes
        //borders
        roundedRect(ctx,0,0,350,350,15);
        roundedRect(ctx,20,20,310,310,9);

        roundedRect(ctx,53,53,49,33,10);
        roundedRect(ctx,135,53,49,33,10);
        roundedRect(ctx,217,53,49,33,10);

        roundedRect(ctx,53,119,49,33,6);
        roundedRect(ctx,135,119,49,33,10);
        roundedRect(ctx,217,119,49,33,10);


        roundedRect(ctx,53,185,49,33,10);
        roundedRect(ctx,135,185,49,33,10);
        roundedRect(ctx,217,185,49,33,10);

        roundedRect(ctx,53,251,49,33,10);
        roundedRect(ctx,135,251,49,33,10);
        roundedRect(ctx,217,251,49,33,10);
        // Character 1
        ctx.beginPath();
        ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
        ctx.lineTo(34,37);
        ctx.fill();

        // blocks
        //horizontales
        for(i=0;i<17;i++){
            ctx.fillRect(51+i*16,35,4,4);
        }
        for(i=0;i<17;i++){
            ctx.fillRect(51+i*16,99,4,4);
        }
        for(i=0;i<17;i++){
            ctx.fillRect(51+i*16,164,4,4);
        }
        for(i=0;i<17;i++){
            ctx.fillRect(51+i*16,227,4,4);
        }
        for(i=0;i<17;i++){
            ctx.fillRect(51+i*16,291,4,4);
        }

        //verticales
        for(i=0;i<17;i++){
            ctx.fillRect(35,51+i*16,4,4);
        }
        for(i=0;i<17;i++){
            ctx.fillRect(115,51+i*16,4,4);
        }

        for(i=0;i<17;i++){
            ctx.fillRect(195,51+i*16,4,4);
        }

        for(i=0;i<17;i++){
            ctx.fillRect(275,51+i*16,4,4);
        }


        // character 2
        ctx.beginPath();
        ctx.moveTo(83,116);
        ctx.lineTo(83,102);
        ctx.bezierCurveTo(83,94,89,88,97,88);
        ctx.bezierCurveTo(105,88,111,94,111,102);
        ctx.lineTo(111,116);
        ctx.lineTo(106.333,111.333);
        ctx.lineTo(101.666,116);
        ctx.lineTo(97,111.333);
        ctx.lineTo(92.333,116);
        ctx.lineTo(87.666,111.333);
        ctx.lineTo(83,116);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91,96);
        ctx.bezierCurveTo(88,96,87,99,87,101);
        ctx.bezierCurveTo(87,103,88,106,91,106);
        ctx.bezierCurveTo(94,106,95,103,95,101);
        ctx.bezierCurveTo(95,99,94,96,91,96);
        ctx.moveTo(103,96);
        ctx.bezierCurveTo(100,96,99,99,99,101);
        ctx.bezierCurveTo(99,103,100,106,103,106);
        ctx.bezierCurveTo(106,106,107,103,107,101);
        ctx.bezierCurveTo(107,99,106,96,103,96);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101,102,2,0,Math.PI*2,true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(89,102,2,0,Math.PI*2,true);
        ctx.fill();


        //fantasmita 2
        ctx.beginPath();
        ctx.moveTo(183,216);
        ctx.lineTo(183,202);
        ctx.bezierCurveTo(183,194,189,188,197,188);
        ctx.bezierCurveTo(205,188,211,194,211,202);
        ctx.lineTo(211,216);
        ctx.lineTo(206.333,211.333);
        ctx.lineTo(201.666,216);
        ctx.lineTo(197,211.333);
        ctx.lineTo(192.333,216);
        ctx.lineTo(187.666,211.333);
        ctx.lineTo(183,216);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(191,196);
        ctx.bezierCurveTo(188,196,187,199,187,201);
        ctx.bezierCurveTo(187,203,188,206,191,206);
        ctx.bezierCurveTo(194,206,195,203,195,201);
        ctx.bezierCurveTo(195,199,194,196,191,196);
        ctx.moveTo(203,196);
        ctx.bezierCurveTo(200,196,199,199,199,201);
        ctx.bezierCurveTo(199,203,200,206,203,206);
        ctx.bezierCurveTo(206,206,207,203,207,201);
        ctx.bezierCurveTo(207,199,206,196,203,196);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(201,202,2,0,Math.PI*2,true);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(189,202,2,0,Math.PI*2,true);
        ctx.fill();



    } else {
        alert('You need Safari or Firefox 1.5+ to see this demo.');
    }
}

function roundedRect(ctx,x,y,width,height,radius){
    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
    ctx.lineTo(x+width-radius,y+height);
    ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
    ctx.lineTo(x+width,y+radius);
    ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
    ctx.lineTo(x+radius,y);
    ctx.quadraticCurveTo(x,y,x,y+radius);
    ctx.stroke();
}
