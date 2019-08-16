///////////////////////////////////////////////
//
//spaceship从屏幕上侧分别进入三架飞机 排成两行三列队列 然后自由发射子弹
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

export class SpaceshipScene2 extends Scene {
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
      let enemy1 = new Spaceship(200, -image.height, canvas.width / 2 - image.width / 2, canvas.height * 0.3, 'spaceship1');
      let enemy2 = new Spaceship(100, -image.height, canvas.width / 2 - image.width / 2-image.width-10, canvas.height * 0.3, 'spaceship2');
      let enemy3 = new Spaceship(300, -image.height, canvas.width / 2 - image.width / 2 + image.width+10, canvas.height * 0.3, 'spaceship3');
      let enemy4 = new Spaceship(200, -image.height, canvas.width / 2 - image.width / 2, canvas.height * 0.4, 'spaceship1');
      let enemy5 = new Spaceship(100, -image.height, canvas.width / 2 - image.width / 2 - image.width - 10, canvas.height * 0.4, 'spaceship2');
      let enemy6 = new Spaceship(300, -image.height, canvas.width / 2 - image.width / 2 + image.width + 10, canvas.height * 0.4, 'spaceship3');
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