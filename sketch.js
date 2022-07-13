const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops = 100;
drops=[]
function preload(){
    
}

function setup(){
    createCanvas(400,800); 
    
    engine = Engine.create();
    world = engine.world;

         //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400),5));
        }

    }
}

function draw(){
    Engine.update(engine);
 
    background("black");
    
    for(var i=0; i<maxDrops;i++){
        drops.push(new Drops(random(0,400),random(0,400),5))
        
    }
    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
        
    }
}

