// import  Sprite  from "../base/Sprite";
// import  DataStore  from "../base/DataStore";
import {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";


export class BossBullet extends Sprite {
    constructor(x, y) {
      const img = Sprite.getImage('bossBullet');
        super(img,
            0, 0, img.width, img.height,
            x, y, img.width, img.height);
        this.speed = GameGlobal.fit(5);
    }

    draw() {
        this.y += this.speed;
        super.draw();
    }

}
