import  Sprite  from "../base/Sprite";
import  DataStore  from "../base/DataStore";
const BULLET_WIDTH = 16
const BULLET_HEIGHT = 30
export class Bullet extends Sprite {
 constructor(){
   const img = Sprite.getImage('bullet')
   const player = DataStore.getInstance().get('player')
   console.log(img);
   super(img,0,0,0,0,0,0,0,0);
   //super(img,0, 0, img.width, img.height, player.x, player.y, BULLET_WIDTH, BULLET_HEIGHT)
   //this.enableCollide = true;
   //this.speed = 5;  
 }
  draw() {
    this.y = this.y - this.speed;
    super.draw();
  }
}