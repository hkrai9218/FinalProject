let gameState = 'title';
let canvas;
let bgR = 110
let bgG = 240
let bgB = 100

function setup() {
  createCanvas(400, 400);
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
    case 'gameover':
      gameOver();
      break;
  }

function keyReleased() {
  if (gameState === 'title' || gameState === 'gameover') {
    if (key === 's' || key === 'S') {
      gameState = 'lvl1';
      bgR = 100;
      bgG = 240;
      bgB = 100;
    }
    else if (gameState === 'lvl1') {
      if (key === 's' || key === 'S') {
        bgR = random(255);
        bgG = random(255);
        bgB = random(255);
      }
    }
  }
}

function titleScreen() {
  background(100, 100, 240);
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('GAY', width*0.5, height*0.33);
  textSize(25);
  text('Press "S" To Start Game', width*0.5, height*0.66);
}

function gameStage1() {
  background(bgR, bgG, bgB);
  stroke(0);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text('Circle!', width*0.5, height*0.1);
  textSize(20);
  text('Press "S" to change background color.', width*0.5, height*0.95);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 40);
  stroke(255);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 20);

  if (mouseX > (width/2)-20 && mouseX < (width/2)+20) {
    if (mouseY > (height/2)-20 && mouseY < (width/2)+20) {
      gameState = 'gameover';
    }
  }
}

function gameOver() {
  background(240, 0, 0);
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('GAME OVER', width*0.5, height*0.33);
  textSize(25);
  text('Press "S" To Restart Game', width*0.5, height*0.66);
}
}
