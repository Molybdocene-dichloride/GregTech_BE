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

	receive(fluid : Stack, sidepre: number) : Fluid {}
 
	provide(stack : Stack, src: any) : void {}
}
