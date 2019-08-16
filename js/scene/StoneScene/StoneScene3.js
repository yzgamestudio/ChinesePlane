///////////////////////////////////////////////
//
//stone 变成stone墙 石头随机
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  Stone2
} from "../../npc/Stone/Stone2";
import { Sprite } from '../../base/Sprite'
import { RandomUtil } from "../../base/Util/RandomUtil";
export class StoneScene3 extends Scene {
  constructor() {
    super();
  }

  canRemove() {
    let seconds = this.frame / 60;

    if (seconds < 30) {
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

    let seconds = this.frame / 60;
    let enemys = DataStore.getInstance().get('enemy');
    var random = RandomUtil.randomInt(1, 12);
    var stone = 'stone' + random;
    const canvas = DataStore.getInstance().canvas;
    const image = Sprite.getImage(stone); // 获取图片
    if (seconds % 5 === 0 && seconds < 30) {

      for(var i=0,li=canvas.width/image.width;i<li;i++){
        let enemy1 = new Stone2(i*image.width,stone);
        enemys.push(enemy1);
      }


    }

  }


}