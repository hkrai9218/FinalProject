let gameState = 'title';
let canvas;
let bgR = 233;
let bgG = 208;
let bgB = 223;

// Set up
function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  frameRate(60);
}

function draw() {

  switch (gameState) {

    case 'title':
      titleScreen();
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
  stroke(255);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Bay Area', width*0.5, height*0.33);
  text('and the usage', width*0.5, height*0.5);
  text('of phones', width*0.5, height*0.65);
  textSize(25);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameStage1() {
  background(bgR, bgG, bgB);
  stroke(0);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text('The first iPhone was in development in 2007', width*0.5, height*0.1);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameStage2() {
  background(220, 208, 223);
  stroke(0);
  fill(0);
  textSize(20);
  text('The time between the first iPhone and now.', width*0.5, height*0.8);
  text(frameCount, width / 2, height / 2);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameState3() {
  background(200, 100, 150);
  stroke(0);
  fill(0);
  textSize(20);
  text('The amount of phones purchased each year staggers.', width*0.5, height*0.4);
  text('There is an x amount of', width*0.5, height*0.5);
  text('phones being purchased every two minutes.', width*0.5, height*0.6);
  text('To continue press "W"', width*0.5, height*0.95);
}

function gameState4() {
  background(240, 260, 200);
  stroke(0);
  fill(0);
  textSize(20);
  text('The numbers continue to increase.', width*0.5, height*0.3);
  text('In the Bay Area, an X amount of people', width*0.5, height*0.5)
  text('have more than one Phone on their person.', width*0.5, height*0.7);
  text('To restart press "W"', width*0.5, height*0.95);
}
