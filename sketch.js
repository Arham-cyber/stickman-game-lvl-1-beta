var Spikes,obstacle2,player,platform1,platform2
var jumpstate= 0,levelstate= 1,qualifier1=0,qualifier2=0,camstate=1,camno=0,camno2=0,deaths=0,gamestate=1
var spawnx=150,spawny=700,jlevel=1755.5,q1=0,q2=1766,camlevel=386,deaths=0
function preload(){
 playerimgr = loadAnimation("../sprites/0.png","../sprites/1.png","../sprites/2.png","../sprites/3.png","../sprites/4.png","../sprites/5.png","../sprites/6.png","../sprites/7.png","../sprites/8.png","../sprites/9.png")
 playerimgl = loadAnimation("../sprites/0l.png","../sprites/1l.png","../sprites/2l.png","../sprites/3l.png","../sprites/4l.png","../sprites/5l.png","../sprites/6l.png","../sprites/7l.png","../sprites/8l.png","../sprites/9l.png")
 playerimg= loadImage("../sprites/standing.png");
 playerimgjl=loadImage("../sprites/0.png")
playerimgjr=loadImage("../sprites/0l.png")
 spikes= loadImage("../sprites/sprite_0_2.png")
 block=loadImage("../sprites/movingb.png")
 }
function setup(){
 canvas = createCanvas(displayWidth,displayHeight)
 
 player = createSprite(50,390,100,100);
 player.scale=0.4
 player.addAnimation("test1",playerimg)
 player.addAnimation("test2",playerimgl)
 player.addAnimation("test3",playerimgr)

 floor = createSprite(displayWidth/2+200,displayHeight+1700,displayWidth+400,3420)
 floor.shapeColor= "black"
 
 floor2= createSprite(displayWidth+1799,displayHeight+3200,3600,410)
 floor2.shapeColor="black"

 Spikes= createSprite(displayWidth/2,displayHeight-15,200,50);
 Spikes.addAnimation("spikes",spikes)
 Spikes.setCollider("rectangle",0,0,155,48)
 
 
 movingb= createSprite(displayWidth/2,Spikes.y - 50,50,50)
 movingb.scale= 0.1
 movingb.addAnimation("block",block)
 movingb.setCollider("rectangle",20,0,290,290)
 movingb.visible=false
 movingb.scale=0.2
 
 invisb= createSprite(525,200,50,50)
 invisb.visible= false
 invisb1= createSprite(1000,200,50,50)
 invisb1.visible= false
 
 barrier=createSprite(-499,displayHeight/2,1000,displayHeight+2800)
 barrier.shapeColor="#000000"

 climb1=createSprite(displayWidth+1799+1,floor2.y-454,200,500)
 climb1.shapeColor="black"

 climb2=createSprite(displayWidth+1799+200,floor2.y-704,200,1000)
 climb2.shapeColor="black"

 climb3=createSprite(displayWidth+1799,floor2.y-1420,200,30)
 climb3.shapeColor="black"

 climb4=createSprite(displayWidth+1799,floor2.y-2020,200,30)
 climb4.shapeColor="black"

 climb5=createSprite(climb2.x+100,climb4.y-550,200,30)
 climb5.shapeColor="black"

 climb6=createSprite(climb2.x+100,climb5.y-550,200,30)
 climb6.shapeColor="black"

 climb7=createSprite(climb2.x,climb6.y-550,201,30)
 climb7.shapeColor="black"
 
 barrier2=createSprite(climb2.x+499,floor2.y-2204,800,4000)
 barrier2.shapeColor="black"

 barrier3=createSprite(barrier2.x+2000,3500,2000,20000)
 barrier3.shapeColor="black"


 
 }
 function draw() {
 player.collide(floor2)
 player.collide(barrier2)
 player.collide(barrier3)
 background("#ffffff");
 drag();
 

 bounce(movingb,invisb);
 bounce(movingb,invisb1);
 
 player.collide(floor)
 invisb.y= movingb.y
 invisb1.y= movingb.y
 player.collide(barrier)


 if(jumpstate === 1 && keyDown("space")){
player.velocityY=-24
 }
  if(gamestate===1){
   
    if(jumpstate===1){
     
      if(keyDown("c")){
      
        player.velocityY=-34
      }
    }
  }
  
  

 
 if(jumpstate===1){
 
 if (keyDown("a")){
 player.velocityX =- 9;
 player.changeAnimation("test2",playerimgl)
 player.setCollider("circle",0,0,100);
 player.scale= 0.4;
 }
 else{
 
 player.velocityX =0;
 player.scale= 0.4;
 player.changeAnimation("test1",playerimg)
 player.setCollider("rectangle",0,10,80,200)
 
 
 if (keyDown("d")){
 player.velocityX =9;
 player.changeAnimation("test3",playerimgr)
 player.scale= 0.4;
 player.setCollider("circle",0,0,100);
 }
 }
 if (keyDown("d")){
 player.velocityX =9;
 player.changeAnimation("test3",playerimgr)
 player.scale= 0.4;
 player.setCollider("circle",0,0,100);
 }
 else{
 player.velocityX =0;
 player.scale= 0.4;
 player.changeAnimation("test1",playerimg)
 player.setCollider("rectangle",0,10,80,200)
 if (keyDown("a")){
 player.velocityX =- 9;
 player.changeAnimation("test2",playerimgl)
 player.setCollider("circle",0,0,100);
 player.scale= 0.4;
 }
 }
 
 }

 

 fill("black")
 
 
 player.velocityY = player.velocityY + 0.98;
 
 
 
 if (gamestate===1){
 level1()
 }
 drawSprites();

 text(displayWidth/2,displayHeight/2,"hello")
 }
 
 
 function level1(){
 if(levelstate===1){
   jump(floor,50,1766,1755.5)
 }if(levelstate===2){
 jump(floor2,1365,4965,255.5)
 }
 camera.position.y=displayHeight/2
 
death(Spikes)
if(levelstate===1&&player.y<=displayHeight/2){
camera.position.y=player.y
}
 if(levelstate===1&&player.x>=displayWidth/2){
 

 camstate=2
 
 if(camera.zoom>=1.5){
 camera.zoom=1.5
 
 
 }
 }
 if(camstate===2){
   camlevel=camlevel+2.192
camera.position.y=camlevel
if(camera.position.y>=523){
  camera.position.y=523
}
 camera.position.x=player.x
 camera.zoom=camera.zoom+0.008
 if(camera.zoom>=1.5){
  camera.zoom=1.5
 }
}

 if(player.x>displayWidth+400){
 levelstate= 2

 movingb.velocityX= 5
 }
 if(levelstate===2){
 player.collide(climb1)
 player.collide(climb2)
 player.collide(climb3)
 player.collide(climb4)
 player.collide(climb5)
 player.collide(climb6)
 player.collide(climb7)

 }
if(levelstate===2 && player.x>=2150){
  if(player.y<=climb3.y){
  levelstate=3
  }
}
 if(levelstate===3){
   jump(climb3,3066,3266,60.5)
   if(player.y<=climb4.y){
     levelstate=4
   }
 }
 if(levelstate===4){
  jump(climb4,3066,3266,60.5)
  if(player.y<=climb5.y){
    levelstate=5
  }
 } 
 
 if(levelstate===5){
  jump(climb5,3366,3466,60.5)
  if(player.y<=climb6.y){
    levelstate=6
  }
 }
 if(levelstate===6){
   jump(climb6,3366,3466,60.5)
   if(player.y<=climb7.y){
     levelstate=7
   }
 }
 if(levelstate===7){
   jump(climb7,3266,3466,60.5)
 }
if(levelstate===2){
 jump(climb1,3066,3266,305.5)
 jump(climb2,3266,3466,555.5)
}
 if(levelstate===2&&camstate===2){
 camstate=2.5
 }
 if(camstate===2.5){
 camera.zoom=camera.zoom-0.009
 
 camera.position.x=camera.position.x+15
 if(camera.position.x>=player.x+384){
 camera.position.x=player.x+384
 }
 camera.position.y=player.y
 if(camera.zoom<=1){
 camera.zoom=1
 }
 }
 if(player.y>=3700){
 camstate=3
 
 }
 else{
 
 }
 if(camstate===3){
 cs5(player.x+384,floor2.y-576)
 if(player.y<=3396){
 camera.position.y=player.y
 }
 if(levelstate>2){
  jump(barrier2,3466,4266,2056.5)
   camera.zoom=camera.zoom-0.003
   if(camera.zoom<=0.5){
     camera.zoom=0.5
   }
 }
 
 } }
