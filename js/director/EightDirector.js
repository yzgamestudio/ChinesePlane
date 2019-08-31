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
import { StoneScene3 } from "../scene/StoneScene/StoneScene3";
import { SceneQueue } from "../base/SceneQueue";
import { ComposeScene } from "../base/ComposeScene";
import { BossScene8 } from "../scene/BossScene/BossScene8";

import { FollowPlaneScene } from "../scene/FollowPlaneScene/FollowPlaneScene";
import {
  FollowPlaneScene2
} from "../scene/FollowPlaneScene/FollowPlaneScene2";
import {
  FollowPlaneScene3
} from "../scene/FollowPlaneScene/FollowPlaneScene3";
import { UFOScene } from "../scene/UFOScene/UFOScene";
import { UFO2Scene } from "../scene/UFOScene/UFO2Scene";
import { UFO3Scene } from "../scene/UFOScene/UFO3Scene";
import { UFO4Scene } from "../scene/UFOScene/UFO4Scene";
import { UFO5Scene } from "../scene/UFOScene/UFO5Scene";
import { UFO6Scene } from "../scene/UFOScene/UFO6Scene";
import { UFO7Scene } from "../scene/UFOScene/UFO7Scene";
import { SpaceshipScene } from "../scene/SpaceshipScene/SpaceshipScene";
import { SpaceshipScene2 } from "../scene/SpaceshipScene/SpaceshipScene2";
import { SpaceshipScene3 } from "../scene/SpaceshipScene/SpaceshipScene3";
import { SpaceshipScene4 } from "../scene/SpaceshipScene/SpaceshipScene4";
import { SpaceshipScene5 } from "../scene/SpaceshipScene/SpaceshipScene5";
import { ToolScene } from "../../js/scene/ToolScene/ToolScene"
import { BossComingLogoScene } from "../../js/scene/LogoScene/BossComingLogoScene.js"
import { VictoryLogoScene } from "../../js/scene/LogoScene/VictoryLogoScene.js"
export class EightDirector extends BaseSubDirector {
  constructor() {
    super();
  }

  setupSprits() {
    super.setupSprits();

    this.sceneQueue = new SceneQueue();
    this.sceneQueue.addScene(new ToolScene)
    this.sceneQueue.addScene(new LittleAttack4Scene)
    this.sceneQueue.addScene(new LittleAttack5Scene)
    this.sceneQueue.addScene(new SpaceshipScene5)
    let level1Scene1 = new ComposeScene()
    level1Scene1.addScene(new LittleAttackScene)
    level1Scene1.addScene(new SpaceshipScene)
    this.sceneQueue.addScene(level1Scene1)
    let level1Scene2 = new ComposeScene()
    level1Scene2.addScene(new LittleAttack2Scene)
    level1Scene2.addScene(new StoneScene)
    this.sceneQueue.addScene(level1Scene2)
    this.sceneQueue.addScene(new LittleAttackScene)
    this.sceneQueue.addScene(new SpaceshipScene3)
    let level1Scene3 = new ComposeScene()
    level1Scene3.addScene(new FollowPlaneScene)
    level1Scene3.addScene(new FollowPlaneScene2)
    level1Scene3.addScene(new FollowPlaneScene3)
    level1Scene3.addScene(new ToolScene)
    level1Scene3.addScene(new UFOScene)
    level1Scene3.addScene(new SpaceshipScene5)
    this.sceneQueue.addScene(level1Scene3)
    this.sceneQueue.addScene(new StoneScene2)
    let level1Scene4 = new ComposeScene()
    level1Scene4.addScene(new LittleAttack3Scene)
    level1Scene4.addScene(new StoneScene3)
    level1Scene4.addScene(new ToolScene)
    level1Scene4.addScene(new SpaceshipScene2)
    this.sceneQueue.addScene(level1Scene4)
    this.sceneQueue.addScene(new BossComingLogoScene)
    let level1Scene5 = new ComposeScene()
    level1Scene5.addScene(new BossScene8())
    level1Scene5.addScene(new LittleAttackScene(4))
    level1Scene5.addScene(new LittleAttack2Scene(10,20))
    level1Scene5.addScene(new LittleAttack3Scene(15,20))
    this.sceneQueue.addScene(level1Scene5)
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

