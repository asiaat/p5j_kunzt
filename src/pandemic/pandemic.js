//edit these numbers!
let pTransmission = 0.2; //on each collision
let pRecovery = 0.002; //on each screen draw
let pDeath = 0.0001; //on each screen draw
let numberOfBalls = 100; //increase this to make things more crowded
let diam = 20; //this also increases the chance of transmission
let pStayAtHome = 0.5; //increase this to flatten the curve!


let history = [];
let max = 0;
let graph = true;

let status = {
  "unexposed": "#000000",
  "infected": "#ff0000",
  "immune": "#00B000",
  "deceased": "#000090"
};
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(32);
  noStroke();
  for (var i = 0; i < numberOfBalls; i++) {
    balls[i] = new Ball(
      i, //ID number
      random(width), //start x coord
      random(height), //start y coord
      random(-10, 10), //start x velocity
      random(-10, 10), //start y velocity
      (i > pStayAtHome * numberOfBalls), //moving?
      balls //all the other balls
    );
  }
  frameRate(30);
  mouseClicked();
}

function draw() {
  background(192);
  for (i = 0; i < numberOfBalls; i++) {
    if (balls[i].stat != "deceased") {
      if (balls[i].moving) {
        balls[i].move();
      }
      balls[i].collide();
    }
    if (balls[i].stat == "infected") {
      if (random() < pRecovery) {
        balls[i].stat = "immune";
      } else if (random() < pDeath) {
        balls[i].stat = "deceased";
      }
    }
    balls[i].display();
  }
  history.push(count());
  if (graph) {
    plotGraph();
  }
  if (count()==0) {
    noLoop();
  }
}

function mouseClicked() {
  var thisOne = floor(random(numberOfBalls));
  balls[thisOne].stat = "infected";
}

function count() {
  var total = 0;
  for (var i = 0; i < numberOfBalls; i++) {
    if (balls[i].stat == "infected") {
      total++;
    }
  }
  if (total>max){
    console.log("maximum",total);
    max = total;
  }
  return total;
}

function plotGraph() {
    noFill();
    stroke(color(status["infected"]));
    beginShape();
    for (var i = 0; i < width; i++) {
      vertex(i, height - height * history[history.length - width + i] / numberOfBalls);
    }
    endShape();
    noStroke();
}

class Ball {
  constructor(
    id_ = 0,
    x_ = width / 2,
    y_ = height / 2,
    vx_ = random(-10, 10),
    vy_ = random(-10, 10),
    moving_ = true,
    others_= []) {
    this.id = id_;
    this.x = x_;
    this.y = y_;
    this.vx = vx_;
    this.vy = vy_;
    this.moving = moving_;
    this.others = others_;
    this.stat = "unexposed";
  }
  move() {
    if (this.x < 0 || this.x > width) {
      this.vx = -1 * this.vx;
    }
    if (this.y < 0 || this.y > height) {
      this.vy = -1 * this.vy;
    }
    this.x += this.vx;
    this.y += this.vy;
  }

  collide() {
    for (var i = this.id + 1; i < numberOfBalls; i++) {
      var dx = this.others[i].x - this.x;
      var dy = this.others[i].y - this.y;
      var dist = sqrt(dx * dx + dy * dy);
      if (dist < 0.71 * diam) {
        if (random() < pTransmission) {
          if (this.stat == "infected" && this.others[i].stat == "unexposed") {
            this.others[i].stat = "infected";
          }
          if (this.stat == "unexposed" && this.others[i].stat == "infected") {
            this.stat = "infected";
          }
        }
      }
    }
  }

  display() {
    fill(color(status[this.stat]));
    ellipse(this.x, this.y, diam / 2, diam / 2);
  }
}