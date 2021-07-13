namespace RotationTransforms {
  worldRotationToBlockRotation: function (rotation, rotationOfBlock) {
    Logger.Log(rotationOfBlock, "@seao");
    if(rotationOfBlock == 3) {
      return rotation;
    }
    let e;
    for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) {
      if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
    }
    return MetaRenderer.rotationMap[rotationOfBlock][e];
  },
  blockRotationToWorldRotation: function (rotation, rotationOfBlock) {
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
    minOutputs: number = 0;
    maxOutputs: number = 0;
    minFluidInputs: number = 0;
    maxFluidInputs: number = 0;
    minFluidOutputs: number = 0;
    maxFluidOutputs: number = 0;
    this.defaultEUt: number = 0;
    constructor(minInputs, maxInputs, minOutputs, maxOutputs, minFluidInputs, maxFluidInputs, minFluidOutputs, maxFluidOutputs, defaultEUt) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
      this.minOutputs = minInputs;
      this.maxOutputs = maxInputs;
      this.minFluidInputs = minFluidInputs;
      this.maxFluidInputs = maxFluidInputs;
      this.minFluidOutputs = minFluidOutputs;
      this.maxFluidOutputs = maxFluidOutputs;
      this.defaultEUt = defaultEUt;
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
  
  let ItemInstances = {
     [key: string]: ItemInstance
  }
  
export abstract class FuelMap implements IRecipeMap {
  minInputs: number = 0;
  maxInputs: number = 0;
    minOutputs: number = 0;
    maxOutputs: number = 0;
    minFluidInputs: number = 0;
    maxFluidInputs: number = 0;
    minFluidOutputs: number = 0;
    maxFluidOutputs: number = 0;
    this.defaultEUt: number = 0;
  constructor(minInputs, maxInputs, minOutputs, maxOutputs, minFluidInputs, maxFluidInputs, minFluidOutputs, maxFluidOutputs, defaultEUt) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
      this.minOutputs = minInputs;
      this.maxOutputs = maxInputs;
      this.minFluidInputs = minFluidInputs;
      this.maxFluidInputs = maxFluidInputs;
      this.minFluidOutputs = minFluidOutputs;
      this.maxFluidOutputs = maxFluidOutputs;
      this.defaultEUt = defaultEUt;
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
  
  export enum Type {
    FLUID,
    ITEM,
    ENERGY
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
    private id: string = null,
    private amount: number = 0,
    private limit: number = 0,
    constId: boolean = false,
    constructor(amount: number, limit: number) {
      this.amount = amount;
      this.limit = limit;
      //this.constId = constId;
    }
    constructor(id: string, amount: number, limit: number) {
      this(id, amount, limit, false);
    }
    constructor(id: string, amount: number, limit: number, constId: boolean) {
      this.id = id;
      this.amount = amount;
      this.limit = limit;
      this.constId = constId;
    }
    
    constructor(id: string, limit: number) {
      this(id, null, limit, true);
    }
    setId(id: string) {
      if(!constId) this.id = id;
    }
    setAmount(amount: number) {
      if(!constId) this.data = data;
    }
    setLimit(limit: number) {
      if(!constId) this.limit = limit;
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
prepareStack(index: number, stack : ElectricStack) : void {
  limits[index] = stack.limit;
  stacks[index] = stack;
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
  getLimit(index: number) : number {
    return limits[index];
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
  let oamount = Math.min(slots[index].limit - slots[index].amount, amount);
  slots[index].amount += oamount;
  return amount - oamount;
  }
  addLiquid(index: number, stack: Machine.FluidStack): Machine.FluidStack {
  let oamount = Math.min(slots[index].limit - slots[index].amount, stack.amount);
  slots[index].amount += oamount;
  stack.amount -= oamount;
  return stack;
  }
  getliquid(index: number, amount: number): Machine.FluidStack {
  let oamount = Math.min(slots[index].amount, amount);
  slots[index].amount -= oamount;
  return oamount;
  }
  getliquid(index: number, stack: Machine.FluidStack) : Machine.FluidStack {
  let oamount = Math.min(slots[index].amount, stack.amount);
  slots[index].amount -= oamount;
  stack.amount = oamount;
  return stack;
  }
  prepareStack(index: number, limit: number) : void {
  limit[index] = limit;
  slots[index] = new Machine.FluidStack(0, limit);
  }
  prepareStack(index: number, id: number, limit: number) : void {
  limit[index] = limit;
  slots[index] = new Machine.FluidStack(id, 0, limit);
  }
  prepareStack(index: number, id: number, limit: number, constId: boolean) : void {
  limit[index] = limit;
  slots[index] = new Machine.FluidStack(id, 0, limit, constId);
  }

  prepareStack(index: number, stack: Machine.FluidStack) : void {
  this.prepareStack(index, stack, false);
  }
  prepareStack(index: number, stack: Machine.FluidStack, constId: boolean) : void {
  limit[index] = stack.limit;
  slots[index] = stack;
  stack.constId = constId;
  }
  prepareStack(index: number, stack: Machine.FluidStack, isZero: boolean) : void {
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
