import {
  GameOver
} from "../runtime/GameOver";
import {
  DataStore
} from "./DataStore";


export class BaseSubDirector {
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间

  }

  setupSprits() { /// 子类继承时必须先调用super  setupSprits
    this.dataStore.put('gameOver', new GameOver);
  }

  run() {
    this.drawSprites();
    this.dataStore.frame++;
    this.judgeBulletCollideEnemy();
    if (this.isGameOver()) {
      this.drawGameOver();
      return;
    }
    requestAnimationFrame(() => this.run());
  }
  judgeBulletCollideEnemy() {
    let enemies = this.dataStore.get('enemy');
    let bullets = this.dataStore.get('bullet');
    bullets.forEach((bullet) => {
      for (let i = 0, il = enemies.length; i < il; i++) {
        let enemy = enemies[i];
        let isCollide = bullet.isCollideWith(enemy)
        if (enemy.isPlaying && isCollide) {
          bullet.visible = false;
          enemy.isPlaying = false;
          break;
        }
      }
    })
  }
  isGameOver() {
    let result = this.judgePlayerCollideEnemy();
    return result;
  }

  judgePlayerCollideEnemy() {
    const player = this.dataStore.get('player');
    const ememies = this.dataStore.get('enemy');
    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      if (player.isCollide(enemy)) {
        return true;
      }
    }
    return false;
  }
  drawSprites() {

  }

  drawGameOver() {
    const gameOver = this.dataStore.get('gameOver');
    gameOver.draw();
    gameOver.onClicked(() => this.restart());
    gameOver.userInterface = true;
  }

  restart() {
    cancelAnimationFrame(this.timer);
    const gameOver = this.dataStore.get('gameOver');
    gameOver.userInterface = false;
    this.dataStore.destory();
    this.setupSprits();
    this.run();
  }


  onPressLevelSelectMenu(callback) {
    cancelAnimationFrame(this.timer);
    this.dataStore.destory();
    this.callback = callback;
  }


}