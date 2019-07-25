import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/director/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'
import {Player} from "./js/player/Player.js"
import {Enemy} from "./js/npc/Enemy.js"
import {GameOver} from "./js/runtime/GameOver.js"
import {FisrtSubDirector} from "./js/director/FisrtSubDirector";


const EMEMYCOUNT = 20;

// 开始类
export class Main {
  constructor(){
    //创建资源文件加载器
    this.canvas = wx.createCanvas();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }

  // 所有资源加载完毕后才能渲染
  onResourceFirstLoaded(map) {
    // 将画笔和画布放在dataStore方便精灵使用
    DataStore.getInstance().res = map;
    DataStore.getInstance().canvas = this.canvas;
    DataStore.getInstance().ctx = this.canvas.getContext('2d');
    this.director = new Director;
  }


}