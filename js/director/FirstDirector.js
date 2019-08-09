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
	Enemy
} from "../npc/Enemy";
import {
	Tool
} from "../player/Tool.js"
import { LittleAttackScene } from "../scene/LittleAttackScene";
import { SceneQueue } from "../base/SceneQueue";
import { ComposeScene } from "../base/ComposeScene";
import { BossScene } from "../scene/BossScene";
import { NormalEnemyScene } from "../scene/NormalEnemyScene";
import { FollowPlaneScene } from "../scene/FollowPlaneScene";
import { SnackPlaneScene } from "../scene/SnackPlaneScene";
import { FlowerPlaneScene } from "../scene/FlowerPlaneScene";

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
    this.sceneQueue.addScene(new NormalEnemyScene)

    let level1Scene2=new ComposeScene()
    level1Scene2.addScene(new SnackPlaneScene)
    level1Scene2.addScene(new FollowPlaneScene)
    this.sceneQueue.addScene(level1Scene2)

    let level1Scene3=new ComposeScene()
    level1Scene3.addScene(new FlowerPlaneScene)
    level1Scene3.addScene(new FollowPlaneScene)
    this.sceneQueue.addScene(level1Scene3)

    this.sceneQueue.addScene(new BossScene)

    

    return this;
  }


  drawSprites() {
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);
    const player = this.dataStore.get('player');
    player.draw();
    const bullets = this.dataStore.get('playerBullets');
    if (this.dataStore.frame%20===0){
      let bullet = new AngleBullet;
      bullets.push(bullet)
    }
    bullets.forEach((bullet,index,array)=>{
       bullet.draw();
    })
    this.sceneQueue.updateScene();
    this.recover()
  }
  

  isGameOver() {
    return false;
  }


  judgeBulletCollideEnemy() {

  }

  judgeWordComplete() {

  }



}