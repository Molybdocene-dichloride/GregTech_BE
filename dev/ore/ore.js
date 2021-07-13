let isore = {};

Saver.addSavesScope("isOreGenerated",

	function read(scope) {
		isore = scope;
	},
	
	function save() {
		return isore;
	}
);
Saver.addSavesScope("oreGrid",
	function read(scope) {
		OreDictionary.grids = scope;
	},
	
	function save() {
		return OreDictionary.grids;
	}
);
Callback.addCallback("GenerateChunkUniversal", function (chunkX, chunkZ, random, dimension, chunkSeed, worldSeed, dimensionSeed) {
  if(!isore[dimension] || !isore[dimension][chunkX + "_" + chunkZ]) {
      // ore vein

      //coords of 3x3 chunk grid

      let mixX = Math.floor(chunkX / 3);
      let mixZ = Math.floor(chunkZ / 3);
  
      if(!OreDictionary.grids[dimension]) OreDictionary.grids[dimension] = {};

      if(OreDictionary.grids[dimension][mixX + "_" + mixZ] == undefined) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ] = {};

        if(Math.random() < 0.5) {
          let rand = Math.random();
          let rarity = 0;
          for(let i = 0; i < OreDictionary.veins.length; i++) {
            if(!(dimension in OreDictionary.veins[i].dimensions)) continue;
              let prerarity = rarity;
              rarity += OreDictionary.veins[i].rarity / OreDictionary.sumOfRarites;
              if(OreDictionary.isInnerDiapozone(rand, prerarity, rarity)) {
                OreDictionary.grids[dimension][mixX + "_" + mixZ].vein = OreDictionary.veins[i];
                break;
              }
            }
          }
      }
  }
});

let customBiome = new CustomBiome("oilsands");

customBiome.setCoverBlock(12, 0).setSurfaceBlock(12, 0).setFillingBlock(1, 0).setSkyColor(0, 0, 0).setTemperatureAndDownfall(1, 1);

Callback.addCallback("GenerateBiomeMap", function(chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {

  if(dimensionId != 0) return;

  if(GenerationUtils.getPerlinNoise(chunkX * 16 + 8, 0, chunkZ * 16 + 8, dimensionSeed, 1 / 72, 2) < 0.7 - 12 / 72 && (World.getBiomeMap(chunkX * 16 + 7, chunkZ * 16 + 7) != 2 || World.getBiomeMap(chunkX * 16 + 7, chunkZ * 16 + 7) != 17)) { 
    // проверка порога отбрасывания чанка
    return;
  }
  Logger.Log("bicepoij", World.getBiomeMap(chunkX * 16 + 1, chunkZ * 16 + 1));
  for(let x = 0; x < 16; x++) {
    for(let z = 0; z < 16; z++) {
      if(World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z) != 2 && World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z) != 17) continue;
      Logger.Log("bicep", World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z)) 
       if(GenerationUtils.getPerlinNoise(chunkX * 16 + x, 0, chunkZ * 16 + z, dimensionSeed, 1 / 72, 2) > 0.7) World.setBiomeMap(chunkX * 16 + x, chunkZ * 16 + z, customBiome.id)
    }
  }
});