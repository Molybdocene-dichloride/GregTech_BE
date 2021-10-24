abstract class SteamProcessor extends SteamMachine implements MayProcess, HasRecipe {
	recipes: RecipeMap;
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
			}
		}
	}
	check(consumption, processing, error): boolean {
		let checked = true;
		if(this.liquidStorage.getAmount("steam") < this.data.steamcomsumption) checked = false;
		if(!error && !checked) {
			this.errored = true;
			if(processing) {
				this.data.progress = 0;
				this.container.setScale("scale", 0);
             
				this.data.isProcess = false;
				this.data.original_work_time = 0;
				this.data.work_time = 0;
				this.data.steamcomsumption = 0;
			}
		}
		return checked;		
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
}
