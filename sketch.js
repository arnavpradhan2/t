var box1, box2, box3, box4, square;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  box1=createSprite( 600, 400, 100, 20);
  box1.shapeColor="cyan";
  box2=createSprite( 600,500 , 100, 20);
  box2.shapeColor="lightblue";
  box3=createSprite( 600,600 , 100, 20);
  box3.shapeColor="violet";
  box4=createSprite(600,700,100,20);
  box4.shapeColor="yellow";
  gameObject1=createSprite(600,400,100,20);
  gameObject1.shapeColor="cyan";
  gameObject2=createSprite(600,500,100,20);
  gameObject2.shapeColor="lightblue";
  gameObject3=createSprite(600,600,100,20);
  gameObject3.shapeColor="violet";
  gameObject4=createSprite(600,700,100,20);
  gameObject4.shapeColor="yellow";
  square=createSprite(100,100,20,20);
  square.shapeColor="blue";
}

function draw() {
  background(0,0,0);
  square.x=World.mouseX;
  square.y=World.mouseY;
  if(isTouching(box1,gameObject1)){
    gameObject1.shapeColor="cyan";
    box1.shapeColor="cyan";
  }
  else{
   gameObject1.shapeColor="cyan";
   box1.shapeColor="cyan";
  }
  drawSprites();
}