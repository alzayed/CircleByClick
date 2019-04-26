window.addEventListener('load', start);
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    //Resizing 
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function start() {
    resizeCanvas();

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var draw = false;

    function startDraw(e) {
        ctx.beginPath();
        draw = true;
        doDraw(e);
    }

    function doDraw(e) {
        if(!draw) return;
        ctx.lineWidth = 10;
        ctx.lineTo(e.x, e.x);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    function stopDraw() {
        draw = false;
        ctx.beginPath();
    }

}

