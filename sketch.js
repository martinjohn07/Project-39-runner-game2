var steve,creeper,skeleton,zombie,background,death;
var gameState 
var steveImage,creeperImage,skeletonImage,zombieImage,backgroundImage,deathImage;
var score =0 

function preload(){
 //load your images here 
 
 backgroundImage=loadImage("background.jpg"); 
  
  steveImage=loadImage("steve.png");
  
  creeperImage=loadImage("Creeper.png");
  
  zombieImage=loadImage("zombie.png");
  
  skeletonImage=loadImage("Skeleton.png");

  deathImage=loadImage("you died.png");
  
}

function setup() {
  createCanvas(1000,700);
//creating sprites and images
  gameState ="play"
  
  background=createSprite (250,250,500,500);
  background.addImage(backgroundImage)
  background.scale=1.2;
  
  steve=createSprite(50,250,10,10);
  steve.addImage(steveImage);
  steve.scale=0.2;
  
  death=createSprite(300,250,10,10);
  death.addImage(deathImage);
  death.scale=0.9
  death.visible=false
  
  
skeletonGroup=new Group(skeleton);
 zombieGroup=new Group(zombie);
  creeperGroup=new Group(creeper);
  
}

function draw() {
//add code here
if(gameState == "play"){
   background.velocityX =- 3 

   if(background.x < 0){
      background.x = background.width/5;
   }

  //increase score 
  
  camera .x=steve.x
camera .y=steve.y
  
   if (keyDown("up")) {
      steve.y=steve.y-5; 
   }
 
  if(keyDown("down"))  {
   steve.y=steve.y+5; 
    
  }
  
  var r= Math.round(random(1,3))
     if(r==1){
       creeper()
     }
    else if(r==2) {
      skeleton()
    }
    else if (r==3) {
      zombie()
    }
    
if (steve.isTouching(skeletonGroup)||steve.isTouching(creeperGroup)||steve.isTouching(zombieGroup)) {
   gameState ="end"
   score.visible=false;
 }
  
}

if(gameState == "end"){
 
   skeletonGroup.destroyEach();
   creeperGroup.destroyEach();
   zombieGroup.destroyEach();
   death.visible=true;
   skeletonGroup.setVelocityXEach(0);
   creeperGroup.setVelocityXEach(0);
   zombieGroup.setVelocityXEach(0);
   skeletonGroup.setLifetimeEach(-1);
   creeperGroup.setLifetimeEach(-1);
   zombieGroup.setLifetimeEach(-1);
 
 
  if(mousePressedOver(death)){
    reset()
   }
 }
  
  
 
  drawSprites();
  score = score + Math.round(frameCount/100);
   text("Score: "+ score, 500,50);
   
}


function reset (){
  gameState ="play"
  score = 0
 
  death.visible=false

  
}



function creeper() {
  if(World.frameCount % 50 === 0) {
    var creeper=createSprite(550,Math.round(random(50,450)),10,10);
    creeper.addImage(creeperImage);
    creeper.velocityX=-6;
    creeper.lifetime=150;
    creeper.scale=0.25;
    creeperGroup.add(creeper);
  }
}

function skeleton() {
  if(World.frameCount % 50 === 0) {
    var skeleton=createSprite(550,Math.round(random(50,450)),10,10);
    skeleton.addImage(skeletonImage);
    skeleton.velocityX=-4;
    skeleton.lifetime=150;
    skeleton.scale=0.09;
    skeletonGroup.add(skeleton);
  }
 return true 
}

function zombie() {
  if(World.frameCount % 50 === 0) {
    var zombie=createSprite(550,Math.round(random(50,450)),10,10);
    zombie.addImage(zombieImage);
    zombie.velocityX=-4;
    zombie.lifetime=150;
    zombie.scale=0.2;
    zombieGroup.add(zombie);
  }
}
