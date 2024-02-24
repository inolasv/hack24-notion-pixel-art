let canvas
let canvasContext

let x = 40
let y = 10
let speed = 15
let jump = 3

window.onload = function() {
    canvas = document.getElementById('animationCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.width = window.innerWidth;
    canvasContext.height = window.innerHeight;

    createCanvas();
    setInterval(createCanvas, 350);

}

function make_bg() {
    console.log("hey")
    let bg_image = new Image();
    bg_image.src = 'img/background.png';
    bg_image.onload = function(){
        canvasContext.drawImage(bg_image, 0, 0);
    }
}


function createCanvas() {

    if (y == 10) {
        y += jump;
    } else {
        y -= jump;
    }
    let r = Math.floor(Math.random() * 10);
    console.log(r);
    if (r <= 1) {
        x -= speed;
    } else {
        x += speed;
    }
    if (x > 960 || x < 40) {
        speed *= -1
    }
    make_bg();


    canvasContext.fillStyle = 'blue';
    const sprite = new Image();
    sprite.src = 'img/dog1.PNG';
    sprite.onload = function(){
        canvasContext.drawImage(sprite, x, y)
    }
}

