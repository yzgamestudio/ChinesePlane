import { ResourceLoader } from '/js/base/ResourceLoader.js'
import { Director } from '/js/Director.js'
import { DataStore } from '/js/base/DataStore.js'
import {BackGround} from '/js/runtime/BackGround.js'


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
    console.log('resource is');
    console.log(this.dataStore.res);
    this.dataStore.put('background', new BackGround);
    Director.getInstance().run();
  }

}