import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import { LittleAttack } from "../npc/LittleAttack";


export class LittleAttackScene extends Scene {
  constructor() {
    super();
  }

  canRemove() {
    let seconds = this.frame / 60;
    if (seconds < 10) {
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
    this.construct();
    this.draw();
    this.recover();
  }

  construct() {
    let littleAttacks = DataStore.getInstance().get('enemy');
    let seconds = this.frame / 60;
    if (seconds > 10) {
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

  draw() {
    let littleAttacks = DataStore.getInstance().get('enemy');
    if (Array.isArray(littleAttacks)) {
      littleAttacks.forEach(function (item, index, array) {
        item.draw();
      });
    }
  }


}