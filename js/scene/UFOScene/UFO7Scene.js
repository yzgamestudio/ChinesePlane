///////////////////////////////////////////////
//
//spaceship从屏幕边缘左侧右侧分别进入三架飞机 排成两行三列队列 然后自由发射子弹  飞机随机
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  Spaceship
} from "../../npc/Spaceship/Spaceship";
import { Sprite } from '../../base/Sprite.js'
import { RandomUtil } from "../../base/Util/RandomUtil";
import { UFO4 } from "../../npc/UFO/UFO4";

export class UFO7Scene extends Scene {
  constructor(imgName = 'UFO1') {
    super();
    this.bulletNum = 3
    this.imgName = imgName

  }

  canRemove() {
    let seconds = this.frame / 60;

    if (seconds < 10) {
      return false;
    }
    let enemys = DataStore.getInstance().get('enemy');
    if (enemys.length > 0) {
      return false;
    }
    return true;

  }

  update() {
    super.update();
    const image = Sprite.getImage(this.imgName); // 获取图片
    let seconds = this.frame / 60;
    let enemys = DataStore.getInstance().get('enemy');
    const canvas = DataStore.getInstance().canvas;

    if (this.frame % 300 === 0 && seconds < 10) {
      let random = RandomUtil.randomInt(1, 6.9);
      var ufo = 'UFO' + random;
      let enemy1 = new UFO4(-image.width, canvas.height * 0.2, 0, canvas.height * 0.3, ufo);
      random = RandomUtil.randomInt(1, 6.9);
      ufo = 'UFO' + random;
      let enemy2 = new UFO4(-image.width, canvas.height * 0.3, 0, canvas.height * 0.4, ufo);
      random = RandomUtil.randomInt(1, 6.9);
      ufo = 'UFO' + random;
      let enemy3 = new UFO4(canvas.width, canvas.width * 0.2, canvas.width * 0.8, canvas.height * 0.3,  ufo);
      random = RandomUtil.randomInt(1, 6.9);
      ufo = 'UFO' + random;
      let enemy4 = new UFO4(canvas.width, canvas.height * 0.3, canvas.width * 0.8, canvas.height * 0.4, ufo);

      enemys.push(enemy1);
      enemys.push(enemy2);
      enemys.push(enemy3);
      enemys.push(enemy4);

    }
    if (this.frame % 60 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        if (item.type === 'ufo')
          item.shoot(this.bulletNum);
      })
    }

  }


}