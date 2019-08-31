///////////////////////////////////////////////
//
//LittleAttack垂直两列下落
//
//////////////////////////////////////////////
import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { LittleAttack } from "../../npc/LittleAttack/LittleAttack";


export class LittleAttackScene extends Scene {
  constructor(delay=0,lastTime=10) {
    super();
    this.delay=delay;
    this.lastTime=lastTime
  }

  canRemove() {
    let seconds = this.frame / 60;
    if (seconds < this.lastTime) {
      return false;
    }
    let littleAttacks = DataStore.getInstance().get('enemy');
    if (Array.isArray(littleAttacks)) {
      if (littleAttacks.length <= 0) {
        return true;
      }
    }
    return false;

  }

  update() {
    super.update();
    if(this.delay<=this.seconds()){
      this.construct();
    }
  }

  construct() {
    let littleAttacks = DataStore.getInstance().get('enemy');
    let seconds = this.frame / 60;
    if (seconds > this.lastTime) {
      // do nothing
    } else {
      if (this.frame % 30 === 0) {
        let attack = new LittleAttack(true);
        let attack2 = new LittleAttack(false);
        littleAttacks.push(attack);
        littleAttacks.push(attack2);
      }
    }
  }



}