import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import {FollowPlane} from "../npc/FollowPlane";


export class FollowPlaneScene extends Scene {
    constructor() {
        super();
        DataStore.getInstance().put('littleAttack2', []);
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
        let followPlanes = DataStore.getInstance().get('littleAttack2');

        if(this.seconds() < 5){
            if(this.frame % 30 === 0) {
                // debugger;
                followPlanes.push(new FollowPlane());
            }
        }

        let player = DataStore.getInstance().get('player');
        followPlanes.forEach(function (item) {
            // debugger;
            item.draw(player.x, player.y);
        })

        this.recover();
    }

    recover() {
        let followPlanes = DataStore.getInstance().get('littleAttack2');
        followPlanes.forEach(function (item,index,array) {
            let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.height);
            if (isOffScreen) {
                DataStore.getInstance().destoryItem(item);
            }
        })

    }
}