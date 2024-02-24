let canvas
let canvasContext

let x = 40
let y = 10
let speed = 10
let jump = 1
let currentFrame = 1
let currentDirection = "f"
let jumped_back = false

window.onload = function() {
    canvas = document.getElementById('animationCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.width = window.innerWidth;
    canvasContext.height = window.innerHeight;

    createCanvas();
    setInterval(updateFrame, 100);
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

function updateFrame() {
    currentFrame = (currentFrame % 3) + 1;
}

function flipDirection() {
    if (currentDirection == "f") {
        currentDirection = "b"
    } else {
        currentDirection = "f"
    }
}

function createCanvas() {
    if (jumped_back) {
        flipDirection()
        jumped_back = false
    }

    if (y == 10) {
        y += jump;
    } else {
        y -= jump;
    }
    let r = Math.floor(Math.random() * 10) + 1;
    console.log(r);
    if (r <= 1) {
        x -= speed;
        flipDirection()
        jumped_back = true
    } else {
        x += speed;
    }
    
    if (x > 960 || x < 40) {
        speed *= -1
        flipDirection()
    }
    x = Math.max(40, Math.min(canvas.width - 40, x));
    make_bg();


    canvasContext.fillStyle = 'blue';
    const sprite = new Image();
    sprite.src = `img/dog${currentFrame}${currentDirection}.PNG`;
    sprite.onload = function(){
        canvasContext.drawImage(sprite, x, y)
    }
}

