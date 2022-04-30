const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground, ball, sheet,treasure, treasure2, treasure3;
var backgroundImg, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5;
var PC1, PC2,PC1img;
var PCA1,PCB1, PCAImg, PCA2, PCB2;
var PCA1A, PCA1B, PCA1C, PCA1D, PCA1E, PCA1F, PCA1G, PCA1H, PCA1I;
var log1, log2, log3, log4;
var gold;
var ninHouse;
var Img;
var beeper;
var STEP1 = 1;
var STEP2 = 2;
var STEP3 = 3;
var STEP4 = 4;
var STEP5 = 5
var STEP6 = 6;
var STEP7 = 7;
var STEP8 = 8;
var STEP9 = 9;
var STEP10 = 10;
var PLAY1 = 11;
var PLAY2 = 12;
var PLAY3 = 13
var DEATH1 = 0;
var DEATH2 = 0;
var gameState = STEP1;

function preload(){
  
  backgroundImg = loadImage("Mansion.png");
  PCAImg = loadAnimation("Walking1.png", "Walking2.png", "Walking3.png");
  backgroundImg2 = loadImage("InsideHouse.png");
  backgroundImg3 = loadImage("drsw.png")
  backgroundImg4 = loadImage("Detective.png");
  backgroundImg5 = loadImage("Lvl1.gif");
  //PC1img = loadImage("RichMan.png");

}

function setup() {
  createCanvas(1215,400);
  engine=Engine.create();
  
  world=engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(120,380,1000,50,option);
   World.add(world,ground);
 
   
  
  //PC1 = createSprite(150,255,150,200);
  //PC1.addImage(PC1img);
  PC1=new FirstAppearance(150,255,100,200)
 
 PCA1 = new SecondAppearance(150,255,100,200);
 
 /*PCA1A = new SecondAppearanceA(200,255,100,200);
 PCA1B = new SecondAppearanceB(250,255,100,200);
 PCA1C = new SecondAppearanceB(300,255,100,200);
 PCA1D = new SecondAppearanceA(350,255,100,200);
 PCA1E = new SecondAppearanceB(400,255,100,200);
 PCA1F = new SecondAppearance(450,255,100,200);
 PCA1G = new SecondAppearanceA(500,255,100,200);
 PCA1H = new SecondAppearanceB(550,255,100,200);
 PCA1I = new SecondAppearance(600,255,100,200);*/
 
 sheet = new Note();
 treasure = new Treasure(800,255);
 treasure2 = new Treasure(850,255);
 treasure3 = new Treasure(900,255);

 
 //PCB1 = new ThirdAppearance();
ninHouse = new Ninja4(650,255,150,200);
  PC2 = new Detective();
  PCA2 = new DetectiveA();
  //PCB2 = new Detective2();
  //gold = new Gold();

  
   
   
   

 
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  console.log(ground)
 drawSprites();
 
  if(gameState === STEP1){
   richman();
 
  }
  


  if(gameState === STEP2){
   
       richman1();
     
      
  }
  if(gameState === STEP3){
    richman2();
  }

  if(gameState === STEP4){
    richman3();
  }

  if(gameState === STEP5){
    richman4();
  }
  if(gameState === STEP6){
    richman5();
  }

  if(gameState === STEP7){
    richman6();
  }
  if(gameState === PLAY1){
    start1();
  }
  if(gameState === STEP8){
    richman7();
  }
  if(gameState === PLAY2){
    start2();
  }

    if(gameState === DEATH1){
      richman6();
    }
   
      }
      function richman(){
        PC1.display();
        fill("black")
        textSize(20)
        text("What's this? a note.`leave the door open when you go to sleep, I have to pick up my clothes from your house`-Mom", 190, 100);
        textSize(10);
        text("Press space to continue");
        
      
        sheet.display();
      }
      function richman1(){
       background(backgroundImg2)
       PCA1.display();
      treasure.display();
      treasure2.display();
      treasure3.display();
       
       fill("black")
       text("Now to unlock the door like mom said",200, 300);
       PCA1.velocityX = 3;
        if(PCA1.x >= 600){
          gameState = STEP3;
        }
        if(frameCount % 200 === 0){
          gameState = STEP3;
        }
      
        }

        function richman2(){
          background(backgroundImg3);
          fill("black");
          textSize(20);
          text("Midnight");
          if(frameCount % 100 === 0){
            gameState = STEP4;
          }
        }

        function richman3(){
          background(backgroundImg);
          ninHouse.display();
          fill("black");
          textSize(20)
          text("the fool actually fell for it, breaking in will be easy now", 400, 100);
          textSize(10);
          text("Press space to continue", 400, 300);

        }

        function richman4(){
          background(backgroundImg2);
          PC1.display();
          textSize(20);
          text("*yawn* what a good nice day outside, I think I'll take a walk... WHERE'S IS MY TREASURE",600, 300);
          textSize(10);
          text("Press space to continue", 600, 400);
        }
        
        function richman5(){
          background(backgroundImg4);
          PC2.display();
          PC1.display();
          fill("black");
          textSize(12);
          text("I need you to help me get my treasure back, the only evidence to the thief is this note", 200, 100);
          fill("black");
          textSize(12);
          text("I'll make sure I get it back by next week", 800, 300);
          if(frameCount % 200 === 0){
            gameState = STEP7;
          }
        }

        function richman6(){
          background(backgroundImg5);
          PCA2.display();
          fill("purple");
          textSize(30);
          text("Press Y to continue", 400, 200);
          fill("purple");
          textSize(15);
          text("use A & D to move", 450, 300);
        }

        /*function start1(){
          background(backgroundImg5);
          PCB2.display();
          if(frameCount % 60 === 0){
          log1.display();
          log2.display();
          log3.display();
          log4.display();
          }
          logGroup.lifetime = 300
          if(keyCode === 97){
            PCB2.x = -3;
          }
          if(keyCode === 100){
           PCB2.x = 3;
          }
          var option1={
            isStatic:true
          }
          wall=Bodies.rectangle(100,200,50,1000,option);
           World.add(world,wall);
           if (wall.y < 0){
            wall.y = wall.height/2;
          }
          if(PCB2.distance > 3500){
            var block = createSprite(300,380,1215,20,option1);
            block.shapeColor = "brown";
            gold.display(); 
          }
          if(PCB2.x > logGroup.width / 2 &&
            logGroup.x > PCB2.width / 2 &&
            PCB2.y > logGroup.height / 2 &&
            logGroup.y > PCB2.height / 2){
              gameState = STEP7;
            } 
            if(PCB2.x > gold.width / 2 &&
              gold.x > PCB2.width / 2 &&
              PCB2.y > gold.height / 2 &&
              gold.y > PCB2.height / 2){
                gameState = STEP8;
              } 
        }

        function start2(){
        background(backgroundImg5);
        PCB2.display();
        if(frameCount % 60 === 0){
        log1.display();
        log2.display();
        log3.display();
        log4.display();
        }
        logGroup.lifetime = 300
        if(keyCode === 97){
          PCB2.x = -3;
        }
        if(keyCode === 100){
         PCB2.x = 3;
        }
        var option1={
          isStatic:true
        }
        wall=Bodies.rectangle(100,200,50,1000,option);
         World.add(world,wall);
         if (wall.y < 0){
          wall.y = wall.height/2;
        }
        if(PCB2.distance > 3500){
          var block = createSprite(300,380,1215,20,option1);
          block.shapeColor = "brown";
          gold.display(); 
        }
        if(PCB2.x > logGroup.width / 2 &&
          logGroup.x > PCB2.width / 2 &&
          PCB2.y > logGroup.height / 2 &&
          logGroup.y > PCB2.height / 2){
            gameState = STEP8;
          } 
          if(PCB2.x > gold.width / 2 &&
            gold.x > PCB2.width / 2 &&
            PCB2.y > gold.height / 2 &&
            gold.y > PCB2.height / 2){
              gameState = PLAY2;
            } 
      }

        
       
  
   
      
function keyPressed(){
 if(gameState === STEP1){
  if(keyCode === 32){
    gameState = STEP2;
      }
    }
    if(gameState === STEP4){
      if(keyCode === 32){
        gameState = STEP5;
      }
    }
    if(gameState === STEP5){
      if(keyCode === 32){
        gameState = STEP6;
      }
    }
    if(gameState === STEP7){
      if(keyCode === 121){
        gameState = PLAY1;
      }
    }
    }
   */
      
      
    
    
   
    
    
