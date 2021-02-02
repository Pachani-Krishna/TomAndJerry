var garden,gardenimg
var tom,tomimg,tomimg1,tomimg2
var ret,retimg,retimg1,retimg2


function preload() {
  gardenimg = loadImage ("images/garden.png")  
  tomimg = loadImage ("images/cat1.png");
  tomimg1 = loadImage("images/cat2.png","images/cat3.png")
  tomimg2 = loadImage("images/cat4.png")
  retimg = loadImage ("images/mouse1.png");
  retimg1 = loadImage("images/mouse2.png","images/mouse3.png");
  retimg2 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400);
    garden.addImage("gar",gardenimg);

    tom = createSprite(800,550,800,400);
    tom.addImage("tom",tomimg);
    tom.scale = 0.1
    tom.dbuge = true

    ret = createSprite(100,550,800,400);
    ret.addImage("ret",retimg);
    ret.scale = 0.1

}

function draw() {
 background(0);
 tom.velocityX = 0;
 tom.velocityY = 0;

 if (tom.x - ret.x < (tom.width - ret.width)/2){
    tom.addAnimation("tom",tomimg2)
    ret.addAnimation("ret",retimg2)
}

 keyPressed();
    drawSprites();
}


function keyPressed(){

   if (keyDown(LEFT_ARROW)){
       tom.velocityX = -5;
       tom.addAnimation("tom",tomimg1)
       ret.addAnimation("ret",retimg1)
   }
else{
    tom.addImage("tom",tomimg);
    ret.addImage("ret",retimg);
}

if (tom.x - ret.x < (tom.width - ret.width)/2){
    tom.addAnimation("tom",tomimg2)
    ret.addAnimation("ret",retimg2)
}

}
