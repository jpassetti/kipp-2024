function setup() {
 // Creates a canvas 800px wide and 800px high
 createCanvas(800, 800);
 noLoop();
}

function draw() {
 background(220); // Set the background to a light gray color
 noStroke();

 let numRows = 10; // Number of rows
 let numCols = 10; // Number of columns
 let spacingX = width / (numCols + 1);
 let spacingY = height / (numRows + 1);

 let noiseScale = 0.2; // Scale factor for Perlin noise

 // Nested loops to draw a grid of circles
 for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
   let x = (j + 1) * spacingX; // Calculate the x-coordinate
   let y = (i + 1) * spacingY; // Calculate the y-coordinate

   // Generate circleSize using Perlin noise
   let noiseVal = noise(i * noiseScale, j * noiseScale);
   let circleSize = map(noiseVal, 0, 1, 10, 100); // Map noise to desired size range

   // Generate random RGB values for the fill color
   let r = 0;
   let g = 0;
   let b = 0;

   fill(r, g, b); // Set the fill color to the random RGB values

   // Draw a circle at the calculated x and y coordinates
   ellipse(x, y, circleSize); // Draw a circle
  }
 }
}

// Add an event listener to the button
document
 .getElementById("saveButton")
 .addEventListener("click", saveCanvasAsImage);

function saveCanvasAsImage() {
 // Generate a timestamp
 let now = new Date();
 let year = now.getFullYear();
 let month = String(now.getMonth() + 1).padStart(2, "0");
 let day = String(now.getDate()).padStart(2, "0");
 let hours = String(now.getHours()).padStart(2, "0");
 let minutes = String(now.getMinutes()).padStart(2, "0");
 let seconds = String(now.getSeconds()).padStart(2, "0");

 // Create a filename with the formatted timestamp
 let timestamp = `${year}-${day}-${month}--${hours}:${minutes}:${seconds}`;
 let filename = `myCanvas_${timestamp}.jpg`;
 // Save the canvas as an image with the generated filename
 saveCanvas(filename, "jpg");
}
