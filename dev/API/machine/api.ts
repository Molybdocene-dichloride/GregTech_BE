namespace RotationTransforms {
	rotationMap: number[][] = [
		[3, 2, 0, 1, 4, 5],
		[2, 3, 1, 0, 5, 4],
		[0, 1, 3, 2, 5, 4],
		[0, 1, 2, 3, 4, 5],
		[0, 1, 4, 5, 3, 2],
		[0, 1, 5, 4, 2, 3],
   ];
  function worldRotationToBlockRotation(rotation, rotationOfBlock) : number {
    Logger.Log(rotationOfBlock, "@seao");
    if(rotationOfBlock == 3) {
      return rotation;
    }
    let e;
    for(let i = 0; i < RotationTransforms.rotationMap[3].length; i++) : number {
      if(RotationTransforms.rotationMap[3][i] == rotation) e = i;
    }
    return RotationTransforms.rotationMap[rotationOfBlock][e];
  }
  function blockRotationToWorldRotation(rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@sas");
          if(rotationOfBlock == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < RotationTransforms.rotationMap[rotationOfBlock].length; i++) {
        if(RotationTransforms.rotationMap[rotationOfBlock][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(RotationTransforms.rotationMap[3][e], "@sashok");
      return RotationTransforms.rotationMap[3][e];
    },
}
