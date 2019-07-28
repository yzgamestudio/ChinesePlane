import { Sprite } from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'

export class StayPlane extends Sprite {
  constructor(x) {
    const image = Sprite.getImage('stayPlane'); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    const y = - image.height; // 所有敌机都是在刚离屏的位置Y

    // 如何实现随机多个敌机？

    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);

    this.enableCollide = true;
    this.speed = 5 * DataStore.getInstance().systeminfo.pixelRatio;  // 随机生成一个速度speed
    this.isPlaying = true;
  }

  draw() {
    this.y = this.y + this.speed ;
    super.draw();
  }

}