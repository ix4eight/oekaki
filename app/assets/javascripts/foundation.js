let color = (255, 255, 255);

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    fill(color);
    ellipse(mouseX, mouseY, 10, 10);
  }
}