var c = 0;
var s = 1;

function setup(){
  createCanvas(700, 700);
}
function draw(){
  stroke(c);
  strokeWeight(s);
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function keyPressed(){
  if (key == '3'){
    s = 20;
  }
  if (key == '2'){
    s = 10;
  }
  if (key == '1'){
    s = 1;
  }
  if (key == 'r'){
    c = "red";
  }
  if (key == 'b'){
    c = "blue";
  }
  if(key == 'y'){
    c = "yellow";
  }
}