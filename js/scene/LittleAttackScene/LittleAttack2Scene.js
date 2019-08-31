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
  constructor(delay=0,lastTime=0) {
    super();
    this.delay=delay;
    this.lastTime=lastTime
  }

  canRemove() {
    let seconds = this.frame / 60;

    if (seconds < this.lastTime) {
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
    if(this.delay<=this.seconds()){
      let seconds = this.frame / 60;
      let enemys = DataStore.getInstance().get('enemy');
      if (this.frame % 30 === 0 && seconds < this.lastTime) {
        let enemy = new LittleAttack2();
        enemys.push(enemy);
      }
    }
  }


}