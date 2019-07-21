import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'
import {Player} from "./js/player/Player.js"
import {Enemy} from "./js/npc/Enemy";

const EMEMYCOUNT = 10;

// 开始类
export class Main {
  constructor(){
    this.canvas = wx.createCanvas();
    this.context = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }

  // 所有资源加载完毕后才能渲染
  onResourceFirstLoaded(map) {
    // 将画笔和画布放在dataStore方便精灵使用
    this.dataStore.ctx = this.context;
    this.dataStore.res = map;
    this.dataStore.canvas = this.canvas;
    this.init();
  }

  init() {
    // 初始化精灵，同时放入dataStore，方便销毁销毁
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);


    let enemies = [];

    for (let i = 0; i < EMEMYCOUNT; i++){
      let enemy =  new Enemy();
      enemies[i] = enemy;
    }
    this.dataStore.put('enemy', enemies);
    Director.getInstance().run();
  }

}