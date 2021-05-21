hr,mn,sc;

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);
}

function draw() {
  background(0);  
  
  translate(200,200);
  rotate(-90)
  hr=hour();
  mn=minute();
  sc=second();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,300);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  strokeWeight(10);
  noFill();


  drawSprites();
}