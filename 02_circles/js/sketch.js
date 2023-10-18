function setup() {
  // creates a canvas 800px wide and 800px high
  createCanvas(800, 800);
}

function draw() {
  // set the background color to off white
  background(220);
  noStroke();

   // Loop to draw 5 circles from left to right
   for (let i = 0; i < 5; i++) {
    let x = 50 + i * 80; // Calculate the x-coordinate for each circle
    let y = height / 2; // Fixed y-coordinate for all circles
    let diameter = 50; // Diameter of each circle
    
    fill(255, 0, 0); // Set the fill color to red
    ellipse(x, y, diameter); // Draw a circle
  }
}