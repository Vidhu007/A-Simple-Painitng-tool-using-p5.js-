/*  

Project 1 simple day 1 p5.js

function setup() {                 // this function onlu runs once
createCanvas(800,800);
}

function draw() {                 //this function runs forever regularly that's why the output remains in browser until we close the window
    


    background(225,0,225);   // color of the background
    ellipse(200,200,50,50);

}

*/

// another project

/*
function setup() {

    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
background(0);
let hr= hour();
let ms= minute();
let sc= second();
strokeWeight(8);  //width of stroke
stroke('red');    
noFill();
ellipse(200,200,300,300);
strokeWeight(4);
stroke(325,100,150);

arc(200,200,300,300,0,360);   //arc(x,y,width,height,staring angle,ending angle)

}

*/

function setup() {
  createCanvas(1000, 1000);
  background(225,225,0);
}

function draw() {
  
  fill('blue');
  ellipse(mouseX,mouseY,100,100);
}

function  mousePressed() {    // this function runs when user presses the mouse

background(225,225,0);      // to reset the drawing

}