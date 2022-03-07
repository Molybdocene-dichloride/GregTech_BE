interface HasRecipe {
	getRecipes(): RecipeMap;
	getRecipe(index : number): Recipe;
	addRecipe(recipe: Recipe): void;
}
