// Global variables that are changeable in relationships to thememselves and other variables
var col = {
  r: 0,
  g: 0,
  b: 255
};
var col_n ={
  r: 255,
  g: 0,
  b: 0
};
var myObj = {
  x: 1,
  y: 1
};
var myObj_n = {
  x: 1,
  y: 1
};
var myObj_m = {
  x: 1,
  y: 1
}
//Needed a couple of static global variables
var zol_m =0;
var obx =0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //My favorite Jacskson Pollack is red red red so I needed some red for a background
  background("rgb(255, 24, 24)");
  frameRate(200);

}

function draw() {

  //Assigning random values to variables.
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.g = random(0, 255);

  //Random color assignments from 0 to 255 in each aspect red green and blue.
  col_n.r = random(0, 255);
  col_n.g = random(0, 255);
  col_n.b = random(0, 255);

  //Assigning random values to x and y of various variables.
  myObj.x = random (0, width);
  myObj.y = random (0, height);
  myObj_n.x = random (0, width);
  myObj_n.y = random (0, height);
  myObj_m.x = random (0, width);
  myObj_m.y = random (0, height);


  //Creating a series of sandboxes for safety
  push();

    //Creating a reapeating arc function which sustains a dark factor to the picture
    noFill();
    stroke(0, 100);
    strokeWeight(1);
    arc(floor(myObj.x), myObj.y, floor(myObj_n.x), myObj_n.y, abs(-52), HALF_PI, PI );

    //Creating a color field using triangles I wanted a variety of shapes. Notice myObj being used throughtout the code.
    noFill();
    strokeWeight(1);
    stroke(col.r, col.g, col.b, 90);
    triangle(myObj.x, myObj.y, myObj_n.x, myObj_n.y, myObj_m.x, myObj_m.y);


    //Creating random repeating ellipses for the purpose of keeping a dark element as it evolves.
    fill(0,90);
    noStroke();
    ellipse(myObj.x, myObj.y, 2, 2);

  push();

    // Loving this did not think it would work translating by a random variable..
    translate(myObj.x, myObj.y );
    noFill();

    //Creating red random lines like pick up stix. The purpose is to break up the picture.
    //Bringing a continous redness as background is covered and picture evolves.
    stroke("rgba(255, 24, 24, 0.7)");
    strokeWeight(1);
    line(myObj.x, myObj.y, myObj_n.x, myObj_n.y);
  pop();
    //Obx is my modulo variable in the end I created this division of the picture mainly to comply with requirements.
    fill(0);
    noStroke();
    ellipse(obx,(height * .5), 6, 6);
    ellipse ((width * .5), obx, 6, 6);
  push();


    translate((width/2), 0);
    //Here comes some mouse action left light right dark
    zol_m = map(mouseX, 0, width, 0, 255);

    noFill();
    strokeWeight(1);
    stroke(zol_m, 60);
    //Creating the first part which is delegated to the top right quarter of the picture.
    ellipse((myObj.x * .5), (myObj.y * .5), 40, 40 );
  pop();

  push();
    translate(0, (height/2));
    noFill();
    strokeWeight(1);
    stroke(zol_m, 60)
    //Creating the second part which is delegated to the bottom left quarter of the picture.
    ellipse((myObj.x * .5), (myObj.y * .5), 40, 40 );
  pop();

  push();
    noFill();
    strokeWeight(1);

    //Knocking out some of those math requirements and adjusting color they all are unbelievably functional and relavent to the color.
    //Chaning the equation will change the color.
    stroke((col_n.r **2 ), (col_n.g ** 2), (col_n.b ** 2), 100);

    //Creating another pick up stix effect top left quarter of picture.
    line((myObj.x/2), (myObj.y/2), (myObj_n.x/2), (myObj_n.y/2) );

  push();
    translate((width/ 2), (height / 2));
    //Creating another pick up stix effect in the bottom right quarter of the picture.
    line((myObj.x/2), (myObj.y/2), (myObj_n.x/2), (myObj_n.y/2) );

  pop();
  pop();
  //clossing out all those sandboxes.

  //Updating movement of ellipse 100 creates a dotted line nicely adds to the picture for me and brings something to it.
  //Remembering I only initially put this in to adhere to the modulus requirement.
  obx += 100;
  obx %= width;

//Closing the draw function with a bracket.
}

//New function when mouse is pressed background turns white, acts as a reset button.
function mousePressed() {
  background("rgb(233, 255, 232)");

}

//New function when mouse is released original red background color appears and the picture evolves again.
function mouseReleased(){
  background("rgb(255, 24, 24)");
}
