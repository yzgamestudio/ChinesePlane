import {BaseSubDirector} from "../base/BaseSubDirector";
import {BackGround} from "../runtime/BackGround";
import {Player} from "../player/Player";
import { LittleAttackScene } from "../scene/LittleAttackScene/LittleAttackScene";
import {SceneQueue} from "../base/SceneQueue";
import {BossScene} from "../scene/BossScene";
import {FollowPlaneScene} from "../scene/FollowPlaneScene";
import {SnackPlaneScene} from "../scene/SnackPlaneScene";
import {FlowerPlaneScene} from "../scene/FlowerPlaneScene";

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

