
function preload(){
seaImage=loadImage("sea.png")
shipImage1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")


}

function setup(){
  
  createCanvas(400,400);
   sea=createSprite(400,200)
   sea.addImage(seaImage)
   sea.velocityX=-3
   ship=createSprite(150,150)
   ship.addAnimation("ship",shipImage1)
   ship.scale=0.3
}

function draw() {
  background("blue");
  sea.velocityX=-3
  if (sea.x<0){
    sea.x=sea.x/8
  }
 drawSprites()
}