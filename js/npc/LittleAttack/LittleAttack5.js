import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { MathUtil } from "../../base/Util/MathUtil";
import { Animation } from "../../base/Animation";

export class LittleAttack5 extends Animation {
  constructor(angle, mod,x=0, y = 0 ,imgname = 'littleAttack1') {
        const image = Sprite.getImage(imgname); // 获取图片
        y = 300; // 所有敌机都是在刚离屏的位置Y
        x = DataStore.getInstance().canvas.width * 0.5 - image.width * 0.5;
        super(image,
            0, 0, image.width, image.height,
            x, y, image.width, image.height);

       let [xSpeed, ySpeed] = MathUtil.computeXYWithAngleAndMod(angle, mod);
       this.xSpeed = xSpeed;
       this.ySpeed = ySpeed;
       this.type = 'littleattack'
    }

    draw() {
        this.x =  this.x +  this.xSpeed;
        this.y =  this.y +  this.ySpeed;
        super.draw();
    }
}