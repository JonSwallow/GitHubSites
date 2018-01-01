
function setup() {
  // Creating a canvas which is the width and height of window.
  createCanvas(windowWidth, windowHeight);
  // Declaring a frame rate of one
  frameRate(1);

}

// Using variables for later in the code where let will not work for me.
var value1 = 1;
var value2 = 1;
var value3 = 1;
var value4= 1;

// Establishing the draw loop.
function draw() {
  // Creating a black background.
  background(0);
  // Declaring no stroke.
  noStroke();
  // Creating that everloving sandbox that actually was essential to making the rest work.
  push();

/* The first nested for loop.
 Declaring and initializing variables
 Boolean test
 Incrementing variables
 The first for loop is for width.
 The second for loop is for height.*/
for (i=0; i <= width; i += 30){
  for ( j=0; j <= height; j += 30){

  // I really dig the random colors, and it really works for this one.
  fill(random(255), 0, 90, 20);
  // Creating the ellipses using i and j from the for statements.
  ellipse (i, j, 100, 100);

    }
  }
    /* Second set of nested for statements.
    Again using the first for width, and ..
    the second for statment for height. */
    for ( var x =1; x <= width; x += 220 ) {
      for (var y = 1; y <= height; y += 20 ){

      // Declaring text size.
      textSize(20);
      // Might as well keep same randomized colors.
      fill (255 , 0, random(255), 50);
      // Randomizing text to give a "Matrix" like feel.
      text(random(10), x, y);

      }
    }
    // Closing the sandbox.
    pop();
  // Opening another sandbox.
  push();

  // Found a way to work something in from the lesson.
  // Let will retain its value, however it works here.
  let widPos = width/2;
  let heigPos = height/ 2;

  // Using the above variables in tranlation.
  translate(widPos, heigPos);
  /* Creating a triagle in the center of the picture.
  Properties include a randomized color, stroke and a black fill with some transparency.
  I am fiddling with it trying to make it better as I comment.
  I also rounded some corners to break it up.
  */
  fill(0, 180);
  strokeWeight(9);
  stroke(255 , 0, random(255), 50);
  rectMode(CENTER);
  rect(0, 0,  650, 550, 0, 45, 0 , 45);
pop();




/* This part had to be outside the sandbox to function.
Delcaring a nice readable text size.
Using a color that matches the rest of it.
No stroke and using those Let variables again */
textSize(32);
fill(200, 0, 90);
noStroke();
text( "Conversions", widPos -60, heigPos - 70);

textSize(30);

fill(200, 0, 90);
/* I wrote a big conversion program whenever we were working on binary.
I was proud of it then and decided to use it here. I saw somewhere how to use the
toString method to do this but I figured it out on my own.
toString(2, 8, 16) coupled with numbers of one will produce binary, octal and hex */
value2 = value1.toString(2);
// Formating the text to display properly.
text( value1 + " "  +  "Converted to Binary " + " = " + value2, widPos - 300, heigPos );
value4 = value3.toString(16);
text( value3 + " " + "Converted to Hexadecimal" + " = " + value4,  widPos  -300, heigPos + 50);
// Incrementing the value by one each loop.
value1 += 1;
value3 += 1;
}

// I always like to add that reset button in this case its function resets the count only.
function mousePressed() {

  value1 = 1;
  value3 = 1;

}
