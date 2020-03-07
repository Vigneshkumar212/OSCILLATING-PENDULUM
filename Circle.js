class Circle {
  constructor(x, y, radius) {
    var options = {
        'restitution':0
    }
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;  

         push();
      ellipseMode(RADIUS);
      fill(255);
      ellipse(pos.x, pos.y,10,10);
      pop();
      if(keyCode === 32){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      }
  }
};
