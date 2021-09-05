//Builder and Factory mixed patterns
export abstract class RecipeFactory<B extends RecipeFactory<B>, A extends IRecipe> imlements Cloneable {
	private recipe: IRecipe;
	
	private inputs: LinkedHashMap<string, IStack>;
    private outputs: LinkedHashMap<string, IStack>;
    private duration: number;
    
    private hidden: boolean;
    private efficiency: number;
    private EUt: number;
    
	basic(): B {
		this.inputs = new LinkedHashMap<string, IStack>();
		this.outputs = new LinkedHashMap<string, IStack>();
		
		this.duration = 0;
		this.hidden = false;
		this.efficiency = 0;
		this.EUt = 0;
		
		return this;
	}; //All neccessary and often using params by default
	
	input(index: string, items: IStack): B {
		this.inputs.put(index, items);
		return this;
	}
	inputs(inputs: LinkedHashMap<string, IStack>): B {
		this.inputs.putAll(inputs);
		return this;
	}
	output(index: string, items: IStack): B {
		this.outputs.put(index, items);
		return this;
	}
	outputs(outputs: LinkedHashMap<string, IStack>): B {
		this.outputs.putAll(outputs);
		return this;
	}
	
	duration(duration: number): B {
		this.duration = duration;
		return this;
	}
	hidden(hidden: boolean): B {
		this.hidden = hidden;
		return this;
	}
	efficiency(): B {
		this.efficiency = efficiency;
		return this;
	}
	abstract EUt(eu: number): B;
	
	getInputs(): LinkedHashMap<string, IStack> {
		return this.inputs;
	}
	getOutputs(): LinkedHashMap<string, IStack> {
		return this.outputs;
	}
	
	getDuration(): number {
		return this.duration;
	}
	isHidden(): boolean {
		return this.hidden;
	}
	getEfficiency(): number {
		return this.efficiency;
	}
	abstract getEUt(): number;
	abstract isSteam(): boolean;
	
	reset(): void {
		this.destroy();
		
		this.inputs = new LinkedHashMap<string, IStack>();
		this.outputs = new LinkedHashMap<string, IStack>();
		
		this.duration = 0;
		this.hidden = false;
		this.efficiency = 0;
		this.EUt = 0;
		
	} //set all(and consctructed) to null
	destroy(): void {
		this.recipe = null;
	} //set constructed to null
	abstract construct(save: boolean = true, destroy: boolean = false, reset: boolean = false): A;
	abstract reconstruct(reset: boolean = false, destroy: boolean = false): A;
	
	abstract dupe(reset: boolean = false, destroy: boolean = false, save: boolean = true): A;
}
export class SimpleRecipeFactory extends RecipeFactory<SimpleRecipeFactory, Recipe> {
	this.minInputs: number;
	this.maxInputs: number;
	this.minOutputs: number;
	this.maxOutputs: number;
	this.defaultHidden: boolean;
	this.defaultDuration: boolean;
	
	constructor(minInputs: number, maxInputs: number, minOutputs: number, maxOutputs: number, defaultDuration: number, defaultHidden: boolean = false) {
		this.minInputs = minInputs;
		this.maxInputs = maxInputs;
		this.minOutputs = minOutputs;
		this.maxOutputs = maxOutputs;
		
		this.defaultHidden = defaultHidden;
		this.defaultDuration = defaultDuration;
	}
	basic(): B {
		super.basic();
		this.hidden = defaultHidden;
		this.duration = defaultDuration;
	}
	basic(duration: number): B {
		this.hidden = defaultHidden;
		this.duration = duration;
	}
	EUt(eu: number): B {
		this.EUt = eu;
		return this;
	}
	getEUt(): number {
		return this.EUt;
	}
	isSteam(): {
		return this.EUt <= 16;
	}
	
	construct(save: boolean = true, destroy: boolean = false, reset: boolean = false): Recipe {
		this.inputs.put("eut", this.EUt);
		let recipe = new Recipe(inputs, outputs, duration);
		if(reset) {
			this.reset();
		} else if(destroy) {
			this.destroy();
		} else if(save) {
			this.recipe = recipe;
		}
		return recipe;
	}
	reconstruct(reset: boolean = false, destroy: boolean = false): Recipe {
		this.inputs.put("eut", this.EUt);
		let recipe = this.dupe(false, false, false);
		
		return recipe;
	}
	dupe(reset: boolean = false, destroy: boolean = false, save: boolean = true): Recipe {
		let recipe = new Recipe(this.recipe);
		if(reset) {
			this.reset();
		} else if(destroy) {
			this.destroy();
		} else if(save) {
			this.recipe = recipe;
		}
		return recipe;
	}
}
