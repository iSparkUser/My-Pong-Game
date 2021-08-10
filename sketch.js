var bg, ball, stopper, Play, Stage, Score, Restart, Edges;
var iBg, iBall, iStopper,iPlay, iRestart;



function preload(){
  iBg = loadImage("background.png");
  iBall = loadImage("pinball.png");
  iStopper = loadImage("rod.png");
  iPlay = loadImage("playbutton.png");
  iRestart = loadImage("restartbutton.png");
}

function setup(){
bg = createSprite(200, 200,400,400);
bg.addImage(iBg)

ball = createSprite(200, 200);
ball.addImage(iBall)
ball.scale = 0.2;
//ball.debug = true;
ball.setCollider("circle",6,14,120);

stopper = createSprite(200, 380,50,50);
stopper.addImage(iStopper)
stopper.scale = 1.5;
stopper.debug = true;
stopper.setCollider("rectangle",0,0,80,10);

Play = createSprite(200, 150);
Play.addImage(iPlay)

Stage = "StartStage" ;
Score = 0;

Restart = createSprite(210, 300);
Restart.visible = false;
Restart.addImage(iRestart);
Restart.scale = 0.2;
  
Edges = createEdgeSprites();
}

function draw() {
  
  background(0);
  
  stopper.x = World.mouseX;
  
  ball.bounceOff(Edges[1]);
  ball.bounceOff(Edges[2]);
  ball.bounceOff(Edges[0]);
  

  drawSprites();
  
  if (Stage == "StartStage") {
    
   textSize(25);
   fill("yellow");
   text("Press Start Button to Play", 70, 90);
   
      if (mousePressedOver(Play)) {
      Play.visible = false;
      ball.velocityX = 9;
      ball.velocityY = -9;
      Stage = "PlayStage";
      }
      
  }
  
 

  if (Stage == "PlayStage") {
   
    
   if (ball.isTouching(stopper)) {
       ball.bounceOff(stopper)
       Score = Score+1;
       console.log(Score)
       }
       
     
     
     if (ball.y>400) {
     Stage = "EndStage";
     }
   }
    console.log(Stage);
   
  if (Stage == "EndStage") {
    
       ball.x = 200;
       ball.y = 200;
      
       textSize(25);
       fill("yellow");
       text("Press Restart to Play", 80, 180);
       Restart.visible = true;
      if (mousePressedOver(Restart)) {
         Restart.visible = false;
         Stage = "PlayStage";
      }
      
  }
      
  
  
  textSize(25);
  fill("yellow");
  text("Scores: "+Score, 160, 25);
  
  
}
