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
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,255,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  stroke("red");
  strokeWeight(10);
  noFill();
  arc(0,0,300,300,0,scAngle);

  stroke("blue");
  strokeWeight(10);
  noFill();
  arc(0,0,280,280,0,mnAngle);

  stroke("white");
  strokeWeight(10);
  noFill();
  arc(0,0,260,260,0,hrAngle);

  drawSprites();
}