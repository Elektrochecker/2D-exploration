function setup() {
  createCanvas(globalProperties.width, globalProperties.height);
}

function draw() {
  background(220)
  drawPlayer()
  drawGround(screen.x)

  if (keyIsPressed) {
    player.move()
  }
}

let drawGround = (xoff, yoff = 0) => {
  fill(ground.color)
  stroke(ground.color)
  strokeWeight(1)

  beginShape()
  vertex(0, 0, globalProperties.height)
  for (let x = 0; x < windowWidth; x += ground.resolution) {
    vertex(x, globalProperties.height - noise(x / 200 + xoff, yoff) * 200 - 20)
  }
  vertex(globalProperties.width, globalProperties.height)
  vertex(0, globalProperties.height)
  endShape()
}

let drawPlayer = () => {
  noStroke()
  fill(player.color)
  rect(player.x, player.y, 10, 20)
}