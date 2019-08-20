import { Sprite } from '../../base/Sprite.js'
import { DataStore } from '../../base/DataStore.js'
// 开始类
export class VictoryLogo extends Sprite {
  constructor() {
    const image = Sprite.getImage('victory');
    const canvas = DataStore.getInstance().canvas;
    super(image,
      0, 0, image.width, image.height,
      0, canvas.height * 0.3, canvas.width, canvas.width * image.height/image.width);
  }

  draw() {
    super.draw();

  }
}