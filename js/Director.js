import { DataStore } from './base/DataStore.js';
import { Sprite } from "./base/Sprite.js";
// import {Enemy}


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
    backgroundSprie.draw(3);

    const player = this.dataStore.get('player');
    player.draw();

    const ememies = this.dataStore.get('enemy');
  
    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      enemy.draw();
    }


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
    const ememies = this.dataStore.get('enemy');
    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      if(player.isCollide(enemy)) {
        return true;
      }
    }
    return  false;
  }

  restart(){

  }

  gameOver(){

  }
  
}