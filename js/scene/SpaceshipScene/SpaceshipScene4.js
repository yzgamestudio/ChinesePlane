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


export class SpaceshipScene4 extends Scene {
  constructor(imgName = 'spaceship1') {
    super();
    this.bulletNum=3
    this.imgName=imgName

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
      let random = RandomUtil.randomInt(1, 12);
      var ship='spaceship'+random;  
      let enemy1 = new Spaceship(-image.width, canvas.height * 0.2, canvas.width / 2 - image.width / 2 - image.width- 10, canvas.height * 0.3, ship);
      random = RandomUtil.randomInt(1, 12);
      ship = 'spaceship' + random;
      let enemy2 = new Spaceship(100, -image.height, canvas.width / 2 - image.width / 2, canvas.height * 0.3, ship);
      random = RandomUtil.randomInt(1, 12);
      ship = 'spaceship' + random;
      let enemy3 = new Spaceship(canvas.width, canvas.height * 0.2, canvas.width / 2 - image.width / 2 + image.width+10, canvas.height * 0.3, ship);
      random = RandomUtil.randomInt(1, 12);
      ship = 'spaceship' + random;
      let enemy4 = new Spaceship(-image.width, canvas.height * 0.3, canvas.width / 2 - image.width / 2 - image.width- 10, canvas.height * 0.4, ship);
      random = RandomUtil.randomInt(1, 12);
      ship = 'spaceship' + random;
      let enemy5 = new Spaceship(100, -image.height, canvas.width / 2 - image.width / 2, canvas.height * 0.4, ship);
      random = RandomUtil.randomInt(1, 12);
      ship = 'spaceship' + random;
      let enemy6 = new Spaceship(canvas.width, canvas.height * 0.3, canvas.width / 2 - image.width / 2 + image.width + 10, canvas.height * 0.4, ship);
      enemys.push(enemy1);
      enemys.push(enemy2);
      enemys.push(enemy3);
      enemys.push(enemy4);
      enemys.push(enemy5);
      enemys.push(enemy6);
    }
    if (this.frame % 60 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        if(item.type==='spaceship')
        item.shoot(this.bulletNum);
      })
    }

  }


}