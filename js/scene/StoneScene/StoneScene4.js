///////////////////////////////////////////////
//
//LittleAttack从边缘两侧交叉下落
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  Stone
} from "../../npc/Stone/Stone";
import { RandomUtil } from "../../base/Util/RandomUtil";

export class StoneScene4 extends Scene {
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
    var random = RandomUtil.randomInt(1, 12);
    var stone = 'stone' + random;
    let seconds = this.frame / 60;
    let enemys = DataStore.getInstance().get('enemy');
    const canvas = DataStore.getInstance().canvas;
    if (this.frame % 120 === 0 && seconds < 30) {
      let enemy1 = new Stone(stone);
      enemys.push(enemy1);

    }

  }


}