///////////////////////////////////////////////
//
//LittleAttack从屏幕左右边缘位置倾斜下落
//
//////////////////////////////////////////////
import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Animation } from "../../base/Animation";

const MINSPEED = 1;
const MAXSPEED = 5;

export class LittleAttack3 extends Animation {
  constructor(x = 0, y = 0, angle = 60, imgname = 'littleAttack2') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = DataStore.getInstance().canvas;
     y = - image.height; // 所有敌机都是在刚离屏的位置Y
    if(x>0){
      super(image,
        0, 0, image.width, image.height,
        x - image.width, y, image.width, image.height);
    }else if(x===0){
      super(image,
        0, 0, image.width, image.height,
        x , y, image.width, image.height);
    }


    this.speed = 3;  // 随机生成一个速度speed
    this.type = 'littelattack'
    this.angle = Math.tan(angle * Math.PI * 2 / 360);
  }

  draw() {
    this.y = this.y + this.speed;
    if(this.y>0){
      this.y += this.speed * GameGlobal.dpr;
      this.x += this.speed * GameGlobal.dpr / this.angle;
    }
    super.draw();
  }

}