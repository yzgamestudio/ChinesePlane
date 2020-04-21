// 资源文件加载器 确认canvas图片资源加载后才进行渲染

import {
  HDImageResources
} from './Resources.js'

export class ResourceLoader {

  constructor() {
    this.readImage();
  }

  static create() {
    return new ResourceLoader();
  }

  onLoaded(callback) {
    this.callback = callback;
  }


  readImage() {

    let imageResources = HDImageResources ;

    this.map = new Map(imageResources);
    for (let [key, value] of this.map) {
      const image = wx.createImage();
      image.src = value;
      this.map.set(key, image);
    }
    this.loadedImageCount = 0;

    for (let value of this.map.values()) {
      value.onload = () => {
        this.loadedImageCount++;
        this.judgeCallBack();
      }
    }
  }

  judgeCallBack() {

    if(this.loadedImageCount >= this.map.size) {
      this.callback(this.map);
    }
  }


}