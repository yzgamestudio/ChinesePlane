import {Sprite} from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
// 开始类
export class BackGround extends Sprite{
  constructor() {
    const image = Sprite.getImage('background');
    super(image,
      0, 0, image.width, image.height,
      0, -DataStore.getInstance().canvas.height, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height * 2, false);
  }

  draw(){
    this.y += 5;
    if (this.y > 0) {
      this.y = - DataStore.getInstance().canvas.height;
    }
    super.draw();
  }
}