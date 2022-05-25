let gameState = 'title';
let canvas;
let bgR = 233;
let bgG = 208;
let bgB = 223;
let circles = [];
let value = 0;

// Set up
function setup() {
  canvas = createCanvas(600, 500);
  canvas.parent('sketch-holder');
  frameRate(60);

  for(let i = 0; i < 10; i++) {
    circles[i] = new Circle(random(width), random(height), random(-4, 4), random(-4, 4));
  }
}

function draw() {

  switch (gameState) {

    case 'title':
      titleScreen();
      angleMode(DEGREES);
      let a = atan2(mouseY - height / 2, mouseX - width / 2);
      translate(width / 2, height / 1.6);
      push();
      rotate(a);
      rect(width*-0.1, height*-0.06, width*0.1667, height*0.14);
      fill(100);
      rect(width*-0.083, height*-0.05, width*0.125, height*0.12);
      circle(width*0.055, height*0.01, width*0.0166);
      pop();
      break;
    case 'lvl1':
      gameStage1();
      break;
    case 'lvl2':
      gameStage2();
      break;
    case 'lvl3':
      gameState3();
          for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
      break;
    case 'lvl4':
      gameState4();
      fill(value);
      rect(245, 115, 45, 50);
      rect(280, 70, 45, 40);
      rect(178, 170, 45, 50);
      rect(285, 215, 90, 50);
      rect(70, 320, 100, 50);
      noStroke();
      fill(0);
      text('80%', 198, 200);
      text('35%', 303, 100);
      text('one', 267, 150);
      text('6.5 billion', 330, 250);
      text('290 Million', 120, 350);
      break;
  }
}

function keyReleased() {
  if (gameState === 'title') {
    if (key === 'w' || key === 'W' ) {
      gameState = 'lvl1';
      bgR = 233;
      bgG = 208;
      bgB = 223;
    }
  } else if (gameState === 'lvl1') {
    if (key === 'w' || key === 'W' ) {
      gameState = 'lvl2';
      frameRate(30);
      textSize(30);
      textAlign(CENTER);
    }
  }
  else if (gameState === 'lvl2') {
    if (key === 'w' || key === 'W') {
      gameState = 'lvl3';
    }
  }
  else if (gameState === 'lvl3') {
    if (key === 'w' || key === 'W') {
      gameState = 'lvl4';
    }
  }
  else if (gameState === 'lvl4') {
    if (key === 'w' || key === 'W') {
      gameState = 'title';
    }
  }
}

function titleScreen() {
  background(233, 208, 223);
  fill(210, 180, 200);
  noStroke();
  rect(width*0.0, height*0.0, width*0.05, height*0.99);
  rect(width*0.95, height*0.0, width*0.99, height*0.99);
  rect(width*0, height*0, width*99, height*0.05);
  rect(width*0, height*0.85, width*99, height*0.99);
  stroke(255);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('The Bay Area', width*0.5, height*0.2);
  text('and the usage', width*0.5, height*0.3);
  text('of phones', width*0.5, height*0.4);
  textSize(25);
  text('To begin, press "W"', width*0.5, height*0.95);
}

function gameStage1() {
  background(bgR, bgG, bgB);
  noStroke();
  fill(100);
  rect(width*0.5, height*0.5, width*0.42, height*0.7);
  noStroke();
  fill(240);
  rect(width*0.52, height*0.52, width*0.385, height*0.5);
  noStroke();
  fill(160, 240, 136);
  rect(width*0.55, height*0.55, width*0.25, height*0.1, 20);
  describe('round edges in mid-right of canvas');
  noStroke();
  fill(100);
  rect(width*0.67, height*0.7, width*0.2, height*0.1, 20);
  fill(210, 180, 200);
  noStroke();
  rect(width*0.0, height*0.0, width*0.05, height*0.99);
  rect(width*0.95, height*0.0, width*0.99, height*0.99);
  rect(width*0, height*0, width*99, height*0.05);
  rect(width*0, height*0.85, width*99, height*0.99);
  strokeWeight(2);
  stroke(20);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text('The first iPhone was in development in 2007', width*0.5, height*0.1);
  text('The estimated sales of between 250,000', width*0.5, height*0.17);
  text('and 700,000 iPhones in the first weekend alone', width*0.5, height*0.25);
  text('By the end of 2009,', width*0.5, height*0.32);
  text('iPhone models had been released in all major markets', width*0.5, height*0.4);
  text('Fun Fact:', width*0.27, height*0.6);
  text('Apple faced two lawsuits', width*0.27, height*0.66);
  text('regarding selling iPhones.', width*0.27, height*0.72);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameStage2() {
  background(220, 208, 223);
  fill(200, 170, 200);
  noStroke();
  rect(width*0.0, height*0.0, width*0.05, height*0.99);
  rect(width*0.95, height*0.0, width*0.99, height*0.99);
  rect(width*0, height*0, width*99, height*0.05);
  rect(width*0, height*0.9, width*99, height*0.99);
  stroke(0);
  fill(255);
  textSize(20);
  text('How many phones do you think were bought.', width*0.5, height*0.8);
  text('after 2008?', width*0.5, height*0.85);
  textSize(150);
  text(frameCount, width / 2, height / 2);
  textSize(20);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameState3() {
  background(200, 100, 150);
  fill(195, 155, 170);
  noStroke();
  rect(width*0.0, height*0.0, width*0.05, height*0.99);
  rect(width*0.95, height*0.0, width*0.99, height*0.99);
  rect(width*0, height*0, width*99, height*0.05);
  rect(width*0, height*0.85, width*99, height*0.99);
  stroke(0);
  fill(255);
  textSize(20);
  text('The amount of phones purchased each year staggers.', width*0.5, height*0.4);
  text('About more than 4.14 million phones', width*0.5, height*0.5);
  text('are being purchased every day in the world.', width*0.5, height*0.6);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameState4() {
  background(240, 250, 200);
  fill(210, 220, 150);
  noStroke();
  rect(width*0.0, height*0.0, width*0.05, height*0.99);
  rect(width*0.95, height*0.0, width*0.99, height*0.99);
  rect(width*0, height*0, width*99, height*0.05);
  rect(width*0, height*0.85, width*99, height*0.99);
  stroke(0);
  fill(255);
  textSize(20);
  text('The numbers continue to increase.', width*0.5, height*0.1);
  text('In the Bay Area, a 35% amount of people', width*0.5, height*0.2)
  text('have more than one Phone on their person.', width*0.5, height*0.3);
  text('About 80% of people own a smartphone.', width*0.5, height*0.4);
  text('There are currently 6.5 billion Smartphone', width*0.5, height*0.5);
  text('Subscriptions in the World. There are also more than', width*0.5, height*0.6);
  text('290 Million Smartphone Users in the United States.', width*0.5, height*0.7);
  text('Click to reveal', width*0.5, height*0.9);
  text('To restart press "W"', width*0.5, height*0.95);
}

class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill(frameCount, bgG, bgB);
    circle(this.x, this.y, 20);
  }
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
