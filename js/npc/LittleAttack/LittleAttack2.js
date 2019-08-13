///////////////////////////////////////////////
//
//LittleAttack从屏幕任意位置垂直下落
//
//////////////////////////////////////////////
import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Animation } from "../../base/Animation";

const MINSPEED = 1;
const MAXSPEED = 5;

export class LittleAttack2 extends Animation {
  constructor( imgname = 'littleAttack2') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    const y = - image.height; // 所有敌机都是在刚离屏的位置Y

    // 如何实现随机多个敌机？
    let randomX = RandomUtil.random(0, canvas.width - image.width);  // 随机生成一个位置区域X
    super(image,
      0, 0, image.width, image.height,
      randomX, y, image.width, image.height);

    this.speed = RandomUtil.random(MINSPEED, MAXSPEED) * GameGlobal.dpr ;  // 随机生成一个速度speed
    this.type = 'enemy'
  }

  draw() {
    this.y = this.y + this.speed ;
    super.draw();
  }

}