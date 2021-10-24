abstract class SteamGenerator extends SteamMachine implements MayGenerate, HasRecipe {
	recipes: RecipeMap;
	init(): void {
		super.init();
	}
	tick(): void {
		super.tick();
		if(this.recipes) {
			currentMachineInfo.end = false;
			Logger.Log(this.data.tick, "sheoe");
		
			let recipe = this.data.currentRecipe || recipes.getRecipe();
			if(recipe != null && recipe.isSteam()) {
				this.data.currentRecipe = recipe;
				if(recipe.provideRecipe()) {
					let steam_put = 0;
					for(let i = 1; i < 6; i++) {
						if(this.data["put" + i] == null) continue;
						steam_put = i;
					}
					if(steam_put == 0) {
						Logger.Log("error");
						this.errored = true;			
					}
				}
				this.data.temperature += 1;
				this.container.setScale("hScale", (this.data.temperature - 273) / 500);
			}
		}
	}
	check(consumption, processing, error): boolean {
		return true;
	}
	getRecipes(): FuelMap {
		return recipes:
	}
	getRecipe(index : number): FuelRecipe {
		return recipes[index];
	}
	addRecipe(recipe: FuelRecipe): void {
		recipes[recipes.length] = recipe;
	}
}
