/*
smallgen
name
isgen
minimalheight int	
maximalheight int
rarity int
vein {
name
primary
secondary
inbetween
sporadic
minimalheight int	
maximalheight int	
rarity int
density 	int
Size int
}
*/
//API for GregTech ore generation

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
	generateStoneDEPRECATED: function(coords, id, data, random) {
		GenerationDictionary.generateSphere(coords, 2, 7, id, data, random, null, 1, OreDictionary.blocks);
	},
	generateStonePerlinDEPRECATED: function(coordsChunk, id, data, seed, scale, octaves, maxPos, onlyIn, ids) {
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

let OreDictionary = {
    blocks: [],
    number: [],
    invblocks: [],
    evblocks: [],
    ores: [],
    data: [],
    dat: [],
    invdata: [],
    invdat: [],
    smallgens: [],
    invsmallgens: [],
    invsmallgen: [],
    veins: [],
    grids: {},
    sumOfRarites: 0,
    posDara: 0,
    countByID: 0,
    counter: 300,
    //stone block for changing to ore
    registerChangeableBlock: function(block) {
        block.number = Object.keys(this.blocks).length;
        this.invblocks[block.number] = block;
        this.evblocks[block.texture] = block;
        this.blocks[block.id + "_" + block.data] = block;
        //this.countByID = Math.floor(16 / this.blocks.length);
    //this.IDBycount = Math.floor(this.stones.length / 16);
    },
    registerOre: function (material, smallgen) {
        setLoadingTip("Ores: " + material.name);
        let variation = [];
        let variationbig = [];
        if(!material.hasFlag(GENERATE_ORE)) {
            return;
        }
    this.ores[this.ores.length] = material;
  this.smallgens[this.smallgens.length] = smallgen;
  
    this.counter = 0;
    let id = (Math.floor(this.ores.length - 1) * 2) + "";
    let smallid = (Math.floor(this.ores.length - 1) * 2 + 1) + "";
    
       
       
       
  //!!!!!
  this.data[material.name] = {id: BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]};
  Block.registerDropFunction(BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)], function(coords, id, data, diggingLevel, region) {
    if(diggingLevel < OreDictionary.invsmallgens[id].level) return [];
    return [[id, 1, data]];
  });
  Block.registerPopResourcesFunction(BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)], function(coords, block, region) {
    let dropFunc = Block.getDropFunction(block.id);
				let enchant = ToolAPI.getEnchantExtraData();
				let item = {id: 0, count: 0, data: 0};
				let drop = dropFunc(coords, block.id, block.data, 127, enchant, item, region);
				for (let i in drop) {
					region.spawnDroppedItem(coords.x + .5, coords.y + .5, coords.z + .5, drop[i][0], drop[i][1], drop[i][2], drop[i][3] || null);
				}
  });
  Block.registerDropFunction(BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)], function(coords, id, data, diggingLevel, region) {
    if(diggingLevel < OreDictionary.invsmallgen[id].level) return [];
    let drop = [];
	  if(Math.random() > 0.5) {
	    drop.push([MaterialDictionary.invdata["crushed"][material.name].id, 1, MaterialDictionary.invdata["crushed"][material.name].data]);
	  } else {
	    drop.push([MaterialDictionary.invdata["dustImpure"][material.name].id, 1, MaterialDictionary.invdata["dustImpure"][material.name].data]);
	  }
	  if(Math.random() < 0.22) {
	    drop.push([MaterialDictionary.invdata["dustImpure"][OreDictionary.invblocks[data].texture].id, 1, MaterialDictionary.invdata["dustImpure"][OreDictionary.invblocks[data].texture].data]);
	  } else if(Math.random() > 0.22 && Math.random() < 0.33) {
	    drop.push([MaterialDictionary.invdata["dust"][OreDictionary.invblocks[data].texture].id, 1, MaterialDictionary.invdata["dust"][OreDictionary.invblocks[data].texture].data]);
	  }
	  return drop;
  });
  Block.registerPopResourcesFunction(BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)], function(coords, block, region) {
    let dropFunc = Block.getDropFunction(block.id);
				let enchant = ToolAPI.getEnchantExtraData();
				let item = {id: 0, count: 0, data: 0};
				let drop = dropFunc(coords, block.id, block.data, 127, enchant, item, region);
				for (let i in drop) {
					region.spawnDroppedItem(coords.x + .5, coords.y + .5, coords.z + .5, drop[i][0], drop[i][1], drop[i][2], drop[i][3] || null);
				}
  });


  this.dat[material.name] = {id: BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]};
  
  this.invdata[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]] = material;
  this.invdat[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]] = material;
  this.invsmallgens[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]] = smallgen;
  this.invsmallgen[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]] = smallgen;
  
  for(let i = 0; i < Object.keys(this.blocks).length; i++) {
    
  
  variationbig[i] = {texture: this.blocks[Object.keys(this.blocks)[i]].texture + "_" + material.name + "_ore"};
  Logger.Log(this.blocks[Object.keys(this.blocks)[i]].texture, "видиканес");
variation[i] = {texture: this.blocks[Object.keys(this.blocks)[i]].texture + "_" + material.name + "_oreSmall"};
  }
    IDRegistry.genBlockID("gtblockores" + id);
    Block.createBlock("gtblockores" + id, this.createvariables(material, variationbig), "gtore");
    IDRegistry.genBlockID("gtblockores" + smallid);
    Block.createBlock("gtblockores" + smallid, this.createvariables(material, variation), "gtore");
    
    this.number[BlockID["gtblockores" + id]] = id;
    this.number[BlockID["gtblockores" + smallid]] = smallid;
    },
    createvariables: function(material, variation) {
        let variables = [];
        for(let i in variation) {
            variables[i] = {name: material.name + "ore", texture: [[variation[i].texture, 0]], inCreative: true};
        }
        return variables;
    },
    registerVein: function (vein) {
  this.veins[this.veins.length] = vein;
  this.sumOfRarites += vein.rarity;
    },
  strongIf: function(coords){
          var b = {
          1: true,
          7:true,
          8: true,
          9: true,
          10: true,
          11: true,
          199: true,
          200: true};
          return b[World.getBlockID(coords.x, coords.y, coords.z)];
      },
  round: function(num, x){
      var multiplier = Math.pow(10, x);
      return Math.floor(num * multiplier) / multiplier;
  },
  rollPercentage: function(pr, random){
      if(random){
          return pr>=random.nextInt(100);
      }
      return pr>=round(Math.random()*100, 2);
  },
  isInnerDiapozone: function(checkInt, start, end) {
    if(checkInt > start & checkInt < end) {
      return true;
    }
    return false;
  },
  randomInInner: function(random, start, end) {
    return start + random.nextInt(end - start);
  },
  randomInInnerGaussian: function(random, start, end) {
    return start + Math.floor(random.nextGaussian() * (end - start));
  },
  findChunkHighSurface: function (chunkX, chunkZ) {
    let highs = 0;
    for(let x = 0; x < 16; x++) {
      for(let z = 0; z < 16; z++) {
        let high = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z);
      if(high.y > highs) {
        highs = high.y;
      }
      }}
      return highs;
  },
  addToCreative() {
    for(let i in this.invdata) {
      Item.setCategory(i, Native.ItemCategory.FOOD);
      for(let j in this.invdata[i]) {
        Item.addToCreative(i, 1, j);
      }
    }
  }
  };

  //code vein
  function OreMixVein(name, dimensions, primary, secondary, inbetween, sporadic, minimalheight, maximalheight, rarity, density, size, sizeing, covariance) {
    this.name = name;
    this.dimensions = dimensions;
    this.primary = primary;
    this.secondary = secondary;
    this.inbetween = inbetween;
    this.sporadic = sporadic;
    this.minimalheight = minimalheight;
    this.maximalheight = maximalheight;
    this.rarity = rarity;
    this.density = density;
    this.size = size;
    this.covariance = covariance;
    this.sizeing = sizeing;
    /*checkGen() {
      GenerationDictionary.get() * density * 
    }*/
  }