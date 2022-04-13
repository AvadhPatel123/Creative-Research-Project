//Declaring buttons
let button;
let button2;

//Creating buttons
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('White');
  button = createButton('Cut down trees for factories');
  button.position(windowWidth/4, windowHeight/4);
  button.mousePressed(changeBG);
  button.size(100, 50);
  
  button2 = createButton('Plant more trees');
  button2.position(windowWidth/4 * 3 - 100, windowHeight/4);
  button2.mousePressed(changeBG2);
  button2.size(100, 50);
  
  //Work Cited: "NPR Cookie Consent And Choices". Npr.Org, 2022, https://www.npr.org/2021/11/19/1057245837/brazil-amazon-rainforest-worst-deforestation-rate. Accessed 1 Apr 2022.
  loadImage('deforest.jpeg', img => {
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