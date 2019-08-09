import {
  GameOver
} from "../runtime/GameOver";
import {
  DataStore
} from "./DataStore";
import {
  Bullet
} from "../player/Bullet.js"
import {
  BackGround
} from "../runtime/BackGround.js"
import {
  Player
} from "../player/Player.js"
import {
  Tool
} from "../player/Tool.js"
import {
  SpriteDetector
} from "./Util/SpriteDetector";

export class BaseSubDirector {

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间
    this.currentLevel = 0;
    this.currentWord = 0;
    this.currentPart = 0; //当前字的组成部分编号
    this.frame = 0;
  }

  setupSprits() { /// 子类继承时必须先调用super  setupSprits
    this.dataStore.put('gameOver', new GameOver);
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);
    let playerBullets = [];
    this.dataStore.put('playerBullets', playerBullets);
    let enemyBullets = [];
    this.dataStore.put('enemyBullets', enemyBullets);
    let enemies = [];
    this.dataStore.put('enemy', enemies);
    let tools = [];
    this.dataStore.put('tool', tools);
  }

  run() {
    this.dataStore.ctx.fillRect(0, 0, this.dataStore.canvas.width, this.dataStore.canvas.height);
    this.drawSprites();
    this.dataStore.frame++;
    this._judgePlayerBulletCollideEnemy();
    this._judgePlayerBulletCollideEnemyBullet();
    this._judgePlayerCollideEnemyBullet();
    this._judgePlayerCollideEnemy();
    this._recover();
    this._isGameOver();
    //this.judgePlayerGetTool();
    // if (this.isGameOver()) {

    // this.dataStore.frame = 0;
    // this.drawGameOver();
    // Music.getInstance().pauseBGM();
    //  return;
    //  }
    //this.isChangeWord()
    //this.drawZiku();

    requestAnimationFrame(() => this.run());

    // SpriteDetector.test();
  }


  //判断玩家子弹和敌机是否发生碰撞
  _judgePlayerBulletCollideEnemy() {
    let _enemies = this.dataStore.get('enemy');
    let _playerBullets = this.dataStore.get('playerBullets');
    _playerBullets.forEach((bullet) => {
      for (let i = 0, il = enemies.length; i < il; i++) {
        let enemy = enemies[i];
        let isCollide = bullet.isCollideWith(enemy);
        if (isCollide) {
          bullet.isVisble = false;
          enemy.blood--;
        }
        break;
      }
    })
  }


  //判断玩家子弹是否和敌机子弹碰撞
  _judgePlayerBulletCollideEnemyBullet() {
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _playerBullets = this.dataStore.get('playerBullets');
    _playerbullets.forEach((_playerBullet) => {
      for (let i = 0, il = _enemyBullets.length; i < il; i++) {
        let _enemyBullet = _enemyBullets[i];
        let isCollide = _playerBullet.isCollideWith(_enemyBullet);
        if (isCollide) {
          _playerBullet.isVisble = false;
          _enemyBullet.isVisble = false;
        }
        break;
      }
    })
  }

  //判断玩家是否和敌机子弹碰撞
  _judgePlayerCollideEnemyBullet() {
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _player = this.dataStore.get('player');
    _enemyBullets.forEach((_enemyBullet) => {

      let isCollide = _player.isCollideWith(_enemyBullet);
      if (isCollide) {
        _player.blood--;
        _enemyBullet.isVisble = false;
      }
      //break;
    })
  }


  //判断玩家是否和敌机碰撞
  _judgePlayerCollideEnemy() {
    let _enemies = this.dataStore.get('enemy');
    let _player = this.dataStore.get('player');
    _enemies.forEach((_enemy) => {

      let isCollide = _player.isCollideWith(_enemy);
      if (isCollide) {
        _player.blood--;
        _enemyBullet.isVisble = false;
      }

    })
  }

  _recover() {
    let _enemies = this.dataStore.get('enemy');
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _playerBullets = this.dataStore.get('playerBullets');

    _playerbullets.forEach((item,index,array) => {
      let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.height*3);
      if(isOffScreen||item.isVisible===false){
        array.splice(index,1)
      }
    })
    
    _enemies.forEach((item, index, array) => {
      let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.height * 3);
      if (isOffScreen||item.blood===0||item.isVisible===false) {
        array.splice(index, 1)
      }
    })

    _enemyBullets.forEach((item, index, array) => {
      let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.height * 3);
      if (isOffScreen || item.isVisible === false) {
        array.splice(index, 1)
      }

    })
  }


  judgePlayerGetTool() {
    const player = this.dataStore.get('player');
    const tools = this.dataStore.get('tool')
    for (let i = 0; i < tools.length; i++) {
      let tool = tools[i];
      let isCollide = player.isCollideWith(tool)
      if (isCollide && tool.isVisible === true) {
        tool.isVisible = false;
        this.wordCheck.set(tool.wordPart, 1)
      }
    }
  }
  
  //判断是否游戏中途结束
  _isGameOver() {
    const player = this.dataStore.get('player');
    if(player.blood<=0){
      this.drawGameOver()
    }else{
      //do nothing
    }

  }


  judgeWordComplete() {
    const ziku = this.dataStore.ziku;
    const wordparts = ziku[this.level - 1][this.currentWord].conponent;
    let count = 0;
    wordparts.forEach((wordpart, index, array) => {
      if (this.wordCheck.get(wordpart)) {
        count++;
      };
    })
    if (count >= wordparts.length) {
      return true;
    } else {
      return false;
    }
  }

  isChangeWord() {
    if (this.judgeWordComplete()) {
      const ziku = this.dataStore.ziku;
      const wordparts = ziku[this.level - 1][this.currentWord].conponent;
      wordparts.forEach((wordpart, index, array) => {
        this.wordCheck.delete(wordpart);
      })
      this.currentWord++;
      this.reSetupWordMap();
    }
  }

  reSetupWordMap() {
    const ziku = this.dataStore.ziku;
    const wordparts = ziku[this.level - 1][this.currentWord].conponent;
    wordparts.forEach((wordpart, index, array) => {
      this.wordCheck.set(wordpart, 0);
    })
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

  drawZiku() {
    this.dataStore.ctx.font = "0px Georgia";
    this.dataStore.ctx.fillStyle = "#ffffff";
    let ziku = this.dataStore.ziku;
    let level = ziku[parseInt(this.level - 1)][this.currentWord].word

    // console.log(level);
    this.dataStore.ctx.fillText(level, 30 * GameGlobal.dpr,
      this.dataStore.canvas.height - 50 * GameGlobal.dpr);
  }


}