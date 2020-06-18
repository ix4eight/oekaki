var c = 0;
var s = 1;

function setup() {
  createCanvas(700, 700);
}
function draw() {
  stroke(c);
  strokeWeight(s);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

