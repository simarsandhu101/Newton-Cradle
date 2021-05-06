
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roofObj;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObj = new Roof(width/2,height/4,width/7,20);

	bobDiameter = 40;
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
    bobObj1 = new Bob(startBobPositionX-bobDiameter*2, startBobPositionY,bobDiameter)
	bobObj2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY, bobDiameter)
	bobObj3 = new Bob(startBobPositionX,startBobPositionY, bobDiameter)
	bobObj4 = new Bob(startBobPositionX+bobDiameter, startBobPositionY,bobDiameter)
	bobObj5 = new Bob(startBobPositionX+bobDiameter*2, startBobPositionY,bobDiameter)
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	rope1 = new Rope(bobObj1.body, roofObj.body,-bobDiameter*2,0)
	rope2 = new Rope(bobObj2.body, roofObj.body,-bobDiameter,0)
	rope3 = new Rope(bobObj3.body, roofObj.body, 0,0)
	rope4 = new Rope(bobObj4.body, roofObj.body, bobDiameter*1,0)
	rope5 = new Rope(bobObj5.body, roofObj.body, bobDiameter*2,0)
  
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);
  
  roofObj.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
  drawSprites();
 
}



