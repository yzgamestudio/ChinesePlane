import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";
import { RandomUtil } from "../base/Util/RandomUtil";
export class Tool extends Sprite {
   constructor(imgName='tool1'){
     const image = Sprite.getImage(imgName);
     const canvas = DataStore.getInstance().canvas;
     const ctx = DataStore.getInstance().context;
     let randomX = RandomUtil.random(0, canvas.width - image.width);  // 随机生成一个位置区域X
     const y = -image.height; 

     super(image,
       0, 0, image.width, image.height,
       randomX, y,image.width, image.height);
     this.enableGet = true;//道具可以被接
     this.isVisible = true;
     //同向位移计数器
     this.moveNum = 0;
     this.type='tool'
     this.imgName=imgName;
   }
   draw(){
     if (this.moveNum % 20 === 0) {
       this.randomXSpeed = RandomUtil.random(-2, 2);
       this.randomYSpeed = RandomUtil.random(-2, 3);
     }
     this.moveNum++;
     this.y = this.y + Math.trunc(GameGlobal.fit(this.randomYSpeed));
     this.x = this.x + Math.trunc(GameGlobal.fit(this.randomXSpeed));
     super.draw();
   }

}