let canvas
let canvasContext

let x = 40
let y = 10
let speed = 10
let jump = 1
let currentFrame = 1
let currentDirection = "f"
let jumped_back = false

let dark = false;
let animal = "dog";

window.onload = function() {
    canvas = document.getElementById('animationCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.width = window.innerWidth;
    canvasContext.height = window.innerHeight;

    createCanvas();
    setInterval(updateFrame, 100);
    setInterval(createCanvas, 350);

}

function toggleDarkMode() {
    dark = !dark;
    if (dark) {
        document.getElementById("darkModeButton").style.backgroundColor = "#cff0d1";
        document.getElementById("darkModeButton").style.borderColor = "#b8f7bd";
        document.getElementById("darkModeButton").style.color = "black";
        document.getElementById("darkModeButton").innerText = "🌤";
        animal = "cat"

    } else {
        document.getElementById("darkModeButton").style.backgroundColor = "#423e5e";
        document.getElementById("darkModeButton").style.borderColor = "#373d45";
        document.getElementById("darkModeButton").style.color = "white";
        document.getElementById("darkModeButton").innerText = "🌙";
        animal = "dog"

    }

}

function make_bg() {
    let bg_image = new Image();
    if (dark) {
        bg_image.src = 'img/darkbg.png';
    } else {
        bg_image.src = 'img/lightbg.png';
    }
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
    sprite.src = `img/${animal}${currentFrame}${currentDirection}.PNG`;
    sprite.onload = function(){
        canvasContext.drawImage(sprite, x, y)
    }
}

