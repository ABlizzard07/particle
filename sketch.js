const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var a, b, j;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,40);
    

  for(var k = 0; k <= 800; k = k+80){
      divisions.push(new Division(k,800-divisionHeight/2,10,divisionHeight));
  }

  for(a = 20, b = -10; a <= 480, b <= 480; a = a+60, b =b+60){
      plinkos.push(new Plinko(a,150,25));
      plinkos.push(new Plinko(b,250,25));
      plinkos.push(new Plinko(a,350,25));
      plinkos.push(new Plinko(b,450,25));
  }
  
  Engine.run(engine);
}

function draw(){
  
  background(0);
  ground.display();

  if(frameCount%60 === 0 ){
    particles.push(new Particle(random(180,300),10,25));
  }

  for(var j = 0; j < particles.length; j++){
      particles[j].display();
    }
  
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var a = 0; a < plinkos.length; a++){
    plinkos[a].display();
  }
  for(var b = 0; b < plinkos.length; b++){
    plinkos[b].display();
  }
  
}