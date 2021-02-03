
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base;
var Mangotree;
var aam1, aam2, aam3, aam4, aam5;
var aam6, aam7, aam8, aam9, aam10;
var boy;
var hit;
var launch;

function preload()
{
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Ground(600, 675, 1200, 50);
	Mangotree = new Atree();
	aam1 = new Mango(750,400);
	aam2 = new Mango(750,300);
	aam3 = new Mango(850,275);
	aam4 = new Mango(900,200);
	aam5 = new Mango(1100,400);
	aam6 = new Mango(1100,300);
	aam7 = new Mango(1050,300);
	aam8 = new Mango(1000,275);
	aam9 = new Mango(800,200);
	aam10 = new Mango(800,400);

	hit = new Stone();
	launch = new Launcher();

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

 

  base.display();
  imageMode(CENTER);
  image(boy, 200, 600, 100, 400);
  Mangotree.display();
  aam1.display();
  aam2.display();
  aam3.display();
  aam4.display();
  aam5.display();
  aam6.display();
  aam7.display();
  aam8.display();
  aam9.display();
  aam10.display();

  hit.display();
  
  if(isTouching(hit.stone, aam1.mango)){Matter.Body.setStatic(aam1.mango, false)};
  if(isTouching(hit.stone, aam2.mango)){Matter.Body.setStatic(aam2.mango, false)};
  if(isTouching(hit.stone, aam3.mango)){Matter.Body.setStatic(aam3.mango, false)};
  if(isTouching(hit.stone, aam4.mango)){Matter.Body.setStatic(aam4.mango, false)};
  if(isTouching(hit.stone, aam5.mango)){Matter.Body.setStatic(aam5.mango, false)};
  if(isTouching(hit.stone, aam6.mango)){Matter.Body.setStatic(aam6.mango, false)};
  if(isTouching(hit.stone, aam7.mango)){Matter.Body.setStatic(aam7.mango, false)};
  if(isTouching(hit.stone, aam8.mango)){Matter.Body.setStatic(aam8.mango, false)};
  if(isTouching(hit.stone, aam9.mango)){Matter.Body.setStatic(aam9.mango, false)};
  if(isTouching(hit.stone, aam10.mango)){Matter.Body.setStatic(aam10.mango, false)};
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(hit.stone,{x: mouseX, y: mouseY})
}

function mouseReleased()
{
	launch.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(hit.stone, {x:180, y:400}) 
	  launch.attach(hit.stone);
	}
  }

function isTouching(obj1, obj2)
{

	if(    obj1.position.x - obj2.position.x < 70
		&& obj2.position.x - obj1.position.x < 70
		&& obj1.position.y - obj2.position.y < 70
		&& obj2.position.y - obj1.position.y < 70)
		{
			return true;
		}
		else {
			return false;
		}
}



