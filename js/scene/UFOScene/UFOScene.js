///////////////////////////////////////////////
//
//UFO三敌机顺时针飞过 ，发射子弹
//
//////////////////////////////////////////////
import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { UFO } from "../../npc/UFO/UFO.js";

export class UFOScene extends Scene {
  constructor(){
    super();
  }
  
  canRemove() {
    let boss = DataStore.getInstance().get('enemy');
    if (boss.length === 0&&this.seconds()>5) {
      return true;
    }
    else {
      return false;
    }
  }

  update(){
    super.update()
    if(this.seconds()>this.delay&&this.seconds()<10){
       if(this.seconds()%3===0){
         let UFOs = DataStore.getInstance().get('enemy');
         UFOs.push(new UFO)
       }
    }
    if(this.seconds()%1===0){
      let enemies = DataStore.getInstance().get('enemy');
      enemies.forEach((enemy, index, array) => {
        if (enemy.type === 'ufo') {
          enemy.shoot()
        }
      })
    }

  }
}