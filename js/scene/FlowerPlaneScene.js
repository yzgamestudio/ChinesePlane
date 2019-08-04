import {Scene} from "../base/Scene";
import {DataStore} from "../base/DataStore";
import {FlowerPlane} from "../npc/FlowerPlane";

const  TOTALSECONDS = 10;

export class FlowerPlaneScene extends Scene {
    constructor() {
        super();
        DataStore.getInstance().put('littleAttack1', []);
    }

    canRemove() {
		// return true;
        if (this.seconds() < TOTALSECONDS) {
            return false;
        }

		let flowers = DataStore.getInstance().get('littleAttack1');
		if(flowers.length > 0) {
		    return  false;
        }

		return true;
	

    }

    update() {
        super.update();
        // debugger;
        let flowers = DataStore.getInstance().get('littleAttack1');

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

        flowers.forEach(function (item) {
            // debugger;
            item.draw();
        })

        this.recover();
    }

    recover() {
        let flowers = DataStore.getInstance().get('littleAttack1');
        flowers.forEach(function (item, index, array) {
            console.log(item + '....');
			if(item.x < 0 || item.x + item.width > GameGlobal.canvas.width ||
			   item.y < 0 || item.y + item.height > GameGlobal.canvas.height){
				   array.splice(index, 1);
                console.log(array.length);

            }
        })

    }
}