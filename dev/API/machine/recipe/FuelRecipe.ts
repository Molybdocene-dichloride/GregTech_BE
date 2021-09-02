export abstract class FuelRecipe implements IRecipe {
    inputs: ItemInstance[];
    outputs: ItemInstance[];
    duration: number;
    EUt: number;
    FuelRecipe(inputs: String[], outputs: String[], duration: number[], EUt: number, postHandler: String) {
      this.inputs = inputs;
      this.outputs = outputs;
      this.duration = duration;
      this.EUt = EUt;
    }
    isSteam() : boolean {
        return this.EUt <= 16;
    }
  }
  export abstract class FuelMap implements IRecipeMap {
  minInputs: number;
  maxInputs: number;
  minOutputs: number;
  maxOutputs: number;
  minFluidInputs: number;
  maxFluidInputs: number;
  minFluidOutputs: number;
  maxFluidOutputs: number;
  defaultEUt: number;
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
  addRecipe(recipe: FuelRecipe) : void {
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
  deleteRecipe(recipe: FuelRecipe) : void {
    for(let i in this) {
      if(this[i] == recipe) { 
        delete this[i];
        break;
      }
    }
  }
 }
