import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { Boss5 } from "../../npc/Boss/Boss5";
import { RandomUtil } from "../../base/Util/RandomUtil";
import { FollowPlane } from "../../npc/FollowPlane/FollowPlane";

export class BossScene7 extends Scene {
  constructor(imgName = 'boss7',bulletNum=3,bossNum=1) {
    super();
    this.imgName=imgName;
    this.bulletNum=bulletNum;
    this.bossNum=bossNum;
  }

  canRemove() {
    let seconds = this.frame / 60;

    if (seconds < 10) {
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
    if(this.bossNum>0){
      this.bossNum--;
      let boss = new Boss5(this.imgName);
      let enemies = DataStore.getInstance().get('enemy');
      enemies.push(boss)
    }

    
    if (this.frame % 30 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        if (item.type === 'boss') {
          item.shoot(this.bulletNum);
        }
      })
    }

    if (this.seconds() % 5 === 0) {
      let _enemies = DataStore.getInstance().get('enemy');
      _enemies.forEach((item, index, array) => {
        var random = RandomUtil.randomInt(1, 3.9);
        var followplane = 'followplane' + random;
        if(item.type==="boss"){
          _enemies.push(new FollowPlane(item.x + item.width / 2, item.y + item.height / 2, followplane))
        }

      })
    }
  }


}