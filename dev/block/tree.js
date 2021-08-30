let BiomeHelper = {
  TAIGA_BIOMES: {5: 5, 19: 19, 32: 32, 33: 33, 160: 160, 161: 161}
};
TreeDictionary = {
  NARROWED: 0,
  QUAD: 1,
  
  trees: {},
  data: [],
  lengt: 0,
  registerTree: function (tree) {
    this.trees[tree.name] = tree;
    //Translation.addTranslation("gregtech.machine.steam_" + type.name + "_bronze.name", {en: LocalizationSystem.translate({lang: "en_US", key: "gregtech.machine.steam_" + type.name + "_bronze.name"})});
    this.data[this.lengt] =  {name: tree.name, type: "wood", texture: [["log_" + tree.name + "_top", 0], ["log_" + tree.name + "_top", 0], ["log_" + tree.name + "_side", 0]]};
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "leave", texture: [["leaves_" + tree.name, 0]]};
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "func_wood", texture: [["log_" + tree.name + "_top", 0], ["log_" + tree.name + "_top", 0], ["log_" + tree.name + "_side", 0]]};
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "sapling", texture: [["sapling_" + tree.name, 0]]};
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "planks", texture: [["planks_" + tree.name, 0]]};

    this.lengt++;
  },
  addToCreative: function() {
    let variable = [];
    for(let i in this.data) {
      variable.push({name: this.data[i].name, texture: this.data[i].texture, inCreative: true});
    }
    IDRegistry.genBlockID("gttree");
    Block.createBlock("gttree", variable, "gtwood");
  },
  generateTree: function (x, y, z, random, tree) {
    let data;
    for(let i = 0; i < this.lengt; i++) {
      if(TreeDictionary.data[i].name == tree.name) {
        data = i;
        break;
      }
    }
    let height = OreDictionary.randomInInner(random, tree.minimalheight, tree.maximalheight);
    for(let ys = y; ys < y + height; ys++) {
      if(Math.random() > 1 / height) {
        World.setBlock(x, ys, z, BlockID.gttree, data);
      } else {
        World.setBlock(x, ys, z, BlockID.gttree, data + 2);
      }
    }
    let leavesheight = Math.floor(height / tree.shape.minimalleaveheightdevisor);
    
  if(tree.shape.shape == TreeDictionary.QUAD) {
      for(let yy = y + leavesheight; yy <= y + height; yy++) {
        for(let xa = x - tree.width / 2; xa < x + tree.width / 2; xa++) {
          for(let za = z - tree.width / 2; za < z + tree.width / 2; za++) {
            World.setBlock(xx, ys, zz, BlockID.gttree, data + 1);
          }
        }
      }
    } else if(tree.shape.shape == TreeDictionary.NARROWED) {
      for(let yy = y + leavesheight; yy <= y + height; yy++) {
        for(let xa = x - Math.floor(tree.shape.width / 2); xa < x + Math.floor(tree.shape.width / 2) + 1; xa++) {
          for(let za = z - Math.floor(tree.shape.width / 2); za < z + Math.floor(tree.shape.width / 2) + 1; za++) {
            if(yy - y == leavesheight && za != z && xa != x) {
              World.setBlock(xa, yy, za, BlockID.gttree, data + 1);
            }
          }
        }
        if(yy - y == height || yy - y == height - 1) {
          World.setBlock(x, yy, z, BlockID.gttree, data + 1);
        } else if(yy - y == height - 2) {
          GenerationDictionary.generateDisk(new Vector3(x, yy, z), BlockID.gttree, data + 1, null, tree.shape.width / 2 - 1, -100500, false, {roll: 0, pitch: 0, yaw: 0});
        } else {
          GenerationDictionary.generateDisk(new Vector3(x, yy, z), BlockID.gttree, data + 1, null, tree.shape.width / 2, -100500, false, {roll: 0, pitch: 0, yaw: 0});
        }
      }
    }
  }
};

TreeDictionary.registerTree({
  name: "rubber",
  minimalheight: 10,
  maximalheight: 12,
  shape: {
    width: 5,
    minimalleaveheightdevisor: 2,
    shape: TreeDictionary.NARROWED,
    peak: 2
  },
  generation: {
    biomes: BiomeHelper.TAIGA_BIOMES,
    rarity: 0.2,
    count: 1  
  }
});
TreeDictionary.addToCreative();
Callback.addCallback("GenerateChunkUniversal", function (chunkX, chunkZ, random, dimension) {
  if(dimension != 0) return;
	let biome = World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16);
    if(TreeDictionary.trees["rubber"].generation.biomes[biome]) {
	    if(Math.random() < TreeDictionary.trees["rubber"].generation.rarity) {
  			let coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), 96, chunkZ * 16 + random.nextInt(16));
			  if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
			    
				  TreeDictionary.generateTree(coords.x, coords.y + 1, coords.z, random, TreeDictionary.trees["rubber"])
			  }
    }
	}
}, "gt_tree");