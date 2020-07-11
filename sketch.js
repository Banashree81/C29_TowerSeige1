const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxColor;

var colours = [];
var r = 0; g = 0; b =0;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  
  r = Math.round(random(0,255));  
  g = Math.round(random(0,255));  
  b = Math.round(random(0,255)); 
  
  stand1 = new Ground(880,300, 250,25);
  ground = new Ground(600,590, width,25);
  
  
  //box1 = new Box(800,275,40,40,color(r,g,b));
  
  box1 = new Box(800,275,40,40,getRandomColor());
  box2 = new Box(840,275,40,40,getRandomColor());
  box3 = new Box(880,275,40,40,getRandomColor());
  box4 = new Box(920,275,40,40,getRandomColor());
  box5 = new Box(960,275,40,40,getRandomColor());

  box6 = new Box(820,235,40,40, getRandomColor());
  box7 = new Box(860,235,40,40, getRandomColor());
  box8 = new Box(900,235,40,40, getRandomColor());
  box9 = new Box(940,235,40,40, getRandomColor());

  box10 = new Box(840,195,40,40, getRandomColor());
  box11 = new Box(880,195,40,40, getRandomColor());
  box12 = new Box(920,195,40,40, getRandomColor());

  box13= new Box(860,65,40,40, getRandomColor());
  box14= new Box(900,65,40,40, getRandomColor());
  box15 = new Box(880, 25,40,40, getRandomColor());

  polygon = new Polygon(50,200);  
  slingshot = new SlingShot(polygon.body, {x:180,y:250});
}

function draw() {
  background(20,155,155);  
  Engine.update(engine);
  text(mouseX + ' , '+mouseY, mouseX, mouseY);

  
  stand1.display();
  ground.display();


  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  polygon.display();
  slingshot.display();
}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  slingshot.fly();
 
}

function getRandomColor() {
  //used hexadecimal format to return colours
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}