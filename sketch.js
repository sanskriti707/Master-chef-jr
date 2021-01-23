
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,10,400,20);

	

	
	
}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

}

