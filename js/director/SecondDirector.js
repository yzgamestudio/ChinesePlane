import { BaseSubDirector } from "../base/BaseSubDirector";
import { BackGround } from "../runtime/BackGround";
import { Player } from "../player/Player";
import {LittleAttackScene} from "../scene/LittleAttackScene";

import {SceneQueue} from "../base/SceneQueue";
import {BossScene} from "../scene/BossScene";

import {NormalEnemyScene} from "../scene/NormalEnemyScene";
import {FollowPlaneScene} from "../scene/FollowPlaneScene";
import {SnackPlane} from "../npc/SnackPlane";
import {SnackPlaneScene} from "../scene/SnackPlaneScene";

export class SecondDirector extends BaseSubDirector {
  constructor() {
    super();
  }

  setupSprits() {
    super.setupSprits();

    // 初始化精灵，同时放入dataStore，方便销毁销毁
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);

    this.sceneQueue = new SceneQueue();
    let attackScene = new LittleAttackScene();
    let enemyScene = new NormalEnemyScene();
    let followPlaneScene = new FollowPlaneScene();
    let snackPlaneScene = new SnackPlaneScene();
    let bossScene = new BossScene();

    this.sceneQueue.addScene(followPlaneScene);
    this.sceneQueue.addScene(attackScene);
    this.sceneQueue.addScene(snackPlaneScene);
    this.sceneQueue.addScene(enemyScene);

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

