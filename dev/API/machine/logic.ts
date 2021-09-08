export interface IProcessingLogic {
  recipes: RecipeMap
  getRecipes(): RecipeMap
  getRecipe(index : number): Recipe
  
  addRecipe(recipe: Recipe): void
  provideProcessing(): void
}
export interface IGenerationLogic {
  getRecipes(): FuelMap
  getRecipe(index : number): FuelRecipe
  
  addRecipe(recipe: FuelRecipe): void
  provideGeneration(): void
}
export interface IElectricLogic {
  provideEnergy(): void
}
export interface ISteamLogic {
  provideSteam(): void
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
