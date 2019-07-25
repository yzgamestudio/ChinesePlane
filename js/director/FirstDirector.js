import {BaseSubDirector} from "../base/BaseSubDirector";
import {BackGround} from "../runtime/BackGround";
import {Player} from "../player/Player";
import { Bullet } from "../player/Bullet";
import {Enemy} from "../npc/Enemy";


const EMEMYCOUNT = 20;

export  class FirstDirector  extends BaseSubDirector {
    constructor() {
        super();
    }

    setupSprits() {
        // debugger;
        super.setupSprits();
        // 初始化精灵，同时放入dataStore，方便销毁销毁
        this.dataStore.put('background', new BackGround);
        this.dataStore.put('player', new Player);
        let bullets=[];
        bullets.push(new Bullet)
        this.dataStore.put('bullet', bullets);
        let enemies = [];
        for (let i = 0; i < EMEMYCOUNT; i++){
            let enemy =  new Enemy();
            enemies[i] = enemy;
        }
        this.dataStore.put('enemy', enemies);
    }




    drawSprites(){
        // debugger;
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
      bullets.push(new Bullet)
      bullets.forEach((bullet, index, array) => {
        if (bullet.y < 0 || bullet.isVisible === false) {
          array.splice(index, 1);
        }
        bullet.draw();
      })
    }
    
}

