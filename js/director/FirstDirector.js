import {BaseSubDirector} from "../base/BaseSubDirector";
import {BackGround} from "../runtime/BackGround";
import {Player} from "../player/Player";
import { Bullet } from "../player/Bullet";
import {Enemy} from "../npc/Enemy";
import { Tool } from "../player/Tool.js"

const EMEMYCOUNT = 20;

export  class FirstDirector  extends BaseSubDirector {
    constructor() {
       super();

    }

    setupSprits() {
        // debugger;
        super.setupSprits();
        // 初始化精灵，同时放入dataStore，方便销毁销毁

        let enemies = [];
        for (let i = 0; i < EMEMYCOUNT; i++){
            let enemy =  new Enemy();
            enemies[i] = enemy;
        }
        this.dataStore.put('enemy', enemies);
    }

    drawSprites(){

        const backgroundSprie = this.dataStore.get('background');
        backgroundSprie.draw(3);

        const player = this.dataStore.get('player');
        player.draw();

        const ememies = this.dataStore.get('enemy');

        ememies.forEach((enemy, index, array) => {
          if (enemy.y >= this.dataStore.canvas.height || enemy.isPlaying === false) {
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
      const bullets = this.dataStore.get('bullet');
      if(this.dataStore.frame % 20 == 0){
        bullets.push(new Bullet)
        // Music.getInstance().shoot();
      }
      bullets.forEach((bullet, index, array) => {
        if (bullet.y < 0 || bullet.isVisible === false) {
          array.splice(index, 1);
        }
        bullet.draw();
      })
      const tools = this.dataStore.get('tool');
      if (this.dataStore.frame % 180 == 0) {
        tools.push(new Tool)
      }
      tools.forEach((tool, index, array) => {
        if ( tool.x < 0 || tool.x > this.dataStore.canvas.width || tool.y > this.dataStore.canvas.height) {
          array.splice(index, 1);
        }
        tool.draw();
      })
    }
    
}

