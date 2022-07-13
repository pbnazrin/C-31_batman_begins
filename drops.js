class Drops{
    constructor(x,y,r){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.body = Bodies.circle(x,y,r,options)
        this.radius = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}