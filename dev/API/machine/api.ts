namespace Machine {
  export interface IRecipe {
    isSteam();
  }
  export interface IRecipeMap {
    
  }
  export abstract class Recipe implements IRecipe {
    inputs = [];
    outputs = [];
    duration = [];
    EUt = 0;
    constructor(inputs, outputs, duration, EUt, postHandler) {
      this.inputs = inputs;
      this.outputs = outputs;
      this.duration = duration;
      EUt = EUt;
    }
    isSteam() : boolean {
        return this.EUt <= 16;
    }
  }
  export abstract class FuelRecipe implements IRecipe {
    this.inputs = [];
    this.outputs = [];
    this.duration = [];
    this.EUt = 0;
    constructor(inputs, outputs, duration, EUt, postHandler) {
      this.inputs = inputs;
      this.outputs = outputs;
      this.duration = duration;
      this.EUt = EUt;
    }
    isSteam() : boolean {
        return this.EUt <= 16;
    }
  }
  export abstract class RecipeMap implements IRecipeMap {
    minInputs: number = 0;
    maxInputs: number = 0;
    constructor(minInputs, maxInputs) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
    }
    addRecipe(recipe) : void {
        this[this.length] = recipe;
        let t = "";
        
        for(let input in recipe.inputs) {
          let iddata = null;
              //Logger.Log("pentazonium", i);
              if(recipe.inputs[input].type == "material") {
                Logger.Log("pe", iddata);

              iddata = MaterialDictionary.invdata[recipe.inputs[input].form][recipe.inputs[input].material.name];
              
              Logger.Log("eeyue", iddata);

            } else if(recipe.inputs[input].type == "ore") {
              Logger.Log(recipe.inputs[input].material.name, ".•o°");

              iddata = {id: OreDictionary.data[recipe.inputs[input].material.name].id, data: 0};
            }
            
          t += iddata.id + "_";
          t += iddata.data + "_";
          
        }
        t = t.substring(0, t.length - 2);
        
        
        if(!this.get[t]) this.get[t] = [];
        
        
        this.get[t].push(recipe);
        
        this.length++;
    }
    deleteRecipe(recipe) : void {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
  } & {
     [key: string]: Machine.Recipe 
  }
  export abstract class FuelMap(minInputs, maxInputs) implements IRecipeMap {
    this.minInputs : number = 0;
    this.maxInputs : number = 0;
    constructor(minInputs, maxInputs) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
    }
    addRecipe(recipe) : void {
        this[this.length] = recipe;
        let t = "";
        for(let input in recipe.inputs) {
          let iddata = null;
              //Logger.Log("pentazonium", i);
              if(recipe.inputs[input].type == "material") {
                Logger.Log("pe", iddata);

              iddata = MaterialDictionary.invdata[recipe.inputs[input].form][recipe.inputs[input].material.name];
              
              Logger.Log("eeyue", iddata);

            } else if(recipe.inputs[input].type == "ore") {
              Logger.Log(recipe.inputs[input].material.name, ".•o°");

              iddata = {id: OreDictionary.data[recipe.inputs[input].material.name].id, data: 0};
            }
            
          t += iddata.id + "_";
          t += recipe.inputs[input].count + "_";
          t += iddata.data + "_";
        }
        t = t.substring(0, t.length - 2);
        this.get[t] = recipe;
        
        this.length++;
    }
    deleteRecipe(recipe) : void {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
}
  
  export class ElectricStack {
    id: string = 0,
    amount: number = 0,
    current: number = 0
    limit: number = 0,
    
    constructor(id: string, amount: number, current : number, limit: number) {
      this.id = id;
      this.amount = amount;
      this.current = current;
      this.limit = limit;
      
    }
    constructor(id: string, limit: number) {
      this(id, 0, 0, limit);
    }
  }
  export class FluidStack {
    id: string = 0,
    amount: number = 0,
    limit: number = 0,
    
    constructor(id: string, amount: number, limit: number) {
      this.id = id;
      this.amount = amount;
      this.limit = limit;
      
    }
    constructor(id: string, limit: number) {
      this(id, 0, limit);
    }
  }
  export class ElectricStorage {
    limit: number = 0,
    limits: number[] = [],
    slots: Machine.ElectricStack[] = [],
    
    constructor(limit: number) {
      this.limit = limit;
    }
    
    setLimitAll(limit : number, forced : boolean) : void {
    this.limit = limit;
    for(let i in limits) {
      setLimit(i, limit, true, true);
    }
  }
  setLimit(index : number, limit : number, forced : boolean, inverted: boolean) : number {
    let pre = slots[index].amount;
    if(forced || limit < limits[index]) {
      limits[index] = limit;
      slots[index].limit = limit;
    }
   if(pre - limit > 0) return pre - limit;
   return 0;
  }
  getLimit() : number {
    return limit;
  }
  getLimit(index: number) : number {
    return limits[index];
  }
setAmount(index: number, amount : number): number {
  let oamount = Math.limit(slots[index].limit, amount);
  slots[index].amount = oamount;
  return amount - oamount;
}
getAmount(index: number): number {
  return slots[index].amount;
}
getRelativeAmount(index: number): number {
  return 1 / slots[index].amount;
}
isFull(index: number): boolean {
  return slots[index].amount == slots[index].limit;
}
isEmpty(index: number): boolean {
  return slots[index].amount == 0;
}
addEnergy(index: number, amount : number): number {
  let oamount = Math.limit(slots[index].limit - slots[index].amount, amount);
  slots[index].amount += oamount;
  return amount - oamount;
}
addEnergy(index: number, stack: ElectricStack): Machine.FluidStack {
  let oamount = Math.limit(slots[index].limit - slots[index].amount, stack.amount);
  slots[index].amount += oamount;
  stack.amount -= (oamount);
  return stack;
}
getEnergy(index: number, amount: number): Machine.FluidStack {
  let oamount = Math.limit(slots[index].amount, amount);
  slots[index].amount -= oamount;
  return oamount;
}
getEnergy(index : number, stack: ElectricStack) : Machine.FluidStack {
  let oamount = Math.limit(slots[index].amount, stack.amount);
  slots[index].amount -= oamount;
  stack.amount = (oamount);
  return stack;
}
prepareStack(index : number, id : number, limit: number) : void {
  limits[index] = limit;
  stacks[index] = new Machine.FluidStack(id, 0, limit);
}
prepareStack(index: number, stack : ElectricStack, isZero: boolean) : void {
  if(isZero) stack.amount = 0;
  limits[index] = stack.limit;
  stacks[index] = stack;
}
  }
  export class FluidStorage {
  limit: number = 0,
  limits: number[] = [],
  stacks: Machine.FluidStack[] = [],
  
  constructor(limit: number) {
      this.limit = limit;
  }
    
  setLimitAll(limit : number, forced : boolean) : void {
    this.limit = limit;
    for(let i in limits) {
      setLimit(i, limit, true, true);
    }
  }
  setLimit(index : number, limit : number, forced : boolean, inverted: boolean) : number {
    let pre = slots[index].amount;
    if(forced || limit < limits[index]) {
      limits[index] = limit;
      slots[index].limit = limit;
    }
   if(pre - limit > 0) return pre - limit;
   return 0;
  }
  getLimit() : number {
    return limit;
  }
  getLimit(slot) : number {
    return limits[slot];
  }
setAmount(index: number, amount: number): number {
  let oamount = Math.limit(slots[index].limit, amount);
  slots[index].amount = oamount;
  return amount - oamount;
}
getAmount(index: number): number {
  return slots[index].amount;
}
getRelativeAmount(index: number): number {
  return 1 / slots[index].amount;
}
isFull(index: number): boolean {
  return slots[index].amount == slots[index].limit;
}
isEmpty(index: number): boolean {
  return slots[index].amount == 0;
}
addLiquid(index: number, amount: number): number {
  let oamount = Math.limit(slots[index].limit - slots[index].amount, amount);
  slots[index].amount += oamount;
  return amount - oamount;
}
addLiquid(index: number, stack): Machine.FluidStack {
  let oamount = Math.limit(slots[index].limit - slots[index].amount, stack.amount);
  slots[index].amount += oamount;
  stack.amount -= (oamount);
  return stack;
}
getliquid(index: number, amount: number): Machine.FluidStack {
  let oamount = Math.limit(slots[index].amount, amount);
  slots[index].amount -= oamount;
  return oamount;
}
getliquid(index: number, stack) : Machine.FluidStack {
  let oamount = Math.limit(slots[slot].amount, stack.amount);
  slots[slot].amount -= oamount;
  stack.amount = (oamount);
  return stack;
}
prepareStack(index: number, id: number, limit: number) : void {
  limit[index] = limit;
  slots[index] = new Machine.FluidStack(id, 0, limit);
}
prepareStack(index: number, stack, isZero: boolean) : void {
  if(isZero) stack.amount = 0;
  limit[index] = stack.limit;
  slots[index] = stack;
}

addValidator() : void {
  
}
addValidator(index: number) : void {
  
}
  }
}



namespace MultiblockMachine {
  export interface IMultiblockLogic {
    shape: MultiblockMachine.Shape;
    getShape() : MultiblockMachine.Shape;
    setShape() : MultiblockMachine.Shape;
    getBlock(position: Vec3) : Tile;
    checkBlocks() : boolean;
    
    provideMultiblock(): void;
  }
  
  export interface IHatchMultiblockLogic implements IMultiblockLogic {
    energyHatchs: Hatch[];
    dynamoHatchs: Hatchs[];
    inputHatchs: Hatch[];
    outputHatchs: Hatch[];
    inputBuses: Hatch[];
    outputBuses: Hatch[];
    mufflerHatchs: Hatch[];
    
    getHatch(Vec3 position) : Hatch;
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
    size: Vec3,
    casing: Tile,
    constructor(position: Vec3, size: Vec3, casing: Tile, blockSource: BlockSource) {
      this.casing = casing;
      this.blockSource = blockSource;
      this.size = size;
      this.position = position;
    }
    //"x_y_z": tile {id, data}
    getBlockSource() : BlockSource {
      return blockSource;
    },
    getBlock(position: Vec3) : Tile {
      return blockSource.getBlock(this.position.x + position.x, this.position.y + position.y, this.position.z + position.z);
    },
    abstract checkBlocks() : boolean,
    abstract getHatch(position: Vec3) : Hatch,
  }
  export abstract class BoxShape extends Shape {
    constructor(position: Vec3, size: Vec3, casing: casing, blockSource: source) {
      super(position, size, casing, blockSource);
    }
    
    getBlock(position: Vec3) : Tile {
      if(position.x > this.size.x & position.y > this.size.y & position.z > this.size.z) {
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