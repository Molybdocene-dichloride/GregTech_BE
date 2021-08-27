/*tier { (())
	number: integer,
	material: object Material,
	casing: integer
}*/
/*type {
	name: string,
}*/
/*recipe {
	name: string,
	input,
	output
}*/
/* multiblockmachine
shape {
		shape: enum Box, Elipsoid, Custom
		w: number
		h: number
		d: number
		casing: 
		"x_y_z": tile {id, data}
		getByCoords: function coords
}
checkBlocks function
hatchs []
requireFromHatch function type, whitelist
addToHatch function type, whitelist
*/
/*storage
maxCount:
*/
/*function Machine(name, type, hull, recipes) {
		this.name = name;
		this.type = type;
		this.hull = hull;
		this.recipes = recipes;
}*/
function FluidStack(id, amount, tag) {
	this.id = id; //string
	this.amount = amount;
	this.tag = tag;
}
function ArrayContainer(arr) {
	this.arr = arr;
};

let MachineDictionary = {
	GENERATOR: true,
	PROCESSING: false,
	casings: { },
	textures: { },
	steammachines: { },
	invsteammachines: { },
	tiers: [],
	types: [],
	count: 0,
	count0: 0,
	count1: 0,
	//steam
	registerCasings: function () {
		IDRegistry.genBlockID("gtcasing");
		let variants = [];
		variants[0] = this.registerCasing("bronze_hull", "MACHINE_BRONZE_SIDE");
		variants[1] = this.registerCasing("bronze_bricks_hull", "MACHINE_BRONZEBRICKS_BOTTOM", "MACHINE_BRONZEBRICKS_TOP", "MACHINE_BRONZEBRICKS_SIDE");
		variants[2] = this.registerCasing("steel_hull", "MACHINE_STEEL_SIDE");
		variants[3] = this.registerCasing("steel_bricks_hull", "MACHINE_STEELBRICKS_BOTTOM", "MACHINE_STEELBRICKS_TOP", "MACHINE_STEELBRICKS_SIDE");
		Block.createBlock("gtcasing", variants);
	},
	registerCasing: function (name) {
		let textures = [];
		for (let i in arguments) {
			if (i == 0) continue;
			if (typeof arguments[i] == "string") {
				textures[i - 1] = [arguments[i], 0];
			}
		}

		let variant = { name: name, texture: textures, inCreative: true };
		this.casings[name] = Object.keys(this.casings).length;
		return variant;
	},
	registerMetalCasing: function (name) {
		let variant = { name: name, texture: [[name, 0]] };
		this.metalcasings[name] = Object.keys(this.metalcasings).length;
		return variant;
	},
	registerMultiblockCasing: function (name) {
		let variant = { name: name, texture: [[name, 0]] };
		this.multiblockcasings[name] = Object.keys(this.multiblockcasings).length;
		return variant;
	},
	registerSteamMachine: function (type, ui) {
		if (BlockID.gtblockmachine == undefined) IDRegistry.genBlockID("gtblockmachine");
		//type.recipes = new RecipeMap(type.minInputs, type.maxInputs, type.minOutputs, type.maxOutputs);
		/*type.errorSlot = {type: "image", x: число, y: число, bitmap: "bronze_error", scale: 1}*/
		for (let i in type.tier) {
			if (type.tier[i] == 0) {
				type.data0 = this.count0;
				this.invsteammachines[type.data0] = { name: type.name, tier: type.tier[i] };
				this.count0++;
				for (let mach in this.steammachines) {
					if (this.steammachines[mach].tier[1] == 1) {
						this.steammachines[mach].data1++;
						this.invsteammachines[this.steammachines[mach].data1] = { name: this.steammachines[mach].name, tier: this.steammachines[mach].tier[1] };
					}
				}
			}
			if (type.tier[i] == 1) {
				type.data1 = this.count0 + this.count1;
				this.invsteammachines[type.data1] = { name: type.name, tier: type.tier[i] };
				this.count1++;
			}
		}
		this.steammachines[type.name] = type;

		for (let tier in type.tier) {
			type["ui" + type.tier[tier]] = ui;
			let casing = null;
			if (type.tier[tier] == 0) casing = "MACHINE";
			if (type.tier[tier] == 1) casing = "MACHINE";

			let tr = null;
			if (type.tier[tier] == 0) {
				tr = "bronze";
			} else if (type.tier[tier] == 1) {
				tr = "steel";
			}
			if (type.tier[tier] == 0) {
				Translation.addTranslation("gregtech.machine.steam_" + type.name + "_bronze.name", {en: LocalizationSystem.translate({lang: "en_US", key: "gregtech.machine.steam_" + type.name + "_bronze.name"})});
				type.variable0 = {name: "gregtech.machine.steam_" + type.name + "_bronze.name", textures: [[tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_BOTTOM", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_TOP", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_SIDE", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_FRONT", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_SIDE", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_SIDE", 0]], inCreative: true};
			}
			if (type.tier[tier] == 1) {
				Translation.addTranslation("gregtech.machine.steam_" + type.name + "_steel.name", {en: LocalizationSystem.translate({lang: "en_US", key: "gregtech.machine.steam_" + type.name + "_steel.name"})});
				type.variable1 = {name: "gregtech.machine.steam_" + type.name + "_steel.name", textures: [[tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_BOTTOM", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_TOP", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_SIDE", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_FRONT", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_SIDE", 0], [tr.substring(tr.charAt("_")).toLowerCase() + "_" + type.name + "_SIDE", 0]], inCreative: true};
			}
		}
	},
	addToCreative: function () {
		let variables = [];
		let tr = 0;
		for (let i in this.steammachines) {
			for (let tier in this.steammachines[i].tier) {
				if (this.steammachines[i].tier[tier] == 0) {
					/*Logger.Log(this.steammachines[i].variable0.textures, "her");
				let met = null;
				for(let j in this.steammachines[i].variable0.textures) {
					if(this.steammachines[i].variable0.textures[j] != null) {
						met = this.steammachines[i].variable0.textures[j];
					} else {
						this.steammachines[i].variable0.textures[j] = met;
					}
				}*/
					variables.push(this.steammachines[i].variable0);
					BlockRenderer.enableCoordMapping(BlockID.gtblockmachine, tr, new ICRender.Model(BlockRenderer.createTexturedBlock(this.steammachines[i].variable0.textures)));
				}
			}
			tr++;
		};
		for (let i in this.steammachines) {
			for (let tier in this.steammachines[i].tier) {
				if (this.steammachines[i].tier[tier] == 1) {
					//Logger.Log(this.steammachines[i].variable.name, "her");

					/* let met = null;
					 for(let j in this.steammachines[i].variable1.textures) {
						 if(this.steammachines[i].variable1.textures[j] != null) {
							 met = this.steammachines[i].variable1.textures[j];
						 } else {
							 this.steammachines[i].variable1.textures[j] = met;
						 }
					 }*/

					variables.push(this.steammachines[i].variable1);

					BlockRenderer.enableCoordMapping(BlockID.gtblockmachine, tr, new ICRender.Model(BlockRenderer.createTexturedBlock(this.steammachines[i].variable1.textures)));
				}
			}
			tr++;
		};

		Block.createBlock("gtblockmachine", variables, Block.createSpecialType({ explosionres: 10 }));
	},
	//electric
	registerMachine: function (tier) {
		this.tiers[this.tiers.length] = tier;
	},
	registerMachineType: function (type) { //{}
		this.recipies[type] = [];
		this.types[this.types.length] = type;
	},
};
MachineDictionary.textures[BlockID.gtblockmachine] = [];

let PipeDictionary = {
	sizes: [],
	materials: {},
	pipes: [],
	data: [],
	registerSize: function (size) {
		size.index = this.sizes.length;
		this.sizes[this.sizes.length] = size;
		for (let i in this.materials) {
			this.pipes[this.materials[i].material.name + "_" + size.type] = Object.keys(this.pipes).length;
		}
	},
	registerMaterial: function (material, rate, temperature) {
		this.materials[material.name] = { material: material, rate: rate, temperature: temperature, type: "liquid" };
	},
	getPipeType: function () {
		if (blockID == BlockID.gtblockpipe) {
			for (let i in Object.keys(this.materials)) {
				if (OreDictionary.isInnerDiapozone(blockData, i * this.sizes.length, (i + 1) * this.sizes.length)) {
					return this.materials[Object.keys(this.materials)[i]].type;
				}
			}
		}
		return null;
	},
	addToCreative: function () {
		let variables = [];
		for (let m = 0; m < Object.keys(PipeDictionary.materials).length; m++) {
			for (let s = 0; s < PipeDictionary.sizes.length; s++) {
				Translation.addTranslation("item.material.oreprefix.pipe" + this.sizes[s].type, {en: LocalizationSystem.translate({lang: "en_US", key: "item.material.oreprefix.pipe" + this.sizes[s].type})});
				variables[m * PipeDictionary.sizes.length + s] = { name: this.sizes[s].type + " " + Object.keys(PipeDictionary.materials)[m] + " pipe", texture: [["bedrock"], 0], inCreative: true };
				this.data[m * PipeDictionary.sizes.length + s] = { type: Object.keys(PipeDictionary.materials)[m], size: this.sizes[s] };
			}
		}
		Block.createBlock("gtblockpipe", variables, Block.createSpecialType({ explosionres: 20000 }));
	},
	isPipe: function (blockID, blockData, type) {
		if (blockID == BlockID.gtblockpipe) {
			for (let i in Object.keys(this.materials)) {
				if (OreDictionary.isInnerDiapozone(blockData, i * this.sizes.length, (i + 1) * this.sizes.length)) {
					return this.materials[Object.keys(this.materials)[i]].type == type;
				}
			}
		}
		return false;
	}
};