var cvs = document.getElementById("game");
var ctx = cvs.getContext("2d");

const ground = new Image();
ground.src = "img/ground-ii.png";

const foodImg = new Image();
foodImg.src = "img/hamburger.png";

const  rockImg = new  Image();
rockImg.src = "img/rock.png";

let box = 32;
let score = 0;

var food = {
    x: Math.floor((Math.random() * 23 + 1)) * box,
    y: Math.floor((Math.random() * 23 + 1)) * box
};
var rock = {
    x: Math.floor((Math.random() * 23 + 1)) * box,
    y: Math.floor((Math.random() * 23 + 1)) * box
};

var snake = [];
snake[0] = {
    x: 11 * box,
    y: 11 * box
};

function draw() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.drawImage(rockImg, rock.x, rock.y);

    for (var i = 0; i < snake.length; i++) {
        ctx.fillStyle = '#455677';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    var snakeX = snake[0].x
    var snakeY = snake[0].y

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        document.getElementById('score').innerText = score;
        rock = {
            x: Math.floor((Math.random() * 22)) * box,
            y: Math.floor((Math.random() * 22)) * box
        };

        ctx.drawImage(rockImg, rock.x, rock.y);
        food = {
            x: Math.floor((Math.random() * 22)) * box,
            y: Math.floor((Math.random() * 22)) * box,
        };
    } else
        snake.pop();

    if (snakeX == rock.x && snakeY == rock.y){
        alert('Вы проиграли!');
        location.reload();
    };

    switch (snakeX) {
        case -32:
            snakeX = 23 * box
            break
        case 23 * box:
            snakeX = 0
            break
    }
    switch (snakeY) {
        case -32:
            snakeY = 23 * box
            break
        case 23 * box:
            snakeY = 0
            break
    }

    if (forwards == "left") snakeX -= box;
    if (forwards == "right") snakeX += box;
    if (forwards == "up") snakeY -= box;
    if (forwards == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
}

let forwards;

function direction(event) {
    if (event.keyCode == 37 && forwards != "right")
        forwards = "left";
    else if (event.keyCode == 38 && forwards != "down")
        forwards = "up";
    else if (event.keyCode == 39 && forwards != "left")
        forwards = "right";
    else if (event.keyCode == 40 && forwards != "up")
        forwards = "down";
}

document.addEventListener("keydown", direction);



let game = setInterval(draw, 100);