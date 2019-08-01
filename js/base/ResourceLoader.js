// 资源文件加载器 确认canvas图片资源加载后才进行渲染

import {
  Resources, ChineseResources,HDImageResources,UDImageResources
} from './Resources.js'


export class ResourceLoader {

  constructor() {
    this.readImage();
    this.readZiKu();
  }

  static create() {
    return new ResourceLoader();
  }

  onLoaded(callback) {
    this.callback = callback;
  }

  readZiKu() {
    let fileManager = wx.getFileSystemManager();
    let that = this;
    let params = {
      filePath: ChineseResources.ziku,
      encoding: 'utf8',
      complete: function(res) {
        that.ziku = res.data;
        console.log(res);
        that.judgeCallBack();
      }
    }
    fileManager.readFile(
      params
    );
  }

  readImage() {

    let imageResources = GameGlobal.dpr >= 2.5 ? UDImageResources : HDImageResources;

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

    if(this.loadedImageCount >= this.map.size && this.ziku) {
      this.callback(this.map, this.ziku);
    }
  }


}