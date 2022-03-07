export class Recipe extends Cloneable {
    getInputs(): LinkedHashMap<string, IStack>;
    getInput(): IStack;
    getOutputs(): LinkedHashMap<string, IStack>;
    getOutput(): IStack;
    
    isSteam(): boolean;
    isHidden(): boolean;
    //КПД
    getEfficiency(): number;
    getDuration();
    
    checkInputs(storage: PartStorage): boolean {
		for(let i in storage.getParts()) {
			if(storage.getParts()[i].can(inputs)) {
				return true;
			}
		}
	}
	checKOutputs(storage: PartStorage): boolean {
		for(let i in storage.getParts()) {
			if(storage.getParts()[i].can(outputs)) {
				return true;
			}
		}
	}
	inputs(storage: PartStorage): boolean {
		for(let i in storage.getParts()) {
			if(storage.getParts()[i].get(outputs)) {
				return true;
			}
		}
	}
	outputs(storage: PartStorage): boolean {
		for(let i in storage.getParts()) {
			if(storage.getParts()[i].get(outputs)) {
				return true;
			}
		}
	}
	
    provideRecipe(): void;
}
export interface IRecipeMap<B extends RecipeFactory<B, IRecipe>> extends Cloneable, Serializable {
	putRecipe(recipe: IRecipe): boolean;
	deleteRecipe(recipe: IRecipe): boolean;
   
	getRecipes(): LinkedHashMap<string, IRecipe>;
	findRecipe(inputs: LinkedHashMap<string, ItemStack>, fluidInputs: LinkedHashMap<string, FluidStack>): IRecipe;
	
	B findFactory();
}
