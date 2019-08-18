///////////////////////////////////////////////
//
//UFO三敌机顺时针飞过 ，发射子弹 UFO随机
//
//////////////////////////////////////////////
import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";

import { UFO3 } from "../../npc/UFO/UFO3";
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Sprite } from '../../base/Sprite.js'
export class UFO6Scene extends Scene {
  constructor(clock=true,r=500) {
    super();
    this.clock=clock;
    this.r=r
  }

  canRemove() {
    let boss = DataStore.getInstance().get('enemy');
    if (boss.length === 0 && this.seconds() > 5) {
      return true;
    }
    else {
      return false;
    }
  }

  update() {
    super.update()
    const canvas = DataStore.getInstance().canvas;
    if (this.seconds() > this.delay && this.seconds() < 10) {
      if (this.seconds() % 3 === 0) {
        let UFOs = DataStore.getInstance().get('enemy');
        var random = RandomUtil.randomInt(1, 6.9);
        var ufo = 'UFO' + random;
        const image = Sprite.getImage(ufo); // 获取图片
        if(this.clock===true){
          UFOs.push(new UFO3(canvas.width, - image.height, 0, -image.height, this.r, this.clock, ufo))
        }else{
          UFOs.push(new UFO3(0, canvas.width,0, -image.height, this.r, this.clock, ufo))
        }

      }
    }
    if (this.seconds() % 1 === 0) {
      let enemies = DataStore.getInstance().get('enemy');
      enemies.forEach((enemy, index, array) => {
        if (enemy.type === 'ufo') {
          enemy.shoot()
        }
      })
    }

  }
}