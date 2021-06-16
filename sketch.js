var tom, jerry, bgImg;
var catImg, catImg2, catImg4;
var mouseImg, mouseImg2, mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage ("images/garden.png");
    catImg = loadAnimation ("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("cat1", catImg);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("mouse1", mouseImg);
    jerry.scale = 0.15;
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("cat4", catImg4);
      tom.x = 300;
      tom.scale = 0.2;
      tom.changeAnimation("cat4");
      jerry.addAnimation("mouse4", mouseImg4);
      jerry.scale = 0.15;
      jerry.changeAniamtion("mouse4");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("cat3", catImg2);
    tom.changeAnimation("cat3");

    jerry.addImage("mouse3", mouseImg2);
    jerry.changeAnimation("mouse3");
    jerry.frameDelay = 25;
  }

}
