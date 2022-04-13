//Load image onto webpage
function setup() {
  createCanvas(windowWidth, windowHeight);


  //Work Cited: "You Say 'Global Warming', I Say 'Climate Change' | Macmillan Dictionary Blog". Macmillan Dictionary Blog, 2017, https://www.macmillandictionaryblog.com/you-say-global-warming-i-say-climate-change. Accessed 1 Apr 2022.
  loadImage('global-warming.png', img => {
    image(img, 0, 0, windowWidth, windowHeight);
  });
}


