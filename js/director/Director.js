import {LevelSelect} from "../runtime/LevelSelect";
import {FisrtSubDirector} from "./FisrtSubDirector";

// 开始类
export class Director {

  constructor() {
    this.setup();
  }

  setup(){
    this.subDirectors = [];
    // this.drawLevelSelect();

    // mock 先mock
    let firstLevelSubDirector = new FisrtSubDirector();
    firstLevelSubDirector.run();
    this.subDirectors.push(firstLevelSubDirector);
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
    if (level === 1){
      let firstLevelSubDirector = new FisrtSubDirector();
      firstLevelSubDirector.onPressLevelSelectMenu(()=>
      {
        this.levelSelect.draw();
        this.subDirectors = [];
      });
      firstLevelSubDirector.setupSprits().run();
      this.subDirectors.push(firstLevelSubDirector);
    }
  }

}