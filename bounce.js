function bounce(MR,FR){
    if (MR.x - FR.x <= MR.width/2+FR.width/2
      &&FR.x - MR.x <= MR.width/2+FR.width/2
      &&MR.y - FR.y <= MR.height/2+FR.height/2
      &&FR.y - MR.y <= MR.height/2+FR.height/2) {
    MR.velocityX= MR.velocityX * (-1)
  /*MR.shapeColor = "green"
  FR.shapeColor = "green"
    */
    return true;
  }
  else{
  //MR.shapeColor = "blue"
  //FR.shapeColor = "blue"
  return false
}
}