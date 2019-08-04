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
    }
}