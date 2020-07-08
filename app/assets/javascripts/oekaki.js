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

$(function(){
  $('#kesigomu').on('click', function() {
    color = "white"
    $('#nuritubusi').on('click', function() {
      createCanvas = background("white");
    });
  });

  $('#kuro').on('click', function() {
    color = "black"
    $('#nuritubusi').on('click', function() {
      createCanvas = background("black");
    });
  });
  $('#aka').on('click', function() {
    color = "red"
    $('#nuritubusi').on('click', function() {
      createCanvas = background("red");
    });
  });

  $('#ao').on('click', function() {
    color = "blue"
    $('#nuritubusi').on('click', function() {
      createCanvas = background("blue");
    });
  });

  $('#ki').on('click', function() {
    color = "yellow"
    $('#nuritubusi').on('click', function() {
      createCanvas = background("yellow");
    });
  });

  $('#midori').on('click', function() {
    color = "green"
    $('#nuritubusi').on('click', function() {
      createCanvas = background("green");
    });
  });
});

$(function(){
  $('#zenkesi').on('click', function() {
    createCanvas = background("white")
  });
});


function setup() {
  createCanvas(q);
  createCanvas(window.innerWidth - 100, windowHeight - 100);
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
    background(255);
  }

  if(key == "m") {
    q = createCanvas(700,700);
    background(255);
  }

  if(key == "l") {
    q = createCanvas(windowWidth, windowHeight);
    background(255);
  }

  if(key == 'q') {
    saveCanvas('myCanvas', 'png');
  }
}