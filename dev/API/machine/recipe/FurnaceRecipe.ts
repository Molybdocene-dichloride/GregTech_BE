export class FurnaceRecipeMap implements IRecipeMap<BasicRecipeFactory> {
	//Recipe cache
	private recipes: LinkedHashMap<LinkedHashMap<string, IStack>, IRecipe>;
	
    private minInputs: number;
    private maxInputs: number;
    private minOutputs: number;
    private maxOutputs: number;

    constructor() {
      this.minInputs = 1;
      this.maxInputs = 1;
      this.minOutputs = 1;
      this.maxOutputs = 1;
      
      this.defaultEUt = defaultEUt;
    }
    addRecipe(recipe: Recipe) : void {}
	deleteRecipe(index: string) {}
    findRecipe(inputs: LinkedHashMap<string, IStack>): Recipe {
		let getted = this.recipes.get(inputs);
		if(getted == null) return null;
		return getted;	
	}
	getOutputs(inputs: LinkedHashMap<string, IStack>): outputs: LinkedHashMap<string, IStack> {
		if(!recipe.containsKey(inputs)) {
				Recipes.getFurnaceRecipeResult();
		}
		return getted.getOutputs();
	}
	findFactory(): BasicRecipeFactory {
		return null;
	}
  }
let furnace_recipes = new FurnaceRecipeMap();
