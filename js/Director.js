import { DataStore } from './base/DataStore.js';
import  {Bullet}  from "./player/Bullet.js";
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

    this.drawSprites();

    if(this.judgePlayerCollideEnemy()) {
      this.drawGameOver();
      return; // 不再渲染下一帧
    }
    this.dataStore.frame+=1;
    if (this.dataStore.frame%20===0){
      let bullet=new Bullet();
      this.dataStore.put('bullet' + this.dataStore.frame.toString, bullet);
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