import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { Boss2 } from "../../npc/Boss/Boss2";
import { RandomUtil } from "../../base/Util/RandomUtil";
import { FollowPlane } from "../../npc/FollowPlane/FollowPlane";
export class BossScene3 extends Scene {
  constructor(imgName = 'boss3',bulletNum=7,bossNum=1) {
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
      let boss = new Boss2(this.imgName);
      let enemies = DataStore.getInstance().get('enemy');
      enemies.push(boss)
    }

    if (this.frame % 30 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        if(item.type==='boss')
        item.shoot(this.bulletNum);
      })
    }
    if (this.seconds() % 5 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        var random = RandomUtil.randomInt(1, 3.9);
        var followplane = 'followplane' + random;
        _enemies.push(new FollowPlane(item.x + item.width / 2, item.y + item.height / 2, followplane))
      })
    }
  }


}