function drag(){
  if(jumpstate===0){
      
      if (keyDown("a")){
          player.velocityX =player.velocityX- 0.7;
          player.changeAnimation("test2",playerimgl)
          player.setCollider("circle",0,0,100);
          player.scale= 0.4;
          if(player.velocityX<=-9){
              player.velocityX=-9
          }
        }
      
         else{
         if(player.velocityX<0){
          player.velocityX =player.velocityX+0.3;
         }
         if(player.velocityX>0){
          player.velocityX=player.velocityX-0.3
        // else{
            // if(player.velocityX===0){
            //     player.velocityX=0
             //}
             
             //}
             
             }
         
            player.scale= 0.4;
            player.changeAnimation("test1",playerimg)
            player.setCollider("rectangle",0,10,80,200)
         
            
            if (keyDown("d")){
              player.velocityX =player.velocityX+0.7;
              player.changeAnimation("test3",playerimgr)
              player.scale= 0.4;
              player.setCollider("circle",0,0,100);
            }
         }
            if (keyDown("d")){
              player.velocityX =player.velocityX+0.7;
              player.changeAnimation("test3",playerimgr)
              player.scale= 0.4;
              player.setCollider("circle",0,0,100);
              if(player.velocityX>=9){
                  player.velocityX=9
              }
            }
          
            else{
              //if(player.velocityX<0){
                 // player.velocityX =player.velocityX+0.3;
                // }
                // else{
                     if(player.velocityX===0){
                         player.velocityX=0
                     }
                     if(player.velocityX>0){
                         player.velocityX=player.velocityX-0.3
                     }
                     
                    // }
                 
                    player.scale= 0.4;
                    player.changeAnimation("test1",playerimg)
                    player.setCollider("rectangle",0,10,80,200)
                 
              if (keyDown("a")){
                  player.velocityX =player.velocityX- 0.7;
                  player.changeAnimation("test2",playerimgl)
                  player.setCollider("circle",0,0,100);
                  player.scale= 0.4;
                  if(player.velocityX<=-9){
                      player.velocityX=-9
          }
      }
            }
            if(floor.y-player.y<jlevel){
              if(player.x > q1 && player.x < q2){    
              
             jumpstate=1
              }
            }
  }

  
}

