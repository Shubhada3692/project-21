function isTouching(object1, object2){
    if(object1.x - object2.x <= object2.width/2 + object1.width/2 &&
      object2.x - object1.x <= object2.width/2 + object1.width/2 &&
      object2.y - object1.y <= object2.height/2 + object1.height/2 &&
      object1.y - object2.y <= object2.height/2 + object1.height/2){
      return true
    }
    else{
      return false
    }
  }
  function bounce(substance1,substance2){
      if (substance1.x - substance2.x <= substance1.width/2 + substance2.width/2 &&
         substance2.x - substance1.x <= substance2.width/2 + substance1.width/2 ){
         substance1.velocityX = -(substance1.velocityX) ;
         substance2.velocityX = -(substance2.velocityX) ;
        
      }
      if (substance1.y - substance2.y <= substance1.height/2 + substance2.height/2 &&
         substance2.y - substance1.y <= substance2.height/2 + substance1.height/2){
           substance1.velocityY = -(substance1.velocityY);
           substance2.velocityY = -(substance2.velocityY);
         }
  }