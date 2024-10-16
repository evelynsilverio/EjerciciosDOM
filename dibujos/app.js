const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

//hexágono cara
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.moveTo(270, 50);
ctx.lineTo(340, 50);
ctx.lineTo(380, 120);
ctx.lineTo(340, 190);
ctx.lineTo(270, 190);
ctx.lineTo(230, 120);
ctx.fill();

//cejas
ctx.fillStyle = 'purple';
ctx.strokeStyle = 'purple';
ctx.lineWidth = 7;
ctx.beginPath();
ctx.moveTo(260, 75);
ctx.lineTo(298, 98);
ctx.stroke();
ctx.fillStyle = 'purple';
ctx.strokeStyle = 'purple';
ctx.lineWidth = 7;
ctx.beginPath();
ctx.moveTo(340, 75);
ctx.lineTo(310, 98);
ctx.stroke();

//ojos
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(330, 110, 13, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(280, 110, 13, 0, Math.PI * 2, true);
ctx.fill();

//ojos roojos
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(330, 110, 4, 0, Math.PI * 2, true);
ctx.fill();
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(280, 110, 4, 0, Math.PI * 2, true);
ctx.fill();

//lunar
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(308, 140, 5, 0, Math.PI * 2, true);
ctx.fill();

//boca
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(310, 150, 30, 1, Math.PI, false);
ctx.fill();

//nariz
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(295, 110);
ctx.lineTo(315, 110);
ctx.lineTo(305, 160);
ctx.fill();

//cabello negro 1
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(270, 50);
ctx.lineTo(310, 50);
ctx.lineTo(185, 160);
ctx.fill();

//cabello negro 2
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(340, 50);
ctx.lineTo(300, 50);
ctx.lineTo(420, 160);
ctx.fill();

//cabello rojo 1
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(230, 120);
ctx.lineTo(240, 135);
ctx.lineTo(180, 185);
ctx.fill();

//cabello rojo 2
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(379, 120);
ctx.lineTo(370, 135);
ctx.lineTo(430, 185);
ctx.fill();

//cabello negro de abajo 1
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(240, 135);
ctx.lineTo(250, 150);
ctx.lineTo(200, 190);
ctx.fill();

//cabello negro de abajo 2
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(370, 135);
ctx.lineTo(360, 150);
ctx.lineTo(410, 190);
ctx.fill();

//arito del sombrero
ctx.beginPath()
ctx.roundRect(225, 70, 160,1,[20,20,20,20]);
ctx.fill();
ctx.stroke();

//triangulo del sombrero
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(255, 70);
ctx.lineTo(355, 70);
ctx.lineTo(305, 1);
ctx.fill();

//triángulo del vestido
ctx.fillStyle ='black';
ctx.beginPath();
ctx.moveTo(215, 350);
ctx.lineTo(405, 350);
ctx.lineTo(305, 188);
ctx.fill();

//patas 1
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(250, 380);
ctx.lineTo(170, 380);
ctx.lineTo(200, 350);
ctx.lineTo(250, 350);
ctx.fill();

//patas 2
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(440, 380);
ctx.lineTo(370, 380);
ctx.lineTo(370, 350);
ctx.lineTo(420, 350);
ctx.fill();

//mano1
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(430, 250, 16, 0, Math.PI * 2, true);
ctx.fill();

//mano2
ctx.fillStyle = 'green';
ctx.beginPath();
ctx.arc(190, 250, 16, 0, Math.PI * 2, true);
ctx.fill();

//manga1
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(310, 230);
ctx.lineTo(425, 270);
ctx.lineTo(425, 230);
ctx.fill();

//manga2
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(300, 230);
ctx.lineTo(195, 270);
ctx.lineTo(195, 230);
ctx.fill();

//luna
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.arc(100, 70, 50, 0, Math.PI * 2, true);
ctx.fill();

//escoba
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(505, 260);
ctx.lineTo(560, 360);
ctx.lineTo(445, 360);
ctx.fill();
//palo de escoba
ctx.fillStyle = 'brown';
ctx.beginPath();
ctx.moveTo(500,80);
ctx.lineTo(500,270);
ctx.lineTo(510,270);
ctx.lineTo(510,80);
ctx.fill();


// ctx.strokeRect(0, 0, 200, 200);
// ctx.fillRect(20, 20, 160, 160);


// ctx.fillStyle = 'orange';
// ctx.beginPath();
// ctx.beginPath();
// ctx.arc(100, 100, 60, 0, Math.PI * 2, true);
// ctx.fill();

/**
 * fillRect(x,y,width,heigth)
 * strokeRect(x,y,width,heigth)
 * arc(x,y,radio, ini,fin,sentidohorario)
 */

// ctx.fillStyle = 'green';
// ctx.beginPath();
// ctx.arc(300, 140, 50, 0, Math.PI * 2, true);
// ctx.fill();


// ctx.fillRect(270, 80, 25, 5);
// ctx.fillRect(315, 80, 25, 5);


// ctx.beginPath();
// ctx.arc(280, 190, 5, 0, Math.PI * 2, true);
// ctx.fill();