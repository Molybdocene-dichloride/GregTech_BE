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
  Block.registerDropFunction(BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)], function(coords, id, data, diggingLevel, region) {
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
  this.dat[material.name] = {id: BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]};
  
  this.invdata[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]] = material;
  this.invdat[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]] = material;
  this.invsmallgens[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]] = smallgens;
  this.invsmallgen[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]] = smallgens;
  
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