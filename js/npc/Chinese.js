import { Sprite } from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
import { RandomUtil } from "../base/Util/RandomUtil";
import { Animation } from "../base/Animation";

const MINSPEED = 2;
const MAXSPEED = 5;

export class Chinese extends Animation {
  constructor(imgname = 'attackPlane') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    const y = 0; // 所有敌机都是在刚离屏的位置Y

    // 如何实现随机多个敌机？
    let randomX = RandomUtil.random(0, canvas.width - image.width * DataStore.getInstance().systeminfo.pixelRatio);  // 随机生成一个位置区域X
    super(image,
      0, 0, image.width, image.height,
      randomX, y, image.width, image.height);


    this.yspeed = RandomUtil.random(MINSPEED, MAXSPEED);  // 随机生成一个速度speed
    this.xspeed = RandomUtil.random(-MINSPEED, MAXSPEED);  // 随机生成一个速度speed

  }

  draw() {
    this.y = this.y + this.yspeed * DataStore.getInstance().systeminfo.pixelRatio;
    this.x = this.x + this.xspeed * DataStore.getInstance().systeminfo.pixelRatio;
    const canvas = DataStore.getInstance().canvas;

    if (this.y >= canvas.height) {
      this.y = canvas.height;
    }
    if(this.y <= 0) {
      this.y = 0;
    }
    if (this.x <= canvas.width) {
      this.x = canvas.width;
    }
    if(this.x <=0){
      this.x = 0;
    }
    super.draw();
  }

}