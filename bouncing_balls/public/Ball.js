class Ball {
    // Construct object
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(50, 200);
        this.mass = pow(this.size/2, 2) * PI 
        this.v = random(2, 15);
        this.direction = random(0, TAU)
        this.vx = this.v * cos(this.direction)
        this.vy = this.v * sin(this.direction)
        this.color = 100;
        this.adjusted = false;
    };

    move() {
        // Change direction if collided with wall
        if (this.x > width || this.x < 0) {
            this.vx *= -1;
        };
        if (this.y > height || this.y < 0) {
            this.vy *= -1;
        };
        // Update attributes
        this.direction = angle(0, 0, this.vx, this.vy)
    };

    checkCollision() {
        // for (var i = 0; i < balls.length; i++) {
        //     var ball = balls[i];
        //     if (ball != this && dist(this.x, this.y, ball.x, ball.y) <= (this.size + ball.size)/2 && !ball.adjusted) {
        //         // var theta1 = this.direction;
        //         // var theta2 = ball.direction;
        //         // var phi = angle(this.x, this.y, ball.x, ball.y);
        //         // var m1 = this.mass;
        //         // var m2 = ball.mass;
        //         // var v1 = this.v;
        //         // var v2 = ball.v;

        //         // var vx1f = (v1 * cos(theta1 - phi) * (m1-m2) + 2*m2*v2*cos(theta2 - phi)) / (m1+m2) * cos(phi) + v1*sin(theta1-phi) * sin(phi);
        //         // var vy1f = (v1 * cos(theta1 - phi) * (m1-m2) + 2*m2*v2*cos(theta2 - phi)) / (m1+m2) * sin(phi) + v1*sin(theta1-phi) * cos(phi);
        //         // var vx2f = (v2 * cos(theta2 - phi) * (m2-m1) + 2*m1*v1*cos(theta1 - phi)) / (m1+m2) * cos(phi) + v2*sin(theta2-phi) * sin(phi);
        //         // var vy2f = (v2 * cos(theta2 - phi) * (m2-m1) + 2*m1*v1*cos(theta1 - phi)) / (m1+m2) * sin(phi) + v2*sin(theta2-phi) * cos(phi);
                
        //         // this.vx = vx1f;
        //         // this.vy = vy1f;
        //         //ball.vx = vx2f;
        //         //ball.vy = vy2f;
        //         this.color = 355;
        //         ball.adjusted = true;
        //     } else {
        //         this.color = 0;
        //     }
        // }
        print(this)
    };
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.adjusted = false;
        this.v = dist(this.vx, this.vy);
        this.direction = angle(0, 0, this.vx, this.vy);
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

