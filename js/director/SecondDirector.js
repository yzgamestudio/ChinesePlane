import { BaseSubDirector } from "../base/BaseSubDirector";
import { BackGround } from "../runtime/BackGround";
import { Player } from "../player/Player";
import { Enemy } from "../npc/Enemy";
import { Bullet } from "../player/Bullet";
import { AttackPlane } from "../npc/AttackPlane";
import { StayPlane } from "../npc/StayPlane.js";
import { Boss } from "../npc/Boss";

const EMEMYCOUNT = 10;
const STAYPLANECOUNT = 5;

let isLeft = true;
const step = 100;

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

    let stayPlanes = [];
    // let step = 40;
    for (let i = 0; i < STAYPLANECOUNT; i++) {
      let stayPlane = new StayPlane(step * i);
      stayPlanes[i] = stayPlane;
    }
    this.dataStore.put('stayPlane', stayPlanes);

    this.dataStore.put('boss', new Boss());

    return this;
  }


  drawSprites() {
    let seconds = this.dataStore.frame / 60;



    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);

    const player = this.dataStore.get('player');
    player.draw();

    // debugger;
    if (seconds < 30) {
      if (seconds % 30 < 4) {
        this.drawFirstStage();
      } else if (seconds % 30 < 5) {
        this.drawSecondStage();
      } else if (seconds % 30 < 10) {
        this.drawThirdStage();
      } else if (seconds % 30 < 15) {
        this.drawSecondStage();
      } else if (seconds % 30 < 20) {
        this.drawFirstStage();
      } else if (seconds % 30 < 30) {
        this.drawFourStage();
      }
    } else {
      debugger;
      this.drawBoss();
    }

    this.recoverResources();
  }


  drawFirstStage() {
    const ememies = this.dataStore.get('enemy');
    while (ememies.length < 5) {
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

  }

  drawThirdStage() {


    const attacks = this.dataStore.get('attackPlane');
    while (attacks.length < 10) {
      attacks.push(new AttackPlane());
    }
    for (let i = 0; i < attacks.length; i++) {
      let attack = attacks[i];
      attack.draw();
    }

    const ememies = this.dataStore.get('enemy');
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
  }

  drawSecondStage() {

    const ememies = this.dataStore.get('attackPlane');
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

  }

  drawFourStage() {


    const stayPlanes = this.dataStore.get('stayPlane');

    for (let i = 0; i < stayPlanes.length; i++) {
      let stayPlane = stayPlanes[i];
      stayPlane.draw();
    }

    while (stayPlanes.length <= 0) {
      for (let i = 0; i < STAYPLANECOUNT; i++) {
        let stayPlane;
        if (isLeft) {
          stayPlane = new StayPlane(step * i);
          isLeft = false;
        } else {
          stayPlane = new StayPlane(this.dataStore.canvas.width - 40 - step * i);
          isLeft = true;

        }
        stayPlanes[i] = stayPlane;
      }
    }
  }

  judgeDestorySprites() {

  }

  isGameOver() {
    return false;
  }

  drawBoss() {
    const boss = this.dataStore.get('boss');
    boss.draw();
  }

  recoverResources() {
    const ememies = this.dataStore.get('enemy');
    let that = this;
    ememies.forEach(function (spirte, index, array) {
      if (spirte.y >= that.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });

    const attackPlanes = this.dataStore.get('attackPlane');
    attackPlanes.forEach(function (spirte, index, array) {
      if (spirte.y >= that.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    });


    const bullets = this.dataStore.get('bullet');
    bullets.forEach(function (bullet, index, array) {
      if (bullet.y < 0 || bullet.isVisible === false) {
        array.splice(index, 1);
      }
    })
    //
    const stayPlanes = this.dataStore.get('stayPlane');
    stayPlanes.forEach(function (spirte, index, array) {
      if (spirte.y >= that.dataStore.canvas.height) {
        array.splice(index, 1);
      }
    })
  }

}

