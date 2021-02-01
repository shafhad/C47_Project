const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg, dieSound, shootSound, levelupSound
var ground, canvas
var enemy1Ary = []
var enemy2Ary = []
var enemy3Ary = []
var enemy4Ary = []
var enemy1, enemy2, enemy3, enemy4
var bullets = []
var bullet
var bulletGroup, enemyGroup1, enemyGroup2, enemyGroup3, enemyGroup4
var player 


function preload(){
  bgImg = loadImage("nightSky.png")
  //dieSound = loadSound("sounds/die.wav")
  //shootSound = loadSound("sounds/shoot.wav")
  //levelupSound = loadSound("sounds/levelup.wav")
}

function setup() {
  canvas = createCanvas(displayWidth - 100,displayHeight - 100);
  engine = Engine.create()
  world = engine.world;

  ground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  ground.addImage("bgImg", bgImg)
  ground.scale = 5
  ground.x = ground.width/2
  ground.y = ground.height/2
  player = new Player(width/2, height - 50)
  bullet =new Bullet(width/2, height - 50,40)
  bullets.push(bullet)

  bulletGroup = new Group()
  enemyGroup1 = new Group()
  enemyGroup2 = new Group()
  enemyGroup3 = new Group()
  enemyGroup4 = new Group()
console.log(enemyGroup1)
console.log(bulletGroup)

}

function draw() {
  background(255,255,255);  
 Engine.update(engine)

  drawSprites()
  ground.velocityY = 2
  if(ground.y > displayHeight - 30){
    ground.y = ground.height/2
  }
  player.display()
  
for(var i=0;i <bullets.length;i++)
{
  bullets[i].display()
}

  var rand = Math.round(random(1, 4))
  if(frameCount % 40 === 0){
    switch(rand){
      case 1: enemy1 = new Enemy1()
              enemy1Ary.push(enemy1)
              
              break;
      case 2: enemy2 = new Enemy2()
              enemy2Ary.push(enemy2)
              break;
      case 3: enemy3 = new Enemy3()
              enemy3Ary.push(enemy3)
              break;
      case 4: enemy4 = new Enemy4()
              enemy4Ary.push(enemy4)
              break;
    }
    
  }


  
  for(var i = 0; i < enemy1Ary.length; i++){
   enemy1Ary[i].display()
  
  }
  for(var i = 0; i < enemy2Ary.length; i++){
    enemy2Ary[i].display()
  }
  for(var i = 0; i < enemy3Ary.length; i++){
    enemy3Ary[i].display()
  }
  for(var i = 0; i < enemy4Ary.length; i++){
    enemy4Ary[i].display()
  }

  if(keyDown(LEFT_ARROW)){
    player.move(-10)
    
  }
  if(keyDown(RIGHT_ARROW)){
    player.move(10)
  
  }
  /*for(var i = 0; i < bullets.length; i++){
    bullets[i].display()

  }*/
  Matter.Detector.canCollide(bulletGroup, enemyGroup1)
 // Matter.Body.nextGroup([isNonColliding=false])
  //console.log( Matter.Detector.canCollide(bulletGroup,enemyGroup1))
  //console.log( Matter.Body.nextGroup([isNonColliding=true]))
  if(bulletGroup.isTouching(enemyGroup1)){
   // enemy1Ary[i].splice(enemy1)
   // enemy1Ary.shift()
   enemy1Ary.splice()
    
    enemyGroup1.destroyEach()
    bulletGroup.destroyEach()
    console.log("hi")
    //enemy1.destroy()
  }
  if(enemyGroup2.isTouching(bulletGroup)){
    enemy1Ary.splice(enemy2)
    enemyGroup2.destroyEach()
    bulletGroup.destroyEach()
   // Enemy2.destroy()
  }
  if(enemyGroup3.isTouching(bulletGroup)){
    enemy1Ary.splice(enemy3)
    enemyGroup3.destroyEach()
    bulletGroup.destroyEach()
   // enemy3.destroy()
  }
  if(enemyGroup4.isTouching(bulletGroup)){
    enemy1Ary.splice(enemy4)
    enemyGroup4.destroyEach()
    bulletGroup.destroyEach()
   // enemy4.destroy()
  }
   
  
 

}






function keyPressed(){
  if(keyCode === 32){
   // player.spawnBullets()
    enemy1Ary.splice()
    enemy2Ary.splice()
  // enemy1Ary.shift()
 //Matter.Body.applyForce(bullet.body,bullet.body.position,{x:0,y:5})
 pos={x:-0,y:-200}
 Matter.Body.translate(bullet.body, pos)

 //Body.setVelocity(bullet.body,{x:0, y:5});
 
  }
}