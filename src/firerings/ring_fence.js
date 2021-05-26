let w = 600;
let h = 600;
total_degrees = 360;

function setup () {
    createCanvas(w,h);
    background(100);
    noFill();
    stroke(255);
    frameRate(10)
}

function draw(){
    background(random(100),random(200),200,60)
    radius   = h / 3;
    center_x = h / 2;
    center_y = h / 2.4;    

    beginShape();
    for(let i = 0; i < total_degrees; i = i + 2 ){
        fill(random(230),random(250),200,60);
        x = center_x + radius * cos(radians(i)) + random(7);
        y = center_y + radius * sin(radians(i)) + random(101);
        curveVertex(x, y,30);
    }
    endShape(CLOSE);

}