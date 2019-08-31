import {Sprite} from "../../base/Sprite";
import {DataStore} from "../../base/DataStore";
import {MathUtil} from "../../base/Util/MathUtil"

export class FlowerBossBullet extends Sprite {
  constructor(angle, mod, x = 0, y = 0, imgname = 'enemyBullet3') {
    const image = Sprite.getImage(imgname); // 获取图片
    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);

    let [xSpeed, ySpeed] = MathUtil.computeXYWithAngleAndMod(angle, mod);
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  draw() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    super.draw();
  }

}
