let canvas = document.getElementById('canvas');

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    
    for (let i = 0; i<200; i++) {
        let posX = getRandom(0, WIDTH);
        let posY = getRandom(0, HEIGHT);
        let radius = getRandom(1, 3);
        let blue = getRandom(0,180);
        ctx.fillStyle = `rgb(255, 255, ${blue})`;
        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };
    
    
}


