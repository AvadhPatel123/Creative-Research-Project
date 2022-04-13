let button;
let button2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('White');
  button = createButton('Cut down trees for factories');
  button.position(windowWidth/4, windowHeight/4);
  button.mousePressed(changeBG);
  button.size(100, 50);
  
  button2 = createButton('Plant more trees');
  button2.position(windowWidth/4 * 3, windowHeight/4);
  button2.mousePressed(changeBG2);
  button2.size(100, 50);
  
  loadImage('deforest.jepg', img => {
    image(img, windowWidth/2, windowHeight/4 * 3, 300, 300);
  });


function changeBG() {
  let wrong = color(255, 0, 0);
  background(wrong);
}

function changeBG2() {
  let right = color(0, 255, 0);
  background(right);
}