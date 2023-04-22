var boxSprite;
function setup() {
  createCanvas(400,400);
  boxSprite = createSprite(300,300,50,50);
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    boxSprite.x+=3;
  }
  if(keyIsDown(LEFT_ARROW)){
    boxSprite.x-=3;
  }
  if(keyIsDown(UP_ARROW)){
    boxSprite.y-=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    boxSprite.y+=3;
  }
  background("green");
  drawSprites();

}




