export interface IRecipe extends Cloneable {
    getInputs(): LinkedHashMap<string, IStack>;
    getInput(): IStack;
    getOutputs(): LinkedHashMap<string, IStack>;
    getOutput(): IStack;
    
    isSteam(): boolean;
    isHidden(): boolean;
    //КПД
    getEfficiency(): number;
    getDuration();
    
    provideRecipe(): void;
}
export interface IRecipeMap<B extends RecipeFactory<B, IRecipe>> extends Cloneable, Serializable {
	putRecipe(recipe: IRecipe): boolean;
	deleteRecipe(recipe: IRecipe): boolean;
   
	getRecipes(): LinkedHashMap<string, IRecipe>;
	findRecipe(inputs: LinkedHashMap<string, ItemStack>, fluidInputs: LinkedHashMap<string, FluidStack>): IRecipe;
	
	B findFactory();
}
