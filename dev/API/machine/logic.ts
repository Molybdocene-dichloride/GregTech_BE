export interface IProcessingLogic {
  recipe: RecipeMap
  getRecipes(): RecipeMap
  getRecipe(index : number): Recipe
  getRecipe(input : []): Recipe
  getRecipe(output : []): Recipe
  addRecipe(): void
  provideProcessing(): void
}
export interface IGenerationLogic {
  recipe: FuelRecipeMap
  getRecipes(): RecipeMap
  getRecipe(index : number): Recipe
  getRecipe(input : []): Recipe
  getRecipe(output : []): Recipe
  addRecipe(): void
  provideElectric(): void
}
export interface IElectricLogic {
  getRecipes(): RecipeMap
  getRecipe(): Recipe
  addRecipe(): void
  provideGeneration(): void
}
export interface ISteamLogic {
  recipe: RecipeMap
  getRecipes(): RecipeMap
  getRecipe(): Recipe
  addRecipe(): void
  provideSteam(): void
}