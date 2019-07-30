import { Sprite } from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
import { RandomUtil } from "../base/Util/RandomUtil";
import {Bullet} from "../player/Bullet";

const MINSPEED = -10;
const MAXSPEED = 10;

export class Boss extends Sprite {
  constructor() {
    const image = Sprite.getImage('boss'); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    const y = - image.height; // 所有敌机都是在刚离屏的位置Y

    // 如何实现随机多个敌机？
    let randomX = RandomUtil.random(0, canvas.width - image.width * GameGlobal.dpr);  // 随机生成一个位置区域X
    super(image,
      0, 0, image.width, image.height,
      randomX, y, image.width, image.height);

    this.speed = RandomUtil.random(MINSPEED, MAXSPEED);  // 随机生成一个速度speed

    this.xSpeed = 2;
  }

  draw() {
    
    this.y = this.y + GameGlobal.fit(10);
    if(this.y > 80 * GameGlobal.dpr) {
      this.y = 80 * GameGlobal.dpr;
    }
    this.x = this.x + this.xSpeed * GameGlobal.dpr;
    if (this.x + this.width > DataStore.getInstance().canvas.width) {
      this.x = DataStore.getInstance().canvas.width - this.width;
      this.xSpeed = -this.xSpeed;
    }
    if(this.x < 0){
      this.x = 0;
      this.xSpeed = -this.xSpeed;
    }
 
    console.log(this.x, this.y);
    super.draw();
  }

  shoot(){
  }

}