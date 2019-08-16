import {LevelSelect} from "../runtime/LevelSelect";
import {FirstDirector} from "./FirstDirector";
import {SecondDirector} from "./SecondDirector";
import { ThirdDirector } from "./ThirdDirector";
import { FourthDirector } from "./FourthDirector";
import { FifthDirector } from "./FifthDirector";
import { SixDirector } from "./SixDirector";
import { SevenDirector } from "./SevenDirector";
import { EightDirector } from "./EightDirector";
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
    // debugger;8

    let levelDirector;
    if (level === 1) {
       levelDirector = new FirstDirector();
    }
    if (level === 2) {
      levelDirector = new SecondDirector();
    }
    if (level === 3) {
      levelDirector = new ThirdDirector();
    }
    if (level === 4) {
      levelDirector = new FourthDirector();
    }
    if (level === 5) {
      levelDirector = new FifthDirector();
    }
    if (level === 6) {
      levelDirector = new SixDirector();
    }
    if (level === 7) {
      levelDirector = new SevenDirector();
    }
    if (level === 8) {
      levelDirector = new EightDirector();
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