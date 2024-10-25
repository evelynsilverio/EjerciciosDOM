const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';

let Snake = [{
    x: 2,
    y: 1,
    show: function(){
        ctx.fillText('🐶', this.x * 20 , this.y *20);
        // ctx.fillStyle= 'green';
        // ctx.fillRect(this.x *20, this.y * 20,20,20);
    }
},
{
    x: 1,
    y: 1,
    show: function(){
        ctx.fillText('🐶', this.x * 20 , this.y *20);
    }
},
{
    x: 0,
    y: 1,
    show: function(){
        ctx.fillText('🐶', this.x * 20 , this.y *20);
    }
    }]

let x = 2;
let y = 3;
let direction = 1;
let puntuacion = 0;//para la puntacion
let gameOver = false;//para cuando pierde

const food= {
    x: 0,
    y: 0,
    show : function(){
        ctx.fillText('🦴', this.x * 20 , this.y *20);
    },
    fadeIn: function (){
        this.x=Math.floor(Math.random()*29);
        this.y=Math.floor(Math.random()*19)+1;
    }
}

function eat(){
    if(Snake[0].x === food.x && Snake[0].y === food.y){
        food.fadeIn();
        Snake.push({...Snake[Snake.length - 1]});
        puntuacion ++;
    }
}

function nextMove(x,y){
    for (let i = Snake.length - 1; i>0;i--){
        Snake[i].x = Snake[i-1].x;
        Snake[i].y = Snake[i-1].y;
    }
    Snake[0].x=x;
    Snake[0].y=y;
}

function checkCollision(){
    if(Snake.length <= 3) return false;
    for (let i = 1; i < Snake.length; i++) {
        if (Snake[0].x === Snake[i].x && Snake[0].y === Snake[i].y) {
            return true;
        }
    }
    return false;
}

//para cuando la serpiente choca con las paredes
function checkWallCollision() {
    if (Snake[0].x < 0 || Snake[0].x >= 30 || Snake[0].y < 1 || Snake[0].y >=21) {
        return true;
    }
    return false;
}
//para que se reinicie el juego
function restartGame() {
    Snake = [
        { x: 2, y: 1, show: function(){ ctx.fillText('🐶', this.x * 20, this.y * 20); } },
        { x: 1, y: 1, show: function(){ ctx.fillText('🐶', this.x * 20, this.y * 20); } },
        { x: 0, y: 1, show: function(){ ctx.fillText('🐶', this.x * 20, this.y * 20); } }
    ];
    x = 2;
    y = 1;
    direction = 1;
    puntuacion = 0;
    gameOver = false;
    food.fadeIn();
}

food.fadeIn();

let gameInterval = setInterval(() => {
    if (gameOver) {
        ctx.clearRect(0, 0, 600, 400);
        ctx.font = '30px serif';
        ctx.fillStyle = 'red';
        ctx.fillText('Perdiste', 220, 200);
        return;
    }

    ctx.clearRect(0,0,600,400);
    nextMove(x,y);
    // Snake[0].x = x;
    // Snake[0].y = y;
    food.show();
    Snake.forEach(s => s.show());
    eat();
    ctx.font = '20px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('Puntuación: ' + puntuacion, 10, 20);  // para el puntaje

    if (checkCollision() || checkWallCollision()) {
        gameOver = true;
    }

    if (!gameOver) {

    if( direction === 1) x++;
    else if (direction === 2)x--;
    else if (direction === 3)y++;
    else y--;}

    // if (x>29)x=0;
    // else if  (x<0)x=29;
    // if(y>20)y=1;
    // else if (y<1)y=20;
},200 );

document.querySelector('body')
    .addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && direction !== 2) direction = 1;
    else if (e.key === 'ArrowDown' && direction !== 4) direction = 3;
    else if (e.key === 'ArrowLeft' && direction !== 1) direction = 2;
    else if (e.key === 'ArrowUp' && direction !== 3) direction = 4;
});

restartBtn.addEventListener('click', restartGame);
