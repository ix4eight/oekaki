let color = 0;
let q = 0;
let weight = 1;

$(function() {
  $('#one').on('click', function() {
    weight = 1;
  });

  $('#ten').on('click', function() {
    weight = 10;
  });

  $('#twenty').on('click', function() {
    weight = 20;
  });

  $('#thirty').on('click', function() {
    weight = 30;
  });
});

function setup() {
  createCanvas(q);
  createCanvas(window.innerWidth - 100, windowHeight - 100);
  background(255);
}

function draw() {
  stroke(color);
  strokeWeight(weight);

  if(mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight)
  }
}

function keyPressed() {
  if(key == "s") {
    q = createCanvas(400,400);
  }

  if(key == "m") {
    q = createCanvas(700,700);
  }

  if(key == "l") {
    q = createCanvas(windowWidth, windowHeight);
  }

  if(key == 'w') {
    color = "white";
  }

  if(key == 'r') {
    color = "red";
  }

  if(key == 'e') {
    color = "black";
  }

  if(key == 'b') {
    color = "blue";
  }
  
  if(key == 'y') {
    color = "yellow";
  }

  if(key == 'g') {
    color = "green";
  }

  if(key == 'q') {
    saveCanvas('myCanvas', 'png');
  }
}