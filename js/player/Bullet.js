// import  Sprite  from "../base/Sprite";
// import  DataStore  from "../base/DataStore";
import  {Sprite} from "../base/Sprite";
import {DataStore} from "../base/DataStore";


export class Bullet extends Sprite{
  constructor(imgname='bullet2'){
    const img = Sprite.getImage(imgname);
    var spritex = DataStore.getInstance().get('player').x;
    var spritey = DataStore.getInstance().get('player').y;
    var spriteWidth = DataStore.getInstance().get('player').width;
    var spriteHeight = DataStore.getInstance().get('player').height;
    const canvas = DataStore.getInstance().canvas;
    var x = spritex + spriteWidth / 2 - img.width/2;
    var  y = spritey+10;
    super(img,
      0, 0, img.width, img.height,
      x, y, img.width, img.height);
    this.isVisible=true;
    this.enableCollide = true;
  }
  draw(){
    this.y = this.y - 20 * GameGlobal.dpr;
    super.draw();
  }
}
