import {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";

// 开始类
export class GameOver    {
    constructor(){
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.canvas = this.dataStore.canvas;

    }


    draw(){
      this.drawBg();
      this.drawRestartButton();
     
    }

    drawBg() {
      // 如何绘制矩形
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawRestartButton() {
      // 如何绘制文本
      this.ctx.font = "20px Georgia";
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("点击重试", this.canvas.width * 0.5 - 40,  this.canvas.height * 0.8);
    }


}