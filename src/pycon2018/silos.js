let x_coord = 0;
let y_coord = 0;
let rect_w  = 40;
let w = 600;
let h = 600;
let r = 255;
let g = 255;
let b = 255;

function setup () {
    createCanvas(w,h);
    background(100);
}

function draw(){
    fill(r,g,b);
    for(let i = 0; i < (h/rect_w); i++ ){
        
        rect(i*rect_w*2,y_coord,rect_w,rect_w)
    }
    y_coord += random(7,11);

    if(y_coord > h){
        y_coord = 0;
        r = random(255);
        g = random(255);
        b = random(255);
    }
}