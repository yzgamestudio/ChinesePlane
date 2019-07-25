import {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";

// 开始类
export class GameOver    {
    constructor(){
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;
        this.canvas = this.dataStore.canvas;
        this.restartArea = {
          left: this.canvas.width * 0.5 - 40,
          top: this.canvas.height * 0.8,
          width:80,
          height:20
        };
        this.setupTouchEvent();
        this.userInterface = false;
    }

    draw(){
      //  如何封装一个组件
      this.drawBg();
      this.drawRestartButton();
      this.drawLevelSelectMenu();
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

    drawLevelSelectMenu(){
        // 如何绘制文本
        this.ctx.font = "20px Georgia";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText("进入选关", this.canvas.width * 0.5 - 40,  this.canvas.height * 0.85);
    }

    setupTouchEvent() {
      this.canvas = this.dataStore.canvas;
      let area = {
         left: this.canvas.width * 0.5 - 80,
         top: this.canvas.height * 0.8 - 80,
         width:100,
         heigit:80
      };
      let that = this; // 18. 回调函数中找不到callback的解决方案？
      wx.onTouchStart(function (e) {
        if (that.userInterface == false){
          return;
        }
        let touch = e.changedTouches[0];
        var x = touch.clientX;
        var y = touch.clientY;
        debugger;
        if (that.callback){ // 17.回调函数应该怎么写？
            that.callback();
        }
      });
    }

    // 17.回调函数应该怎么写？
    onClicked(callback){
      this.callback = callback;
    }
    

}