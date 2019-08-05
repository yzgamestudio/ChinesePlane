import { Sprite } from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
import { RandomUtil } from "../base/Util/RandomUtil";
import { BossBullet } from "./BossBullet.js";

const MINSPEED = -10;
const MAXSPEED = 10;

export class Boss extends Sprite {
  constructor(imgname = 'boss') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = GameGlobal.canvas;
    const y = -image.height; // 所有敌机都是在刚离屏的位置Y

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
    if (this.y > GameGlobal.fit(50)) {
      this.y = GameGlobal.fit(50);
    }
    this.x = this.x + this.xSpeed * GameGlobal.dpr;
    if (this.x + this.width > DataStore.getInstance().canvas.width) {
      this.x = DataStore.getInstance().canvas.width - this.width;
      this.xSpeed = -this.xSpeed;
    }
    if (this.x < 0) {
      this.x = 0;
      this.xSpeed = -this.xSpeed;
    }

    // console.log(this.x, this.y);
    super.draw();
  }

  shoot(number = 3) {
    let bossBullets =  DataStore.getInstance().get('bossBullet');
    if(Array.isArray(bossBullets) === false) {
      DataStore.getInstance().put('bossBullet', []);
      bossBullets =  DataStore.getInstance().get('bossBullet'); // 再取一次
    }

    if (number >= 1) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }
    if (number >= 2) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) - GameGlobal.fit(20), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }
    if (number >= 3) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) + GameGlobal.fit(20), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }

    if (number >= 4) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) - GameGlobal.fit(40), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }
    if (number >= 5) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) + GameGlobal.fit(40), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }

    if (number >= 6) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) + GameGlobal.fit(60), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }

    if (number >= 7) {
      let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) - GameGlobal.fit(60), this.y + this.height - GameGlobal.fit(40));
      bossBullets.push(bossBullet);
    }

  }

  bullet(){
    return 'bossBullet';
  }



}