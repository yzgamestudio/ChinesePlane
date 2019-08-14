import {Sprite} from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
// 开始类
export class BackGround extends Sprite{
  constructor() {
    const image = Sprite.getImage('background');
    super(image,
      0, 0, image.width, image.height,
      0, -DataStore.getInstance().canvas.height, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height, false);
      this.x2=0;
      this.y2=0
  }
  draw(){
    this.y += 1 * GameGlobal.dpr;
    if (this.y > 0) {
      this.y = - DataStore.getInstance().canvas.height;
    }
    if (this.y2 > DataStore.getInstance().canvas.height){
      this.y2=0;
    }
    super.draw();
    this.y2 += 1 * GameGlobal.dpr;
    this.ctx.drawImage(
      this.img,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      this.x2,
      this.y2,
      this.width,
      this.height
    )
  }
}