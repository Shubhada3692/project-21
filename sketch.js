var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;

function setup(){
  createCanvas(600,600);

  fixedRect = createSprite(300,300,100,50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(0,0,50,100);
  movingRect.shapeColor = "red";

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "red";
  
  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "red";
  
  rect3 = createSprite(300,100,50,50);
  rect3.shapeColor = "red";
  
  rect4 = createSprite(400,100,50,50);
  rect4.shapeColor = "red";

  obj1 = createSprite(300,50,100,100);
  obj1.velocityY  = 2;

  obj2 = createSprite(300,550,100,100);
  obj2.velocityY = -2;
}

function draw(){
  background("lightblue");

  movingRect.y = mouseY;
  movingRect.x = mouseX;

 if(isTouching(rect3, movingRect)){
  rect3.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else{
  rect3.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
  bounce(obj1, obj2);

  drawSprites();
}

