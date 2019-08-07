import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import { Boss } from "../npc/Boss";


export class BossScene extends Scene {
  constructor(imgname = 'boss1',bulletNum=3) {
    super();
    let boss = new Boss(imgname);
    DataStore.getInstance().put('boss', boss);
    this.bulletNum=bulletNum;
  }

  canRemove() {
    let boss = DataStore.getInstance().get('boss');
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

    let boss = DataStore.getInstance().get('boss');
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

    this.recover();
  }

  recover() {
    let boss = DataStore.getInstance().get('boss');
    let isOffScreen = GameGlobal.isOffScreen(boss.x, boss.y, boss.height);
    if (isOffScreen) {
      DataStore.getInstance().destoryItem(boss);
    }

    let bossBullets = DataStore.getInstance().get(boss.bullet());
    if (!Array.isArray(bossBullets)) {
      return;
    }
    bossBullets.forEach(function (bossBullet, index, array) {
      let isOffScreen = GameGlobal.isOffScreen(bossBullet.x, bossBullet.y, bossBullet.height);
      if (isOffScreen) {
        array.splice(index, 1);
      }
    });
  }
}