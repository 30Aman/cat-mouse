var cat;
var mouse;
function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png")
catImg1=loadImage("images/cat1.png")
catImg2=loadImage("images/cat2.png","images/cat3.png")
catImg4=loadImage("images/cat4.png")

mouseImg1=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")

mouseImg4=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
   cat=createSprite(850,600)
   cat.scale=0.2
   cat.addImage("sleeping",catImg1)
   mouse=createSprite(300,600)
   mouse.scale=0.15
   mouse.addAnimation("gift",mouseImg1)
}

function draw() {

    background(gardenImg);
   if(cat.x-mouse.x<=cat.width/2-mouse.width/2){
       cat.velocityX=0
       cat.addImage("sitingcat",catImg4)
       cat.changeImage("sitingcat")
       cat.x=450
       mouse.addAnimation("lastImage",mouseImg4)
       mouse.changeAnimation("lastImage")
   }

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
mouse.addAnimation("teasingmouse",mouseImg2)
mouse.changeAnimation("teasingmouse")
}
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addImage("runningcat",catImg2)
      cat.changeImage("runningcat")
  }

}
