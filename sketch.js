
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    roof = createSprite(400,20,500,10);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100,500);
	bob2 = new Bob(250,500);
	bob3 = new Bob(400,500);
	bob4 = new Bob(550,500);
	bob5 = new Bob(700,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.shapeColor = "red";
  
  bob1.display;
  bob2.display;
  bob3.display;
  bob4.display;
  bob5.display;

  drawSprites();
 
}



