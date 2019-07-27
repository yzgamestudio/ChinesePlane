import { BaseSubDirector } from "../base/BaseSubDirector";
import { BackGround } from "../runtime/BackGround";
import { Player } from "../player/Player";
import { Enemy } from "../npc/Enemy";
import { Bullet } from "../player/Bullet";
import { AttackPlane } from "../npc/AttackPlane";

const EMEMYCOUNT = 10;

export class SecondDirector extends BaseSubDirector {
  constructor() {
    super();
  }

  setupSprits() {
    super.setupSprits();

    // 初始化精灵，同时放入dataStore，方便销毁销毁
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);

    let enemies = [];
    for (let i = 0; i < EMEMYCOUNT; i++) {
      let enemy = new Enemy();
      enemies[i] = enemy;
    }
    this.dataStore.put('enemy', enemies);

    let attacks = [];
    for (let i = 0; i < EMEMYCOUNT; i++) {
      let attack = new AttackPlane();
      attacks[i] = attack;
    }
    this.dataStore.put('attackPlane', attacks);

    return this;
  }


  drawSprites() {
    let seconds = this.dataStore.frame / 60;
    if (seconds % 60  < 4) {
      this.drawFirstStage();
    } else if (seconds % 60 < 10) {
      this.drawSecondStage();
    } else if (seconds  % 60 < 20){
      this.drawThirdStage();
    }else if(seconds % 60 < 40){
      this.drawSecondStage();
    } else if(seconds % 60 < 60) {
      this.drawFirstStage();
    }
  }


  drawFirstStage() {
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);

    const player = this.dataStore.get('player');
    player.draw();

    const ememies = this.dataStore.get('enemy');
    ememies.forEach((enemy, index, array) => {
      if (enemy.y >= this.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });

    while (ememies.length < 10) {
      ememies.push(new Enemy());
    }

    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      enemy.draw();
    }

    const bullets = this.dataStore.get('bullet');
    if (this.dataStore.frame % 20 == 0) {
      bullets.push(new Bullet)
    }
    bullets.forEach((bullet, index, array) => {
      if (bullet.y < 0 || bullet.isVisible === false) {
        array.splice(index, 1);
      }
      bullet.draw();
    })
  }

  drawThirdStage() {
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);
    const player = this.dataStore.get('player');
    player.draw();
    const attacks = this.dataStore.get('attackPlane');
    attacks.forEach((enemy, index, array) => {
      if (enemy.y >= this.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });

    while (attacks.length < 10) {
      attacks.push(new AttackPlane());
    }

    for (let i = 0; i < attacks.length; i++) {
      let attack = attacks[i];
      attack.draw();
    }


    const ememies = this.dataStore.get('enemy');
    ememies.forEach((enemy, index, array) => {
      if (enemy.y >= this.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });

    while (ememies.length < 10) {
      ememies.push(new Enemy());
    }

    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      enemy.draw();
    }


    const bullets = this.dataStore.get('bullet');
    if (this.dataStore.frame % 20 == 0) {
      bullets.push(new Bullet)
    }
    bullets.forEach((bullet, index, array) => {
      if (bullet.y < 0 || bullet.isVisible === false) {
        array.splice(index, 1);
      }
      bullet.draw();
    })
  }

  drawSecondStage() {
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);
    const player = this.dataStore.get('player');
    player.draw();
    const ememies = this.dataStore.get('attackPlane');
    ememies.forEach((enemy, index, array) => {
      if (enemy.y >= this.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });

    while (ememies.length < 10) {
      ememies.push(new AttackPlane());
    }

    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      enemy.draw();
    }
    const bullets = this.dataStore.get('bullet');
    if (this.dataStore.frame % 20 == 0) {
      bullets.push(new Bullet)
    }
    bullets.forEach((bullet, index, array) => {
      if (bullet.y < 0 || bullet.isVisible === false) {
        array.splice(index, 1);
      }
      bullet.draw();
    })
  }

  drawBossStage() {

  }

}

