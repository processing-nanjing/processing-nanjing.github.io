var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  t = 0
}


function draw() {
  noStroke()

  r = random(1, 160)
  a = random(0, width)


  var b = height * noise(t + r) //y-coordinate of the circle


  frameRate(8)
  fill(41, 80, 77, r) //green
  //circle(a, b, r)

  fill(254, 143, 29, r) //orange
  circle(mouseX, mouseY, r)
  if (frameCount % 36 == 0) {
    background(255)

  }
}


function mousePressed() {
  noLoop()
}

function mouseReleased() {
  loop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
