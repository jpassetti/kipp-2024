function setup() {
  // creates a canvas 800px wide and 800px high
  createCanvas(800, 800);
}

function draw() {
  // set the background color to off white
  background(220);

  // draw a circle at (400, 400) with a diameter of 100px
  // set the fill color to red
  fill("red");

  // set the stroke color to black
  noStroke();

  // draw the circle
  ellipse(400, 400, 100);
}