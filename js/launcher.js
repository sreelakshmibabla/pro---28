/*class Launcher {
    constructor(pointA,pointB) {
        var options = {
            pointA : pointA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10,
        }
        this.pointB = pointB;
        this.launch = Constraint.create(options);
        World.add(world,this.launch);
    
    }
    fly() {
        this.launch.pointA = null;
       }
    attach(bodyA) {
        this.launch.pointA = bodyA;
    }
    display() {
        if(this.launch.pointA) {
            strokeWeight(2);
            line(this.launch.pointA.position.x,this.launch.pointA.position.y,this.pointB.x,this.pointB.y);
        }
        
    }
}*/

class launcher{ constructor(body,anchor) { 
    var options={ 
        bodyA:body, pointB:anchor, stiffness:0.004, length:1
     } 
    this.bodyA=body 
    this.pointB=anchor 
    this.launcher=Constraint.create(options) ;
    World.add(world,this.launcher);
 } 
    attach(body){ 
        this.launcher.bodyA=body;
     } 
    fly() { 
        this.launcher.bodyA=null; 
    } 
    display() {
                 if(this.launcher.bodyA) { 
                     var pointA=this.bodyA.position; 
    var pointB=this.pointB 
    strokeWeight(2); 
    line(pointA.x,pointA.y,pointB.x,pointB.y); } 
} 
}