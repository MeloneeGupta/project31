var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score =0;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,height,width,20);

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	for (var k = 0; k <=width; k = k + 80) 
	  {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
	  }
	   for (var j = 75; j <=width; j=j+50) 
	   {
		  plinkos.push(new Plinko(j,75));
	   }
	   for (var j = 50; j <=width-10; j=j+50) 
	   {
		  plinkos.push(new Plinko(j,175));
	   }
		for (var j = 75; j <=width; j=j+50) 
	   {
		  plinkos.push(new Plinko(j,275));
	   }
		for (var j = 50; j <=width-10; j=j+50) 
	   {
		  plinkos.push(new Plinko(j,375));
	   }  

}
function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }



  drawSprites();

}

