import {Sprite} from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
// 开始类
export class BackGround extends Sprite{
  constructor() {
    const image = Sprite.getImage('background');
    super(image,
      0, 0, image.width, image.height,
      0, -DataStore.getInstance().canvas.height, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height);
      this.top=0
  }
  draw(){
    const canvas = DataStore.getInstance().canvas;
    this.top += 1 * GameGlobal.dpr;
    if (this.top > canvas.height) {
      this.top = 0;
    }
    this.ctx.drawImage(
      this.img,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      0,
      -canvas.height+this.top,
      this.width,
      this.height
    )
    this.ctx.drawImage(
      this.img,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      0,
      this.top,
      this.width,
      this.height
    )
  }
}