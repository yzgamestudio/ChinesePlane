import {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";

// 开始类
export class GameOver    {
    constructor(){
        this.dataStore = DataStore.getInstance();
        this.ctx = this.dataStore.ctx;

    }


    draw(){
        // this.ctx.drawImage(
        //     img,
        //     srcX,
        //     srcY,
        //     srcW,
        //     srcH,
        //     x,
        //     y,
        //     width,
        //     height
        // )
    }

}