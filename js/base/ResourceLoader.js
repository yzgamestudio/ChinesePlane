// 资源文件加载器 确认canvas图片资源加载后才进行渲染

import {
  Resources, ChineseResources
} from './Resources.js'

export class ResourceLoader {

  constructor() {
    this.map = new Map(Resources);
    for (let [key, value] of this.map) {
      const image = wx.createImage();
      image.src = value;
      this.map.set(key, image); 
    }
    this.loadedCount = 0;
    this.readZiKu();
    for (let value of this.map.values()) {
      value.onload = () => {
        this.loadedCount++;
        }
    }
  }

  onLoaded(callback) {
    this.callback=callback;
  }


  static create() {
    return new ResourceLoader();
  }

  readZiKu() {
    let fileManager = wx.getFileSystemManager();
    let params = {
      filePath: ChineseResources.ziku,
      encoding: 'utf8',
      complete: (res) => {
        this.ziku = res.data;
          if (this.loadedCount >= this.map.size) {
            this.callback(this.map, this.ziku);
          }
          
        }
      }
     
    
    fileManager.readFile(
      params
    );
  }
}