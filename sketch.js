// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Arriving "vehicle" follows the mouse position

// Implements Craig Reynold's autonomous steering behaviors
// One vehicle "arrive"
// See: http://www.red3d.com/cwr/


var intro = true;
var choices = false;
var drop = false;

var v;

var introContainer;
var introButton;

var oscillators = [];

var containersArray = [];
var buttonsArray = [];

var locationX = [];
var locationY = [];

var currentIndex;

var myP;
var answers = ["heck yeah!", "um, totally", "duh bitch"];

// var choicesContainer;
// var choicesButton;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);

  introContainer = createDiv('');
  myP = createP("Don't you love physics in the DOM?" );
  myP.parent(introContainer);
  myP.addClass("introText");
  introButton = createButton('Click to Answer');
  introButton.parent(introContainer);
  introButton.mouseClicked(introClick);
  introButton.addClass("introButton");

  v = new Vehicle(width/2, height/2);
}

function draw() {
  if (intro){
    var mouse = createVector(mouseX, mouseY);

    // Call the appropriate steering behaviors for our agents
    v.arrive(mouse);
    v.update();
    v.display();
  }

  if (choices){

    for (var i = 0; i < 3; i++) {
      oscillators[i].oscillate();
      oscillators[i].display();

      // currentIndex = i;
      // print(currentIndex);

      // var locationX = oscillators[i].offsetLeft;
      // var locationY = oscillators[i].offsetTop;
      // print(locationX);
      // print(locationY);
    }
  }

  if (drop){
    print("dropped");
    // for (var i = 0; i < oscillators.length; i++) {
    //   var wind = createVector(0.01,0);
    //   var gravity = createVector(0, 0.1*oscillators[i].mass);
    //   oscillators[i].applyForceDrop(wind);
    //   oscillators[i].applyForceDrop(gravity);
    //   oscillators[i].updateDrop(i);
    //   oscillators[i].displayDrop(i);
    //   oscillators[i].checkEdgesDrop();

    for (var i = 0; i < oscillators.length; i++) {
      var wind = createVector(0.01,0);
      var gravity = createVector(0, 0.1*oscillators[i].mass);
      oscillators[i].applyForce(wind);
      oscillators[i].applyForce(gravity);
      oscillators[i].update();
      oscillators[i].display();
      oscillators[i].checkEdges();
    }
  }

}

function introClick (){

  intro = false;
  drop = false;

  introContainer.hide();
  introButton.hide();

  for (var i = 0; i < containersArray.length; i++) {

    containersArray[i].hide();
    buttonsArray[i].hide();

  }

  oscillators = [];

  for (var i = 0; i < 3; i++) {
    
        containersArray[i] = createDiv('');
        buttonsArray[i] = createButton(answers[i]);
        buttonsArray[i].parent(containersArray[i]);
        buttonsArray[i].addClass("choiceButtons");
        buttonsArray[i].mouseClicked(choiceClick);

        oscillators.push(new Oscillator( i, mouseX, mouseY));
      }

  choices = true;

}

function choiceClick (){

  print("Clicked!!!!");

  choices = false;

  for (var i = 0; i < 3; i++) {

    containersArray[i].hide();
    buttonsArray[i].hide();

  }

  oscillators = [];
  print(oscillators);


  for (var i = 0; i < 3; i++) {

    

    // if (i = currentIndex){

    //   containersArray[i] = createDiv('');
    //   buttonsArray[i] = createButton(answers[i]);
    //   buttonsArray[i].parent(containersArray[i]);
    //   buttonsArray[i].addClass("choiceButtons");
    //   buttonsArray[i].style("width", "200")
    //   buttonsArray[i].style("background-color", "#FF5458")

    //   oscillators.push(new Mover(random(1,4),i , locationX[i], locationY[i]));

    // }

    // if (i != currentIndex){

    containersArray[i] = createDiv('');
    buttonsArray[i] = createButton(answers[i]);
    buttonsArray[i].parent(containersArray[i]);
    buttonsArray[i].addClass("choiceButtons");

    oscillators.push(new Mover(random(1,4),i , locationX[i], locationY[i]));

    // }



  }

  drop = true;

  // introContainer = createDiv('');
  // introButton = createButton('Get Started!');
  // introButton.parent(introContainer);
  // introButton.mouseClicked(introClick);
  // introButton.addClass("introButton");

  // intro = true;

}
