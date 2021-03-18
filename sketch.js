
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var drops=[];
var maxDrops = 100;

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);

	// drops = new Drops(400,300);

	// var maxDrops=100;

  if (frameCount % 150===0){
    for(var i = 0; i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)));
    }
  }
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

  //displaying rain drops
  for(var i = 0; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY()
  }

  drops.display();
  
  drawSprites();
 
}



