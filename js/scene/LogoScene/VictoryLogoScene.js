///////////////////////////////////////////////
//
//LittleAttack从边缘两侧交叉下落
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  Stone
} from "../../npc/Stone/Stone";
import { VictoryLogo } from "../../runtime/Logo/VictoryLogo"

export class VictoryLogoScene extends Scene {
  constructor() {
    super();
    this.logo=null;
  }

  canRemove() {
    let seconds = this.frame / 60;

    if (seconds < 4) {
      return false;
    }
    let enemys = DataStore.getInstance().get('enemy');
    if (enemys.length > 0) {
      return false;
    }
    return true;

  }

  update() {
    super.update();

    let seconds = Math.trunc(this.frame / 60) ;
 
    const canvas = DataStore.getInstance().canvas;
    if (seconds % 2 === 0 && seconds <4) {
      if(this.logo===null){
        this.logo = new VictoryLogo();
        this.logo.draw()
      }else{
        this.logo.draw()
      }



    }

  }


}