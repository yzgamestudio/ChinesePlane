import { Scene } from "../base/Scene";
import { DataStore } from "../base/DataStore";
import { Enemy } from "../npc/Enemy";


export class NormalEnemyScene extends Scene {
  constructor() {
    super();
  }

  canRemove() {
	let seconds = this.frame / 60;

	if(seconds < 5) {
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
    if (this.frame % 30 === 0 && seconds < 5) {
      let enemy = new Enemy(1);
      enemys.push(enemy);
    }

  }


}