# ChinesePlane
中文打飞机


-------base 
    |-------DataStore.js 数据缓存管理：包括图片，canvas,精灵都可以从这里获取
    |-------ResourceLoader.js 资源加载类:负责加载所有的资源
    |-------Resource.js 资源：资源的路径
    |-------Sprite.js 精灵基类
-------npc  
    |-------Enemy.js 敌机类
-------player  
    |-------Player.js 主角飞机类
-------runtime
    |-------BackGround.js 背景类
    |-------GameOver.js按钮 后期是一个弹框可以暂停 继续
-------Director  游戏逻辑控制类 控制程序逻辑，如启动，暂停
-------Main  程序入口 入口和初始化一些关键类对象

    
