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
  constructor(x,y,imgname = 'player', bulletNum = 1, bulletImg = 'bullet2') {
    const img = Sprite.getImage(imgname);
    const canvas = DataStore.getInstance().canvas;
    super(img,
      0, 0, img.width, img.height,
      x, y, img.width, img.height);
    this.enableCartch = true; //可以接道具
    this.dpr = GameGlobal.dpr;
    //  如何让精灵随手指移动
    this.touch = false;
    this.blood = 2;
    this.score=0;
    this.fullBlood=2;
    let that = this; //  is not function bug fix
    this.callbackTouchStart = function(e) {
      let touch = e.changedTouches[0];
      var x = touch.clientX;
      var y = touch.clientY;
      if (that.checkIsFingerOnAir(x, y)) {
        that.touch = true; // 标记手指按下的飞机
      } else {
        that.touch = false;
      }
    }
    this.callbackTouchMove = function(e) {
      let touch = e.changedTouches[0];
      var x = touch.clientX ;
      var y = touch.clientY ;
      if (that.touch) {
        that.moveAirOnPostion(x, y); // 移动到指定位置
      }
    }
    this.callbackTouchEnd = function(e) {
      that.touch = false; // 离开时标记为touch = false
    }
    //开启player移动监听
    this.startPlayerMoveListening()
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

  startPlayerMoveListening() {
    //开启player移动监听
    wx.onTouchStart(this.callbackTouchStart);
    wx.onTouchMove(this.callbackTouchMove)
    wx.onTouchEnd(this.callbackTouchEnd)
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

  drawScore(){
    const ctx = DataStore.getInstance().ctx;
    const canvas = DataStore.getInstance().canvas;
    ctx.font = "30px Georgia";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("score", 20 * GameGlobal.dpr, 60 * GameGlobal.dpr);
    ctx.fillText(this.score, 20 * GameGlobal.dpr+75, 60 * GameGlobal.dpr);
  }

  drawBlood() {
    const ctx = DataStore.getInstance().ctx;
    const canvas = DataStore.getInstance().canvas;
    ctx.font = "30px Georgia";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("hp", 20 * GameGlobal.dpr, 30 * GameGlobal.dpr);
    ctx.fillStyle = "#ff0000";
    const width = canvas.width*0.2 * this.blood / this.fullBlood;
    const height = 10 * GameGlobal.dpr;
    ctx.fillRect( 20* GameGlobal.dpr+60,  20 * GameGlobal.dpr, width, height);
    ctx.font = "30px Georgia";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(this.blood, 20 * GameGlobal.dpr + 70 + canvas.width * 0.2 * this.blood / this.fullBlood, 30 * GameGlobal.dpr);
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