import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
export class AngleEnemyBullet extends Sprite {
  constructor(spritex, spritey, spriteHeight, spriteWidth, angle = 90, time = 0,imgname = 'triLightBullet') {
    const img = Sprite.getImage(imgname);
    const canvas = DataStore.getInstance().canvas;
    var x = spritex + spriteWidth/2-img.width/2  ;
    var y = spritey +spriteHeight- 10;
    super(img,
      0, 0, img.width, img.height,
      x, y, img.width, img.height);
    this.angle = Math.tan(angle * Math.PI * 2 / 360);
    this.frame = 0;
    this.frameLimite = time;
  }
  //
  draw() {
    this.frame++;
    if (this.frame > this.frameLimite) {

      this.y += 10 * GameGlobal.dpr;
      this.x -= 10 * GameGlobal.dpr / this.angle;

    }

    super.draw();


  }
}