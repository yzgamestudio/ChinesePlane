///////////////////////////////////////////////
//
//LittleAttack从屏幕上方中间位置蛇形下落
//
//////////////////////////////////////////////
import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Animation } from "../../base/Animation";

export class LittleAttack4 extends Animation {
  constructor(imgname = 'littleAttack2',direction='left') {
    const image = Sprite.getImage(imgname); // 获取图片

    let y = -image.height; // 所有敌机都是在刚离屏的位置Y
    let x = DataStore.getInstance().canvas.width * 0.5 - image.width * 0.5;
    // 如何实现随机多个敌机？

    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);
    if(direction==='left'){
      this.xspeed = GameGlobal.fit(-2);
    } else if (direction === 'right'){
      this.xspeed = GameGlobal.fit(2);
    }

    this.yspeed = GameGlobal.fit(2);
    this.type = 'littleattack'
  }

  draw() {

    if (this.x <= 0) {
      this.xspeed = -this.xspeed;
    }
    if (this.x + this.width >= DataStore.getInstance().canvas.width) {
      this.xspeed = -this.xspeed;
    }
    this.x = this.x + this.xspeed;

    this.y = this.y + this.yspeed;
    super.draw();
  }

}