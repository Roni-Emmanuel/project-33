var backgroundImage;
var snow4,snow5;
var snow1,snow2;
var kid1,kid2;
var snowSnd;

function preload(){
  // creating snows
snow4 = loadImage("snow4.webp");
snow5 = loadImage("snow5.webp");
// creating background
backgroundImage = loadImage("snow2.jpg");
// creating kid
kid1Image = loadImage("download.jpeg");
kid2Image = loadImage("download.jpeg");
// creating sound for the this project
snowSnd = loadSound("sounds/snowsnd.mp3")

}



function setup() {
  createCanvas(800,400);
  
 snow1 = createSprite(400, 200, 50, 50);
 snow1.addAnimation("falling",snow4);
 snow1.scale = 0.20;

 snow2 = createSprite(200,200,30,30);
 snow2.addAnimation("falling",snow4);
 snow2.scale = 0.20;

 kid1 = createSprite(250,350,20,20);
 kid1.addAnimation("walking",kid1Image);
 kid1.scale = 0.40;

 kid2 = createSprite(500,350,10,10);
 kid2.addAnimation("walking",kid2Image);
 kid2.scale = 0.40;

 ground = createSprite(800,400,800,20);
 ground.x = ground.width/2;




}

function draw() {
  background(backgroundImage); 

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  // creating a code for the kid to jump if space is pressed                
  if (keyDown("SPACE")){
   kid2.velocityX = 1;    
  }
  
  if (kid2.x === 320){
		kid2.velocityX = 0;
	}

  // creating a code for the kid should come back to the ground
  kid2.velocityY = kid2.velocityY + 0.1
// a code for the kid that when he is touching  the ground 
  if (kid2.isTouching(ground)){
    kid2.velocityY = -1;
    kid2.velocityX = -1;
    snowSnd.play();
  }
  drawSprites();
}