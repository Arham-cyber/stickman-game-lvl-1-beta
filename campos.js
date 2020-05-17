function cs1(camno,camno2){
    camera.position.x=displayWidth/2+camno
    camera.position.y=displayHeight/2+camno2
}

function cs2(camno,camno2){
    camera.position.x=player.x+camno
    camera.position.y=displayHeight/2+camno2
}

function cs3(camno,camno2){
    camera.position.x=displayWidth/2+camno
    camera.position.y=player.y+camno2
}

function cs4(camno,camno2){
    camera.position.x=player.x+camno
    camera.position.y=player.y+camno2
}
function cs5(camno,camno2){
    camera.position.x=camno
    camera.position.y=camno2
}

