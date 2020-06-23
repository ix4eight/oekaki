var c = 0;
var s = 1;
var q = 0;

function setup(){
  createCanvas(q);
  createCanvas(windowWidth, windowHeight);
}
function draw(){
  stroke(c);
  strokeWeight(s);
  
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function keyPressed(){
  if (key == "s"){
    q = createCanvas(400,400);
  }
  if (key == "m"){
    q = createCanvas(700,700);
  }
  if (key == "l"){
    q = createCanvas(windowWidth, windowHeight);
  }
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