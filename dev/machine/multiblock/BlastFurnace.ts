class BlastFurnace extends LowMultiblockMachine implements HasRecipe {
	private recipes: RecipeMap;
	private wallAllowed: ArrayList<Block>;
	constructor(id: string, data: number, tier: number, sizeAllowed: AABBRange, wallAllowed: ArrayList<Block>) {
		super(id, data, tier, sizeAllowed);
		this.wallAllowed = wallAllowed;
	}
	init(): void {
		super.init();
		
		shape = new MultiblockRegion(new Vector3(x, y, z), new Vector3(2, 1, 1), Vector3(3, 4, 3), {id: BlockID.z, data: 0}, this.blockSource);
		recipes = new RecipeMap(1, 2, 1, 1);
		
		this.inited = true;
        this.enabled = true;
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
  	tick(): void {
		super.tick();
		
		Logger.Log(this.data.tick, "sheoe");
		let recipe = this.data.currentRecipe || recipes.getRecipe();
		if(recipe != null) {
			this.data.currentRecipe = recipe;
			recipe.provideRecipe();
		}
	}
}
