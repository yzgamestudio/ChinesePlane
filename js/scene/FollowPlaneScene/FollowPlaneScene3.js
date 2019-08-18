///////////////////////////////////////////////
//
//followplane从屏幕右侧分别进入四架飞机
//
//////////////////////////////////////////////
import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { FollowPlane } from "../../npc/FollowPlane/FollowPlane";
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Sprite } from '../../base/Sprite.js'
export class FollowPlaneScene3 extends Scene {
    constructor() {
        super();
    }

    canRemove() {

      if(this.seconds() > 5) {
          return true;
      }
      else {
        return  false;
      }

    }

    update() {
        super.update();
        // debugger;
        let followPlanes = DataStore.getInstance().get('enemy');
        const canvas = DataStore.getInstance().canvas;
        if(this.seconds() < 5){
            if(this.frame % 60 === 0) {
              var random = RandomUtil.randomInt(1, 3.9);
              var followplane = 'followplane' + random;
              const image = Sprite.getImage(followplane); // 获取图片
              var y = RandomUtil.randomInt(0, canvas.height/2);;
              var x=canvas.width;
              followPlanes.push(new FollowPlane(x,y,followplane));
            }
        }

    }


}