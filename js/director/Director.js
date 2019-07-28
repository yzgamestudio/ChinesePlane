import {LevelSelect} from "../runtime/LevelSelect";
import {FirstDirector} from "./FirstDirector";
import {SecondDirector} from "./SecondDirector";
import {DataStore} from "../base/DataStore";

// 开始类
export class Director {

  constructor() {
    this.setup();
  }

  setup(){
    this.drawLevelSelect();
    this.currentLevelDirector = null;
    this.ctx = DataStore.getInstance().ctx;
  }

  drawLevelSelect(){
    this.levelSelect = new LevelSelect();
    this.levelSelect.draw();
    let that = this;
    this.levelSelect.onPressLevel((level)=>{
      that.levelSelect.userInterface = false;
      that.setupLevelSubDirector(level);
    });
  }

  setupLevelSubDirector(level){
    // 此处可以用工厂模式进行优化，暂时不考虑这个问题
    // debugger;

    let levelDirector;
    if (level === 1) {
       levelDirector = new FirstDirector();
    }
    if (level === 2) {
      levelDirector = new SecondDirector();
    }

    levelDirector.onPressLevelSelectMenu(()=>{
      this.drawLevelSelect();
    });
    levelDirector.level = level;
    this.currentLevelDirector = levelDirector;

    levelDirector.setupSprits();
    levelDirector.run();

  }

}