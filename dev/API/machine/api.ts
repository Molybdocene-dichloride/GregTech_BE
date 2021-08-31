namespace RotationTransforms {
  function worldRotationToBlockRotation(rotation, rotationOfBlock) : number {
    Logger.Log(rotationOfBlock, "@seao");
    if(rotationOfBlock == 3) {
      return rotation;
    }
    let e;
    for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) : number {
      if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
    }
    return MetaRenderer.rotationMap[rotationOfBlock][e];
  }
  function blockRotationToWorldRotation(rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@sas");
          if(rotationOfBlock == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < MetaRenderer.rotationMap[rotationOfBlock].length; i++) {
        if(MetaRenderer.rotationMap[rotationOfBlock][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(MetaRenderer.rotationMap[3][e], "@sashok");
      return MetaRenderer.rotationMap[3][e];
    },
}
