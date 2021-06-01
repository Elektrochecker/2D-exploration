function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  drawGround(0)
}

let drawGround = color => {
  noFill()
  stroke(color)
  strokeWeight(4)
  beginShape()
  for (let x = 0; x < windowWidth; x++) {
    vertex(x,windowHeight-noise(x/300)*100)
  }
  endShape()
}