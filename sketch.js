
var plane , block1 , block2 , rotator1 , rotator2 , rotator3 , particle1;	

var angle2 = 90;
var angle3 = 70;
var angle = 60;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);

	rectMode(CENTER); 
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.


	Engine.run(engine);
var particule_options ={
	restitution:0.4,
	friction:0.02
}


	var plane_options = {
		isStatic: true
	}
	 var block1_options = {
		 isStatic: true
	 }
	 var block2_options = {
		 isStatic: true
	 }
    var rotator1_options = {
isStatic: true
	}
    
	 
	 

	 // criando chão
	 	plane = Bodies.rectangle(220,600,400,30,plane_options);
	 // adicionando ele ao mundo
	 	World.add(world,plane);

	 // criando block1
	block1 = Bodies.rectangle(130,375,200,10,block1_options);
	 // adicionando ao mundo
	World.add(world,block1);
	 // criando retangulo 2
   block2 = Bodies.rectangle(460,375,200,10,block2_options);
    // adicionando ele ao mundo
   World.add(world,block2);
// crindo rotator1
rotator1 = Bodies.rectangle(250,200,150,20,rotator1_options);
// adicionando ele no mundo
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,150,20,rotator1_options);
	World.add(world,rotator2)
	rotator3 = Bodies.rectangle(250,200,150,20,rotator1_options);
	World.add(world,rotator3);

particle1 = Bodies.circle(220,10,10,particule_options);
World.add(world,particle1);
}

function draw() {



 	 rectMode(CENTER);


  background("lightgreen");
	Engine.update(engine);
  drawSprites();
  rect(plane.position.x,plane.position.y,770,30);

  rect(block1.position.x,block1.position.y,200,20);
 
  rect(block2.position.x,block2.position.y,200,20);
 
  ellipse(ball.position.x,ball.position.y,20);

  ellipse(particle1.position.x,particle1.position.y,10);
  Body.rotate(rotator1,angle);
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle);


rect(0,0,150,20);
pop();
angle +=6;

Body.rotate(rotator2,angle2);
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);


rect(0,0,150,20);
pop();
angle2 +=7

Body.rotate(rotator3,angle3);
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);


rect(0,0,150,20);
pop();
angle3 +=9

}






