const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world,circle,chain;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,100,200,20);
    circle1 = new Circle(800,170,10);
    chain = new Chain(circle1.body,ground.body);
}



function draw(){
    background(7,216,226);
    Engine.update(engine);

    ground.display();
    chain.display();
    circle1.display();

    text("press space bar to hold & move the pendulum to left or right with mouse", 400,30);
    text("Press Enter to start the Pendulum to oscillate from mouse pointer ", 415,50)
}

