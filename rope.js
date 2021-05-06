class Rope{
    constructor(body1,body2,offset1,offset2){
        this.offsetX = offset1;
        this.offsetY = offset2;
        var options={
            bodyA : body1,
            bodyB : body2,
            PointB :{x: this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }
    display(){
        var PointA = this.rope.bodyA.position;
        var PointB = this.rope.bodyB.position;

        strokeWeight(2)

       var Anchor1X = PointA.x;
       var Anchor1Y = PointA.y;

       var Anchor2X = PointB.x + this.offsetX;
       var Anchor2Y = PointB.y + this.offsetY;

        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)

    }
}