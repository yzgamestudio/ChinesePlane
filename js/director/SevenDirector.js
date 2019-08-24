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
import { BossScene7 } from "../scene/BossScene/BossScene7";

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
export class SevenDirector extends BaseSubDirector {
  constructor() {
    super();
  }

  setupSprits() {
    super.setupSprits();

    this.sceneQueue = new SceneQueue();
    this.sceneQueue.addScene(new StoneScene)
    this.sceneQueue.addScene(new StoneScene2)
    let level1Scene1 = new ComposeScene()
    level1Scene1.addScene(new LittleAttackScene)
    level1Scene1.addScene(new SpaceshipScene)
    level1Scene1.addScene(new ToolScene)
    this.sceneQueue.addScene(level1Scene1)
    let level1Scene2 = new ComposeScene()
    level1Scene2.addScene(new LittleAttack2Scene)
    level1Scene2.addScene(new StoneScene3)
    level1Scene2.addScene(new FollowPlaneScene3)
    level1Scene2.addScene(new FollowPlaneScene2)
    this.sceneQueue.addScene(level1Scene2)
    this.sceneQueue.addScene(new LittleAttackScene)
    let level1Scene3 = new ComposeScene()
    level1Scene3.addScene(new UFO5Scene(true, canvas.width - 200))
    level1Scene3.addScene(new UFO6Scene(false, canvas.width - 200))
    level1Scene3.addScene(new SpaceshipScene2)
    level1Scene3.addScene(new SpaceshipScene5)
    this.sceneQueue.addScene(level1Scene3)
    let level1Scene4 = new ComposeScene()
    level1Scene4.addScene(new UFO5Scene(false, canvas.width))
    level1Scene4.addScene(new UFO6Scene(true, canvas.width))
    level1Scene4.addScene(new LittleAttack5Scene)
    level1Scene4.addScene(new ToolScene)
    level1Scene4.addScene(new SpaceshipScene5)
    this.sceneQueue.addScene(level1Scene4)
    this.sceneQueue.addScene(new BossComingLogoScene)
    this.sceneQueue.addScene(new BossScene7)
    this.sceneQueue.addScene(new VictoryLogoScene)
    return this;
  }


  drawSprites() {
    super.drawSprites();


    this.sceneQueue.updateScene();
    if (this.sceneQueue.length() === 0) {
      let _player = this.dataStore.get('player');
      _player.y -= GameGlobal.fit(10);
      if (_player.y < -_player.height) {
        window.cancelAnimationFrame(this.timer);
        this.dataStore.destory();
        this.callback()
      }
    }
  }

  isGameOver() {
    return false;
  }


  judgeBulletCollideEnemy() {

  }

  judgeWordComplete() {

  }

}

