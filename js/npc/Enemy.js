import { Sprite } from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
import { RandomUtil } from "../base/Util/RandomUtil";

const MINSPEED = 2;
const MAXSPEED = 5;

export class Enemy extends Sprite {
  constructor() {
    const image = Sprite.getImage('enemy'); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    const y = - image.height; // 所有敌机都是在刚离屏的位置Y

    // 如何实现随机多个敌机？
    let randomX = RandomUtil.random(0, canvas.width - image.width);  // 随机生成一个位置区域X
    super(image,
      0, 0, image.width, image.height,
      randomX, y, image.width, image.height);

    this.enableCollide = true;
    this.speed = RandomUtil.random(MINSPEED, MAXSPEED);  // 随机生成一个速度speed
  }

  draw() {
    this.y = this.y + this.speed;
    super.draw();
  }

}