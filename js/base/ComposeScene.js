import { Scene } from "../base/Scene";
export class ComposeScene extends Scene {
  constructor(scenes=[]){
    super();
     this.scenes=scenes;
  }

  addScene(scene){
   this.scenes.push(scene)
  }

  canRemove(){
    var flag=0;
    this.scenes.forEach((scene,index,array)=>{
      if(scene.canRemove()){
        flag++;
      }
    }
    )

    if(this.scenes.length<=flag){
      return true;
    }else{
      return false;
    }
  
  }
  
  update(){
    super.update();
    this.scenes.forEach((scene, index, array) => {
      if (!scene.canRemove())
        scene.update()
    }
    )
  }


} 