const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");

const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

var score = 0;

let scoree = document.getElementById('scoree');

(function setup(){

    snake = new Snake();
    apple = new Apple();
    apple.pickLocation();

    
    window.setInterval(() => {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        apple.draw();
        snake.update();
        snake.draw();

        if(snake.eat(apple)){
            apple.pickLocation();
        }


    }, 180);

}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))