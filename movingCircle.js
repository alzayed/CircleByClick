window.addEventListener('load', start);
window.addEventListener('resize', resizeCanvas);

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

function resizeCanvas() {
    //Resizing 
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

var circleArray = [];    
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var radius = Math.random() * 50;
var dx = (Math.random() - 0.5) * 2;
var dy = (Math.random() - 0.5) * 2;
var colorArray = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'pink'];
var color = colorArray[Math.floor(Math.random() * colorArray.length)];

var mouse = {
    x: undefined,
    y: undefined
}

function Circle(x, y, radius, color, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2 , false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
    }

    this.update = function () {   
        radius = Math.random() * 50;
        color = colorArray[Math.floor(Math.random * colorArray.length)];

        if((this.x + this.radius) >= innerWidth || (this.x - this.radius) <= 0) {
            this.dx = -this.dx;     
        }

        if((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
            this.dy = -this.dy;     
        } 

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

window.addEventListener('click', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
    randomIt();
    circleArray.push(new Circle(mouse.x, mouse.y, radius, color, dx, dy));
})

function randomIt() {
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    radius = Math.random() * 50;
    dx = (Math.random() - 0.5) * 5;
    dy = (Math.random() - 0.5) * 5;
    color = colorArray[Math.floor(Math.random() * colorArray.length)];
}

function start() {
    resizeCanvas();

    

    

    for (var i = 0; i < 5; i++) {
        randomIt();
        circleArray.push(new Circle(x, y, radius, color, dx, dy));
    }

    

    function drawCircle() {
        c.clearRect(0, 0, innerWidth, innerHeight);

        

        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
        
    }

    

    function animate() {
        requestAnimationFrame(animate);
        drawCircle();
    }
    
    animate();
}

