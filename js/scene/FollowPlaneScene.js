import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import {FollowPlane} from "../npc/FollowPlane";


export class FollowPlaneScene extends Scene {
    constructor() {
        super();
        let followPlane = new FollowPlane();
        DataStore.getInstance().put('followPlane', followPlane);
    }

    canRemove() {
        let followPlane = DataStore.getInstance().get('followPlane');
        if (followPlane === undefined) {

            return true;
        }
        else {
            return true;
        }
    }

    update() {
        super.update();

        let followPlane = DataStore.getInstance().get('followPlane');
        let player = DataStore.getInstance().get('player');
        followPlane.draw(player.x, player.y);

        this.recover();
    }

    recover() {
        let followPlane = DataStore.getInstance().get('followPlane');
        let isOffScreen = GameGlobal.isOffScreen(followPlane.x, followPlane.y, followPlane.height);
        if (isOffScreen) {
            DataStore.getInstance().destoryItem(followPlane);
        }
    }
}