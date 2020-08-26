const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k <= width, k = k+80;){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  Engine.run(engine);
}

function draw(){
  background(0);
}