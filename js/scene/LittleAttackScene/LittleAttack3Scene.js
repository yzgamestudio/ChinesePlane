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
  LittleAttack3
} from "../../npc/LittleAttack/LittleAttack3";


export class LittleAttack3Scene extends Scene {
  constructor(delay=0,lastTime=10) {
    super();
    this.delay=delay;
    this.lastTime=lastTime;
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
      const canvas = DataStore.getInstance().canvas;
      if (this.frame % 20 === 0 && seconds < this.lastTime) {
        let enemy1 = new LittleAttack3(0, 0, 60);
        let enemy2 = new LittleAttack3(canvas.width, 0, 120);
        enemys.push(enemy1);
        enemys.push(enemy2);
      }
    }
  }


}