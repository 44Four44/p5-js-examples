class Ball {
    // Construct object
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(50, 200);
        this.mass = pow(this.size/2, 2) * PI 
        this.vx = random(1, 10);
        this.vy = random(1, 10);
        this.color = random(100);
    };

    move() {
        this.x += this.vx;
        this.y += this.vy;

        // Change direction if collided with wall
        if (this.x > width || this.x < 0) {
            this.vx *= -1;
        };
        if (this.y > height || this.y < 0) {
            this.vy *= -1;
        };
    };
    
    display() {
        colorMode(HSB, 100)
        if (this.contains(mouseX, mouseY)) {
            fill(this.color, 99, 99, 50);
        } else {
            fill(this.color, 99, 99, 20);
        }; 
        strokeWeight(3);
        stroke(0);
        ellipse(this.x, this.y, this.size, this.size);
    };

    contains(x, y) {
        if (dist(x, y, this.x, this.y) <= this.size/2) {
            return true;
        } else {
            return false;
        };
    };

}

