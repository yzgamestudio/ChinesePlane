import {Scene} from "./Scene";
import {DataStore} from "../base/DataStore";
import {Boss} from "../npc/Boss";

export  class BossScene extends Scene {
     constructor(){
        super();
         let boss = new Boss;
         DataStore.getInstance().put('boss', boss);
     }

     canRemove() {
        return false;
     }

     update() {
         let boss = DataStore.getInstance().get('boss');
         boss.draw();
     }
}