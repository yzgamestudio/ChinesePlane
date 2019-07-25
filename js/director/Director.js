import {LevelSelect} from "../runtime/LevelSelect";
import {FisrtSubDirector} from "./FisrtSubDirector";
import {SecondSubDirector} from "./SecondSubDirector";
import {BaseSubDirector} from "../base/BaseSubDirector";

// 开始类
export class Director {

  constructor() {
    this.setup();
  }

  setup(){
    this.drawLevelSelect();
  }

  drawLevelSelect(){
    this.levelSelect = new LevelSelect();
    this.levelSelect.draw();
    this.levelSelect.onPressLevel((level)=>{
      this.setupLevelSubDirector(level);
    });
  }

  setupLevelSubDirector(level){
    // 此处可以用工厂模式进行优化，暂时不考虑这个问题

    let levelDirector;
    if (level === 1) {
       levelDirector = new FisrtSubDirector();
    }
    if (level === 2) {
      levelDirector = new SecondSubDirector();
    }

    let callback = ()=>{
      this.drawLevelSelect();
    };
    levelDirector.onPressLevelSelectMenu(callback);

    levelDirector.setupSprits().run();

    this.currentLevelDirector = levelDirector;
  }

}