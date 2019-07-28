import {
  GameOver
} from "../runtime/GameOver";
import {
  DataStore
} from "./DataStore";
import { Bullet } from "../player/Bullet.js"
import { BackGround } from "../runtime/BackGround.js"
import { Player } from "../player/Player.js"


export class BaseSubDirector {
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间
    this.currentLevel = 0;

  }

  setupSprits() { /// 子类继承时必须先调用super  setupSprits
    this.dataStore.put('gameOver', new GameOver);
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);
    let bullets = [];
    bullets.push(new Bullet)
    this.dataStore.put('bullet', bullets);
  }

  run() {
    this.dataStore.ctx.fillRect(0, 0, this.dataStore.canvas.width, this.dataStore.canvas.height);
    this.drawSprites();
    this.dataStore.frame++;
    this.judgeBulletCollideEnemy();
    if (this.isGameOver()) {

      this.dataStore.frame = 0;
      this.drawGameOver();
      // Music.getInstance().pauseBGM();
      return;
    }
    this.drawZiku();

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
        // debugger;
        return true;
      }
    }
    return false;
  }

  drawSprites() {

  }

  drawGameOver() {
    // debugger;
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

  drawZiku(){
    this.dataStore.ctx.font = "90px Georgia";
    this.dataStore.ctx.fillStyle = "#ffffff";
    let ziku = this.dataStore.ziku;
    let object = JSON.parse(ziku);
    let level = object[parseInt(this.level)][0].word

    console.log(level);
    this.dataStore.ctx.fillText(level, 30 * GameGlobal.dpr,
      this.dataStore.canvas.height - 50 * GameGlobal.dpr);
  }


}