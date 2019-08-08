import { ComposeScene } from "../../base/ComposeScene";
import { Scene } from "../../base/Scene";
import { LittleAttackScene } from "../LittleAttackScene";
import { SceneQueue } from "../../base/SceneQueue";
import { BossScene } from "../BossScene";
import { NormalEnemyScene } from "../NormalEnemyScene";
import { FollowPlaneScene } from "../FollowPlaneScene";
import { SnackPlaneScene } from "../SnackPlaneScene";
import { FlowerPlaneScene } from "../FlowerPlaneScene";
export class Level1Scene4 extends Scene {
  constructor() {
    super();
    this.scenes = new ComposeScene();
    this.scenes.addScene(new BossScene)
  }

  update() {
    this.scenes.updateScene()
  }

  canRemove() {
    return this.scenes.canRemove()
  }


} 