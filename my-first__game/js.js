var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

var cat = new Image();
var bg = new Image();
var bag = new Image();
var score = 0;
cat.src = 'img/cat.png';
bg.src  = 'img/ebeny.png';
bag.src =  'img/bag.png';


//звуки
var jump = new Audio();

jump.src = 'audio/kot_-_Myaukane (mp3cut.ru).mp3'
///нажития на клавишу
document.addEventListener('click', moveUp);
document.addEventListener('keydown', moveUp);
function moveUp(){
yPos -=60;
jump.play();
}
///создаем блоки
var bagg = [];
bagg[0] = {
x : cvs.width,
y : 0
}

///позиция кота
var xPos = 10;
var yPos = 120;
var grav = 2;


function draw() {
ctx.drawImage(bg, 0, 0);
for (var i = 0; i<bagg.length; i++){
ctx.drawImage(bag, bagg[i].x, 240);
bagg[i].x--;

if(bagg[i].x == 300){
bagg.push({
x : cvs.width,
y: 240
})
}	
if(xPos + cat.width >= bagg[i].x 
	&& xPos <=bagg[i].x+bag.width
	&&(yPos<=bagg[i].y + bag.height
	|| yPos +cat.height>=bagg[i].y+bag.height)){//gtht
 

 }
  if(bagg[i].x == 80) {
 score++;
}
}
ctx.drawImage(cat, xPos, yPos);


yPos+=grav;
if (yPos>=240){
grav = 0;}
else{
grav = 2;
}

 ctx.fillStyle = "#000";
 ctx.font = "30px Verdana";
 ctx.fillText("Счет: " + score, 10, cvs.height - 260);

requestAnimationFrame(draw);
}
bg.onload = draw;	