/**
 * 场景是对一个关卡出现的精灵的时间上的划分，每一个场景可以出现若干个精灵
 */


export class Scene {
    constructor() {
        this.totalSeconds = 0;
        this.spendSeconds = 0;
    }

    canRemove() {
        return false;
    }

    update(){

    }
}