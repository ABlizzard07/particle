class Particle{
    constructor(x,y,diameter){
        var options = {
            isStatic: false,
            restitution: 1,
        }
        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x,pos.y); 
        rotate(angle);
        fill(this.color);
        circle(0,0,this.diameter);
        pop();
    }
}
