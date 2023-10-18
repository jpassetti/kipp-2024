function setup() {
  // creates a canvas 800px wide and 800px high
  createCanvas(800, 800);
}


function draw() {
  noLoop();
  background(220); // Set the background to a light gray color
  noStroke();

  let numRows = 5; // Number of rows
  let numCols = 5; // Number of columns
  let circleSize = 100; // Diameter of each circle
  
  // Calculate the spacing between circles
  let spacingX = width / (numCols + 1);
  let spacingY = height / (numRows + 1);
  
  // Nested loops to draw a grid of circles
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let x = (j + 1) * spacingX; // Calculate the x-coordinate
      let y = (i + 1) * spacingY; // Calculate the y-coordinate
      
      // Set the fill color to red
      fill("red"); 

      // Draw a circle at the calculated x and y coordinates
      ellipse(x, y, circleSize, circleSize); // Draw a circle
    }
  }
}