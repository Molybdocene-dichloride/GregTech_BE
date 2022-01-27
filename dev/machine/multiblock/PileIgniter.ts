class Fire : ObtainingNode, HasRecipe {
	private wallAllowed: ArrayList<Block>;
	constructor(id: string, data: number, tier: number, wallAllowed: ArrayList<Block>) {
		super(id, data, tier);
		this.wallAllowed = wallAllowed;
	}
	init(): void {
		super.init();
		
		shape = new NodeRegion(this.blockSource, new ClosedBlockPattern(wallAllowed), new Vector3(x, y, z));
		recipes = new RecipeMap(1, 2, 1, 1);
		
		this.inited = true;
        this.enabled = true;
	}
  	tick(): void {
		Logger.Log(this.data.tick, "sheoe");
		let recipe = this.data.currentRecipe || recipes.getRecipe();
		if(recipe != null) {
			this.data.currentRecipe = recipe;
			recipe.provideRecipe();
		}
	}
}
