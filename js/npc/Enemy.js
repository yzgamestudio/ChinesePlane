import {Sprite} from '../base/Sprite.js'
import { DataStore } from '../base/DataStore.js'
// 开始类
export class Enemy extends Sprite {
    constructor() {
        const image = Sprite.getImage('enemy'); // 获取图片
        const  canvas = DataStore.getInstance().canvas;
        const  x = canvas.width * 0.5 - image.width;
        const  y = - image.height;
        super(image,
            0, 0, image.width, image.height,
            x, y ,image.width, image.height);
        this.enableCollide = true;
    }

    draw() {
        this.y = this.y + 2;
        super.draw();
    }
}