//Creating that empty array thanks I feel better now.
let timeWarps = [];

// Creating setup Function.
function setup(){
createCanvas(windowWidth,windowHeight);
// Creating my variables for the  Tardis cursor.
 px=width/2;
 py=height/2;
 // Getting rid of the cursor because, you have a Tardis cursor now.
 noCursor();
 /* For statement instantiating i for arrray testing and declaring number of slots,
  and finally incrementing */
 for(let i = 0; i < 68; i ++){
// I decided to declare this here, probably because it was easier.
    let x= random (width);
    let y = random (height);
    let r = random (10, 60);
    // instantiating my array and defining it.
    timeWarps[i] = new TimeWarp (x, y, r );
  }

}
function draw(){
// Background color in the draw loop.
background(0);
// This is the same for statement that is in the setup function.
for (let i = 0; i < timeWarps.length; i ++){
  // Calling various methods of the TimeWarp funcion. I really hope that nominclature is correct.
  // Did I mention I recently quit nicotine? (sigh).
  timeWarps[i].show();
  timeWarps[i].move();
  timeWarps[i].edges();
 }
 //Calling the Tardis function.
 tardis(mouseX, mouseY);
 // Calling the barrier function.
 barrier();
}
// Creating the TimeWrap Class with cunstructor.
class TimeWarp {
  constructor(x, y, r){
    this.x= x;
    this.y= y;
    this.r= r;
    // Did it like you did because it works better.
    this.deltX = random( -5, 5);
    this.deltY = random( -5, 5);
    // Wanted to randomize the color.
    this.red = random(0,255);
    this.green = random(0, 255);
    this.blue= random(0, 255);
  }
 // No it was not intentional I played with it until it did this and I kept it.
  move(){
this.x += this.deltX ++;
this.y += this.deltY ++;
  }
 // Setting boundaries, thanks and I set to zero so the bubbles pop at the edges.
 // This did not work on the top edge.
  edges(){
    if(this.x + this.r >= width || this.x - this.r <= 0){
    this.x = 0;
  }
    if(this.y + this.r >= height || this.y - this.r <= 0){
      this.y = 0;
    }
  }
 // Creating the ellipses within the show method.
  show(){
    stroke(0);
    strokeWeight(1);
    fill(this.red, this.green,this.blue, 127);
    ellipse (this.x, this.y, this.r*2);
  }
}
/* Creating a function to add a motion background, I tried to do this in oop and I could
 not make it go because of the existing array I suppose. */
function barrier() {
    for (wB=100; wB <= width; wB += 100){
    for ( hB=100; hB <= height; hB += 100){
     br = random (1, 35);
    // Randomized color again.
    fill(random(250), 80, 90, 90);
    noStroke();
    // Creating the ellipses using i and j from the for statements.
    ellipse (wB, hB, br);
    /* Rotate the whole thing I wanted to do this took me a while to get it
    right  order of method call is imperative in this case.*/
    rotate (frameCount/ -50);
    }
  }

}
/* Building my cursor, I tried everything to shorten this code.
 I really wanted to use variables and statements I could not get the math right*/
function tardiS(){
// Creating the frame of the Tardis
stroke(255);
strokeWeight(2);
fill('rgb(25, 39, 221)');
rect(-20, -40, 80, 150);

}
// Creating a function for each panel to attempt to compartmentalize.
function tdsQ(){
stroke(255);
strokeWeight(1);
noFill();
rect( -9, 5, 25, 25);
}
// Creating the top panels which have to be white.
function tdSq(){
fill(255);
noStroke();
rect( -9, 5, 25, 25);
}
// Creating the strobe beacon on the top of the Tardis.
function tTop(){
  stroke(255);
  fill(random(255,35, 230));
  rect(-9, 5, 10, 10);
}
/* Oh my goodness I know there is more compact  way to do this.
When you grade this if you could let me know please */
function tardis(x, y){
  push();
  translate(px,py);
  tardiS();
  pop();
  push();
  translate(px,py);
  tdSq();
  pop();
  push();
  translate(px, py - 30);
  tdSq();
  pop();
  push();
  translate(px, py + 30);
  tdsQ();
  pop();
  push();
  translate(px, py + 60);
  tdsQ();
  pop();
  push();
  translate(px + 30,py -30);
  tdSq();
  pop();
  push();
  translate(px + 30, py);
  tdSq();
  pop();
  push();
  translate(px + 30, py + 30);
  tdsQ();
  pop();
  push();
  translate(px + 30, py + 60);
  tdsQ();
  pop();
  push();
  translate(px + 25, py -60);
  tTop();
  pop();
  px= x;
  py = y;
}
