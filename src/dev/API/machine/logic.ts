export interface IProcessingLogic {
}

namespace MultiblockMachine {
  export interface IMultiblockLogic {
    shape: MultiblockMachine.Shape;
    getShape() : MultiblockMachine.Shape;
    setShape() : void;
    getBlock(position: Vec3) : Tile;
    checkBlocks() : boolean;
    
    provideMultiblock(): void;
  }
  
  export interface IHatchMultiblockLogic extends IMultiblockLogic {
    energyHatchs: EnergyHatch[];
    dynamoHatchs: DynamoHatch[];
    inputHatchs: InputHatch[];
    outputHatchs: OutputHatch[];
    inputBuses: InputBus[];
    outputBuses: OutputBus[];
    mufflerHatchs: MufflerHatch[];
    
    getHatch(Vec3 position) : Hatch;
    getHatchs() : Hatch;
    getEnergyHatchs?() : EnergyHatch[];
    getDynamoHatchs?(): DynamoHatch[];
    getInputHatchs(): InputHatch[];
    getOutputHatchs(): OutputHatch[];
    getInputBuses(): InputBus[];
    getOutputBuses(): OutputBus[];
    getMufflerHatchs?(): MufflerHatch[];
  }
}
