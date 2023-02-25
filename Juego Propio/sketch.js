  var Zombi, ZombiImg;
  var Fondo, FondoImg;
  var Alex, AlexImg;
 
  //var heart1, heart1Img, heart2, heart2Img, heart3, heart3Img;
  //var life=3;

  //var zombiGroup;

function preload(){
    ZombiImg = loadImage("Zombi.png")
    FondoImg = loadImage("Fondo.jpg")
    AlexImg = loadImage("Alex.png")
   // heart1Img = loadImage("assets/heart_1.png")
   // heart2Img = loadImage("assets/heart_2.png")
   // heart3Img = loadImage("assets/heart_3.png")

}

function setup() {
  createCanvas(1600,712)

  Alex = createSprite(500,210,20,50)
  Alex.addImage("Alex",AlexImg)
  Alex.scale = 0.2
  

// Creando sprites para representar la vida restante
 //heart1 = createSprite(displayWidth-150,40,20,20)
 //heart1.visible = false
 //heart1.addImage("heart1",heart1Img)
 //heart1.scale = 0.4

 //heart2 = createSprite(displayWidth-100,40,20,20)
 //heart2.visible = false
 //heart2.addImage("heart2",heart2Img)
 //heart2.scale = 0.4

 //heart3 = createSprite(displayWidth-150,40,20,20)
 //heart3.addImage("heart3",heart3Img)
 //heart3.scale = 0.4
  
 //zombiGroup = new Group(); 
}


function draw() {
  background(FondoImg)

  //if(life===3){
  //  heart3.visible=true
  //  heart2.visible=false
  //  heart1.visible=false
  //}

  //if(life===2){
  //  heart3.visible=false
  //  heart2.visible=true
  //  heart1.visible=false
  //}

  //if(life===1){
  //  heart3.visible=false
  //  heart2.visible=false
  //  heart1.visible=true
  //}
  
  //if(life===0){
  //  heart3.visible=false
  //  heart2.visible=false
  //  heart1.visible=false
  //  player.destroy();
  //}

  //Condiciones para que se mueva Alex
  if(keyDown("Up")) {
   Alex.velocityY -=0.2;

  }
  if(keyDown("Down")) {
    Alex.velocityY +=0.2;
 
   }
   if(keyDown("Left")) {
    Alex.velocityX -=0.2;
 
   }
   if(keyDown("Right")) {
    Alex.velocityX +=0.2;
 
   }

   //if(zombiGroup.isTouching(Alex)){
  

    //for(var i=0;i<zombiGroup.length;i++){     
         
   
     //if(zombieGroup[i].isTouching(Alex)){
       //   zombiGroup[i].destroy()
          //life=life-1;
        //  } 
    //}
  

   

  zombi();


  drawSprites();

  
}

function zombi(){


  if (frameCount % 70 === 0) {
    Zombi = createSprite(random(500,1100),random(100,500),40,40)
    Zombi.addImage("Zombi",ZombiImg)
    Zombi.scale = 0.2
    Zombi = Math.round(random(120,400));
    Zombi.velocityX = -1
    Zombi.velocityY = -1
    Zombi.position.x = Alex.position.x;
    Zombi.position.y = Alex.position.y;
    
  }


}

    