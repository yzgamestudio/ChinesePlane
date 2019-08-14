///////////////////////////////////////////////
//
//stone随机出现
//
//////////////////////////////////////////////

import { Sprite } from "../../base/Sprite";
import { DataStore } from '../../base/DataStore.js'
import { Animation } from "../../base/Animation";
import { RandomUtil } from "../../base/Util/RandomUtil";

export class Stone extends Animation {
  constructor(imgname = 'stone1') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    let y = - image.height; // 所有敌机都是在刚离屏的位置Y
    // 如何实现随机多个敌机？
    let randomX = RandomUtil.random(0, canvas.width - image.width);  // 随机生成一个位置区域X


    // 如何实现随机多个敌机？

    super(image,
      0, 0, image.width, image.height,
      randomX, y, image.width, image.height);


    this.speed = GameGlobal.fit(1);
    this.type = 'stone'
  }

  draw(frame) {
    this.y = this.y + this.speed;
    super.draw();
  }

}