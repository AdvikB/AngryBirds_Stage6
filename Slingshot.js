class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling1image = loadImage("sprites/sling1.png");
        this.Sling2image = loadImage("sprites/sling2.png");
        this.Sling3image = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.Sling1image,200,20);
        image(this.Sling2image,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x <220){
                strokeWeight(7);
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x+30, pointB.y)
                image(this.Sling3image,pointA.x-30,pointA.y-10,15,30);
            }
            else{
                strokeWeight(5);
                line(pointA.x+30, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+30, pointA.y, pointB.x+30, pointB.y)
                image(this.Sling3image,pointA.x+20,pointA.y-10,15,30);
            }
           
            
        }
    }
    
}