//Declaring buttons
let button;
let button2;

//Creating two buttons
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('White');
  button = createButton('Gas Fueled Car');
  button.position(windowWidth/4, windowHeight/4);
  button.mousePressed(changeBG);
  button.size(100, 50);
  
  button2 = createButton('Public Transport');
  button2.position(windowWidth/4 * 3 - 100, windowHeight/4);
  button2.mousePressed(changeBG2);
  button2.size(100, 50);
  
  //Work Cited: Reddit.Com, 2022, https://www.reddit.com/r/Damnthatsinteresting/comments/daugu5/public_transport_vs_private_transport/. Accessed 1 Apr 2022.
  loadImage('transport.jpeg', img => {
    image(img, windowWidth/2 - 140, windowHeight/4 * 3 - 200, 300, 300);
  });
}

//Giving output to buttons when pressed
function changeBG() {
  let wrong = color(255, 0, 0);
  background(wrong);
}

function changeBG2() {
  let right = color(0, 255, 0);
  background(right);
}
