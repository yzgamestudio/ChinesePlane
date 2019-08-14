///////////////////////////////////////////////
//
//UFO三敌机逆时针飞过 ，发射子弹
//
//////////////////////////////////////////////
import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { Boss } from "../../npc/Boss";
import { UFO2 } from "../../npc/UFO/UFO2";

export class UFO2Scene extends Scene {
  constructor() {
    super();
  }

  canRemove() {
    let boss = DataStore.getInstance().get('enemy');
    if (boss.length === 0 && this.seconds() > 5) {
      return true;
    }
    else {
      return false;
    }
  }

  update() {
    super.update()
    if (this.seconds() > this.delay && this.seconds() < 10) {
      if (this.seconds() % 3 === 0) {
        let UFOs = DataStore.getInstance().get('enemy');
        UFOs.push(new UFO2)
      }
    }
    if (this.seconds() % 1 === 0) {
      let enemies = DataStore.getInstance().get('enemy');
      enemies.forEach((enemy, index, array) => {
        if (enemy.type === 'ufo') {
          enemy.shoot()
        }
      })
    }

  }
}