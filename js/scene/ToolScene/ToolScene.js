///////////////////////////////////////////////
//
//道具
//
//////////////////////////////////////////////
import { Scene } from "../../base/Scene";
import { DataStore } from "../../base/DataStore";
import { RandomUtil } from "../../base/Util/RandomUtil";
import { Tool } from "../../player/Tool";

export class ToolScene extends Scene {
  constructor() {
    super();
  }

  canRemove() {
    let boss = DataStore.getInstance().get('enemy');
    if (boss.length === 0 && this.seconds() > 10) {
      return true;
    }
    else {
      return false;
    }
  }

  update() {
    super.update()
    if (this.seconds() > this.delay && this.seconds() < 10) {
      if (this.seconds() % 2 === 0) {
        var random = RandomUtil.randomInt(1, 4.99);
        var tool = 'tool' + random;
        let tools = DataStore.getInstance().get('tool');
        tools.push(new Tool(tool))
      }
    }

  }
}