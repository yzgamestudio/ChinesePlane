import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import {FollowPlane} from "../npc/FollowPlane";


export class FollowPlaneScene extends Scene {
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

        if(this.seconds() < 5){
            if(this.frame % 60 === 0) {
                // debugger;
                followPlanes.push(new FollowPlane());
            }
        }

        let player = DataStore.getInstance().get('player');
        followPlanes.forEach(function (item) {
            // debugger;
            item.draw(player.x, player.y);
        })

    }


}