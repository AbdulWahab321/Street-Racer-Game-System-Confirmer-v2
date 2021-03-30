var DETECTER=1;
var FIRSTBG=2;
function preload(){
first=loadImage("carBg.png");
bgmp=loadSound("bgmp.mp3");
}
function setup(){
 
  createCanvas(900, 500);

  gameState=FIRSTBG


  say()
}
function draw(){
  if(frameCount-84===0){
    bgmp.play()
    }

  


if(gameState===DETECTER){
  background(first)

  fill("red")
  textSize(40)
  text("Which is your System PC or Mobile",120,50);
text("____________________________________________________________",40,55)
  mobile=createSprite(150,150,200,50)
  com=createSprite(500,150,200,50)
  mobile.visible=false;
  com.visible=false;
 text("(MOBILE)",mobile.x-80,mobile.y+10)
 text("(PC)",com.x-10,com.y+10)
  if(mouseIsOver(mobile)){


    open("https://abdulwahab321.github.io/Street-Racer-Game-Mobile-Edition-v6/")
  }
  if(mouseIsOver(com)){

    open("https://abdulwahab321.github.io/Street-Racer-Game-v6/")
  
  }}



  if(gameState===FIRSTBG){
    background(first);
 


    
    textSize(40)
    fill("white")
    text('Welcome To Street Racer Game System Cofirmer',10,50)
    textSize(30)
    text('Loading.........Please Wait',150,400)

  
  
  }
  else{
    if(gameState!==DETECTER){
    background(bg)
    }
  }




 

 


if(frameCount-300===0){
  gameState=DETECTER;
}



 
  
}
function say(){
  sp=new SpeechSynthesisUtterance();
  sp.text="Hai Welcome To street Racer Game System Cofirmer"
  window.speechSynthesis.speak(sp)
}
