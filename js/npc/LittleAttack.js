import {Sprite} from "../base/Sprite";
import { DataStore } from '../base/DataStore.js'

export class LittleAttack extends Sprite {
  constructor(isLeft = true, imgname = 'littleAttack1') {
      const image = Sprite.getImage(imgname); // 获取图片
        const canvas = DataStore.getInstance().canvas;
        let res = DataStore.getInstance().res;
        // console.log(image);
        let y = - image.height; // 所有敌机都是在刚离屏的位置Y
        let x 
        if(isLeft) {
          x = DataStore.getInstance().canvas.width * 0.2;
        }else{
          x = DataStore.getInstance().canvas.width * 0.8;
        }
     
        // 如何实现随机多个敌机？

        super(image,
            0, 0, image.width, image.height,
            x, y, image.width, image.height);


        this.speed = GameGlobal.fit(5);
    }

    draw(frame) {
        this.y = this.y + this.speed ;
        super.draw();
    }

}