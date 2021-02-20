const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var chain;
var ball;
var point;
var ballImg;
var monster,box1;
var score = 0;

function preload() {

  ballImg = loadImage("Superhero.png");

  
}

function setup() {
 createCanvas(960,470);
 
  engine = Engine.create();
  world = engine.world;

  strokeWeight(2)

  ground = new Ground(600,height,1200,60)

  
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  monster = new Block (915,250,20,20);
  //box18 = new Box(700, 100, 70, 70);
  //box19 = new Box(700, 100, 70, 70);
 // box20 = new Box(700, 100, 70, 70);

  ball = new Ball(55, 190, 30, 30);

  point = Bodies.circle(50, 200, 20);
  World.add(world, point);

  chain = new Slingshot(this.point,{x:150, y:160});
}

function draw() {
  background("lightblue");
  Engine.update(engine);

  textSize(20);
  fill("red");
  text("Score : " + score,width-100,30)

  push();
  fill("black");
  strokeWeight(4);
  textSize(20);
  text("Drag the ball and release it to launch it towards the monsters for destroying them.", 5, 30);
  pop();

  ground.display()
  
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  monster.display();
  //box18.display()
  //box19.display()
  //box20.display()

  imageMode(CENTER);
  image(ballImg, point.position.x, point.position.y, 50, 45);

  chain.display(); 
  

}
function mouseDragged() {

  Matter.Body.setPosition(this.point, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();
  
}