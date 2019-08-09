import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import { Boss } from "../npc/Boss";


export class BossScene extends Scene {
  constructor(imgname = 'boss1',bulletNum=3) {
    super();
    let boss = new Boss(imgname);
    DataStore.getInstance().put('enemy', boss);
    this.bulletNum=bulletNum;
  }

  canRemove() {
    let boss = DataStore.getInstance().get('enemy');
    // 没有boss就可以通关了
    if (boss === undefined) {
      return true;
    }
    else {
      return false;
    }
  }

  update() {
    super.update();

    let boss = DataStore.getInstance().get('enemy');
    boss.draw();
    if (this.frame % 20 === 0) {
      boss.shoot(this.bulletNum);
    }
    
    let bossBullets = DataStore.getInstance().get(boss.bullet());
    if (Array.isArray(bossBullets)) {
      bossBullets.forEach(function (bossBullet, index, array) {
        bossBullet.draw();
      });
    }

  }


}