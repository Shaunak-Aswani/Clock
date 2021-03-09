

var h, m, s

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 
  translate(200,200);
  rotate(-90); 
  h = hour();
  m = minute();
  s = second();

  sAngles = map(s,0,60,0,360);
  mAngles = map(m,0,60,0,360);
  hAngles = map(h%12,0,12,0,360);

  push();
  rotate(sAngles);
  stroke(255,0,0);
  strokeWeight(3);
  line(0,0,100,0);
  pop();

  push();
  rotate(mAngles);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hAngles);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,sAngles);
  stroke(0,255,0);
  arc(0,0,280,280,0,mAngles);
  stroke(0,0,255);
  arc(0,0,260,260,0,hAngles);
  drawSprites();

  


}