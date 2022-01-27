void {
	if(!this.data.isProcess) {
		if(this.data.tick % 10 != 0) return;
		if(this.recipes) {        
			Logger.Log(this.data.tick, "sheoe");
			let recipe = recipes.getRecipe();
			if(recipe != null && recipe.isSteam()) {
				this.data.currentRecipe = recipe;
				recipe.provideRecipe();
			}
		}
	} else {
		if(this.data.work_time <= 0) {
			this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
			if(!this.check(this.data.steamcomsumption, true, false)) return;
			this.data.work_time -= 1;
			this.data.relative_work_time = this.data.work_time / this.data.original_work_time;
			this.container.setScale("scale", this.data.relative_work_time);
		} else {
			this.output(this.data.currentRecipe);
			this.data.relative_work_time = 0;
			this.container.setScale("scale", 0);
             
			this.data.isProcess = false;
			this.data.original_work_time = 0;
			this.data.steamcomsumption = 0;
			let steam_put = 0;
			for(let i = 1; i < 6; i++) {
				if(this.data["put" + i] === null || this.data["put" + i] === undefined) continue;
				steam_put = i;   
			}
		}
	}
}

void {
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
				if(steam_put == 0) Logger.Log("error");
			}
		}
	}
}

check: function(consumption, processing, error) {
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
},

input: function(j) {
	for(let i = 0; i < this.recipes.maxInputs; i++) {
		this.itemStorage.get("input" + i).hide(this.itemStorage.getSlot("input" + i).id, j.inputs[i].count, this.itemStorage.getSlot("input" + i).data /*this.container.getSlot("input" + i).extra*/);
		this.itemStorage.validate("input" + i);
	}
},

checkOutput: function(j) {
	let checked = true;
	for(let i = 0; i < this.recipes.maxOutputs; i++) {
		if(!this.container.getSlot("output" + i).id == 0 || (this.container.getSlot("output" + i).id == iddata.id && this.container.getSlot("output" + i).data == iddata.data && this.container.getSlot("output" + i).count + j.outputs[i].count < Item.getMaxStack(this.container.getSlot("output" + i).id))) {
			checked = false;
		}
	}
	Logger.Log("qshablop", checked);
	return checked;
},
/*let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.data["put" + yuki_onna]);
Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);*/
/*this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
