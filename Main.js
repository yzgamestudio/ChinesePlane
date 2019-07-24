import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'
import {Player} from "./js/player/Player.js"
import {Enemy} from "./js/npc/Enemy.js"
import {GameOver} from "./js/runtime/GameOver.js"


const EMEMYCOUNT = 20;

// 开始类
export class Main {
  constructor(){
    //创建画布对象，全局一个，创建后存入datastore
    this.canvas = wx.createCanvas();
    //获取画笔对象，全局一个，创建后存入datastore
    this.context = this.canvas.getContext('2d');
    //创建对象管理器
    this.dataStore = DataStore.getInstance();
    //创建资源文件加载器
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }

  // 所有资源加载完毕后才能渲染
  onResourceFirstLoaded(map) {
    // 将画笔和画布放在dataStore方便精灵使用
    this.initDataStore(map);
    this.initSprites();
    Director.getInstance().run();

  }

  initDataStore(map) {
    this.dataStore.ctx = this.context;
    this.dataStore.res = map;
    this.dataStore.canvas = this.canvas;
  }

  initSprites() {
    // 初始化精灵，同时放入dataStore，方便销毁销毁
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);

    let enemies = [];
    for (let i = 0; i < EMEMYCOUNT; i++){
      let enemy =  new Enemy();
      enemies[i] = enemy;
    }
    this.dataStore.put('enemy', enemies);
    this.dataStore.put('gameOver', new  GameOver);
    const gameOver = this.dataStore.get('gameOver');
    //监听到点击事件执行，重新开始游戏
    gameOver.onClicked(() => {
      gameOver.userInterface = false;
      Director.getInstance().restart();
      this.initSprites();
      Director.getInstance().run();
    });
  }

}