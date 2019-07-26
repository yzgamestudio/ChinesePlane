import {BaseSubDirector} from "../base/BaseSubDirector";
import {BackGround} from "../runtime/BackGround";
import {Player} from "../player/Player";
import {Enemy} from "../npc/Enemy";

const EMEMYCOUNT = 10;

export  class SecondDirector  extends BaseSubDirector {
    constructor() {
        super();
    }

    setupSprits() {
        super.setupSprits();

        // 初始化精灵，同时放入dataStore，方便销毁销毁
        this.dataStore.put('background', new BackGround);
        this.dataStore.put('player', new Player);

        let enemies = [];
        for (let i = 0; i < EMEMYCOUNT; i++){
            let enemy =  new Enemy();
            enemies[i] = enemy;
        }
        this.dataStore.put('enemy', enemies);
        return this;
    }


    drawSprites(){
        const backgroundSprie = this.dataStore.get('background');
        backgroundSprie.draw(3);

        const player = this.dataStore.get('player');
        player.draw();

        const ememies = this.dataStore.get('enemy');

        ememies.forEach((enemy, index, array) => {
            if(enemy.y >= this.dataStore.canvas.height) {
                array.splice(index, 1);
            }
        });

        while (ememies.length < 10) {
            ememies.push(new Enemy());
        }

        for (let i = 0; i < ememies.length; i++) {
            let enemy = ememies[i];
            enemy.draw();
        }
    }

}

