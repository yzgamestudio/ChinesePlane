import {
  Sprite
} from "../base/Sprite";
import {
  DataStore
} from "../base/DataStore";

// 开始类
export class GameOver {
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.ctx = this.dataStore.ctx;
    this.canvas = this.dataStore.canvas;
    this.dpr = this.dataStore.systeminfo.pixelRatio;
  }

  draw() {
    //  如何封装一个组件
    this.drawBg();
    this.drawRestartButton();
    this.drawContinueButton() ;
    this.drawComeToIndexButton();
    this.setupTouchEvent();
  }

  drawBg() {
    // 如何绘制矩形
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  //绘制重新开始按钮
  drawRestartButton() {
    // 如何绘制文本
    this.ctx.font = "30px Georgia";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText("点击重试", this.canvas.width * 0.5 - 60, this.canvas.height * 0.8);
  }

  //绘制继续游戏按钮
  drawContinueButton() {
    // 如何绘制文本
    this.ctx.font = "30px Georgia";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText("继续游戏", this.canvas.width * 0.5 - 60, this.canvas.height * 0.8 - 60);
  }

  //绘制返回首页按钮
  drawComeToIndexButton() {
    // 如何绘制文本
    this.ctx.font = "30px Georgia";
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillText("返回首页", this.canvas.width * 0.5 - 60, this.canvas.height * 0.8 - 120);
  }


  setupTouchEvent() {
    this.canvas = this.dataStore.canvas;
    let that = this;
    this.callbackTouchStart = function (e) {
      let touch = e.changedTouches[0];
      var x = touch.clientX * that.dpr;
      var y = touch.clientY * that.dpr;
      var select = 0;
      if (x > (that.canvas.width * 0.5 - 60) && x < (that.canvas.width * 0.5 + 60)) {
        if ((y > (that.canvas.height * 0.8 - 135)) && (y < (that.canvas.height * 0.8 - 75))) {
          select = 1;
        } else if ((y > (that.canvas.height * 0.8 - 75)) && (y < (that.canvas.height * 0.8 - 15))) {
          select = 2;
        } else if ((y > (that.canvas.height * 0.8 - 15)) && (y < (that.canvas.height * 0.8 + 45))) {
          select = 3;
        }
      }
      if (that.callback&&select>0) {
        that.stopTouchStartListening();
        that.callback(select);
      }
    }
    wx.onTouchStart(this.callbackTouchStart);
  }
  
  stopTouchStartListening(){
    wx.offTouchStart(this.callbackTouchStart);
  }
  onClicked(callback) {
    this.callback = callback;
  }


}