import { BaseSubDirector } from "../base/BaseSubDirector";
import { BackGround } from "../runtime/BackGround";
import { Player } from "../player/Player";
import { Enemy } from "../npc/Enemy";
import { Bullet } from "../player/Bullet";
import { AttackPlane } from "../npc/AttackPlane";
import { StayPlane } from "../npc/StayPlane.js";

import {SceneQueue} from "../scene/SceneQueue";
import {BossScene} from "../scene/BossScene";
import {NormalEnemyScene} from "../scene/NormalEnemyScene";

const EMEMYCOUNT = 10;
const STAYPLANECOUNT = 5;

let isLeft = true;
const step = 100;

export class SecondDirector extends BaseSubDirector {
  constructor() {
    super();
  }

  setupSprits() {
    super.setupSprits();

    // 初始化精灵，同时放入dataStore，方便销毁销毁
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);

    let bossScene = new BossScene();
    this.sceneQueue = new SceneQueue();

    this.sceneQueue.addScene(bossScene);

    return this;
  }


  drawSprites() {
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);
    const player = this.dataStore.get('player');
    player.draw();

    this.sceneQueue.updateScene();

  }


  isGameOver() {
    return false;
  }


  judgeBulletCollideEnemy(){

  }

  judgeWordComplete(){

  }

}

