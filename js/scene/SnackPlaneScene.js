import {Scene} from "../base/Scene";
import {DataStore} from "../base/DataStore";
import {SnackPlane} from "../npc/SnackPlane";

export class SnackPlaneScene extends Scene {
    constructor() {
        super();
        DataStore.getInstance().put('airforce1', []);
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

        let snackPlanes = DataStore.getInstance().get('airforce1');

        if (this.seconds() < 10) {
            if (this.frame % 30 === 0) {
                snackPlanes.push(new SnackPlane());
            }
        }
		
        snackPlanes.forEach(function (item) {
            item.draw();
        });

        this.recover();
    }

    recover() {
        let snackPlanes = DataStore.getInstance().get('airforce1');
        snackPlanes.forEach(function (item, index, array) {
            let isOffScreen = item.y > DataStore.getInstance().canvas.height;
            if (isOffScreen) {
                array.splice(index, 1);
            }
        })
    }
}