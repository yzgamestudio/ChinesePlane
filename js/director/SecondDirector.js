import {BaseSubDirector} from "../base/BaseSubDirector";
import {BackGround} from "../runtime/BackGround";
import {Player} from "../player/Player";
import {LittleAttackScene} from "../scene/LittleAttackScene";
import {SceneQueue} from "../base/SceneQueue";
import {BossScene} from "../scene/BossScene";
import {NormalEnemyScene} from "../scene/NormalEnemyScene";
import {FollowPlaneScene} from "../scene/FollowPlaneScene";
import {SnackPlaneScene} from "../scene/SnackPlaneScene";
import {FlowerPlaneScene} from "../scene/FlowerPlaneScene";
import { Level2Scene1 } from "../scene/Level2/Level2Scene1";
import { Level2Scene2 } from "../scene/Level2/Level2Scene2";
import { Level2Scene3 } from "../scene/Level2/Level2Scene3";
import { Level2Scene4 } from "../scene/Level2/Level2Scene4";
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

      this.sceneQueue.addScene(new Level2Scene1);
      this.sceneQueue.addScene(new Level2Scene2);
      this.sceneQueue.addScene(new Level2Scene3);
      this.sceneQueue.addScene(new Level2Scene4);


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


    judgeBulletCollideEnemy() {

    }

    judgeWordComplete() {

    }

}

