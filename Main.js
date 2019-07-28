import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/director/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'
import {Player} from "./js/player/Player.js"
import {Enemy} from "./js/npc/Enemy.js"
import {GameOver} from "./js/runtime/GameOver.js"
import {FirstDirector} from "./js/director/FirstDirector";
import  {Music} from "./js/runtime/Music";


const EMEMYCOUNT = 20;

// 开始类
export class Main {
  constructor(){
    GameGlobal.dpr = wx.getSystemInfoSync().pixelRatio;
    this.res = wx.getSystemInfoSync();
    //创建资源文件加载器
    this.canvas = wx.createCanvas();
    this.canvas.height = this.canvas.height * GameGlobal.dpr;
    this.canvas.width = this.canvas.width * GameGlobal.dpr;
    const loader = ResourceLoader.create();
    loader.onLoaded((map,ziku) => this.onResourceFirstLoaded(map, ziku));

    wx.onShow((object)=>{
      Music.getInstance().playBGM();
    })
  }

  // 所有资源加载完毕后才能渲染
  onResourceFirstLoaded(map,ziku) {
    // 将画笔和画布放在dataStore方便精灵使用
    DataStore.getInstance().systeminfo=this.res;
    DataStore.getInstance().res = map;
    DataStore.getInstance().canvas = this.canvas;
    DataStore.getInstance().ctx = this.canvas.getContext('2d');
    DataStore.getInstance().ziku = ziku;
    this.director = new Director;
  }


}