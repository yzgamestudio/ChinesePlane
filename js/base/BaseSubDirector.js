import {
    GameOver
} from "../runtime/GameOver";
import {
    DataStore
} from "./DataStore";
import {Bullet} from "../player/Bullet.js"
import {BackGround} from "../runtime/BackGround.js"
import {Player} from "../player/Player.js"
import {Tool} from "../player/Tool.js"

export class BaseSubDirector {
<<<<<<< HEAD
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间
    this.currentLevel = 0;
    this.currentWord=0;
    this.currentPart=0;//当前字的组成部分编号
  }

  setupSprits() { /// 子类继承时必须先调用super  setupSprits
    this.dataStore.put('gameOver', new GameOver);
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);
    let bullets = [];
    bullets.push(new Bullet)
    this.dataStore.put('bullet', bullets);
    let tools=[];
    this.dataStore.put('tool', tools);
  }

  run() {
    this.dataStore.ctx.fillRect(0, 0, this.dataStore.canvas.width, this.dataStore.canvas.height);
    this.drawSprites();
    this.dataStore.frame++;
    this.judgeBulletCollideEnemy();
    this.judgePlayerGetTool()
   // if (this.isGameOver()) {

     // this.dataStore.frame = 0;
     // this.drawGameOver();
      // Music.getInstance().pauseBGM();
    //  return;
  //  }
    this.isChangeWord()
    this.drawZiku();

    requestAnimationFrame(() => this.run());
  }

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

  judgePlayerGetTool(){
    const player = this.dataStore.get('player');
    const tools=this.dataStore.get('tool')
    for (let i = 0; i < tools.length; i++) {
      let tool = tools[i];
      let isCollide=player.isCollideWith(tool)
      if (isCollide&&tool.isVisible===true) {
          tool.isVisible = false;
        this.wordCheck.set(tool.wordPart,1)
      }
    }
  }
  
  isGameOver() {
    let result = this.judgePlayerCollideEnemy();

    return result;
  }

  judgePlayerCollideEnemy() {
    const player = this.dataStore.get('player');
    const ememies = this.dataStore.get('enemy');
    for (let i = 0; i < ememies.length; i++) {
      let enemy = ememies[i];
      if (player.isCollideWith(enemy)) {
=======
    constructor() {
        this.dataStore = DataStore.getInstance();
        this.dataStore.reset();
        this.level = 0; // 自己所在的关卡数
        this.currentWordIndex = 0;
        this.currentPart = 0;//当前字的组成部分编号
    }

    setupSprits() { /// 子类继承时必须先调用super  setupSprits
        this.dataStore.put('gameOver', new GameOver);
        this.dataStore.put('background', new BackGround);
        this.dataStore.put('player', new Player);
        let bullets = [];
        bullets.push(new Bullet)
        this.dataStore.put('bullet', bullets);
        let tools = [];
        this.dataStore.put('tool', tools);
        let bossBullets = [];
        this.dataStore.put('bossBullet', bossBullets);
    }

    run() {
        this.dataStore.ctx.fillRect(0, 0, this.dataStore.canvas.width, this.dataStore.canvas.height);
        this.drawSprites();
        this.dataStore.frame++;
        this.judgePlayerGetTool()
        if (this.isGameOver()) {
            this.dataStore.reset();
            this.drawGameOver();
            return;
        }
        this.drawZiku();

        requestAnimationFrame(() => this.run());
    }


    judgePlayerGetTool() {
        const player = this.dataStore.get('player');
        const tools = this.dataStore.get('tool')
        for (let i = 0; i < tools.length; i++) {
            let tool = tools[i];
            let isCollide = player.isCollideWith(tool)
            if (isCollide && tool.isVisible === true) {
                tool.isVisible = false;
            }
        }
    }

    isGameOver() {
        let result = this.judgePlayerCollideEnemy();
        return result;
    }

    judgePlayerCollideEnemy() {
        const player = this.dataStore.get('player');
        const ememies = this.dataStore.get('enemy');
        for (let i = 0; i < ememies.length; i++) {
            let enemy = ememies[i];
            if (player.isCollide(enemy)) {
                // debugger;
                return true;
            }
        }
        return false;
    }

    drawSprites() {

    }

    drawGameOver() {
>>>>>>> 9ee64da4582cb40e0c9e6d6e2a6f6e08a0d953ac
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
        this.dataStore.ctx.font = "90px Georgia";
        this.dataStore.ctx.fillStyle = "#ffffff";
        let ziku = this.dataStore.ziku;
        let word = ziku[parseInt(this.level - 1)][this.currentWordIndex].word
        this.dataStore.ctx.fillText(word, 30 * GameGlobal.dpr,
            GameGlobal.canvas.height - 50 * GameGlobal.dpr);
    }
<<<<<<< HEAD
    return false;
  }

  judgeWordComplete(){
    const ziku = this.dataStore.ziku;
    const wordparts = ziku[this.level-1][this.currentWord].conponent;
    let count=0;
    wordparts.forEach((wordpart, index, array) => {
      if(this.wordCheck.get(wordpart)){
        count++;
      };
    })
    if(count>=wordparts.length){
       return true;
    }else{
      return false;
    }
  }

  isChangeWord(){
    if (this.judgeWordComplete()){
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
    const wordparts = ziku[this.level-1][this.currentWord].conponent;
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

  drawZiku(){
    this.dataStore.ctx.font = "90px Georgia";
    this.dataStore.ctx.fillStyle = "#ffffff";
    let ziku = this.dataStore.ziku;
    let level = ziku[parseInt(this.level-1)][this.currentWord].word

    console.log(level);
    this.dataStore.ctx.fillText(level, 30 * GameGlobal.dpr,
      this.dataStore.canvas.height - 50 * GameGlobal.dpr);
  }
=======
>>>>>>> 9ee64da4582cb40e0c9e6d6e2a6f6e08a0d953ac


}