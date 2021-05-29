let w = 600;
let h = 600;
total_degrees = 360;
revert_count = 0;
var timerValue = 100;

function setup () {
    createCanvas(w,h);
    background(100);
    noFill();
    stroke(255);
    frameRate(10)
    setInterval(timeIt, 600);
    textAlign(CENTER);
}

function draw(){
    //background(random(100),random(200),200,60)
    background(100,100,80,60)
    radius   = h / 3;
    center_x = h / 2;
    center_y = h / 2.4;   
    
    modal = timerValue%20; 
    let step = frameCount % 160;
    
    drawRandomEdge(radius,center_x,center_y,step);
     
   
    text(timerValue, width / 2, height / 2);
    text('step : '+step, width / 3, height / 2);


}

function drawRandomEdge(radius, cx,cy, move){
    
    beginShape(CENTER);
    
    for(let i = 0; i < total_degrees; i = i + 2 ){
        //changeRadius **= i;
        //fill(random(230),random(250),200,60);
        fill(200,200,20,10);
        x = cx + radius * cos(radians(i)) + random(move);
        y = cy + radius * sin(radians(i)) + random(move);
        curveVertex(x,y,20);                     
    }   
    endShape(CLOSE);
}

function drawRandomShape(radius, cx,cy, move){
    beginShape();
    for(let i = 0; i < total_degrees; i = i + 2 ){
        fill(random(230),random(250),200,60);
        x = cx + radius * cos(radians(i)) + random(move);
        y = cy + radius * sin(radians(i)) + random(move);
        curveVertex(random(x),random(y),30);                     
    }   
    endShape(CLOSE);
}

function drawVertOcillatedRing(radius, cx,cy){
    beginShape();
    for(let i = 0; i < total_degrees; i = i + 2 ){
        fill(random(230),random(250),200,60);
        x = cx + radius * cos(radians(i)) + random(7);
        y = cy + radius * sin(radians(i)) + random(101);
        curveVertex(x, y,30);                    
    }   
    endShape(CLOSE);
}

function drawHorizOcillatedRing(radius, cx,cy){
    beginShape();
    for(let i = 0; i < total_degrees; i = i + 2 ){
        fill(random(230),random(250),200,60);
        x = cx + radius * cos(radians(i)) + random(7);
        y = cy + radius * sin(radians(i)) + random(101);
        curveVertex(y, x,30);                      
    }   
    endShape(CLOSE);
}

function timeIt() {
    if (timerValue > 0) {
      timerValue--;
    }
  }