import {Scene} from "../base/Scene";
import {DataStore} from "../base/DataStore";
import {SnackPlane} from "../npc/SnackPlane";

export class SnackPlaneScene extends Scene {
    constructor() {
        super();
    }

    canRemove() {

        if (this.seconds() > 10) {
            return true;
        } else {
            return false;
        }

    }

    update() {
        super.update();

        let snackPlanes = DataStore.getInstance().get('enemy');

        if (this.seconds() < 10) {
            if (this.frame % 30 === 0) {
                snackPlanes.push(new SnackPlane());
            }
        }
		
        snackPlanes.forEach(function (item) {
            item.draw();
        });


    }

}