import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import { Enemy } from "../npc/Enemy";


export class NormalEnemyScene extends Scene {
  constructor() {
    super();
    DataStore.getInstance().put('enemy', []);
  }

  canRemove() {
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
    while (enemys.length < 5 && seconds < 10) {
      let enemy = new Enemy();
      enemys.push(enemy);
    }

    enemys.forEach(function (item, index, array) {
      item.draw();
    });
    this.recover();
  }

  recover() {
    let enemys = DataStore.getInstance().get('enemy');
    enemys.forEach(function (item, index, array) {
    
      if (item.y > DataStore.getInstance().canvas.height) {
        console.log(item);
        array.splice(index, 1);
      }
    });
  }
}