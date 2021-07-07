let StoneDictionary = {
	stones: {},
	registerStone: function(id, variants) {
		this.stones[id] = variants;
		let inverted = null
		let inverted2 = null
		if(variants.name.includes("granite")) {
        		/*inverted = variants.name.substring(variants.name.indexOf("_") + 1, variants.name.length) + "_" + variants.name.substring(0, variants.name.indexOf("_"));
        		inverted = inverted.toUpperCase();
        		inverted2 = variants.name2.substring(variants.name2.indexOf("_") + 1, variants.name2.length) + "_" + variants.name2.substring(0, variants.name2.indexOf("_"));
        		inverted2 = inverted2.toUpperCase();*/
        		inverted = variants.name.toUpperCase();
		    inverted2 = variants.name2.toUpperCase();
		} else {
		    inverted = variants.name.toUpperCase();
		    inverted2 = variants.name2.toUpperCase();
		}
		Logger.Log("$*", inverted);
		Logger.Log(inverted2);
            	IDRegistry.genBlockID(id);
            this.stones[id].id = BlockID[id];
    		Block.createBlock(id, [{name: variants.name, texture: [[inverted + "_STONE", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_COBBLE", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_COBBLE_MOSSY", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS_CRACKED", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS_MOSSY", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS_CHISELED", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_SMOOTH", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_STONE", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_COBBLE", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_COBBLE_MOSSY", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS_CRACKED", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS_MOSSY", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS_CHISELED", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_SMOOTH", 0]], inCreative: true}], "stone");
    	ToolAPI.registerBlockMaterial(id, "stone", variants.level, true);
		Block.registerDropFunction(id, function(blockCoords, blockID, blockData, diggingLevel, region) {
			if(blockData == 0 || blockData == 8) {
				return [[blockID, 1, blockData + 1]];
			}
			return [[blockID, 1, blockData]];
		});
	},
	generateStoneOld: function(coords, id, data, random) {
		GenerationDictionary.generateSphere(coords, 2, 7, id, data, random, null, 1, OreDictionary.blocks);
	},
	generateStonePerlin: function(coordsChunk, id, data, seed, scale, octaves, maxPos, onlyIn, ids) {
		GenerationDictionary.generateChunkPerlin(coordsChunk, id, data, seed, scale, octaves, maxPos, onlyIn, ids);
	},
	addToCreative: function() {
		for(let i in this.stones) {
			for(let j = 0; j < 16; j++) {
				Item.addToCreative(i, 1, j);
			}
		}
	}
}
StoneDictionary.registerStone("granite", {
	hardness: 7.0,
	resistance: 12.0,
	level: 3,
	name: "granite_black",
	dimension: 0,
	rarity: 0.2,
	name2: "granite_red",
	dimension2: 0,
	rarity2: 0.2
});
StoneDictionary.registerStone("mineral", {
	hardness: 3.0,
	resistance: 6.0,
	level: 1,
	name: "marble",
	dimension: 0,
	rarity: 0.5,
	name2: "basalt",
	dimension2: 0,
	rarity2: 0.5,
});
//StoneDictionary.addToCreative();