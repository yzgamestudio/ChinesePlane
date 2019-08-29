import { AudioResources } from "../base/Resources.js";


export class Music {

  static getInstance() {
    if (!Music.instance) {
      Music.instance = new Music();
    }
    return Music.instance;
  }

  constructor() {
    this.setupAudio();
  }

  setupAudio() {
    //初始化背景bgm声效
    let bgmAudio = wx.createInnerAudioContext();
    bgmAudio.src = AudioResources.bgm;
    bgmAudio.loop = true;
    this.bgmAudio = bgmAudio;
    //初始化爆炸声效
    let explosionAudio = wx.createInnerAudioContext();
    explosionAudio.src = AudioResources.boom;
    this.explosionAudio = explosionAudio;
    //初始化子弹声效
    let bulletAudio = wx.createInnerAudioContext();
    bulletAudio.src = AudioResources.bullet;
    this.bulletAudio = bulletAudio;
  }

  playBulletShoot() {
    this.bulletAudio.play();
  }

  playExplosion() {
    this.explosionAudio.play();
  }

  playBGM() {
    this.bgmAudio.play();
  }

  pauseBGM() {
    this.bgmAudio.pause();
  }

  pause() {

  }

}

