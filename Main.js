import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'
import {Player} from "./js/player/Player.js"


// 开始类
export class Main {
  constructor(){
    this.canvas = wx.createCanvas();
    this.context = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));
  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.context;
    this.dataStore.res = map;
    this.dataStore.canvas = this.canvas;
    this.init();
  }

  init() {
    this.dataStore.put('background', new BackGround);
    this.dataStore.put('player', new Player);
    Director.getInstance().run();
  }

}