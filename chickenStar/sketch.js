var x = 0;
let chic;
let cnv;
var bg;
let song;
let y;
let easing = 0.01;
let imgarray;
var switchInterval = 1935/2;
var timeOfLastSwitch = 0;

function preload(){
   song = loadSound('shootingstar.mp3');
}

function setup() { 
  song.loop();
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  chic = loadImage('chicken.gif');
  bg = loadImage('Starsinthesky.jpg');
  
  y = height/2 - 50;//initial value
  mouseY = height/2 - 50;
  imgarray = ['Starsinthesky.jpg', 
                  'barn.png',
                  'backrooms.jpg', 
                  'cellarena.jpg',
                  'china.jpg',
                  'chowder.jpg',
                  'clubpenguin.png',
                  'deathstar.jpg',
                  'flatearth.jpg',
                  'halo.jpg',
                  'joker.jpg',
                  'maple.jpg',
                  'marvinsroom.jpg',
                  'minecraft.png',
                  'morioh.jpg',
                  'soma.png',
                  'towerhall.jpg',
                  'underwater.jpg',
                  'windows_xp_bliss-wide.jpg',
                  'wow.jpg']

    timeStarted = millis();
}

function draw() {
  background(bg);
  
  /*
    moves through x coordinate
  */
  x += width * .00645;
  
  if(x > width + 50){
     x = 0; 
  }
  
  targetY = mouseY;
  dy = targetY - y;
  y += dy * easing;
  
  image(chic, x - 50, y - 50, 100, 100);
  
  if (millis() - timeOfLastSwitch > switchInterval) {
    // amount of time that's passed since we last changed backgrounds
    // is now greater than the switch interval.
    
    // change the background
    var j = 0;
    var k = getRandomInt(imgarray.length);
    var j = k;
    bg = loadImage(imgarray[k]);
    
    // remember timestamp, to use to determine the next interval
    timeOfLastSwitch = millis();
  }
  

  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
