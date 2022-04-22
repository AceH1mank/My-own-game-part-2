var line
var mianShape, Square, Triange, Circle
var mianShapeImg, SquareImg, TriangeImg, CircleImg

function preload(){
SquareImg = loadImage("square.png")
TriangeImg = loadImage("triange.png")
CircleImg = loadImage("circle.png")
}
function setup() {
  createCanvas(800,600);
  line = createSprite(400, 500, 800, 10);

  Square = createSprite(200, 550, 50, 50)
   Triange = createSprite(600, 550, 50, 50)
   Circle = createSprite(400, 550, 50, 50)
   mianShape = createSprite(400, 450, 50, 50)

   Circle.addImage(CircleImg)
   Circle.scale = 0.12
   Square.addImage(SquareImg)
   Square.scale = 0.04
   Triange.addImage(TriangeImg)
   Triange.scale = 0.1
}

function draw() {
  background("Black");  
  drawSprites();

  if(mousePressedOver(Triange)){
    mianShape.addImage(TriangeImg)
    mianShape.scale = 0.1
  }
  if(mousePressedOver(Square)){
    mianShape.addImage(SquareImg)
    mianShape.scale = 0.04
  }
  if(mousePressedOver(Circle)){
    mianShape.addImage(CircleImg)
    mianShape.scale = 0.12
  }

  if(keyDown(LEFT_ARROW)){
    mianShape.x -= 3
    
  }

  
  if(keyDown(RIGHT_ARROW)){
    mianShape.x += 3
    
  }

}