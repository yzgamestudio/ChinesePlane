import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import { Boss } from "../npc/Boss";


export class BossScene extends Scene {
  constructor(imgName = 'boss1',bulletNum=3,bossNum=1) {
    super();
    this.imgName=imgName;
    this.bulletNum=bulletNum;
    this.bossNum=bossNum;
  }

  canRemove() {
    let boss = DataStore.getInstance().get('enemy');
    // 没有boss就可以通关了
    if (boss.length===0) {
      return true;
    }
    else {
      return false;
    }
  }

  update() {
    super.update();
    if(this.bossNum>0){
      this.bossNum--;
      let boss = new Boss(this.imgName);
      let enemies = DataStore.getInstance().get('enemy');
      enemies.push(boss)
    }

    if (this.frame % 20 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        item.shoot(this.bulletNum);
      })
    }
    
  }


}