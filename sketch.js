let gameState = 'title';
let canvas;
let bgR = 233;
let bgG = 208;
let bgB = 223;

// Set up
function setup() {
  canvas = createCanvas(600, 500);
  canvas.parent('sketch-holder');
  frameRate(60);
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
      break;
    case 'lvl4':
      gameState4();
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
  fill(210, 180, 200);
  noStroke();
  rect(width*0.0, height*0.0, width*0.05, height*0.99);
  rect(width*0.95, height*0.0, width*0.99, height*0.99);
  rect(width*0, height*0, width*99, height*0.05);
  rect(width*0, height*0.85, width*99, height*0.99);
  stroke(0);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('The first iPhone was in development in 2007', width*0.5, height*0.1);
  text('Fun Fact: Apple faced two lawsuits', width*0.5, height*0.15);
  text('regarding selling iPhones.', width*0.5, height*0.2);
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
  fill(0);
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
  fill(0);
  textSize(20);
  text('The amount of phones purchased each year staggers.', width*0.5, height*0.4);
  text('There is an x amount of', width*0.5, height*0.5);
  text('phones being purchased every two minutes.', width*0.5, height*0.6);
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
  fill(0);
  textSize(20);
  text('The numbers continue to increase.', width*0.5, height*0.2);
  text('In the Bay Area, an X amount of people', width*0.5, height*0.3)
  text('have more than one Phone on their person.', width*0.5, height*0.4);
  text('To restart press "W"', width*0.5, height*0.95);
}
