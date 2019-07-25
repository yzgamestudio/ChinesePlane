import { GameOver} from "../runtime/GameOver";
import {DataStore} from "./DataStore";


export class BaseSubDirector {
    constructor() {
        this.dataStore = DataStore.getInstance();
        this.dataStore.frame = 0; // 帧数计数器，可以用来计算时间
        this.setupSprits();

    }

    setupSprits() {  /// 子类继承时必须先调用super  setupSprits
        this.dataStore.put('gameOver', new  GameOver);
    }

    run() { 
        this.drawSprites();
        this.dataStore.frame++;
        if (this.isGameOver()) {
            this.drawGameOver();
            return;
        }
        requestAnimationFrame(()=>this.run());
    }

    drawSprites(){

    }

    drawGameOver() {
        const gameOver = this.dataStore.get('gameOver');
        gameOver.draw();
        gameOver.onClicked(()=>this.callback());
        gameOver.userInterface = true;
    }

    restart(){
        cancelAnimationFrame(this.timer);
        this.dataStore.destory();
        this.setupSprits();
        this.draw();
    }


    onPressLevelSelectMenu(callback){
        cancelAnimationFrame(this.timer);
        this.dataStore.destory();
        this.callback = callback;
    }

    isGameOver() {
        return false;
    }

}