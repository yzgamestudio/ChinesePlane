import {Sprite} from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
const res = wx.getSystemInfoSync();
// 开始类
export class BackGround extends Sprite{
  constructor() {
    const image1 = Sprite.getImage('background1');
    super(image1,
      0, 0, image1.width, image1.height,
      0, -DataStore.getInstance().canvas.height, res.windowWidth, res.windowHeight);
      this.top=0
      this.index=0;

    const image2 = Sprite.getImage('background2');
    const image3 = Sprite.getImage('background3');
    this.images = []
    this.images.push(image1)
    this.images.push(image2)
    this.images.push(image3)
  }
  draw(){
    const canvas = DataStore.getInstance().canvas;
    this.top += 1 ;
    if (this.top > canvas.height) {
      this.top = 0;
      this.index++;
      if(this.index===3){
        this.index=0;
      }
    }
    this.ctx.drawImage(
      this.images[(this.index+1)%3],
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
      this.images[this.index],
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