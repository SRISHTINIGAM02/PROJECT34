class Fly{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        };
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    
    fly(){
        this.rope.bodyA = null;
    }

    launch(bodyA){
        this.rope.bodyA = bodyA;
    }
    display(){
       
    }
}