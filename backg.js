
class back{
    constructor(x,y,width,length) {
        var options= {
           isSatic:false,
           'restitution':0.3,
            'friction':0.5, 'density':1.2
          }
          this.body =Bodies.rect(x,y,width,length,options);
    
          this.image=loadImage("candy.png");
           World.add(world,this.body);
          }
           display() {
               var pos =this.body.position;
                
                } }
  