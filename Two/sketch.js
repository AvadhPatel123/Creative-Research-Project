//Declare buttons
let button;
let button2;

//Creating both buttons
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('White');
  button = createButton('Litter');
  button.position(windowWidth/4, windowHeight/4);
  button.mousePressed(changeBG);
  button.size(100, 50);
  
  button2 = createButton('Recycle');
  button2.position(windowWidth/4 * 3 - 100, windowHeight/4);
  button2.mousePressed(changeBG2);
  button2.size(100, 50);

  //Work Cited: Society, National. "A Whopping 91 Percent Of Plastic Isn’T Recycled". National Geographic Society, 2019, https://www.nationalgeographic.org/article/whopping-91-percent-plastic-isnt-recycled/. Accessed 1 Apr 2022.
  loadImage('Litter.jpeg', img => {
    image(img, windowWidth/4 - 100, windowHeight/4 * 3 - 170, 300, 300);
  });
  
  //Work Cited: " Recycling | Town Of Gypsum, CO ". Townofgypsum.Com, 2022, https://www.townofgypsum.com/community/utilities-public-works/recycling. Accessed 1 Apr 2022.
  loadImage('recycle.png', img => {
    image(img, windowWidth/4 * 3 - 120, windowHeight/4 *3 - 170, 300, 300 );
  });
}

//Assigning each button a task when pressed
function changeBG() {
  let wrong = color(255, 0, 0);
  background(wrong);
}

function changeBG2() {
  let right = color(0, 255, 0);
  background(right);
}

