var isore={};
Saver.addSavesScope("isOreGenerated",
	function read(scope){
		isore = scope;
	},
	
	function save(){
		return isore;
	}
);
Callback.addCallback("GenerateChunkUniversal", function (chunkX, chunkZ, random, dimension) {
  if(!isore[chunkX + "_" + chunkZ]) {
    
  Logger.Log(chunkX + "_" + chunkZ, "zoppo");
  //granites
  let highbl = OreDictionary.findChunkHighSurface(chunkX, chunkZ);

     if(Math.random() < 0.5) {
	let randomStone = random.nextInt(Object.keys(StoneDictionary.stones).length);
	let randomSubStone = random.nextInt(2);
	let coords = GenerationUtils.randomXZ(chunkX, chunkZ);
    	let highest = Math.min(GenerationUtils.findHighSurface(coords.x, coords.z), 120);
    	highest = Math.max(highest, 10);
    	coords = {x: coords.x, y: highest, z: coords.z}
    	StoneDictionary.generateStone(coords, BlockID[Object.keys(StoneDictionary.stones)[randomStone]],  randomSubStone * 8, random);
   }
   
  // ore vein
  //coords of 3x3 chunk grid
  let mixX = Math.floor(chunkX / 3);
  let mixZ = Math.floor(chunkZ / 3);
  if(OreDictionary.grids[mixX + "_" + mixZ] == undefined) {
 OreDictionary.grids[mixX + "_" + mixZ] = {};
if(Math.random() < 0.5) {
    let rand = Math.random();
    let rarity = 0;
for(let i = 0; i < OreDictionary.veins.length; i++) {
    if(!(dimension in OreDictionary.veins[i].dimensions)) continue;
  let prerarity = rarity;
      rarity += OreDictionary.veins[i].rarity / OreDictionary.sumOfRarites;
      if(OreDictionary.isInnerDiapozone(rand, prerarity, rarity)) {
OreDictionary.grids[mixX + "_" + mixZ].vein = OreDictionary.veins[i];
break;
      }
    }
    let isgen = true;
    for(let x = 0; x < 16; x++) {
    for(let z = 0; z < 16; z++) {
      if(OreDictionary.grids[mixX + "_" + mixZ].vein.minimalheight > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z)) {
        isgen = false;
        }}}
    OreDictionary.grids[mixX + "_" + mixZ].enabled = isgen;
    let height = OreDictionary.grids[mixX + "_" + mixZ].vein.maximalheight;
    for(let x = 0; x < 16; x++) {
    for(let z = 0; z < 16; z++) {
      if(height > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z)) {
        height = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z);
        }}}
    
    OreDictionary.grids[mixX + "_" + mixZ].ys = OreDictionary.randomInInner(random, OreDictionary.grids[mixX + "_" + mixZ].vein.minimalheight, height);
}
  }
  
  if(OreDictionary.grids[mixX + "_" + mixZ].enabled) {
  let main = 3;
  let inbetween = 2;
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 3; y++) {
      for(let z = 0; z < 16; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
        if(OreDictionary.rollPercentage(OreDictionary.grids[mixX + "_" + mixZ].vein.density * 10, random)) {
        if(tile.id + "_" + tile.data in OreDictionary.blocks) {
		if(Math.random < 0.2) {
  			World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
		} else {
			World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.primary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	}
	}
}
      }}}
for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 2; y++) {
      for(let z = 0; z < 16; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
if(OreDictionary.rollPercentage(OreDictionary.grids[mixX + "_" + mixZ].vein.density * 10, random)) {
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
  	if(Math.random < 0.2) {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	} else {	
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.inbetween.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	}
}}
      }}}
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 3; y++) {
      for(let z = 0; z < 16; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
if(OreDictionary.rollPercentage(OreDictionary.grids[mixX + "_" + mixZ].vein.density * 10, random)) {
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
  	if(Math.random < 0.2) {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	} else {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.secondary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	}
}}
      }}}
  }
  
  
  //smallores
  for(let i = 0; i < OreDictionary.ores.length; i++) {
    if(OreDictionary.smallgens[i].isgen & highbl > OreDictionary.smallgens[i].minimalheight) {
      for(let d = 0; d < OreDictionary.smallgens[i].rarity; d++){
let coords;
        if(highbl > OreDictionary.smallgens[i].maximallheight) {
coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i].minimalheight, OreDictionary.smallgens[i].maximalheight);
} else {
coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i].minimalheight, highbl);
}
        let tile = World.getBlock(coords.x, coords.y, coords.z);
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
          World.setBlock(coords.x, coords.y, coords.z, OreDictionary.dat[OreDictionary.ores[i].name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
        }
        }
    }
  }
  
  isore[chunkX + "_" + chunkZ] = true;
  }
});