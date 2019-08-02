import { Sprite } from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'

export class FollowPlane extends Sprite {
  constructor() {
    const image = Sprite.getImage('followPlane'); // 获取图片
    const y = - image.height; // 所有敌机都是在刚离屏的位置Y
    const canvas = DataStore.getInstance().canvas;

    let x =  canvas.width * 0.5;


    super(image,
      0, 0, image.width, image.height,
      x, y, image.width, image.height);
    this.enableCollide = true;
    this.speed =  GameGlobal.fit(100);
    this.isPlaying = true;
  }

  draw(otherSpriteX, otherSpriteY) {

    // let xRatio = (otherSpriteX - this.x)/this.speed;
    // let yRatio = (otherSpriteY - this.y)/this.speed;
    // this.x = otherSpriteX + xRatio;
    this.y = this.y + this.speed;

    const canvas = DataStore.getInstance().canvas;
    if(this.x < 0) {
      this.x = 0;
    }
    if(this.x + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    }
    console.log(this);
    super.draw();
  }

}