var mRect,fRect
var car1,car2,car3


function setup() {
  createCanvas(800,400);
 fRect= createSprite(400, 200, 50, 50);
 fRect.shapeColor="blue";
 mRect= createSprite(100, 100, 20, 60);
car1=createSprite(200,50,50,50);
car1.velocityX=2
car1.shapeColor="red"
car2=createSprite(500,50,50,50);
car2.velocityX=-2
car2.shapeColor="pink"
car3=createSprite(600,50,50,50);
car3.shapeColor="cyan"
 mRect.shapeColor="blue";
}
function draw() {
  background(0);
  mRect.x =mouseX
  mRect.y=mouseY
  console.log(fRect.x-mRect.x)

  
if(isTouching(mRect,car2)){
  mRect.shapeColor="green";
  car2.shapeColor="green";
}
else{
car2.shapeColor="pink";
mRect.shapeColor="blue";
}
bounceOff(car1,car2)
  drawSprites();
}

