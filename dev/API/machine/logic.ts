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
  
  export abstract class Shape {
    blockSource: BlockSource,
    position: Vec3,
    positionRel: Vec3,
    casing: Tile,
    constructor(position: Vec3, positionRel: Vec3, casing: Tile, blockSource: BlockSource) {
      this.casing = casing;
      this.blockSource = blockSource;
      //this.size = size;
      this.position = position;
      this.positionRel = positionRel;
    }
    //"x_y_z": tile {id, data}
    getBlockSource() : BlockSource {
      return blockSource;
    },
    getBlock(position: Vec3) : Tile {
      return blockSource.getBlock(this.position.x + position.x, this.position.y + position.y, this.position.z + position.z);
    },
    abstract checkBlocks() : boolean,
    abstract getHatch?(position: Vec3) : Hatch,
  }
  export abstract class BoxShape extends Shape {
    this.size = size;
    constructor(position: Vec3, positionRel: Vec3, size: Vec3, casing: casing, blockSource: source) {
      super(position, positionRel, casing, blockSource);
      this.size = size;
    }
    
    getBlock(position: Vec3) : Tile {
      if(position.x > this.size.x && position.y > this.size.y && position.z > this.size.z) {
          return null;
        }
      return super.getBlock(position);
    }
    
    checkBlocks() : boolean {
      let is = true
      for(let i = 0; i < size.x; i++) {
        for(let j = 0; j < size.y; j++) {
      for(let j = 0; j < size.z; j++) {
  
        let block = blockSource.getBlock(this.position.x + i, this.position.y + j, this.position.z + k)
        if(!(block.id == casing.id && block.data == casing.data)) {
          is = false;
        }
      }
        }
      }
      return is;
    }
  }
}