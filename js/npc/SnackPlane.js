import {Sprite} from "../base/Sprite";
import {DataStore} from '../base/DataStore.js'
import { Animation } from "../base/Animation";

export class SnackPlane extends Animation {
  constructor(imgname = 'airforce1') {
        const image = Sprite.getImage(imgname); // 获取图片

        let y = -image.height; // 所有敌机都是在刚离屏的位置Y
        let x = DataStore.getInstance().canvas.width * 0.5 - image.width * 0.5;
        // 如何实现随机多个敌机？

        super(image,
            0, 0, image.width, image.height,
            x, y, image.width, image.height);

        this.xspeed = GameGlobal.fit(-5);
		this.yspeed = GameGlobal.fit(5);

    }

    draw() {

		if(this.x <= 0) {
			this.xspeed = -this.xspeed;
		}
		if(this.x + this.width >= DataStore.getInstance().canvas.width) {
			this.xspeed = -this.xspeed;
		}
		this.x = this.x + this.xspeed;

        this.y = this.y + this.yspeed;
		// this.x = 100;
		// console.log('SnackPlane y' + this.y);
        super.draw();
    }

}