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
    this.readZiKu();

  }

  onLoaded(callback) {
    let loadedCount = 0;
    for (let value of this.map.values()) {
      value.onload = () => {
        loadedCount++;
        if (loadedCount >= this.map.size) {
          callback(this.map, this.ziku);
        }
      }
    }
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
        this.ziku = res.data;;
      },
     
    }
    fileManager.readFile(
      params
    );
  }
}