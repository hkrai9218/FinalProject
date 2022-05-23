/*
Game State Example - Art 101 - Spring 2022 - Chelsea Thompto

This example shows a basic structure for moving between game states/stages
by using a variable called 'gameState' and the JavaScript 'switch'
functionality in the draw loop. Depending on the which on how gameState is
defined, different displays and user interactions are active. This is
accomplished by placing these elements into functions and calling those
functions within the corresponding 'case' inside the draw loop.

A more advanced version of this program can be viewed here:
https://github.com/Chelsea-Thompto-Teaching-Examples/art101-game-state-demo
*/

// Define the gameState variable & set it to the desired inital value.
let gameState = 'title';
let canvas;
let bgR = 100;
let bgG = 240;
let bgB = 100;

// Set up
function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('sketch-holder');
  frameRate(60);
}

/* The draw loop content is drawn depending on the current value of
gameState. The 'switch' function here is replacing what could be an
'if-else' statement. */
function draw() {

  // The switch call expects to find a varible within the parentheses.
  switch (gameState) {

    /*
    Each 'screen' that you want should be defined with a word, this word
    will correspond to a 'case' as seen below. The case will be followed by
    all of functions you want within that screen and end with a 'break;'.
    */
    case 'title':
      titleScreen();
      break;
    case 'lvl1':
      gameStage1();
      break;
    case 'gameover':
      gameOver();
      break;
    /*
    To add more screens, you will need to:
    1) define a new case value to be added to your switch function
    2) create a new function to be called for the case
    3) create an event within your code to define gameState as the new
    case.

    Example: For an instructions screen, I might:
    1) Add a case for gameStage being defined as 'instructions'
    2) creation a function called instDis() to house my instruction screen
    graphics
    3) create a keyboard event to switch gameState to 'instructions' when a
    certain key is pressed on the title screen
    */
  }
}

/* Key release listener for starting game while on the title and game over
screens and changing the background color on the main game screen. Here we
can see how the variable 'gameState' gets changed to trigger a new screen
to be displayed. */
function keyReleased() {
  if (gameState === 'title' || gameState === 'gameover') {
    if (key === 's' || key === 'S' ) {
      gameState = 'lvl1';
      bgR = 100;
      bgG = 240;
      bgB = 100;
    }
  } else if (gameState === 'lvl1') {
    if (key === 's' || key === 'S' ) {
      bgR = random(255);
      bgG = random(255);
      bgB = random(255);
    }
  }
}

// Function for rendering the title screen.
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

// Function for rendering the main game play screen.
function gameStage1() {
  background(bgR, bgG, bgB);
  stroke(0);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text('CIRCLE!', width*0.5, height*0.1);
  textSize(20);
  text('Press "S" to change background color.', width*0.5, height*0.95);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, 40);
  stroke(255);
  fill(255);
  rectMode(CENTER);
  rect(mouseX, mouseY, 20);

  // Checking for lose state (touching circle).
  if (mouseX > (width/2)-20 && mouseX < (width/2)+20) {
    if (mouseY > (height/2)-20 && mouseY < (height/2)+20) {
      gameState = 'gameover';
    }
  }
}

// Function for rendering game over screen.
function gameOver() {
  background(240, 0 ,0);
  stroke(255);
  fill(255);
  textSize(75);
  textAlign(CENTER);
  text('OOP', width*0.5, height*0.33);
  textSize(25);
  text('Press "S" To Restart Game', width*0.5, height*0.66);
}
