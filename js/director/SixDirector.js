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
} from "../npc/angleEnemyBullet";
import {
  SmartEnemyBullet
} from "../npc/smartEnemyBullet";
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
import { StoneScene4 } from "../scene/StoneScene/StoneScene4";
import { SceneQueue } from "../base/SceneQueue";
import { ComposeScene } from "../base/ComposeScene";
import { BossScene } from "../scene/BossScene";

import { FollowPlaneScene } from "../scene/FollowPlaneScene";
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
import { DataStore } from "../base/DataStore";

export class SixDirector extends BaseSubDirector {
  constructor() {
    super();
  }

  setupSprits() {
    super.setupSprits();
    const canvas = DataStore.getInstance().canvas;
    this.sceneQueue = new SceneQueue();
    this.sceneQueue.addScene(new UFO7Scene)
    this.sceneQueue.addScene(new LittleAttackScene)
    this.sceneQueue.addScene(new LittleAttack5Scene)
    let level1Scene1 = new ComposeScene()
    level1Scene1.addScene(new LittleAttackScene)
    level1Scene1.addScene(new SpaceshipScene)
    level1Scene1.addScene(new SpaceshipScene5)
    level1Scene1.addScene(new UFO5Scene(false, canvas.width + 200))
    level1Scene1.addScene(new UFO6Scene(true, canvas.width + 200))
    this.sceneQueue.addScene(level1Scene1)
    let level1Scene2 = new ComposeScene()
    level1Scene2.addScene(new LittleAttack2Scene)
    level1Scene2.addScene(new StoneScene)
    level1Scene2.addScene(new StoneScene4)
    this.sceneQueue.addScene(level1Scene2)
    this.sceneQueue.addScene(new LittleAttackScene)
    let level1Scene3 = new ComposeScene()
    level1Scene3.addScene(new UFOScene)
    level1Scene3.addScene(new UFO4Scene)
    level1Scene3.addScene(new SpaceshipScene2)
    level1Scene3.addScene(new UFO7Scene)
    this.sceneQueue.addScene(level1Scene3)
    let level1Scene4 = new ComposeScene()
    level1Scene4.addScene(new UFO7Scene)
    level1Scene4.addScene(new UFO4Scene)
    level1Scene4.addScene( new UFO5Scene(true, canvas.width + 200))
    level1Scene4.addScene(new UFO6Scene(false, canvas.width + 200))
    this.sceneQueue.addScene(level1Scene4)
    this.sceneQueue.addScene(new BossScene)
    return this;
  }


  drawSprites() {
    super.drawSprites();
    const bullets = this.dataStore.get('playerBullets');
    if (this.dataStore.frame % 20 === 0) {
      let bullet = new AngleBullet;
      bullets.push(bullet)
    }

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

