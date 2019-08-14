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
import { SceneQueue } from "../base/SceneQueue";
import { ComposeScene } from "../base/ComposeScene";
import { BossScene } from "../scene/BossScene";

import { FollowPlaneScene } from "../scene/FollowPlaneScene";
import { UFOScene } from "../scene/UFOScene/UFOScene";
import { UFO2Scene } from "../scene/UFOScene/UFO2Scene";
const EMEMYCOUNT = 2;
const TOOLCOUNT = 5;
export class FirstDirector extends BaseSubDirector {
  constructor() {
    super();

  }


  setupSprits() {
    super.setupSprits();

    // 初始化精灵，同时放入dataStore，方便销毁销毁
    //this.dataStore.put('background', new BackGround);
    //this.dataStore.put('player', new Player);
    this.sceneQueue = new SceneQueue();
  

    let level1Scene2=new ComposeScene()
    level1Scene2.addScene(new LittleAttackScene)    
    //this.sceneQueue.addScene(level1Scene2)

    let level1Scene3=new ComposeScene()


    //this.sceneQueue.addScene(level1Scene3)
    //this.sceneQueue.addScene(new UFO2Scene)
    this.sceneQueue.addScene(new StoneScene2)
    this.sceneQueue.addScene(new BossScene)

    

    return this;
  }


  drawSprites() {
    super.drawSprites();
    const bullets = this.dataStore.get('playerBullets');
    if (this.dataStore.frame%20===0){
      let bullet = new AngleBullet;
      bullets.push(bullet)
    }

    this.sceneQueue.updateScene();
  }
  

  isGameOver() {
    return false;
  }





}