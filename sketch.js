hr=hour();
mn=minute();
sc=second();

function setup() {
  createCanvas(400,400);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,300);
  hrAngle = map(hr,0,60,0,250);
}

function draw() {
  background(220);  
  
  

  push();
  rotate(scAngle);
  stroke(255,0,0);
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


  drawSprites();
}