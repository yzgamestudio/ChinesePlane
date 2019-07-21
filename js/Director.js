import { DataStore } from './base/DataStore.js'
import { Sprite } from "./base/Sprite.js";


// 开始类
export class Director {

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.speed = 2; // 每一阵
  }

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  run() {

    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw();

    const player = this.dataStore.get('player');
    player.draw();

    const ememy = this.dataStore.get('enemy');
    ememy.draw();

    let isGameOver = false;
    if(this.judgePlayerCollideEnemy()) {
      isGameOver = true;
    }

    //  如何实现动画无限渲染
    if (!isGameOver){
      let timer = requestAnimationFrame(() => this.run());

    }
  }

  judgePlayerCollideEnemy() {
    const player = this.dataStore.get('player');
    const ememy = this.dataStore.get('enemy');
    if (player.isCollide(ememy)) {
      return true;
    }
    return false;
  }

  restart(){

  }

  gameOver(){

  }
  
}