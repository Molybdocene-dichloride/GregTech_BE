class Pile extends LowMultiblockMachine implements HasRecipe {
	private recipes: RecipeMap;
	init() : void {
		shape = new ClosedMultiblockRegion(new Vector3(x, y, z), new Vector3(2, 1, 1), Vector3(3, 4, 3), {id: BlockID.z, data: 0}, this.blockSource);
		super.init();
		recipes = new RecipeMap(1, 2, 1, 1);
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
		//pseudo and shit code
		for(let i in wooden_blocks) {
			wooden_blocks.tick++;
			if(wooden_blocks.tick < time_to_coal) {
				shape.setBlock(charcoal);
			}
		}
		
		Logger.Log(this.data.tick, "sheoe");
		let recipe = this.data.currentRecipe || recipes.getRecipe();
		if(recipe != null) {
			this.data.currentRecipe = recipe;
			recipe.provideRecipe();
		}
	}
}
