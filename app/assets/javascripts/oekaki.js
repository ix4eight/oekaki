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

  $('#kesigomu').on('click', function() {
    color = "white"
  });

  $('#kuro').on('click', function() {
    color = "black"
  });
  $('#aka').on('click', function() {
    color = "red"
  });

  $('#ao').on('click', function() {
    color = "blue"
  });

  $('#ki').on('click', function() {
    color = "yellow"
  });

  $('#midori').on('click', function() {
    color = "green"
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


  if(key == 'q') {
    saveCanvas('myCanvas', 'png');
  }
}