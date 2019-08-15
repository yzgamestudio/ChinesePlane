///////////////////////////////////////////////
//
//spaceship从屏幕边缘上侧和左侧进入 排成一字队列 然后自由发射子弹
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

export class SpaceshipScene extends Scene {
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
      let enemy1 = new Spaceship(200, 0, canvas.width / 2 - image.width / 2, canvas.height * 0.3, 'spaceship1');
      let enemy2 = new Spaceship(100, 0, canvas.width / 2 - image.width / 2-image.width, canvas.height * 0.3, 'spaceship1');
      let enemy3 = new Spaceship(300, 0, canvas.width / 2 - image.width / 2 + image.width, canvas.height * 0.3, 'spaceship1');
      enemys.push(enemy1);
      enemys.push(enemy2);
      enemys.push(enemy3);
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