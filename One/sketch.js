function setup() {
  createCanvas(windowWidth, windowHeight);

  loadImage('global-warming.png', img => {
    image(img, 0, 0, windowWidth, windowHeight);
  });
}


