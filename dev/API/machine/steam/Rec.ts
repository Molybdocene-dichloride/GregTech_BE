void {
	if(!this.data.isProcess) {
		if(this.data.tick % 10 != 0) return;
		if(this.recipes) {        
			Logger.Log(this.data.tick, "sheoe");
			let recipe = recipes.getRecipe();
			if(recipe != null && recipe.isSteam()) {
				if(!this.check(this.data.currentRecipe.EUt * 2, false, true)) {
					this.data.currentRecipe = null;
					return;
				} else {
					this.data.currentRecipe = recipe;
				}  
				if(this.checkOutput(this.data.currentRecipe)) {    
					if(this.tier == 0) {
						this.data.original_work_time = this.data.currentRecipe.duration * 2;
						this.data.work_time = this.data.original_work_time;
						this.data.steamcomsumption = this.data.currentRecipe.EUt * 2;
					} else if(this.tier == 1) {
						this.data.original_work_time = this.data.currentRecipe.time;
						this.data.work_time = this.data.original_work_time;
						this.data.steamcomsumption = this.data.currentRecipe.EUt * 6;
					}  
					this.input(this.data.currentRecipe);
            
					this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
                        
					this.data.isProcess = true;
					this.data.progress += 1 / this.data.original_work_time;
					this.container.setScale("scale", this.data.progress);
				}
			}
		}
	} else {
		if(this.data.work_time > 0) {
			this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
			if(!this.check(this.data.steamcomsumption, true, false)) return;
				this.data.progress += 1/this.data.original_work_time;
				this.data.work_time -= 1;
				this.container.setScale("scale", this.data.progress);
			} else {
				this.output(this.data.currentRecipe);
				this.data.progress = 0;
				this.container.setScale("scale", 0);
             
				this.data.isProcess = false;
				this.data.original_work_time = 0;
				this.data.steamcomsumption = 0;
				let yuki_onna = 0;
				for(let i = 1; i < 6; i++) {
						if(this.data["put" + i] === null || this.data["put" + i] === undefined) continue;
						yuki_onna = i;   
				}
			}
		} else {
			if(this.data.work_time > 0) {
				this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
				if(!this.check(this.data.steamcomsumption, true, false)) return;
				this.data.progress += 1/this.data.original_work_time;
				this.data.work_time -= 1;
				this.container.setScale("scale", this.data.progress);
			}
	}
}

/*let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.data["put" + yuki_onna]);
Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);*/
/*this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
