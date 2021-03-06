// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function Mover(m, i, x, y) {
  this.i = i;
  this.mass = m;
  this.position = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);

  // Newton's 2nd law: F = M * A
  // or A = F / M
  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };
    
  this.update = function() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  };

  this.display = function() {
    // stroke(0);
    // strokeWeight(2);
    // fill(255,127);
    // ellipse(this.position.x,this.position.y,this.mass*16,this.mass*16);
    buttonsArray[i].position(this.position.x,this.position.y);
  };

  // Bounce off bottom of window
  this.checkEdges = function() {
    if (this.position.y > height) {
      this.velocity.y *= -0.9;  // A little dampening when hitting the bottom
      this.position.y = height;
    }
      if (this.position.x > windowWidth) {
      containersArray[i].hide();
    }
  };
};





