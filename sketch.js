
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground,invisibleGround;
var survivalTime;


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  
  //Creating the canvas
    createCanvas(600,400);

  //Monkey(player)
    monkey = createSprite(80,315,20,20);  
    monkey.addAnimation("moving", monkey_running);
    monkey.scale = 0.1;
  
  //Ground
    ground = createSprite(400,350,2000,10);
    ground.velocityX = -4;
    ground.x = ground.width/2;
    console.log(ground.x);
  
  //invisibleGround
    invisibleGround = createSprite(400,360,2000,10);
    invisibleGround.visible = false;
  
  //Score/survivalTime
    score = 0;
    survivalTime = 0;
}


function draw() {

  //Background
    background(200);
  
  //Indifinite ground
    if(ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  //stop the monkey from falling
    monkey.collide(invisibleGround);
  
  //Survival time or score
    stroke("white");
    textSize(20);
    fill("white");
    text("Score:"+score,500,50);
  
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameRate()/90);
    text("Survival Time:"+survivalTime,100,50);
  

 drawSprites(); 
  food();
  obstacles();
}


function food(){
  
  //Food for the monkey
    if(frameCount % 80 === 0){
        var banana = createSprite(600,120,10,60);
      
        var rand = Math.round(random(120,200));
      
        banana.addImage(bananaImage); 
      
        banana.velocityX = -6;
      
        banana.lifetime = 100;
        banana.scale = 0.15;
    }
      //FoodGroup.add(banana);
}


function obstacles(){

  //Creating the obstacles
    if(frameCount % 300 === 0){
       var obstacle = createSprite(600,315,10,60);
       obstacle.addImage(obstacleImage);
       obstacle.velocityX = -5;
       obstacle.lifetime = 120;
       obstacle.scale = 0.2;
    
    }
  //obstacleGroup.add(obsatacle);
}
