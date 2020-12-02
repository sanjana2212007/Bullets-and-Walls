var bullets,speed,wall,weight,thickness


function setup() {
  createCanvas(1200,400);
  bullets= createSprite(50, 200, 50, 50);
 wall= createSprite(1200, 200,thickness,height/2);
 thickness=random(22,83)
 speed=random(223,321)
 weight=random(30,52)
 bullets.velocityX=speed
}
function hasCollided(lbullets,lwall){
bulletsRightEdge=lbullets.x+lbullets.width
wallLeftEdge=lwall.x
if(bulletsRightEdge>=wallLeftEdge){
return true
}
return false

}
function draw() {
  background(0); 
  if(hasCollided(bullets,wall)){
   bullets.velocityX=0
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
   wall.shapeColor=color(255,0,0)

  }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
 
   }

  }
  drawSprites();
}