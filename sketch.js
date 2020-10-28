function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 100, 50, 80);
  movingRect=createSprite(400, 800, 80, 30);

  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,fixedRect)
  drawSprites();
}

