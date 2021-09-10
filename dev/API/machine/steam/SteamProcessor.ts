abstract class SteamProcessor extends SteamMachine implements IProcessingLogic {
	init() : void {
		super.init();
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
	provideProcessing() {
		
	}
}
