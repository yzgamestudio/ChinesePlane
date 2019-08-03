import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
export class angleBullet extends Sprite{
  constructor(angle=60) {
    const img = Sprite.getImage('triLightBullet');
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
    this.angle=angle;
    this.enableCollide = true;
  }
  draw() {
    if (this.angle === 0) {
      this.y = this.y - 10 * GameGlobal.dpr *0;
      this.x += 10 * GameGlobal.dpr;
    }
    if(this.angle===30){
      this.y = this.y - 10 * GameGlobal.dpr / 1.6;
      this.x += 10 * GameGlobal.dpr;
    }
    if (this.angle === 60) {
      this.y = this.y - 10 * GameGlobal.dpr * 1.6;
      this.x += 10 * GameGlobal.dpr;
    }
    if (this.angle === 90) {
      this.y = this.y - 10 * GameGlobal.dpr * 1.6;
      this.x -= 10 * GameGlobal.dpr*0;
    }
    if (this.angle === 120) {
      this.y = this.y - 10 * GameGlobal.dpr * 1.6;
      this.x -= 10 * GameGlobal.dpr;
    }
    if (this.angle === 150 ) {
      this.y = this.y - 10 * GameGlobal.dpr / 1.6;
      this.x -= 10 * GameGlobal.dpr;
    }
    if (this.angle === 180) {
      this.y = this.y - 10 * GameGlobal.dpr *0;
      this.x -= 10 * GameGlobal.dpr;
    }
    super.draw();
    

  }
}