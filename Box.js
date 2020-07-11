class Box {
    constructor(x, y, width, height, colour) {
      var options = {
          'restitution':0.7,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = colour;     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);   
      fill(this.color);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  