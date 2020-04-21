///////////////////////////////////////////////
//
//UFOs逆时针出现
//
//////////////////////////////////////////////
import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Animation } from "../../base/Animation";
import { SmartEnemyBullet } from "../EnemyBullet/smartEnemyBullet.js";
export class UFO extends Animation{
  constructor(imgName='UFO1',blood=2){
    const image = Sprite.getImage(imgName); // 获取图片
    const canvas = GameGlobal.canvas;
    const y = -image.height; // 所有敌机都是在刚离屏的位置Y
    const x=0
    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);
    this.blood=blood;
    this.imgName=imgName;
    this.type='ufo';
  }

  draw(){
    const image = Sprite.getImage(this.imgName); // 获取图片
    const canvas = GameGlobal.canvas;
    this.x +=  GameGlobal.fit(2);
    const _dosqrt = Math.sqrt((canvas.width / 2) * (canvas.width / 2) - (this.x - canvas.width/2) * (this.x - canvas.width/2))
    this.y = _dosqrt - image.height;
    super.draw();
  }

  shoot(number = 1) {
    let enemyBullets = DataStore.getInstance().get('enemyBullets');

    if (number >= 1) {
      let ufoBullet = new SmartEnemyBullet(this.x , this.y ,this.height,this.width);
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