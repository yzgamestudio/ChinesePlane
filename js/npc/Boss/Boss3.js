import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { AngleEnemyBullet } from "../EnemyBullet/angleEnemyBullet";
import { Animation } from "../../base/Animation";
import { BossBullet } from "../EnemyBullet/BossBullet.js";
const MINSPEED = -10;
const MAXSPEED = 10;

export class Boss3 extends Animation {
  constructor(imgname = 'boss1',blood=20) {
    const image = Sprite.getImage(imgname); // 获取图片
    const canvas = GameGlobal.canvas;
    const y = -image.height; // 所有敌机都是在刚离屏的位置Y

    // 如何实现随机多个敌机？
    let randomX = RandomUtil.random(0, canvas.width - image.width * GameGlobal.dpr);  // 随机生成一个位置区域X
    super(image,
      0, 0, image.width, image.height,
      randomX, y, image.width, image.height);

    this.speed = RandomUtil.random(MINSPEED, MAXSPEED);  // 随机生成一个速度speed
    this.blood = blood;
    this.fullBlood=blood;
    this.xSpeed = 2;
    this.type='boss'
    this.num=0;
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

  shoot(number = 7) {
    let enemyBullets =  DataStore.getInstance().get('enemyBullets');
    this.num++;
    if(this.num%2===0){
      if (number >= 1) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 90);
        enemyBullets.push(bossBullet);
      }
      if (number >= 2) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 85);
        enemyBullets.push(bossBullet);
      }
      if (number >= 3) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 95);
        enemyBullets.push(bossBullet);
      }

      if (number >= 4) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 80);
        enemyBullets.push(bossBullet);
      }
      if (number >= 5) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 100);
        enemyBullets.push(bossBullet);
      }

      if (number >= 6) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 75);
        enemyBullets.push(bossBullet);
      }

      if (number >= 7) {
        let bossBullet = new AngleEnemyBullet(this.x, this.y, this.height, this.width, 105);
        enemyBullets.push(bossBullet);
      }
    } else{
      if (number >= 1) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }
      if (number >= 2) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) - GameGlobal.fit(20), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }
      if (number >= 3) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) + GameGlobal.fit(20), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }

      if (number >= 4) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) - GameGlobal.fit(40), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }
      if (number >= 5) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) + GameGlobal.fit(40), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }

      if (number >= 6) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) + GameGlobal.fit(60), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }

      if (number >= 7) {
        let bossBullet = new BossBullet(this.x + this.width * 0.5 - GameGlobal.fit(10) - GameGlobal.fit(60), this.y + this.height - GameGlobal.fit(40));
        enemyBullets.push(bossBullet);
      }
    }


  }

  bullet(){
    return 'enemyBullets';
  }



}