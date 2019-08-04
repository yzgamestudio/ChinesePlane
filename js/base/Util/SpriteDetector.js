import {DataStore} from "../DataStore";

export class SpriteDetector {
    static numberOfSprites() {
        let spriteMap = DataStore.getInstance().map;
        let spriteCount = 0;
        spriteMap.forEach(function(value, key) {
           let isArray = Array.isArray(value);
           if (isArray) {
               value.forEach(function (index, Array) {
                   spriteCount++;
               });
           }
           else {
               spriteCount++;
           }
        });
        return spriteCount;
    }

    static test(){
        console.log(this.numberOfSprites());
        // 如果精灵没有释放，可以打开这个注释看看到底是什么精灵一直常驻在内存中
        this.spriteNames();
    }

    static spriteNames(){
        //可以输出在内存的精灵名字和对象，暂时不实现

    }
}