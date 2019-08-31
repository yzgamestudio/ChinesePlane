import {Sprite} from "../../base/Sprite";
import {DataStore} from "../../base/DataStore";


export class BossBullet extends Sprite {
  constructor(x, y, imgname = 'bullet',speed=5) {
      const img = Sprite.getImage(imgname);
        super(img,
            0, 0, img.width, img.height,
            x, y, img.width, img.height);
        this.speed = GameGlobal.fit(speed);
    }

    draw() {
        this.y += this.speed;
        super.draw();
    }

}
