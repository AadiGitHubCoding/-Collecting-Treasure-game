var PLAY=1;
var END=0;
var gameState=1;
var sword
var swordImage
var fruit
var fruitGroup
var enemy
var monster
var score=0

function preload(){
  swordImage=loadImage("sword.png");
 
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  
  monsterImage=loadAnimation("alien1.png","alien2.png")
  
  gameOverImage=loadImage("gameover.png")
  
}
function setup(){
  createCanvas(400,600)
  
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7
  
  // sword.debug=true
  sword.setCollider("rectangle",0,0,40,80)
  
  enemyg= createGroup();
  fruitg=createGroup();
  
  score=0
  
  gameState=PLAY
  
  
  
  
}
function draw(){
background("white");
 
  if(gameState === PLAY)
  {
     fruits();
  enemy();   
    
    sword.y=World.mouseY;
  sword.x=World.mouseX; 
    if(sword.isTouching(fruitg)){
    fruitg.destroyEach();
    
    score=score+1;
  }
 
    
  
 
  else{
    if(enemyg.isTouching(sword)){
      
      gameState=END
      
      fruitg.destroyEach();
      enemyg.destroyEach();
     fruitg.setVelocityXEach(0) 
      enemyg.setVelocityXEach(0)
      sword.addImage(gameOverImage)
      sword.x=200
      sword.y=200
    }
  }
  
  
  }
   
  if(gameState === END)
  {
   
   
  
  
  
   
  
  
   
  }
  drawSprites();
text("Score : " + score,270,30);

}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1);
    }else if (r == 2) {
      fruit.addImage(fruit2);
    }else if (r==3){
      fruit.addImage(fruit3);
    }else {
      fruit.addImage(fruit4)
    }
    
   fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitg.add(fruit);
    }
  }

function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.setLifetime=50;
     monster.velocityX=-8;
    enemyg.add(monster)
    
  }
  
}



