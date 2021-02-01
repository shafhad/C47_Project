class Enemy3{
  constructor(){
    var options = {
      isStatic: false,
      friction: 0.2,
      density: 3
    }

    this.body = Bodies.circle(Math.round(random(20, windowWidth - 20)), 30, 50, options)
    this.width = 30
    this.height = 50
    this.sprite = createSprite(this.body.position.x, this.body.position.y, this.width, this.height)
    this.sprite.visible = false
    enemyGroup3.add(this.sprite)
    this.image1 = loadImage("alien.png")
    this.image2 = loadImage("alien2.png")
    this.image3 = loadImage("alien3.png")
    this.image4 = loadImage("alien4.png")
    this.visibility = 255
    this.imageSelect = null

    World.add(world, this.body)
    this.imageNum = Math.round(random(1, 4))
    }
    display(){
      var pos = this.body.position
        switch(this.imageNum){
          case 1: image(this.image1, pos.x, pos.y, 50, 50)
                  this.imageSelect = 1
                  break;
          case 2: image(this.image2, pos.x, pos.y, 50, 50)
                  this.imageSelect = 2
                  break;           
          case 3: image(this.image3, pos.x, pos.y, 50, 50)
                  this.imageSelect = 3
                  break; 
          case 4: image(this.image4, pos.x, pos.y, 50, 50)
                  this.imageSelect = 4
                  break; 
        }
    }
    static destroy(){
      //if(this.body){
          World.remove(world, this.body)
          /*switch(this.imageSelect){
            case 1: 
              push()
              tint(255, this.visibility -= 5)
              image(this.image1, pos.x, pos.y, 50, 50)
              pop()
              break;
            case 2:
              push()
              tint(255, this.visibility -= 5)
              image(this.image2, pos.x, pos.y, 50, 50)
              pop()
              break;
            case 3:
              push()
              tint(255, this.visibility -= 5)
              image(this.image3, pos.x, pos.y, 50, 50)
              pop()
              break;
            case 4:
              push()
              tint(255, this.visibility -= 5)
              image(this.image4, pos.x, pos.y, 50, 50)
              pop()
              break;
              
          }
        }*/
      //}

    }
}