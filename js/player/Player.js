import {
  Sprite
} from "../base/Sprite";
import {
  DataStore
} from "../base/DataStore";
import {
  AngleBullet
} from "../player/angleBullet";
export class Player extends Sprite {
  constructor(imgname = 'player', bulletNum = 1, bulletImg = 'bullet2') {
    const img = Sprite.getImage(imgname);
    const canvas = DataStore.getInstance().canvas;
    let x = canvas.width * 0.5 - img.width * 0.5;
    let y = canvas.height - img.height;

    super(img,
      0, 0, img.width, img.height,
      x, y, img.width, img.height);
    this.enableCartch = true; //可以接道具
    this.dpr = GameGlobal.dpr;
    //  如何让精灵随手指移动
    this.touch = false;
    this.blood = 1;
    let that = this; //  is not function bug fix
    this.callbackTouchStart = function(e) {
      let touch = e.changedTouches[0];
      var x = touch.clientX * that.dpr;
      var y = touch.clientY * that.dpr;
      if (that.checkIsFingerOnAir(x, y)) {
        that.touch = true; // 标记手指按下的飞机
      } else {
        that.touch = false;
      }
    }
    this.callbackTouchMove = function(e) {
      let touch = e.changedTouches[0];
      var x = touch.clientX * that.dpr;
      var y = touch.clientY * that.dpr;
      if (that.touch) {
        that.moveAirOnPostion(x, y); // 移动到指定位置
      }
    }
    this.callbackTouchEnd = function(e) {
      that.touch = false; // 离开时标记为touch = false
    }
    //开启player移动监听
    wx.onTouchStart(this.callbackTouchStart);
    wx.onTouchMove(this.callbackTouchMove)
    wx.onTouchEnd(this.callbackTouchEnd)
    this.bulletNum = bulletNum;
    this.bulletImg = bulletImg;
    //子弹增强倒计时
    this.count = 0;
    //防护罩倒计时
    this.countShield = 0;
    this.shield = false;
  }


  stopPlayerMoveListening() {
    wx.offTouchStart(this.callbackTouchStart);
    wx.offTouchMove(this.callbackTouchStart)
    wx.offTouchEnd(this.callbackTouchEnd)
  }



  draw() {
    super.draw(this.img,
      this.srcX, this.srcY, this.srcW, this.srcH,
      this.x, this.y, this.width, this.height);
    if (this.count > 0) {
      this.count--;
      if (this.count === 0) {
        this.bulletNum = 1;
      }
    }
    if (this.countShield > 0) {
      this.countShield--;
      if (this.countShield === 0) {
        const img = Sprite.getImage('player');
        this.img = img;
        this.srcX = 0;
        this.srcY = 0;
        this.srcW = img.width;
        this.srcH = img.height;
        this.width = img.width;
        this.height = img.height;
        this.shield = false;
      }
    }
  }


  // 判读手指是否接触了飞机区域，offset是偏移，当靠近飞机 也认为是接触了飞机，因为图片总是有留白的

  checkIsFingerOnAir(x, y) {
    const canvas = DataStore.getInstance().canvas;
    const offset = 0;
    let minX = this.x - offset;
    let maxX = this.x + this.width + offset;
    let minY = this.y - offset;
    let maxY = this.y + this.height + offset;
    if (x <= maxX && x >= minX ||
      y <= maxY && y >= minY
    ) {
      return true;
    }
    return false;
  }

  moveAirOnPostion(midX, midY) {
    const canvas = DataStore.getInstance().canvas;

    let x = midX - this.width / 2;
    let y = midY - this.height / 2;

    if (x < 0) {
      x = 0;
    }
    if (x > canvas.width - this.width) {
      x = canvas.width - this.width;
    }

    if (y < 0) {
      y = 0;
    }
    if (y > canvas.height - this.height) {
      y = canvas.height - this.height;
    }

    this.x = x;
    this.y = y;
  }

  shoot() {
    let playerBullets = DataStore.getInstance().get('playerBullets');

    if (this.bulletNum >= 1) {
      let playerBullet = new AngleBullet(this.bulletImg, 90);
      playerBullets.push(playerBullet);
    }
    if (this.bulletNum >= 2) {
      let playerBullet = new AngleBullet(this.bulletImg, 85);
      playerBullets.push(playerBullet);
    }
    if (this.bulletNum >= 3) {
      let playerBullet = new AngleBullet(this.bulletImg, 95);
      playerBullets.push(playerBullet);
    }
    if (this.bulletNum >= 4) {
      let playerBullet = new AngleBullet(this.bulletImg, 80);
      playerBullets.push(playerBullet);
    }
    if (this.bulletNum >= 5) {
      let playerBullet = new AngleBullet(this.bulletImg, 100);
      playerBullets.push(playerBullet);
    }
    if (this.bulletNum >= 6) {
      let playerBullet = new AngleBullet(this.bulletImg, 75);
      playerBullets.push(playerBullet);
    }
    if (this.bulletNum >= 7) {
      let playerBullet = new AngleBullet(this.bulletImg, 105);
      playerBullets.push(playerBullet);
    }

  }

}