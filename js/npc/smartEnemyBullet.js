import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
export class SmartEnemyBullet extends Sprite {

  constructor(spritex, spritey, spriteHeight, spriteWidth, time = 0, imgname = 'enemyBullet2') {
    const img = Sprite.getImage(imgname);
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
    this.frame = 0;
    this.frameLimite = time;
  }
//
  draw() {
    this.frame++;
    if (this.frame > this.frameLimite) {

      this.y += 5 * GameGlobal.dpr;
      this.x += 5 * GameGlobal.dpr / this.angle;

    }

    super.draw();


  }
}