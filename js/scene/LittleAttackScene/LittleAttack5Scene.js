///////////////////////////////////////////////
//
//LittleAttack在屏幕中心飞出
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  LittleAttack5
} from "../../npc/LittleAttack/LittleAttack5";

const TOTALSECONDS = 20;

export class LittleAttack5Scene extends Scene {
  constructor() {
    super();

  }

  canRemove() {
    // return true;
    if (this.seconds() < TOTALSECONDS) {
      return false;
    }

    let flowers = DataStore.getInstance().get('enemy');
    if (flowers.length > 0) {
      return false;
    }

    return true;


  }

  update() {
    super.update();
    // debugger;
    let flowers = DataStore.getInstance().get('enemy');

    if (this.seconds() < TOTALSECONDS) {
      if (this.frame % 120 === 0) {
        // debugger;
        flowers.push(new LittleAttack5(30, 5));
        flowers.push(new LittleAttack5(60, 5));
        flowers.push(new LittleAttack5(90, 5));
        flowers.push(new LittleAttack5(120, 5));
        flowers.push(new LittleAttack5(150, 5));
        flowers.push(new LittleAttack5(180, 5));
        flowers.push(new LittleAttack5(210, 5));
        flowers.push(new LittleAttack5(240, 5));
        flowers.push(new LittleAttack5(270, 5));
        flowers.push(new LittleAttack5(300, 5));
        flowers.push(new LittleAttack5(330, 5));
        flowers.push(new LittleAttack5(360, 5));

      }
    }


  }

}