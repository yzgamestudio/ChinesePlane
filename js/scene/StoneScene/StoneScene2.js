///////////////////////////////////////////////
//
//stone 变成stone墙
//
//////////////////////////////////////////////
import {
  Scene
} from "../../base/Scene";
import {
  DataStore
} from "../../base/DataStore";
import {
  Stone2
} from "../../npc/Stone/Stone2";
import { Sprite } from '../../base/Sprite'

export class StoneScene2 extends Scene {
  constructor() {
    super();
  }

  canRemove() {
    let seconds = this.frame / 60;

    if (seconds < 30) {
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

    let seconds = this.frame / 60;
    let enemys = DataStore.getInstance().get('enemy');
    const canvas = DataStore.getInstance().canvas;
    const image = Sprite.getImage('stone2'); // 获取图片
    if (seconds % 5 === 0 && seconds < 30) {
      for(var i=0,li=canvas.width/image.width;i<li;i++){
        let enemy1 = new Stone2(i*image.width,'stone2');
        enemys.push(enemy1);
      }


    }

  }


}