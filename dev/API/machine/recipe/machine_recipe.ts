namespace Machine {
  export interface IRecipe {
    isSteam();
  }
  export interface IRecipeMap {
    addRecipe(recipe: IRecipe);
    deleteRecipe(recipe: IRecipe);
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
    inputs = [];
    outputs = [];
    duration = [];
    EUt = 0;
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
  export abstract class RecipeMap implements IRecipeMap {
    minInputs: number = 0;
    maxInputs: number = 0;
    minOutputs: number = 0;
    maxOutputs: number = 0;
    minFluidInputs: number = 0;
    maxFluidInputs: number = 0;
    minFluidOutputs: number = 0;
    maxFluidOutputs: number = 0;
    defaultEUt: number = 0;
    constructor(minInputs: number, maxInputs: number, minOutputs: number, maxOutputs: number, minFluidInputs: number, maxFluidInputs: number, minFluidOutputs: number, maxFluidOutputs: number, defaultEUt: number) {
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
    addRecipe(recipe: Recipe) : void {
        Logger.Log("rmap", "gfertyu");
		let ru = RecipeUtil.shapedUtil(recipe.input);

		Logger.Log(ru.variants, "zas");
		for (let i in ru.raw) {
			Logger.Log(ru.raw[i], "raw");
		}
		for (let i in ru.unraw) {
			Logger.Log(ru.unraw[i], "unraw");
		}

		let inputts = ru.unraw;

		let opc = RecipeUtil.createOfCombinations(ru.raw, null, true, ru.variants);

		for (let i in opc) {
			Logger.Log(opc[i], "cocach");
		}

		let inputs = [];
		for (let i in opc) {
			let inp = [];
			for (let j in inputts) {
				inp.push(inputts[j]);
			}
			for (let j in opc[i]) {
				inp.push(opc[i][j]);
			}
			Logger.Log(inp, "cucol");
			inputs.push(inp);
		}
		if(inputs.length == 0) {
			let inp = [];

			for (let j in inputts) {
				inp.push(inputts[j]);
			}
			inputs[0] = inp;
		}
		for(let n in inputs) {
			this[this.length] = recipe;
			let t = "";
			for(let i in inputs[n]) {
				let iddata;
				if(inputs[n][i].type == "material") {
					let preiddatainput = MaterialDictionary.invdata[inputs[n][i].form][inputs[n][i].material.name];
					iddata = {id: preiddatainput.id, data: preiddatainput.data};
				} else if(inputs[n][i].type == "pipe_machine") {
					let preiddatainput = PipeDictionary.pipes[inputs[n][i].typed + "_" + inputs[n][i].name];
					iddata = {id: BlockID.gtblockpipe, data: preiddatainput};
				} else if(inputs[n][i].type == "machine") {
					let preiddatainput = MachineDictionary.steammachines[inputs[n][i].typed][inputs[n][i].name];
					iddata = {id: BlockID.gtblockmachine, data: preiddatainput.data};
				} else if(inputs[n][i].type == "casing") {
					let preiddatainput = MachineDictionary.casings[inputs[n][i].typed];
					iddata = {id: BlockID.gtcasing, data: preiddatainput};
				} else if(inputs[n][i].type == "common") {
					let preiddatainput = inputs[n][i];
					iddata = {id: preiddatainput.id, data: preiddatainput.data};
				} else if(inputs[n][i].type == "ore") {
					iddata = {id: OreDictionary.data[inputs[n][i].material.name].id, data: 0};
				}
				t += iddata.id + "_";
				t += iddata.data + "_";
			}
			t = t.substring(0, t.length - 2);

			if(!this.get[t]) this.get[t] = [];
			this.get[t].push(recipe);
			this.length++;
		}
	}
    deleteRecipe(recipe: Recipe): void {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
  } & {
     [key: String]: Machine.Recipe 
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
  defaultEUt: number = 0;
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
}
