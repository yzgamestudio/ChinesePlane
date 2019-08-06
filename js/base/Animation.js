import {Sprite} from "./Sprite";

const INTERVAL = 1000 / 60;

export class Animation extends Sprite {
	constructor(img = null,
		srcX = 0,
		srcY = 0,
		srcW = 0,
		srcH = 0,
		x = 0,
		y = 0,
		width = 0,
		height = 0) {
		super(img,srcX,srcY, srcW, srcH, x, y , width , height);

        // 动画帧集合
        this._imageList = [];

        // 当前动画是否正在播放中
        this._isPlayAnimation = false;

        // 当前的图索引
        this._animationIndex = -1;

        // 计时器
        this._timer = null;

    }

    playAnimation() {
        // 动画开始播放的时候不再渲染精灵主图片
        this.isVisble = false;
        if(this._isPlayAnimation === false) {
            // 判断为true才能执行，确保执行一次
            this._isPlayAnimation = true;
            this._timer = setInterval(
                this._animationLoop.bind(this),
                INTERVAL
            );
        }
    }

    _animationLoop(){
	    this._animationIndex++;
	    if(this._animationIndex >= this._imageList.length) {
	        clearInterval(this._timer);
        }
    }

    _drawAnimation() {
	    if(this._animationIndex >= 0 && this._animationIndex <= this._imageList.length - 1) {
	        let image = this._imageList[this._animationIndex];
            this.ctx.drawImage(
                image,
                this.srcX,
                this.srcY,
                this.image.width,
                this.image.height,
                this.x,
                this.y,
                this.image.width,
                this.image.height
            );
        }
    }

    draw(img = this.img,
         srcX = this.srcX,
         srcY = this.srcY,
         srcW = this.srcW,
         srcH = this.srcH,
         x = this.x,
         y = this.y,
         width = this.width,
         height = this.height) {

	    if(this.isVisble){
            super.draw();
        }
	    if(this._isPlayAnimation){
	        this._drawAnimation();
        }
    }
}