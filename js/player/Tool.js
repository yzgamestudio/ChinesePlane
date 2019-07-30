import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
import { RandomUtil } from "../base/Util/RandomUtil";
export class Tool extends Sprite {
   constructor(){
     const image = Sprite.getImage('bubble');
     const canvas = DataStore.getInstance().canvas;
     const ctx = DataStore.getInstance().context;
     let randomX = RandomUtil.random(0, canvas.width - image.width/2);  // 随机生成一个位置区域X
     const y = - image.height; 
     super(image,
       0, 0, image.width, image.height,
       randomX, y, image.width/2, image.height/2);
   }
   draw(){
     this.x += RandomUtil.random(-5,5)
     this.y += RandomUtil.random(-5,6)
     super.draw();
   }

}