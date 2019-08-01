// 缓存器 
export class DataStore {

  static getInstance() {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore();
    }
    return DataStore.instance;
  }

  constructor () {
    this.map = new Map();

    this.deadpool = new Map();
    this.frame=0;
  }

  put(key, value) {
    this.map.set(key, value);
    return this;
  }

  get(key) {
    return this.map.get(key);
  }

  destory(){
    for(let value of this.map.values()) {
      value = null;
    }
    wx.triggerGC();
  }

  destoryItem(item){
    for(let value of this.map.values()) {
     if(item == value) {
       value = null;
     }
    }
  }

  reset() {
    this.frame = 0;
  }

}