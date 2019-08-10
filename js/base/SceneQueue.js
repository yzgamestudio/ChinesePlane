export class SceneQueue {
    constructor(props) {
        this.scenes = [];
    }
    /**
     * 入列
     */
    addScene(scene){
      this.scenes.push(scene);
    }

    updateScene(){
      // debugger;
      if(this.scenes.length>0){
        let topScene = this.scenes[0];
        topScene.update();
        this.removeScene();
      }

    }

    removeScene(){
        let topScene = this.scenes[0];
        if (topScene.canRemove()){
            this.scenes.splice(0,1);
        }else {
            // do nothing;
        }
    }

}