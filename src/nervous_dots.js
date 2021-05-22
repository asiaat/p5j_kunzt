function setup() {
  createCanvas(600, 600);
  frameRate(30);
}

function draw() {
  background(220);
  fill(0)
  noStroke()
  
  s = 20
  for(let i = 0; i < 50; i++){
    for(let j = 0; j < 50; j++){
      x = i * s + 2.4 + (j%random(3,6))
      y = j * s + 2 + (j%random(0,0.1))
      ellipse(x,y,s,s)
      fill(250,random(0,100),random(0,80))
    }
  }
}