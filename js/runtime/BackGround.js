import {Sprite} from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
// 开始类
export class BackGround extends Sprite{
  constructor() {
    const image = Sprite.getImage('background');
    console.log('background width');
    super(image,
      0, 0, image.width, image.height,
      0, 0, DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height);
  }

  draw(){
    super.draw();
  }
}