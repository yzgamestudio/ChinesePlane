import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
export class AngleBullet extends Sprite{
  constructor(imgname = 'bullet2',angle=90,time=0,speed=10) {
    const img = Sprite.getImage(imgname);
    var spritex = DataStore.getInstance().get('player').x;
    var spritey = DataStore.getInstance().get('player').y;
    var spriteWidth = DataStore.getInstance().get('player').width;
    var spriteHeight = DataStore.getInstance().get('player').height;
    const canvas = DataStore.getInstance().canvas;
    var x = spritex + spriteWidth / 2 - img.width / 2;
    var y = spritey + 10;
    super(img,
      0, 0, img.width, img.height,
      x, y, img.width, img.height);
    this.isVisible = true;
    this.angle=Math.tan(angle*Math.PI*2/360);
    this.enableCollide = true;
    this.frame=0;
    this.frameLimite=time;
    this.speed=speed;
  }
  //
  draw() {
    this.frame++;
    if(this.frame>this.frameLimite){

        this.y = this.y - this.speed* GameGlobal.dpr ;
        this.x += this.speed * GameGlobal.dpr/this.angle;
      

    }
   
    super.draw();
    

  }
}