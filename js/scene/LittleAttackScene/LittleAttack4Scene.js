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
  LittleAttack4
} from "../../npc/LittleAttack/LittleAttack4";


export class LittleAttack4Scene extends Scene {
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
    const canvas = DataStore.getInstance().canvas;
    if (this.frame % 20 === 0 && seconds < 10) {
      let enemy1 = new LittleAttack4('littleAttack2','left');
      let enemy2 = new LittleAttack4('littleAttack2', 'right');
      enemys.push(enemy1);
      enemys.push(enemy2);
    }

  }


}