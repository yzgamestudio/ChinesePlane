export class ComposeScene  {
  constructor(scenes=[]){
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
  
  updateScene(){
    this.scenes.forEach((scene, index, array) => {
      if (!scene.canRemove())
        scene.update()
    }
    )
  }


} 