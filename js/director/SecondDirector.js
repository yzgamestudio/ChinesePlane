import {
  BaseSubDirector
} from "../base/BaseSubDirector";
import {
  BackGround
} from "../runtime/BackGround";
import {
  Player
} from "../player/Player";
import {
  Bullet
} from "../player/Bullet";
import {
  SmartBullet
} from "../player/smartBullet";
import {
  AngleEnemyBullet
} from "../npc/EnemyBullet/angleEnemyBullet";
import {
  SmartEnemyBullet
} from "../npc/EnemyBullet/smartEnemyBullet";
import {
  AngleBullet
} from "../player/angleBullet";
import {
  LittleAttack2Scene
} from "../scene/LittleAttackScene/LittleAttack2Scene";
import {
  Tool
} from "../player/Tool.js"
import { LittleAttackScene } from "../scene/LittleAttackScene/LittleAttackScene";
import { LittleAttack4Scene } from "../scene/LittleAttackScene/LittleAttack4Scene";
import { LittleAttack5Scene } from "../scene/LittleAttackScene/LittleAttack5Scene";
import { LittleAttack3Scene } from "../scene/LittleAttackScene/LittleAttack3Scene";
import { StoneScene } from "../scene/StoneScene/StoneScene";
import { StoneScene2 } from "../scene/StoneScene/StoneScene2";
import { SceneQueue } from "../base/SceneQueue";
import { ComposeScene } from "../base/ComposeScene";
import { BossScene2 } from "../scene/BossScene/BossScene2";

import { FollowPlaneScene } from "../scene/FollowPlaneScene/FollowPlaneScene";
import {
  FollowPlaneScene2
} from "../scene/FollowPlaneScene/FollowPlaneScene2";
import {
  FollowPlaneScene3
} from "../scene/FollowPlaneScene/FollowPlaneScene3";
import { UFOScene } from "../scene/UFOScene/UFOScene";
import { UFO2Scene } from "../scene/UFOScene/UFO2Scene";
import { SpaceshipScene } from "../scene/SpaceshipScene/SpaceshipScene";
import { SpaceshipScene2 } from "../scene/SpaceshipScene/SpaceshipScene2";
import { SpaceshipScene3 } from "../scene/SpaceshipScene/SpaceshipScene3";
import { SpaceshipScene4 } from "../scene/SpaceshipScene/SpaceshipScene4";
import { ToolScene } from "../../js/scene/ToolScene/ToolScene"
import { BossComingLogoScene } from "../../js/scene/LogoScene/BossComingLogoScene.js"
import { VictoryLogoScene } from "../../js/scene/LogoScene/VictoryLogoScene.js"
export class SecondDirector extends BaseSubDirector {
    constructor() {
        super();
    }

    setupSprits() {
        super.setupSprits();

      this.sceneQueue = new SceneQueue();
      this.sceneQueue.addScene(new LittleAttack3Scene)
      this.sceneQueue.addScene(new LittleAttack2Scene)
      let level1Scene1 = new ComposeScene()
      level1Scene1.addScene(new LittleAttackScene)
      level1Scene1.addScene(new ToolScene)
      level1Scene1.addScene(new SpaceshipScene)
      this.sceneQueue.addScene(level1Scene1)
      let level1Scene2 = new ComposeScene()
      level1Scene2.addScene(new LittleAttack2Scene)
      level1Scene2.addScene(new StoneScene)
      level1Scene2.addScene(new ToolScene)
      level1Scene2.addScene(new FollowPlaneScene3)
      this.sceneQueue.addScene(level1Scene2)
      this.sceneQueue.addScene(new LittleAttackScene)
      let level1Scene3 = new ComposeScene()
      level1Scene3.addScene(new UFOScene)
      level1Scene3.addScene(new SpaceshipScene2)
      level1Scene3.addScene(new FollowPlaneScene2)
      this.sceneQueue.addScene(level1Scene3)
      this.sceneQueue.addScene(new BossComingLogoScene)
      this.sceneQueue.addScene(new BossScene2)
      this.sceneQueue.addScene(new VictoryLogoScene)
        return this;
    }


    drawSprites() {
      super.drawSprites();


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

