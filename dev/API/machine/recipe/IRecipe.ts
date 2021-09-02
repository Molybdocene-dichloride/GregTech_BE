interface ForRecipe {
	getID(): string;
	getCount(): number;
}
class ItemStack extends ItemInstance implements ForRecipe {
	constructor(id, data, count) {
		id = id;
		data = data;
		count = count;
	}
	getID(): string {
		return this.id;
	}
	getData(): number {
		return this.data;
	}
	getCount(): number {
		return this.count;
	}
	getName() {
		return this.extra.getustomName();
	}
}
//electromagnet radiation, water drops, snow drops
class EnvironmentStack implements ForRecipe {
	constructor(id: string, count: number) {
		id = id;
		count = count;
	}
	getID(): string {
		return this.id;
	}
	getCount(): number {
		return this.count;
	}
}

  export interface IRecipe {
    getInputs();
    getInput();
    getOutputs();
    getOutput();
    
    isSteam(): boolean;
    //КПД
    getEfficiency(): number;
  }
  export interface IRecipeMap {
    addRecipe(recipe: IRecipe);
    deleteRecipe(recipe: IRecipe);
  }
