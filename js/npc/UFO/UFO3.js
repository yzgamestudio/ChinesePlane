///////////////////////////////////////////////
//
//UFO出现,圆点y=-image.width
//
//////////////////////////////////////////////



import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Animation } from "../../base/Animation";
import { SmartEnemyBullet } from "../EnemyBullet/smartEnemyBullet";
export class UFO3 extends Animation {
  constructor(x,y,circleDotX,circleDotY=0
  ,long=500,clock=true,imgName = 'UFO2', blood = 5) {
    const image = Sprite.getImage(imgName); // 获取图片
    const canvas = GameGlobal.canvas;
    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);
    this.blood = blood;
    this.imgName = imgName;
    this.type = 'ufo';
    this.circleDotX=circleDotX;
    this.circleDotY=circleDotY;
    this.long=long;
    this.clock=clock;
  }

  draw() {
    const image = Sprite.getImage(this.imgName); // 获取图片
    const canvas = GameGlobal.canvas;
    if(this.clock===true){
      this.x -= GameGlobal.fit(2);
      const _dosqrt = Math.sqrt((this.long) * (this.long) - (this.x - this.circleDotX) * (this.x - this.circleDotX))
      this.y = _dosqrt + this.circleDotY;
    }else{
      this.x += GameGlobal.fit(2);
      const _dosqrt = Math.sqrt((this.long) * (this.long) - (this.x - this.circleDotX) * (this.x - this.circleDotX))
      this.y = _dosqrt + this.circleDotY;
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