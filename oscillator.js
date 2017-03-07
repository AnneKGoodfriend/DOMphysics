// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Oscillator = function(i, mouseX, mouseY) {

  this.mouseX = mouseX;
  this.mouseY = mouseY;
  this.i = i;
  this.angle = createVector();
  this.velocity = createVector(random(-0.03, 0.03), random(-0.03, 0.03));
  this.amplitude = createVector(random(50, width/4), random(50, height/4));

  this.clicked = false;

  this.topspeed = 4;
  this.position = createVector(width/2, height/2);




  this.oscillate = function() {

    this.angle.add(this.velocity);

  };

  this.display = function() {

    var x = sin(this.angle.x) * this.amplitude.x;
    var y = sin(this.angle.y) * this.amplitude.y;
    
    if (this.clicked === false){
      containersArray[i].position(this.mouseX, this.mouseY);
      this.clicked = true;
    } 

    if (this.clicked === true){
      
      contx = x+this.mouseX;
      conty = y+this.mouseY;

      containersArray[i].position(contx, conty);

      locationX[i] = contx;
      locationY[i] = conty;

      print(locationX);
      print(locationY);

      var d = dist(x, y, this.mouseX, this.mouseY);
      // print(d);

      if (d<50){


      }

    }

    push();
    translate(this.mouseX, this.mouseY);
    stroke(255);
    // strokeWeight(2);
    // // fill(127, 127);
    // line(0, 0, x, y);
    // ellipse(x, y, 32, 32);
    pop();
  };

  this.attractMouse = function(){


  }

};

