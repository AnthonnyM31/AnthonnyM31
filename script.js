
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.9; 
canvas.height = canvas.width * 0.4; 


let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 4; 
let dy = 2; 
const ballRadius = 10;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#ff6347";
    ctx.fill();
    ctx.closePath();
}


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawBall();


    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(update);
}


update();
