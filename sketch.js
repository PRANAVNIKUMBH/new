function preload(){
  i =  loadImage("r.png")
  c = loadAnimation("1.png","2.png")
  p = loadAnimation("1.png")
  c1 = loadImage('1car.png')
  c2 = loadImage('1car.png')
  c3 = loadImage('1car.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2, height/2);
  bg.addImage(i)
  bg.scale = 0.5
  bg.rotation = 90

  cr = createSprite(width/2,height-100)
  cr.addAnimation('p',p)
  cr.addAnimation("c",c)
  cr.scale = 0.1
}

function draw() {
  background(0);  
  cr.changeAnimation('p',p)
  if (keyDown('up')){
    cr.y = cr.y - 3
    cr.changeAnimation("c",c)
    cr.rotation = 0
  } 

  if (keyDown('down')){
    cr.y = cr.y + 3
    cr.changeAnimation("c",c)
    cr.rotation = 180
  }
  
  car()
  drawSprites();
}

function car (){
  if (frameCount%270===0){
    var posx = [width,0]
    var x1 = random(posx)
    ca = createSprite(x1,random(50,height-50))
    ca.addImage(c1)
    if (x1===width){
      ca.velocityX = -6
      ca.rotation = 0
    } else{
      ca.velocityX = +6
      ca.rotation = 180
    }
    
  }
}

