import { DataStore } from './base/DataStore.js';
import {Enemy} from "./npc/Enemy";

// 开始类
export class Director {

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间
    this.speed = 2; // 每一阵
  }

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  /**
   * 游戏开始运行的循环
   */
  run() {

    this.drawSprites();

    this.dataStore.frame++;

    if(this.judgePlayerCollideEnemy()) {
      this.drawGameOver();
      return; // 不再渲染下一帧
    }

    let timer = requestAnimationFrame(() => this.run());
    this.timer = timer;


  }


  drawSprites(){
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);

    const player = this.dataStore.get('player');
    player.draw();

    const ememies = this.dataStore.get('enemy');

    ememies.forEach((enemy, index, array) => {
      if(enemy.y >= this.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });

    while (ememies.length < 20) {
      ememies.push(new Enemy());
    } 
    

    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      enemy.draw();
    }

  }

  judgePlayerCollideEnemy() {
    const player = this.dataStore.get('player');
    const ememies = this.dataStore.get('enemy');
    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      if(player.isCollide(enemy)) {
        return true;
      }
    }
    return  false;
  }

  drawGameOver() {
    const gameOver = this.dataStore.get('gameOver');
    gameOver.draw();
    gameOver.userInterface = true;
  }

  restart(){
    cancelAnimationFrame(this.timer);
    this.dataStore.destory();
  }

}