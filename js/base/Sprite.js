import { DataStore } from '../base/DataStore.js'


// 精灵的基类
export class Sprite {

  /**
   *
   * @param img  图片对象
   * @param srcX 图片的裁剪左上角的X
   * @param srcY 图片的裁剪左上角的Y
   * @param srcW 图片的裁剪宽度
   * @param srcH 图片的裁剪高度
   * @param x    canvas坐标系的x
   * @param y    canvas坐标系的y
   * @param width 精灵在canvs的width
   * @param height 精灵在canvs的height
   */
  constructor(img = null,
    srcX = 0,
    srcY = 0,
    srcW = 0,
    srcH = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    ) {
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.dpr = this.dataStore.systeminfo.pixelRatio;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isVisible = true;
  }

  
  static getImage(key) {
    return DataStore.getInstance().res.get(key);
  }


  /**
   * @desc 渲染精灵到canvas上
   * @param img 图片对象
   * @param srcX 图片的裁剪左上角的X
   * @param srcY 图片的裁剪左上角的Y
   * @param srcW 图片的裁剪宽度
   * @param srcH 图片的裁剪高度
   * @param x canvas坐标系的x
   * @param y canvas坐标系的y
   * @param width 精灵在canvs的width
   * @param height 精灵在canvs的height
   */
  draw(img = this.img,
    srcX = this.srcX,
    srcY = this.srcY,
    srcW = this.srcW,
    srcH = this.srcH,
    x = this.x,
    y = this.y,
    width = this.width,
    height = this.height) {
    if(!this.isVisible) {
      return ;
    }

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

  // 如何实现碰撞检测
  // 求两个矩形是否相连或相交，两个矩形的最小外包矩形宽小于两个矩形宽的和

  /**
   *
   * @param otherSprite 参与碰撞的精灵
   * @returns {boolean} true为碰撞 false 没有产生碰撞
   */
  isCollide(otherSprite) {

    // 本身无这个能力 那么关闭不检测
    if(!this.isVisible || !otherSprite.isVisible) {
      return false;
    }


    // 构造最小外包矩形:最小外包矩形MBR就是包围图元，且平行于X，Y轴的最小外接矩形
    let mbrX = Math.min(this.x, otherSprite.x);
    let mbrY = Math.min(this.y, otherSprite.y);
    let mbrRight = Math.max(this.x + this.width, otherSprite.x + otherSprite.width);
    let mbrBottom = Math.max(this.y + this.height, otherSprite.y + otherSprite.height);
    // 求两个矩形是否相连或相交，两个矩形的最小外包矩形宽小于两个矩形宽的和，
    // 且两个矩形最小外包矩形的的高小于两个矩形高的和
    const offsetX = 0; // 由于图片自带留白，实际的外包矩形比可见的大
    const offsetY = 0 ; // 由于图片自带留白，实际的外包矩形比可见的大

    let mbrWidth = mbrRight - mbrX;
    let mbrHeight = mbrBottom - mbrY;
    // debugger;
    if (this.width + otherSprite.width >= mbrWidth + offsetX &&
      this.height + otherSprite.height >= mbrHeight + offsetY) {
      return true;
    } else {
      return false;
    }
  }

  isCollideWith(sp) {
    // 本身无这个能力 那么关闭不检测
	  if (!this.isVisible || !sp.isVisible) {
      return false;
    }

    let spX = sp.x + sp.width / 2
    let spY = sp.y + sp.height / 2

    return !!(spX >= this.x
      && spX <= this.x + this.width
      && spY >= this.y
      && spY <= this.y + this.height)
  }

}