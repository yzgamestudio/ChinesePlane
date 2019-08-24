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
import { Sprite } from "../base/Sprite";
export class BaseSubDirector {

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间
    this.currentLevel = 0;
    this.currentWord = 0;
    this.currentPart = 0; //当前字的组成部分编号
    this.frame = 0;
    this.timer=0;
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
    this.timer = window.requestAnimationFrame(() => this.run());
    this.dataStore.ctx.fillRect(0, 0, this.dataStore.canvas.width, this.dataStore.canvas.height);
    this.drawSprites();
    this.dataStore.frame++;
    this._judgePlayerBulletCollideEnemy();
    this._judgePlayerBulletCollideEnemyBullet();
    this._judgePlayerCollideEnemyBullet();
    this._judgePlayerCollideEnemy();
    this._recover();
    this._isGameOver();
    this._judgePlayerGetTool();
    let _player = this.dataStore.get('player');
    if (this.dataStore.frame % 20 === 0) {
      _player.shoot()
    }
    // if (this.isGameOver()) {

    // this.dataStore.frame = 0;
    // this.drawGameOver();
    // Music.getInstance().pauseBGM();
    //  return;
    //  }
    //this.isChangeWord()
    //this.drawZiku();


    // SpriteDetector.test();
  }


  //判断玩家子弹和敌机是否发生碰撞
  _judgePlayerBulletCollideEnemy() {
    let _enemies = this.dataStore.get('enemy');
    let _playerBullets = this.dataStore.get('playerBullets');
    if(_enemies.length>0&&_playerBullets.length>0){
      _playerBullets.forEach((bullet) => {
        for (let i = 0, il = _enemies.length; i < il; i++) {
          let enemy = _enemies[i];
          let isCollide = bullet.isPlayerBulletCollideWithEnemy(enemy);
          if (isCollide) {
            bullet.isVisible = false;
            enemy.blood--;
            if(enemy.blood<0){
              enemy.blood=0;
            }
          }
          //break;
        }
      })
    }

  }


  //判断玩家子弹是否和敌机子弹碰撞
  _judgePlayerBulletCollideEnemyBullet() {
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _playerBullets = this.dataStore.get('playerBullets');
    if(_enemyBullets.length>0&&_playerBullets.length>0){
      _playerBullets.forEach((_playerBullet) => {
        for (let i = 0, il = _enemyBullets.length; i < il; i++) {
          let _enemyBullet = _enemyBullets[i];
          let isCollide = _playerBullet.isCollideWith(_enemyBullet);
          if (isCollide) {
            _playerBullet.isVisible = false;
            _enemyBullet.isVisible = false;
          }
          //break;
        }
      })
    }

  }

  //判断玩家是否和敌机子弹碰撞
  _judgePlayerCollideEnemyBullet() {
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _player = this.dataStore.get('player');
    if(_enemyBullets.length>0){
      _enemyBullets.forEach((_enemyBullet) => {

        let isCollide = _enemyBullet.isEnemyBulletCollideWithPlayer(_player);
        if (isCollide) {
          if(_player.shield===false){
            _player.blood--;
            if (_player.blood < 0) {
              _player.blood = 0;
            }
          }
          _enemyBullet.isVisible = false;
        }
        //break;
      })
    }

  }


  //判断玩家是否和敌机碰撞
  _judgePlayerCollideEnemy() {
    let _enemies = this.dataStore.get('enemy');
    let _player = this.dataStore.get('player');
    if(_enemies.length>0){
      _enemies.forEach((_enemy) => {

        let isCollide = _player.isCollideWith(_enemy);
        if (isCollide) {
          if(_player.shield===false){
            _player.blood--;
            if(_player.blood<0){
               _player.blood=0;
            }
          }
          _enemy.blood=0;
        }

      })
    }

  }

  _recover() {
    let _enemies = this.dataStore.get('enemy');
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _playerBullets = this.dataStore.get('playerBullets');

    _playerBullets.forEach((item,index,array) => {
      let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.width,item.height*3);
      if(isOffScreen||item.isVisible===false){

        array.splice(index,1)
      }
    })
    
    _enemies.forEach((item, index, array) => {
      if (item.blood === 0 && item._animationIndex===-1 ){
        item._isPlayAnimation =true;
      }
      let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.width, item.height * 3);
      if (isOffScreen || (item.blood === 0 && item._isPlayAnimation ===false)){
        array.splice(index, 1) 
      }


        }
    
    )

    _enemyBullets.forEach((item, index, array) => {
      let isOffScreen = GameGlobal.isOffScreen(item.x, item.y, item.width,item.height * 3);
      if (isOffScreen || item.isVisible === false) {
        array.splice(index, 1)
      }

    })
  }


  _judgePlayerGetTool() {
    const player = this.dataStore.get('player');
    const tools = this.dataStore.get('tool')
    for (let i = 0; i < tools.length; i++) {
      let tool = tools[i];
      let isCollide = player.isCollideWith(tool)
      if (isCollide && tool.isVisible === true) {
        tool.isVisible = false;
        if(tool.imgName==='tool1'){
          let _enemies = this.dataStore.get('enemy');
          _enemies.forEach((item, index, array) => {
           item.blood=0;
          })
        }
        if (tool.imgName === 'tool2') {
          player.blood+=1;
        }
        if (tool.imgName === 'tool3') {
          const img = Sprite.getImage('player2');
          player.img = img;
          player.srcX = 0;
          player.srcY = 0;
          player.srcW = img.width;
          player.srcH = img.height;
          player.width = img.width;
          player.height = img.height;
          player.shield = true;
          player.countShield=600;
        }
        if (tool.imgName === 'tool4') {
          player.bulletNum+=2;
          if(player.bulletNum>7){
            player.bulletNum=7;
          }
          player.count=600;
        }
        //this.wordCheck.set(tool.wordPart, 1)
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
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw(3);
    const player = this.dataStore.get('player');
    player.draw();
    let _enemies = this.dataStore.get('enemy');
    let _enemyBullets = this.dataStore.get('enemyBullets');
    let _playerBullets = this.dataStore.get('playerBullets');
    let _tools=this.dataStore.get('tool')
    _playerBullets.forEach((item, index, array) => {
      item.draw()
    })

    _enemies.forEach((item, index, array) => {
      if(item.type!='followplane'){
        item.draw()
      }else{
        let player = DataStore.getInstance().get('player');
        item.draw(player.x, player.y);
      }

    })
    _tools.forEach((item, index, array) => {
      item.draw()
    })

    _enemyBullets.forEach((item, index, array) => {
      item.draw()
    })
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