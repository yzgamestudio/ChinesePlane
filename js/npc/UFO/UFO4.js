///////////////////////////////////////////////
//
//LittleAttack从屏幕左侧或者上侧进入屏幕(this.y < this.target_y,敌机位置比目标位置y小) 在某点定住几秒后自由活动
//
//////////////////////////////////////////////

import { Sprite } from "../../base/Sprite";
import { DataStore } from '../../base/DataStore.js'
import { Animation } from "../../base/Animation";
import { RandomUtil } from "../../base/Util/RandomUtil";
import { SmartEnemyBullet } from "../smartEnemyBullet.js";
export class UFO4 extends Animation {
  constructor(x = 0, y = 0, target_x = 0, target_y = 0, imgname = 'UFO1') {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = DataStore.getInstance().canvas;
    let res = DataStore.getInstance().res;
    // console.log(image);
    // 如何实现随机多个敌机？

    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);

    this.target_x = target_x;
    this.target_y = target_y;
    this.speed = GameGlobal.fit(2);
    this.angle = (this.target_x - x) / (this.target_y - y)
    this.type = 'ufo'
    //悬停计数器
    this.num = 0
    //同向位移计数器
    this.moveNum = 0;
    this.randomXSpeed = 0;
    this.randomYSpeed = 0;
  }

  draw() {
    if ((this.y < this.target_y) && this.num / 60 < 2) {
      this.y = this.y + this.speed;
      this.x = this.x + this.speed * this.angle
    }
    if ((this.y >= this.target_y) && this.num / 60 < 2) {
      this.num++;
    }
    if (this.num / 60 >= 2) {
      const canvas = DataStore.getInstance().canvas;
      if (this.moveNum % 10 === 0) {
        this.randomXSpeed = RandomUtil.random(-5, 5);
        this.randomYSpeed = RandomUtil.random(-5, 5);
      }
      this.moveNum++;
      this.y = this.y + Math.trunc(GameGlobal.fit(this.randomYSpeed));
      this.x = this.x + Math.trunc(GameGlobal.fit(this.randomXSpeed));
      if (this.y >= canvas.height / 2) {
        this.y = canvas.height / 2;
      }
      if (this.y <= 0) {
        this.y = 0;
      }
      if (this.x >= canvas.width) {
        this.x = canvas.width;
      }
      if (this.x <= 0) {
        this.x = 0;
      }
    }
    super.draw();
  }

  shoot(number = 1) {
    let enemyBullets = DataStore.getInstance().get('enemyBullets');

    if (number >= 1) {
      let ufoBullet = new SmartEnemyBullet(this.x, this.y, this.height, this.width);
      enemyBullets.push(ufoBullet);
    }
    if (number >= 2) {
      let ufoBullet = new SmartEnemyBullet(this.x, this.y, this.height, this.width);
      enemyBullets.push(ufoBullet);
    }
    if (number >= 3) {
      let ufoBullet = new SmartEnemyBullet(this.x, this.y, this.height, this.width);
      enemyBullets.push(ufoBullet);
    }

  }

}