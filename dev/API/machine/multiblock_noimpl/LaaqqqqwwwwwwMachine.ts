abstract class ObtainingNode extends Node {
	private recipes: RecipeMap;
	constructor(id: string, data: number, tier: number) {
		super(id, data, tier);
	}
	
	getRecipes(): RecipeMap {
		return recipes:
	}
	getRecipe(index : number): Recipe {
		return recipes[index];
	}
	addRecipe(recipe: Recipe): void {
		recipes[recipes.length] = recipe;
	}
	
	preparePipe() : void {}
	connectTick() : void {}

	receive(fluid : FluidStack, sidepre: number) : Fluid {}
	receive(item : ItemInstance, sidepre : number) : Fluid {}
 
	provide(stack : ItemInstance, src: any)) : void {}
	provide(stack : FluidStack, src : any) : void {}
}
