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
    // let bulletAudio = wx.createInnerAudioContext();
    // bulletAudio.seek = 0.25;
    // bulletAudio.src = AudioResources.biu;
    // this.bulletAudio = bulletAudio;

    let bgmAudio = wx.createInnerAudioContext();
    bgmAudio.src = AudioResources.bgm;
    console.log('bgm' + AudioResources.bgm);
    bgmAudio.loop = true;
    this.bgmAudio = bgmAudio;

    // let explosionAudio = wx.createInnerAudioContext();
    // this.explosionAudio = explosionAudio;
  }

  shoot() {
    // console.log(this.bulletAudio.src);
    // this.bulletAudio.play();
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

