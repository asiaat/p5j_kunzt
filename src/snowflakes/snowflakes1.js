
let snowflakes = []; // array to hold snowflake objects
let heap = 0;

function setup() {
  createCanvas(500, 500);
  fill(random(220,253));
  noStroke();
}

function draw() {
  background(14,random(20),40);
  let t = frameCount / 150; // update time
  

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(9); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    this.layOnGround();
    
  };

  // let snowflake ilay on the ground    
  this.layOnGround = function(){
    
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);

      heap += random(0.001,0.006);
      //heap += height + random(0.004);
      
      this.posY = height - random(heap);
      //this.posY = heap;
      this.posX = this.posX + (random(-100,100));
      //ellipse(this.posX, heap, this.size*1.2);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
