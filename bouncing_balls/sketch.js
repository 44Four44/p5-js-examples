// Balls array
var balls = [];
// Jeff the killer
var jeff;

//settings
var lines;
var pyramid;

function preLoad() {
  // Load image
  jeff = loadImage('jeff.jpg');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // Create balls
  for (var i = 0; i < 20; i++) {
    balls.push(new Ball());
  }

  //settings
  lines = true;
  pyramid = false;
}

function draw() {
  // Ball popping
  if (balls.length > 0) {
    background(204);
    fill(255, 0, 0);
    stroke(0);

    // Draw balls
    for (var i = 0; i < balls.length; i++) {
      balls[i].move();
      balls[i].display();
    }

    // Draw lines connecting centres
    if (lines) {
      stroke(0);
      strokeWeight(1);
      for (var i = 0; i < balls.length - 1; i++) {
        for (var j = i + 1; j < balls.length; j++) {
          line(balls[i].x, balls[i].y, balls[j].x, balls[j].y)
        }
      }
    }

    // 3D pyramid with 4 vertices
    if (pyramid) {
      fill(50, 99, 99, 20)
      triangle(balls[0].x, balls[0].y, balls[1].x, balls[1].y, balls[2].x, balls[2].y)
      fill(70, 99, 99, 20)
      triangle(balls[0].x, balls[0].y, balls[1].x, balls[1].y, balls[3].x, balls[3].y)
      fill(20, 99, 99, 20)
      triangle(balls[3].x, balls[3].y, balls[1].x, balls[1].y, balls[2].x, balls[2].y)
      fill(90, 99, 99, 20)
      triangle(balls[0].x, balls[0].y, balls[3].x, balls[3].y, balls[2].x, balls[2].y)  
    }

  line(width/2, height/2, mouseX, mouseY);
  // print(angle(width/2, height/2, mouseX, mouseY));

  // image(jeff, 0, 0, 200, 200);
  } else {
    // Jumpscare with flashing and noise
    background(204);
      print("done")
  }
}

function mousePressed() {
  // Pop ball if cursor is over ball
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].contains(mouseX, mouseY)) {
      balls.splice(i, 1)
    }
  }
}



// file:///Users/EthanWang/p5_js/bouncing_balls/index.html
// python -m SimpleHTTPServer