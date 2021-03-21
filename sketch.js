
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var pointB
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
constructor(body1,body2,pointB, offsetx, offsetY)
{
	this.offsetX=offsetX
	this.offsetY=offsetY
    var options={
		bodyA:body1,
		bodyB:body2
		
	}
this.rope=Constrat.create(options)
World.add(world,this.rope)
	}
  rectMode(CENTER);
  background(0);
  var options={
	  restitution:1.3,
	  friction:5,
	  density:1
  }
  drawSprites();
 
}
                   


