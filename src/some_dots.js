function setup() {
  createCanvas(600, 600);
  frameRate(3);
}

function draw() {
  background(random(220,216));
  fill(0)
  //noStroke()
  
  s = 20
  for(let i = 0; i < 50; i++){
    for(let j = 0; j < 50; j++){
      x = i * s + 1.4 + (j%random(3,6))
      y = j * s + 2 + (j%random(0,0.1))
      ellipseMode(CENTER)
      strokeWeight(2.5)
      ellipse(x,y,s,s)
      //stroke(250,random(0,100),random(0,80))
      fill(150,random(0,120),random(0,80),50)
    }
  }
}