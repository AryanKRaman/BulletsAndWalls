var bullet,wall,thickness;
var speed,weight;




function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
 speed = random(223,321);
 bullet.velocityX=speed;
 weight=random(30,52);
 thickness=random(22,83);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor="Red";
   }
   if(damage<10){
     wall.shapeColor="Green";
   }
 }
  drawSprites();
}
function hasCollided(lbullet, lwall) {
   bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
     { return true }
      return false;
     }
