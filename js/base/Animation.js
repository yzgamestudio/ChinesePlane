import {Sprite} from "./Sprite";
import { DataStore } from '../base/DataStore.js'
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
		height = 0,blood=2) {
		super(img,srcX,srcY, srcW, srcH, x, y , width , height);

        // 动画帧集合
		let imageList = [];
		for(let i = 1; i <= 19; i++) {
			let imgname = 'explosion' + i;
			// debugger;
			const image = Sprite.getImage(imgname); // 获取图片
			imageList.push(image);
		}
		this._imageList = imageList;

        // 当前动画是否正在播放中
        this._isPlayAnimation = false;

        // 当前的图索引
        this._animationIndex = -1;

        // 计时器
        this._timer = null;
        //血量
        this.blood=blood;
        this.fullBlood=blood;

    }

    playAnimation() {
        // 动画开始播放的时候不再渲染精灵主图片

		// debugger;
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
		// debugger;
	    this._animationIndex++;
	    if(this._animationIndex >= this._imageList.length) {
	        clearInterval(this._timer);
			this._isPlayAnimation = false;
            this.isVisible = false;
			this._animationIndex = -1;
        }
      this._drawAnimation()
    }

    _drawAnimation() {
      this._animationIndex++;
	    if(this._animationIndex >= 0 && (this._animationIndex <= this._imageList.length-2)) {
	        let image = this._imageList[this._animationIndex];
			// console.log('image' + this._imageList + ' ' + this._animationIndex);
			// console.log('画第' + this._animationIndex + '张爆炸图');
			// debugger;
            this.ctx.drawImage(
                image,
                0,
                0,
				image.width,
				image.height,
                this.x,
                this.y,
				this.width,
				this.width*image.height/image.width
            );
        }else{
        this._isPlayAnimation = false
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

	    if(this.blood>0){
            super.draw();
            this.drawBlood()
        }
      if (this._isPlayAnimation === true){
        this._drawAnimation()
      }
    }

    drawBlood(){
      const ctx = DataStore.getInstance().ctx;
      ctx.fillStyle = "#ff0000";  
      const width = this.width*this.blood/this.fullBlood;
      const height = 5 * GameGlobal.dpr;
      ctx.fillRect(this.x, this.y - 10 * GameGlobal.dpr, width, height);  
    }
}