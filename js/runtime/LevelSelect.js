import {
  DataStore
} from "../base/DataStore";
import {
  BackGround
} from "../runtime/BackGround"
import {
  Player
} from "../player/Player"
import {Sprite} from "../base/Sprite"
const LEVELWIDTH = 50;
const LEVELHEIGHT = 50;
const XMARGIN = 20;
const YMARGIN = 20;
const LEVELCOUNT = 8;
const INITX = XMARGIN + 30;
const INITY = YMARGIN + 30;


export class LevelSelect {
  constructor() {
    this.dpr = DataStore.getInstance().systeminfo.pixelRatio;
    //this.levelItems = this.setupLevelItemsArea();
    this.background = new BackGround();
    const canvas = DataStore.getInstance().canvas;
    var imgname = 'player'
    const img = Sprite.getImage(imgname);
    this.img=img;
    this.player = new Player(canvas.width * 0.5 - img.width * 0.5, canvas.height*0.7);

    this.frame = 0;
    this.ctx = DataStore.getInstance().ctx;
    this.touch=false;
  }

  onPressLevel(callback) {
    this.callback = callback;
  }

  //绘制精灵
  drawSprites() {
    this.timer = window.requestAnimationFrame(() => this.drawSprites());
    this.background.draw()
    this.player.draw()
    this.frame++;
    this.drawLogo()
    this.isStartGame()
    this.drawLevel()
  }

  drawLogo(){
    const canvas = DataStore.getInstance().canvas;
    var imgname = 'logo'
    const img = Sprite.getImage(imgname);
    this.ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      canvas.width * 0.1,
      canvas.height*0.1,
      canvas.width*0.8,
      canvas.width*0.8*img.height/img.width
    )
  }
 

  drawLevel() {
    // 如何绘制文本
    const canvas = DataStore.getInstance().canvas;
    this.ctx.font = "60px Georgia";
    this.ctx.fillStyle = "#ffffff";
    var level = DataStore.getInstance().get('currentLevel')
    this.ctx.fillText("第"+level+"关", canvas.width * 0.5 - 75, canvas.height * 0.6);
    this.ctx.font = "45px Georgia";
    this.ctx.fillText("滑屏开始冒险", canvas.width * 0.5 - 135, canvas.height * 0.9);
  }

  //开启玩家开始游戏动作监听
  isStartGame() {
    const canvas = DataStore.getInstance().canvas;
    if (this.player.y < canvas.height * 0.65){
      this.player.stopPlayerMoveListening();
      this.player.y -= 10 * GameGlobal.dpr;
      if(this.callback&&this.player.y<-this.img.height){
        window.cancelAnimationFrame(this.timer);
        this.callback();
      }

    }
  }





}