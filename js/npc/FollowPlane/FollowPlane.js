import {Sprite} from '../../base/Sprite.js'
import {DataStore} from '../../base/DataStore.js'
import {RandomUtil} from "../../base/Util/RandomUtil";
import { Animation } from "../../base/Animation";

export class FollowPlane extends Animation {
  constructor(x,y,imgname = 'followplane2') {
        const image = Sprite.getImage(imgname); // 获取图片
        const canvas = DataStore.getInstance().canvas;
        super(image,
            0, 0, image.width, image.height,
            x, y, image.width, image.height);
        this.speed = GameGlobal.fit(2);
        this.type='followplane'
    }

    draw(otherSpriteX, otherSpriteY) {
        if(otherSpriteY>this.y){
          let rad = this.caculateRad(otherSpriteX, otherSpriteY);
          this.x = this.x + this.speed * Math.cos(rad);
          this.y = this.y + this.speed * Math.sin(rad);
        }else{
          this.y += GameGlobal.fit(2);
        }


        super.draw();
    }


    caculateRad(otherSpriteX, otherSpriteY) {
        var deltax = otherSpriteX - this.x + (this.width * 0.5);
        var deltay = otherSpriteY - this.y + (this.height * 0.5);

        if (deltax === 0) {
            if (otherSpriteY >= this.y) {
                deltax = 0.0000001
            } else {
                deltax = -0.0000001
            }
        }

        if (deltay == 0) {
            if (otherSpriteX >= this.x) {
                deltay = 0.0000001
            } else {
                deltay = -0.0000001
            }
        }
        var rad = 0;
        var π = Math.PI;
        if (deltax > 0 && deltay > 0) {
            rad = Math.atan(Math.abs(deltay / deltax))           // 第一项限
        } else if (deltax < 0 && deltay > 0) {
            rad = π - Math.atan(Math.abs(deltay / deltax))          // 第二项限
        } else if (deltax < 0 && deltay < 0) {
            rad = π + Math.atan(Math.abs(deltay / deltax))          // 第三项限
        } else {
            rad = 2 * π - Math.atan(Math.abs(deltay / deltax))         // 第四项限
        }

        return rad;

    }

}