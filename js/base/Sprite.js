import { DataStore } from '../base/DataStore.js'


// 精灵的基类
export class Sprite {

  constructor(img = null,
    srcX = 0,
    srcY = 0,
    srcW = 0,
    srcH = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0) {
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
    this.enableCollide = false;
    this.isVisble = true;
  }

  static getImage(key) {
    return DataStore.getInstance().res.get(key);
  }

  draw(img = this.img,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH,
    x = this.x,
    y = this.y,
    width = this.width,
    height = this.height) {

    this.ctx.drawImage(
      img,
      srcX,
      srcY,
      srcW,
      srcH,
      x,
      y,
      width,
      height
    )
  }

  // 求两个矩形是否相连或相交，两个矩形的最小外包矩形宽小于两个矩形宽的和
  isCollide(otherSprite) {
    let result = false;

    if(this.enableCollide == false || otherSprite.enableCollide == false) {
      return;
    }

    // 构造最小外包矩形:最小外包矩形MBR就是包围图元，且平行于X，Y轴的最小外接矩形
    let mbrX = Math.min(this.x, otherSprite.x);
    let mbrY = Math.min(this.y, otherSprite.y);
    let mbrRight = Math.max(this.x + this.width, otherSprite.x + otherSprite.width);
    let mbrBottom = Math.max(this.y + this.height, otherSprite.y + otherSprite.height);

    // 求两个矩形是否相连或相交，两个矩形的最小外包矩形宽小于两个矩形宽的和，
    // 且两个矩形最小外包矩形的的高小于两个矩形高的和
    let mbrWidth = mbrRight - mbrX;
    let mbrHeight = mbrBottom - mbrY;
    if(this.width + otherSprite.width <= mbrWidth ||
       this.height + otherSprite.height >= mbrHeight) {
      return true;
    } else {
      return false;
    }
 


  }


}