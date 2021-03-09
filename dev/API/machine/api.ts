namespace Machine {
  export abstract class Recipe {
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
    isSteam() {
        return this.EUt <= 16;
    }
  }
  export abstract class FuelRecipe {
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
    this.isSteam = function() {
        return this.EUt <= 16;
    }
  }
  export abstract class RecipeMap {
    minInputs = minInputs;
    maxInputs = maxInputs;
    /*this.minInputs = minInputs;
    this.maxInputs = maxInputs;*/
    constructor(minInputs, maxInputs) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
    }
    addRecipe(recipe) : void {
        this[this.length] = recipe;
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
  export abstract class FuelMap(minInputs, maxInputs) {
    this.minInputs = minInputs;
    this.maxInputs = maxInputs;
    /*this.minInputs = minInputs;
    this.maxInputs = maxInputs;*/
    constructor (minInputs, maxInputs) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
    }
    this.addRecipe = function(recipe) {
        this[this.length] = recipe;
        this.length++;
    }
    this.deleteRecipe = function(recipe) {
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
    
    constructor(id: string, amount: number, current, limit: number) {
      this.id = id;
      this.amount = amount;
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
    limits: Machine.ElectricStack[] = [],
    slots: Machine.ElectricStack[] = [],
    
    constructor(limit: number) {
      this.limit = limit;
    }
    
    setLimitAll: void = (limit, forced) {
    limit = limit;
    for(let i in limits) {
      if(forced || limit < limits[i]) {
        limits[i] = limit;
        slots[i].limit = limit;
      }
    }
  }
  setLimit: (slot, limit) number {
    let olimit = Math.limit(this.limit, limit);
    limits[slot] = olimit;
    slots[slot].limit = olimit;
    return limit - olimit;
  }
  getLimit() {
    return limit;
  }
  getLimit: (slot) number {
    return limits[slot];
  }
setAmount(slot, amount): number {
  let oamount = Math.limit(slots[slot].limit, amount);
  slots[slot].amount = oamount;
  return amount - oamount;
}
getAmount(slot): number {
  return slots[slot].amount;
}
getRelativeAmount(slot): number {
  return 1 / slots[slot].amount;
}
isFull(slot): boolean {
  return slots[slot].amount == slots[slot].limit;
}
isEmpty(slot): boolean {
  return slots[slot].amount == 0;
}
addEnergy(slot, amount): number {
  let oamount = Math.limit(slots[slot].limit - slots[slot].amount, amount);
  slots[slot].amount += oamount;
  return amount - oamount;
}
addEnergy(slot, stack): Machine.FluidStack {
  let oamount = Math.limit(slots[slot].limit - slots[slot].amount, stack.amount);
  slots[slot].amount += oamount;
  stack.amount -= (oamount);
  return stack;
}
getEnergy(slot, amount): Machine.FluidStack {
  let oamount = Math.limit(slots[slot].amount, amount);
  slots[slot].amount -= oamount;
  return oamount;
}
getEnergy(index, stack) : Machine.FluidStack {
  let oamount = Math.limit(slots[slot].amount, stack.amount);
  slots[slot].amount -= oamount;
  stack.amount = (oamount);
  return stack;
}
prepareStack(index, id, limit) {
  limits[index] = limit;
  stacks[index] = new Machine.FluidStack(id, 0, limit);
}
prepareStack(index, stack, isZero) {
  if(isZero) stack.amount = 0;
  limits[index] = stack.limit;
  stacks[index] = stack;
}
  }
  export class FluidStorage {
  limit: number = 0,
  limits: Machine.FluidStack[] = [],
  stacks: Machine.FluidStack[] = [],
  
  constructor(limit: number) {
      this.limit = limit;
  }
    
  setLimitAll: void = (limit, forced) {
    limit = limit;
    for(let i in limits) {
      if(forced || limit < limits[i]) {
        limits[i] = limit;
        slots[i].limit = limit;
      }
    }
  }
  setLimit: (slot, limit) number {
    let olimit = Math.limit(this.limit, limit);
    limits[slot] = olimit;
    slots[slot].limit = olimit;
    return limit - olimit;
  }
  getLimit() {
    return limit;
  }
  getLimit: (slot) number {
    return limits[slot];
  }
setAmount(slot, amount): number {
  let oamount = Math.limit(slots[slot].limit, amount);
  slots[slot].amount = oamount;
  return amount - oamount;
}
getAmount(slot): number {
  return slots[slot].amount;
}
getRelativeAmount(slot): number {
  return 1 / slots[slot].amount;
}
isFull(slot): boolean {
  return slots[slot].amount == slots[slot].limit;
}
isEmpty(slot): boolean {
  return slots[slot].amount == 0;
}
addLiquid(slot, amount): number {
  let oamount = Math.limit(slots[slot].limit - slots[slot].amount, amount);
  slots[slot].amount += oamount;
  return amount - oamount;
}
addLiquid(slot, stack): Machine.FluidStack {
  let oamount = Math.limit(slots[slot].limit - slots[slot].amount, stack.amount);
  slots[slot].amount += oamount;
  stack.amount -= (oamount);
  return stack;
}
getliquid(slot, amount): Machine.FluidStack {
  let oamount = Math.limit(slots[slot].amount, amount);
  slots[slot].amount -= oamount;
  return oamount;
}
getliquid(index, stack) : Machine.FluidStack {
  let oamount = Math.limit(slots[slot].amount, stack.amount);
  slots[slot].amount -= oamount;
  stack.amount = (oamount);
  return stack;
}
prepareStack(index, id, limit) {
  limit[index] = limit;
  slots[index] = new Machine.FluidStack(id, 0, limit);
}
prepareStack(index, stack, isZero) {
  if(isZero) stack.amount = 0;
  limit[index] = stack.limit;
  slots[index] = stack;
}

addLiquidValidator() : void {
  
}
addLiquidValidator(index) : void {
  
}
  }
}



namespace MultiblockMachine {
  export interface IMultiblockLogic {
   shape: MultiblockMachine.Shape;
    energyHatchs?: Hatch[];
    dynamoHatchs?: Hatchs[];
    inputHatchs?: Hatch[];
    outputHatchs?: Hatch[];
    inputBuses?: Hatch[];
    outputBuses?: Hatch[];
    mufflerHatchs?: Hatch[];
    getShape() : MultiblockMachine.Shape
    setShape() : MultiblockMachine.Shape
    getBlock(position: Vec3) : Tile
    checkBlocks() : boolean
    getHatch?(Vec3 position) : Hatch
    getEnergyHatchs?() : EnergyHatch[]
    getDynamoHatchs?(): DynamoHatch[]
    getInputHatchs?(): InputHatch[]
    getOutputHatchs?(): OutputHatch[]
    getInputBuses?(): InputBus[]
    getOutputBuses?(): OutputBus[]
    getMufflerHatchs?(): MufflerHatch[]
    provideMultiblock(): void
  }
  export abstract class Shape {
    constructor(shape: Shape, position: Vec3, size Vec3, casing: casing, blockSource: source) {
      this.blockSource = blockSource;
    }
    blockSource: source,
    shape: Shape,
    main_pos: number,
    position: Vec3,
    size: Vec3,
    casing: Tile,
    //"x_y_z": tile {id, data}
    abstract getBlock(position: Vec3) : Tile {
    },
    findHatch(type) {
      for(let i = 0; i < size.x; i++) {
        for(let j = 0; j < size.y; j++) {
      for(let j = 0; j < size.z; j++) {
        let block = blockSource.getBlock(this.position.x + i, this.position.y + j, this.position.z + k)
        if(!(block.id == casing.id && block.data == casing.data)) {
          return block
        }
      }
        }
      }
    },
    checkBlocks() {
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
  export class BoxShape {
    constructor(shape: Shape, position: Vec3, size Vec3, casing: casing, blockSource: source) {
      super(shape, position, size, casing, blockSource);
    }
    
    getBlock(position: Vec3) : Tile {
      if(position.x > this.size.x & position.y > this.size.y & position.z > this.size.z) {
          return null;
        }
      return blockSource.getBlock(this.position.x + position.x, this.position.y + position.y, this.position.z + position.z);
    }
  }
}