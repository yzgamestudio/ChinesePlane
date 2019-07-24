// import  Sprite  from "../base/Sprite";
// import  DataStore  from "../base/DataStore";
import  {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";


export class Bullet extends Sprite{
  constructor(){
    const img = Sprite.getImage('bullet');
    const player = DataStore.getInstance().get('player');
    const canvas = DataStore.getInstance().canvas;
    let x = player.x - player.width * 0.5;
    let y = player.y+10;
    super(img,
      0, 0, img.width, img.height,
      x, y, 16, 30)
  }
  draw(){
    this.y=this.y-5;
    super.draw();
  }
}
