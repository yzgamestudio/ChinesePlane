/**
 * 场景是对一个关卡出现的精灵的时间上的划分，每一个场景可以出现若干个精灵
 */

export class Scene {
    constructor(delay=0) {

        this.frame = 0;
        this.delay=delay
    }

    canRemove() {
        return false;
    }

    update(){
        this.frame++;
    }

    construct(){

    }

    draw(){

    }


    seconds(){
       return  this.frame / 60;
    }


    
}