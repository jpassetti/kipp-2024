// Circle class definition
class Circle {
    constructor(x, y, diameter, r, g, b, growing) {
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      this.r = r;
      this.g = g;
      this.b = b;
      this.growing = growing;
    }
  
    update() {
      if (this.growing) {
        this.diameter += 1; // Increase the diameter
        if (this.diameter >= 100) {
          this.growing = false; // Start shrinking when the diameter reaches 100
        }
      } else {
        this.diameter -= 1; // Decrease the diameter
        if (this.diameter <= 20) {
          this.growing = true; // Start growing again when the diameter reaches 20
        }
      }
    }
  
    display() {
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.diameter);
    }
  }