let circles = []; // An array to store circle objects
let numCircles = 100; // Number of circles

function setup() {
  // creates a SVG canvas 800px wide and 800px high
  createCanvas(800, 800);

  // Adjust the pixel density to increase DPI (Retina displays have a pixel density of 2)
  pixelDensity(2);

  // Create circle objects and add them to the array
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(20, 100); // Random diameter between 20 and 100
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let growing = random() > 0.5; // Randomly set growing to true or false
    
    circles.push(new Circle(x, y, diameter, r, g, b, growing));
  }
}

function draw() {
  background(220);
  noStroke();

  // Update and display each circle
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}

// Add an event listener to the button
document.getElementById('saveButton').addEventListener('click', saveCanvas);

function saveCanvas() {
    // Generate a timestamp
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let day = String(now.getDate()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Create a filename with the formatted timestamp
    let timestamp = `${year}-${day}-${month}--${hours}:${minutes}:${seconds}`;
    let filename = `myCanvas_${timestamp}.jpg`;

    // Save the canvas to a file
    saveCanvas(filename);
}