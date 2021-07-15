var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf;
var appleImg,leafImg;
var applecreated;
var leafcreated;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("redImage.png");
}

function setup()
{
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() 
{
  background(0);

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0)
  {
    if(select_sprites == 1)
    {
      createApple();
    }
    else
    {
      createLeaf();
    }
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  
  drawSprites();
  
  if(applecreated == 1 && rabbit.collide(apple))
  {
    apple.remove();
  }
  if(leafcreated == 1 && rabbit.collide(leaf))
  {
    leaf.remove();
  }
}

function createApple()
{
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 4;
  apple.lifetime = 80;
  applecreated = 1;
}

function createLeaf()
{
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1
  leaf.velocityY = 4;
  leaf.lifetime = 80;
  leafcreated = 1;
}