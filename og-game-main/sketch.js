var gameState = "start"
var img1,img2,img3,img4,img5,img6,img7,img8;
var score=0;
var visual;

function preload() {

  img1 = loadImage("images/baby.jpeg");
  img2 = loadImage("images/chess.jpeg");
  img3 = loadImage("images/couple.jpeg");
  img4 = loadImage("images/heart.jpeg");
  img5 = loadImage("images/laughing_man.jpeg");
  img6 = loadImage("images/sheds.jpeg");
  img7 = loadImage("images/tomatoes_chilles.jpeg");
  
}

function setup() {
  createCanvas(1000,1000);

 


  
}

function draw() {

  background(0);

  if(gameState == "start"){
    textSize(50);
    fill("white")
    text("Choose the game",100,150);
    text("1.Visual Observation Test",100,230)
    text("2.quiz",100,310);

    if(keyDown("1")){
    
      gameState = "play";
      spawnImages();

    }
   

  

  if(keyDown("2")){

 gameState = "play";
   

  }
  
}
  

  drawSprites()
}

function spawnImages(){

  var visual = createSprite(500,500,100,100);
  

 

    for(var i = 1; i<=7; i++){

      
      
      switch(i){

        case 1: visual.addImage(img1);
        break;

        case 2: visual.addImage(img2);
        break;

        case 3: visual.addImage(img3);
        break;

        case 4: visual.addImage(img4);
        break;

        case 5: visual.addImage(img5);
        break;

        case 6: visual.addImage(img6);
        break;

        case 7: visual.addImage(img7);
        break;


      }

    }


    }
    




  




