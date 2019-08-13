///////////////////////////////////////////////
//
//LittleAttack任意位置出现下落
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  LittleAttack2
} from "../../npc/LittleAttack/LittleAttack2";


export class LittleAttack2Scene extends Scene {
  constructor() {
    super();
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

    let seconds = this.frame / 60;
    let enemys = DataStore.getInstance().get('enemy');
    if (this.frame % 30 === 0 && seconds < 10) {
      let enemy = new LittleAttack2();
      enemys.push(enemy);
    }

  }


}