

let bubble1;
let bubble2;

function setup() {
  import Bubble from './src/bubble';  
  createCanvas(600, 400);
  bubble1 = new Bubble(300, 200, 40);
  //bubble2 = new Bubble(400, 200, 20);
  
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  //bubble2.move()
  //bubble2.show();
  
}

