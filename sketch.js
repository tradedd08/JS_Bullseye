// writer: Yamil driver: Pravesh

function setup() {
  // Setting boundaries to our canvas.
  createCanvas(640,400);
  // Setting the background color to white.
  background(255,255,255);
  
  drawTwo();
}

function drawTwo() {
  // First setting the stroke of all ellipses to black.
  stroke(color('black'));
  // Then changing the weight to 4.
  strokeWeight(4);
  
  // First red circle (largest).
  fill(255,0,0);
  ellipse(320,200,200,200);
  
  // First white circle after it.
  fill(255,255,255);
  ellipse(320,200,150,150);
  
  // Second red circle.
  fill(255,0,0);
  ellipse(320,200,100,100);

  // Last white circle (smallest).
  fill(255,255,255);
  ellipse(320,200,50,50);
  
  // Sets the text's size for Bullseye!
  textSize(35);
  // Bulleye's position.
  text("Bullseye!", 250, 50);
  
  // Sets the text's size for the following.
  textSize(20);
  // The text's points amount and their position.
  text("0", 315,95);
  text("10", 310,120);
  text("20", 310,145);
  text("30", 310,170);
  text("50", 310,205);
}

function mousePressed(){
  clear();
}