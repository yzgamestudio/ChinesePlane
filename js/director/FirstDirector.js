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
  Enemy
} from "../npc/Enemy";
import {
  Tool
} from "../player/Tool.js"

<<<<<<< HEAD
const EMEMYCOUNT = 2;
const TOOLCOUNT = 5;
export class FirstDirector extends BaseSubDirector {
  constructor() {
    super();
    this.setupWordMap()
  }
=======
const EMEMYCOUNT = 5;
const TOOLCOUNT=5;
export  class FirstDirector  extends BaseSubDirector {
    constructor() {
       super();
>>>>>>> 9ee64da4582cb40e0c9e6d6e2a6f6e08a0d953ac

  setupWordMap() {
    this.wordCheck = new Map();
    const ziku = this.dataStore.ziku;
    const wordparts = ziku[0][this.currentWord].conponent;
    wordparts.forEach((wordpart, index, array) => {
      this.wordCheck.set(wordpart, 0);
    })
  }
  
  setupSprits() {
    // debugger;
    super.setupSprits();
    // 初始化精灵，同时放入dataStore，方便销毁销毁

    let enemies = [];
    for (let i = 0; i < EMEMYCOUNT; i++) {
      let enemy = new Enemy();
      enemies[i] = enemy;
    }
    this.dataStore.put('enemy', enemies);
  }

<<<<<<< HEAD
  drawSprites() {
=======
    drawSprites(){
        this.judgeBulletCollideEnemy();
>>>>>>> 9ee64da4582cb40e0c9e6d6e2a6f6e08a0d953ac

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

<<<<<<< HEAD
    while (ememies.length < EMEMYCOUNT) {
      ememies.push(new Enemy());
    }

    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      enemy.draw();
    }
    const bullets = this.dataStore.get('bullet');
    if (this.dataStore.frame % 20 == 0) {
      bullets.push(new Bullet)
      // Music.getInstance().shoot();
    }
    bullets.forEach((bullet, index, array) => {
      if (bullet.y < 0 || bullet.isVisible === false) {
        array.splice(index, 1);
      }
      bullet.draw();
    })
    this.drawTools();
  }
=======
      while (ememies.length < EMEMYCOUNT) {
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
      this.drawTools();
    }

    drawTools(){
      const tools = this.dataStore.get('tool');
      if (this.dataStore.frame % 180 == 0 && tools.length < TOOLCOUNT) {
        const object=new Tool
        const ziku = this.dataStore.ziku;
        const wordpart = ziku[this.level - 1][this.currentWordIndex].conponent;
        object.wordPart = wordpart[this.currentPart]
        this.currentPart+=1;
        if (this.currentPart>=wordpart.length){
          this.currentPart=0
        }
        tools.push(object)
>>>>>>> 9ee64da4582cb40e0c9e6d6e2a6f6e08a0d953ac

  drawTools() {
    const tools = this.dataStore.get('tool');
    if (this.dataStore.frame % 180 == 0 && tools.length < TOOLCOUNT) {
      const object = new Tool
      const ziku = this.dataStore.ziku;
      const wordpart = ziku[this.level - 1][this.currentWord].conponent;
      object.wordPart = wordpart[this.currentPart]
      this.currentPart += 1;
      if (this.currentPart >= wordpart.length) {
        this.currentPart = 0
      }
      tools.push(object)

    }
<<<<<<< HEAD
    tools.forEach((tool, index, array) => {
      if (tool.x < 0 || tool.x > this.dataStore.canvas.width || tool.y > this.dataStore.canvas.height || tool.isVisible === false) {
        array.splice(index, 1);
      }
      tool.draw();
      this.dataStore.ctx.font = "50px Georgia";
      this.dataStore.ctx.fillStyle = "#ffffff";
      this.dataStore.ctx.fillText(tool.wordPart, tool.x + 70 * GameGlobal.dpr / 2 - 50, tool.y + 70 * GameGlobal.dpr / 2)

    })
  }
=======

    judgeBulletCollideEnemy() {
        let enemies = this.dataStore.get('enemy');
        let bullets = this.dataStore.get('bullet');
        bullets.forEach((bullet) => {
            for (let i = 0, il = enemies.length; i < il; i++) {
                let enemy = enemies[i];
                let isCollide = bullet.isCollideWith(enemy)
                if (enemy.isPlaying && isCollide) {
                    bullet.isVisible = false;
                    enemy.isPlaying = false;
                    break;
                }
            }
        })
    }


}
>>>>>>> 9ee64da4582cb40e0c9e6d6e2a6f6e08a0d953ac

}