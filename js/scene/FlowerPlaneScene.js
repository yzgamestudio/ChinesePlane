import {Scene} from "../base/Scene";
import {DataStore} from "../base/DataStore";
import {FlowerPlane} from "../npc/FlowerPlane";

const  TOTALSECONDS = 10;

export class FlowerPlaneScene extends Scene {
    constructor() {
        super();

    }

    canRemove() {
		// return true;
        if (this.seconds() < TOTALSECONDS) {
            return false;
        }

		let flowers = DataStore.getInstance().get('enemy');
		if(flowers.length > 0) {
		    return  false;
        }

		return true;
	

    }

    update() {
        super.update();
        // debugger;
        let flowers = DataStore.getInstance().get('enemy');

        if (this.seconds() < TOTALSECONDS) {
            if (this.frame % 60 === 0) {
                // debugger;
                flowers.push(new FlowerPlane(30,  10));
				flowers.push(new FlowerPlane(45, 10));
				flowers.push(new FlowerPlane(90, 10));

				flowers.push(new FlowerPlane(120, 10));
				flowers.push(new FlowerPlane(135, 10));
				flowers.push(new FlowerPlane(180, 10));

				flowers.push(new FlowerPlane(120 + 90, 10));
				flowers.push(new FlowerPlane(135 + 90, 10));
				flowers.push(new FlowerPlane(180 + 90, 10));

				flowers.push(new FlowerPlane(120 + 180, 10));
				flowers.push(new FlowerPlane(135 + 180, 10));
				flowers.push(new FlowerPlane(180 + 180, 10));


            }
        }


    }

}