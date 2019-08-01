import {DataStore} from "../base/DataStore";
import {Scene} from "../base/Scene";


export  class NormalEnemyScene extends Scene {
    constructor(){
        super();
        this.totalSeconds = 10;
        let enemy = [];
        DataStore.getInstance().put('enemy', enemy);
    }

    canRemove() {
        // if(D)
    }

    update() {

        // let boss = DataStore.getInstance().get('boss');
        // boss.draw();
    }


}