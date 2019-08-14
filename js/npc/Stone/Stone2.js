///////////////////////////////////////////////
//
//stone设置x,y值出现
//
//////////////////////////////////////////////

import { Sprite } from "../../base/Sprite";
import { DataStore } from '../../base/DataStore.js'
import { Animation } from "../../base/Animation";
import { RandomUtil } from "../../base/Util/RandomUtil";

export class Stone2 extends Animation {
  constructor(x=0,imgname = 'stone2') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    let y = - image.height; // 所有敌机都是在刚离屏的位置Y



    // 如何实现随机多个敌机？

    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);


    this.speed = GameGlobal.fit(1);
    this.type = 'stone'
    this.spriteWidth=image.width;
  }

  draw(frame) {
    this.y = this.y + this.speed;
    super.draw();
  }
  
  spriteWidth(){
    return this.spriteWidth;
  }
}