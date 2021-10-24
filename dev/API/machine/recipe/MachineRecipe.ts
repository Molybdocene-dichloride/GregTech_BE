export class StandardRecipe implements IRecipe {
	private inputs: LinkedHashMap<string, IStack>;
    private outputs: LinkedHashMap<string, IStack>;
    private duration: number;
    final private hidden: boolean;
    constructor(inputs: LinkedHashMap<string, IStack>, outputs: LinkedHashMap<string, IStack>, duration: number, hidden: boolean = true) {
      this.inputs = inputs;
      this.outputs = outputs;
      this.duration = duration;
      
      this,hidden = hidden;
    }
    getDuration(tier: number): number {
		return this.duration;
	}
    getEfficiency(): number {
		return 1;
	}
    isSteam() : boolean {
        return this.inputs.get("eut").count <= 16;
	}
	isHidden(): boolean {
		return hidden;
	}
	
	getInputs(): void {
		return this.inputs;
	}
	getOutputs(): void {
		return this.outputs;
	}
	provideRecipe(currentMachineInfo: MachineInfo, itemStorage: ItemStorage, fluidStorage: fluidStorage, electricStorage?: ElectricStorage): boolean {
		if(!this.check(this.EUt * 2, false, true)) return;
		if((!currentMachineInfo.isProcess) || !(!itemStorage.checkOutput(j) || !fluidStorage.checkOutput(j))) {
			if(!currentMachineInfo.isProcess) {
				currentMachineInfo.duration = this.duration;
				currentMachineInfo.worktime = 0;
				currentMachineInfo.steamcomsumption = this.EUt * 6;
				currentMachineInfo.isProcess = true;
				itemStorage.input(this);
				fluidStorage.input(this);
            }
			fluidStorage.getLiquid("steam", currentMachineInfo.steamcomsumption);
			
			currentMachineInfo.worktime += 1;
			
			if(currentMachineInfo.worktime >= this.duration) {
				itemStorage.output(this);
				fluidStorage.output(this);
				currentMachineInfo.end = true;
				currentMachineInfo.isProcess = false;
				currentMachineInfo.duration = 0;
				currentMachineInfo.worktime = 0;
				currentMachineInfo.steamcomsumption = 0;
			}
			currentMachineInfo.relative_worktime = currentMachineInfo.worktime / currentMachineInfo.duration;
			this.uiContainer.setScale("scale", currentMachineInfo.relative_worktime);
		}
		return currentMachineInfo.end;
	}
}
  
export abstract class RecipeMap implements IRecipeMap<BasicRecipeFactory> {
	private factory: BasicRecipeFactory:
	private recipes: LinkedHashMap<LinkedHashMap<string, IStack>, IRecipe>;
	
    private minInputs: number;
    private maxInputs: number;
    private minOutputs: number;
    private maxOutputs: number;
    private minFluidInputs: number;
    private maxFluidInputs: number;
    private minFluidOutputs: number;
    private maxFluidOutputs: number;

    constructor(minInputs: number, maxInputs: number, minOutputs: number, maxOutputs: number, minFluidInputs: number, maxFluidInputs: number, minFluidOutputs: number, maxFluidOutputs: number, defaultEUt: number, b: RecipeBuilder, hidden: boolean = false) {
      this.minInputs = minInputs;
      this.maxInputs = maxInputs;
      this.minOutputs = minInputs;
      this.maxOutputs = maxInputs;
      this.minFluidInputs = minFluidInputs;
      this.maxFluidInputs = maxFluidInputs;
      this.minFluidOutputs = minFluidOutputs;
      this.maxFluidOutputs = maxFluidOutputs;
      this.factory = b;
      this.hidden = hidden;
    }
    findRecipe(recipe: Recipe) : void {
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
		this.recipes.put(recipe.inputs, recipe);
	}
	deleteRecipe(index: string) {
		recipes.remove(index);
	}
    findRecipe(inputs: LinkedHashMap<string, IStack>): Recipe {
		let getted = this.recipes.get(inputs);
		return getted;	
	}
	getOutputs(inputs: LinkedHashMap<string, IStack>): outputs: LinkedHashMap<string, IStack> {
		let getted = this.recipes.get(inputs);
		if(getted == null) return null;
		return getted.getOutputs();
	}
	findFactory(): BasicRecipeFactory {
		return factory;
	}
  }
