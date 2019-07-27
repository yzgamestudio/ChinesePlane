import {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";

export  class  Player extends  Sprite{
    constructor(){
        const img = Sprite.getImage('player');
        const canvas = DataStore.getInstance().canvas;
      let x = canvas.width * 0.5 - img.width * 0.5 * GameGlobal.dpr;
        let y = canvas.height - 60 - img.height;

        super(img,
              0, 0, img.width, img.height,
          x, y, img.width, img.height );
              
        this.enableCollide = true;
        this.dpr = this.dataStore.systeminfo.pixelRatio;
        //  如何让精灵随手指移动
        this.touch = false;
        let that = this;//  is not function bug fix
        wx.onTouchStart(function (e) {
            let touch =e.changedTouches[0];
            var x= touch.clientX*that.dpr;
            var y = touch.clientY*that.dpr;
            if(that.checkIsFingerOnAir(x, y)){
                that.touch = true; // 标记手指按下的飞机
            }else {
                that.touch = false;
            }
        });

        wx.onTouchMove(function (e) {
            let touch = e.changedTouches[0];
            var x= touch.clientX*that.dpr;
            var y = touch.clientY*that.dpr;
            if (that.touch) {
                that.moveAirOnPostion(x,y); // 移动到指定位置
            }
        })

        wx.onTouchEnd(function (e) {
            that.touch = false; // 离开时标记为touch = false
        })

    }

    draw() {
        super.draw(this.img,
              this.srcX, this.srcY, this.srcW, this.srcH,
              this.x, this.y, this.width, this.height);
    }

    // 判读手指是否接触了飞机区域，offset是偏移，当靠近飞机 也认为是接触了飞机，因为图片总是有留白的
    checkIsFingerOnAir(x, y) {
        const canvas = DataStore.getInstance().canvas;
        const  offset = 0;
        let minX = this.x - offset;
        let maxX = this.x + this.width + offset;
        let minY = this.y - offset;
        let maxY = this.y + this.height + offset;
        if (x <= maxX && x >= minX ||
            y <= maxY && y >= minY
        ) {
            return true;
        }
        return  false;
    }

    moveAirOnPostion(midX, midY){
        const canvas = DataStore.getInstance().canvas;

        let x = midX - this.width / 2;
        let y = midY - this.height / 2;

        if (x < 0) {
            x = 0;
        }
        if (x > canvas.width - this.width){
            x = canvas.width - this.width;
        }

        if (y < 0) {
            y = 0;
        }
        if (y > canvas.height - this.height){
            y = canvas.height - this.height;
        }

        this.x = x ;
        this.y = y;
    }

}