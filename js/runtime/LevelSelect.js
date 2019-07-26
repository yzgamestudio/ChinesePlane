import {DataStore} from "../base/DataStore";

const LEVELWIDTH = 50;
const LEVELHEIGHT = 50;
const XMARGIN = 20;
const YMARGIN = 20;
const LEVELCOUNT = 20;
const INITX = XMARGIN + 30;
const INITY = YMARGIN + 30;


export class LevelSelect {
    constructor(){

        this.dpr = DataStore.getInstance().systeminfo.pixelRatio;
        this.levelItems = this.setupLevelItemsArea();
        this.userInterface = true;
    }

    onPressLevel(callback){
        this.callback = callback;
    }

    draw() {

        let that = this;
        this.levelItems.forEach(function (value, index, array) {
            that.drawRect(value);
        })
        this.bindPressEvent(this.levelItems);

    }

    /**
     * 构造网格结构，是一个数组 数组的每个元素是关的位置和宽度高度信息
     * @returns {Array}
     */
    setupLevelItemsArea() {

        const canvas = DataStore.getInstance().canvas;

        let  levelItems = [];
        let lastItem = {
            left:0,
            top:0,
            width:0,
            height:0
        };

      let xStep = (LEVELWIDTH + XMARGIN)*this.dpr ;
      let yStep = (LEVELHEIGHT + XMARGIN) * this.dpr;

        for (let i = 0; i < LEVELCOUNT; i++){
            let item = {
                left:0,
                top:0,
                width:0,
                height:0
            };

            if (i == 0) {
              item.left = INITX * this.dpr;
              item.top = INITY * this.dpr;
              item.width = LEVELWIDTH * this.dpr;
              item.height = LEVELHEIGHT * this.dpr;
            } else {
                item.left = lastItem.left + xStep;
              item.width = LEVELWIDTH * this.dpr;
              item.height = LEVELHEIGHT * this.dpr;
                item.top = lastItem.top;
                if (item.left + xStep > canvas.width) {
                  item.left = INITY * this.dpr;
                    item.top = lastItem.top +  yStep;
                }
            }
            levelItems.push(item);
            lastItem = item;
        }


        return levelItems;
    }

    drawRect(value) {
        const ctx = DataStore.getInstance().ctx;
        ctx.fillStyle = "#ffffff";  // 设置或返回用于填充绘画的颜色、渐变或模式
        const width = value.width;
        const height = value.height;
        ctx.fillRect(value.left, value.top, width, height);  // x轴 y轴 宽 和 高 ,绘制“被填充”的矩形
    }

    bindPressEvent(levelItems) {
        let that = this;

        wx.onTouchStart(function (e) {
            let touch = e.changedTouches[0];
            var touchX = touch.clientX*3;
            var touchY = touch.clientY*3;
            let level = 0;
            levelItems.forEach(function (value, index, array) {
                if (touchX >= value.left && touchX <= value.left + value.width &&
                    touchY >= value.top && touchY <= value.top + value.height) {
                    level = index + 1;
                }
            });
            if (that.userInterface == false) {
                return;
            }
            if (that.callback){
                that.callback(level);
            }

        });
    }



}