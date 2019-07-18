import { DataStore } from './base/DataStore.js'
import {BackGround} from "./runtime/BackGround.js";


// 开始类
export class Director {

  constructor() {
    this.dataStore = DataStore.getInstance();
    this.speed = 2;
  }

  static getInstance() {
    if(!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }

  run(){
    const backgroundSprie = this.dataStore.get('background');
    backgroundSprie.draw();
    
    //  如何实现动画无限渲染
    let timer = requestAnimationFrame(() => this.run());
  }

}