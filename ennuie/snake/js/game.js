//on definis nos variable de base qui sont neccesaire au jeux
const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const snake = new Snake(SQUARE_SIZE);
const food = new Food();
let currentDirection = 'right';//on definitie une direction

function deteckKeyPressed() {
    document.addEventListener('keydown', function (event) {//on dectecte quand une touche est presser
        switch (event.key) {//on assaocie les touche presser a la valuer dans currentDirectionss
            case 'ArrowLeft':
                currentDirection = 'left';
                break;
            case 'ArrowRight':
                currentDirection = 'right';
                break;
            case 'ArrowUp':
                currentDirection = 'up';
                break;
            case 'ArrowDown':
                currentDirection = 'down';
                break;
            default:
                break;
        }
    });
}

function clearScreen() {//on clear l'ecran pour eviter que les case soit ramplis sans en avoir besoin
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function update() {
    clearScreen();//on appelle notre fonction clear a chaque tour de boucle
    food.draw();
    snake.update();
    if (snake.alive) {
        setTimeout(update, 150);
    }
}

function start() {
    deteckKeyPressed();
    update();
}

start();