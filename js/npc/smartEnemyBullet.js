import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
export class smartEnemyBullet extends Sprite {
  constructor(spritex, spritey, spriteHeight, spriteWidth, time = 0) {
    const img = Sprite.getImage('triLightBullet');
    const canvas = DataStore.getInstance().canvas;
    var x = spritex + spriteWidth / 2 - img.width / 2;
    var y = spritey + spriteHeight - 10;
    super(img,
      0, 0, img.width, img.height,
      x, y, img.width, img.height);
    this.isVisible = true;
    var playerx = DataStore.getInstance().get('player').x;
    var playery = DataStore.getInstance().get('player').y;
    this.angle = (playery-y)/(playerx-x)
    this.enableCollide = true;
    this.frame = 0;
    this.frameLimite = time;
  }

  draw() {
    this.frame++;
    if (this.frame > this.frameLimite) {

      this.y += 10 * GameGlobal.dpr;
      this.x += 10 * GameGlobal.dpr / this.angle;

    }

    super.draw();


  }
}