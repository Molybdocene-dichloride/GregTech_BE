let customBiome = new CustomBiome("oilsands");
customBiome.setCoverBlock(12, 0).setSurfaceBlock(12, 0).setFillingBlock(7, 0).setSkyColor(0, 0, 0).setTemperatureAndDownfall(1, 1);

Callback.addCallback(“GenerateBiomeMap”, function(chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
  if(dimensionId != 0) return;
  if (GenerationUtils.getPerlinNoise(chunkX * 16 + 8, 0, chunkZ * 16 + 8, dimensionSeed, 1 / 96, 2) < 0.7 – 12 / 96 && (World.getBiomeMap(chunkX * 16 + 7, chunkZ * 16 + 7) != 2 || World.getBiomeMap(chunkX * 16 + 7, chunkZ * 16 + 7) != 17)) { 
    // проверка порога отбрасывания чанка
    return;
  }
  for(let x = 0; x < 16) {
    for(let y = 0; y < 16) {
      if(World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z) != 2 || World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z) != 17) continue;
        World.setBiomeMap(chunkX * 16 + x, chunkZ * 16 + z, customBiome.id)
    }
  }
}