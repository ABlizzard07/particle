class Plinko{
    constructor(x,y,diameter){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill("yellow");
        circle(0,0,this.diameter);
        pop();
    }
}
