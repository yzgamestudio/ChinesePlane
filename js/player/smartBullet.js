import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
export class smartBullet extends Sprite {
  constructor(enemyx,enemyy, time = 0) {
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
    this.angle = (spritey-enemyy)/(spritex-enemyx);
    this.enableCollide = true;
    this.frame = 0;
    this.frameLimite = time;
  }

  draw() {
    this.frame++;
    if (this.frame > this.frameLimite) {

      this.y -= 10 * GameGlobal.dpr;
      this.x -= 10 * GameGlobal.dpr / this.angle;

    }

    super.draw();


  }
}