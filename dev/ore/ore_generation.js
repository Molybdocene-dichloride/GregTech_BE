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
    
  Logger.Log(chunkX + "_" + chunkZ, "zoppo");
  //granites
  let highbl = OreDictionary.findChunkHighSurface(chunkX, chunkZ);

	let coords = GenerationUtils.randomXZ(chunkX, chunkZ);
	    if(GenerationUtils.findHighSurface(coords.x, coords.z).y > 14) {
	      let randomStone = random.nextInt(Object.keys(StoneDictionary.stones).length);
	      let randomSubStone = random.nextInt(2);
    	
    	//StoneDictionary.generateStonePerlin({x: chunkX, z: chunkZ}, BlockID[Object.keys(StoneDictionary.stones)[randomStone]], randomSubStone * 8, dimensionSeed, 256, 2, 42, 1, {"1_0": "1_0"});
	    }
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
      let isgen = true;
    if(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein) {
      for(let x = 0; x < 16; x++) {
        for(let z = 0; z < 16; z++) {
          if(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.minimalheight > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z)) {
          isgen = false;
        }}}
       
    
      OreDictionary.grids[dimension][mixX + "_" + mixZ].enabled = isgen;
    
      let height = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.maximalheight;
      for(let x = 0; x < 16; x++) {
        for(let z = 0; z < 16; z++) {
          if(height > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z) - 5) {
            height = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z) - 5;
      }}}
    
      OreDictionary.grids[dimension][mixX + "_" + mixZ].ys = OreDictionary.randomInInner(random, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.minimalheight, height);
      OreDictionary.grids[dimension][mixX + "_" + mixZ].gaussianYs = OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + OreDictionary.randomInInnerGaussian(random, -2, 2);
    OreDictionary.grids[dimension][mixX + "_" + mixZ].xs = OreDictionary.randomInInner(random, 0, 15);
    OreDictionary.grids[dimension][mixX + "_" + mixZ].gaussianXs = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs + OreDictionary.randomInInnerGaussian(random, -7, 4);
    OreDictionary.grids[dimension][mixX + "_" + mixZ].zs = OreDictionary.randomInInner(random, 0, 15);
    OreDictionary.grids[dimension][mixX + "_" + mixZ].gaussianZs = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs + OreDictionary.randomInInnerGaussian(random, -3, 4);
    //OreDictionary.grids[dimension][mixX + "_" + mixZ].chunkcX = OreDictionary.randomInInner(random, Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs + 1, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2), 16);
    //OreDictionary.grids[dimension][mixX + "_" + mixZ].chunkcZ = OreDictionary.randomInInner(random, Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.zs + 1), 16);
    //OreDictionary.grids[dimension][mixX + "_" + mixZ].chunkс1X = OreDictionary.randomInInner(random, Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs), 16);
    //OreDictionary.grids[dimension][mixX + "_" + mixZ].chunk1Z = OreDictionary.randomInInner(random, Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16-OreDictionary.grids[dimension][mixX + "_" + mixZ].zs), 16);
    
    let posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
    let posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
    let pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
    let pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
    Logger.Log(mixX + "_" + mixZ, "qiokoikf");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name, "qikf");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size, "qikf");
    Logger.Log(posX, "f");
    Logger.Log(posZ, "qwa");
    Logger.Log(pos1X, "gqwa");
    Logger.Log(pos1Z, "f");
    OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) + "startedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs - posX;
    OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) +  "startedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs - posZ;
    Logger.Log(mixX * 3 + 1 + "started", "saq");
    OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) + "endedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs + pos1X;
    OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) + "endedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs + pos1Z;
    //OreDictionary.grids[dimension][mixX + "_" + mixZ].posChunkX = mixX * 3 + 1;
    //OreDictionary.grids[dimension][mixX + "_" + mixZ].posChunkY = mixY * 3 + 1;
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) + "startedX"], "ferromagnetic");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) +  "startedZ"], "ferrimagnetic");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) + "endedX"], "diamagnetic");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][mixX * 3 + 1 + "_" + (mixZ * 3 + 1) + "endedZ"], "paramagnetic");
    Logger.Log(mixX * 3 + 1 + "_" + (mixZ * 3 + 1), "paramagnetic");

    let numb = 1;
    while(posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
      OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "endedX"] = 16;
      OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "startedX"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posX, 16);
      OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "endedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs + pos1Z;
      OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "startedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs - posZ;
      posX += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posX, 16);
      if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
      if(!(posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"] = (mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1);
      }
      Logger.Log((mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1), "magnetic");
      
      Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "startedX"], "ferromagnetic");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "startedZ"], "ferrimagnetic");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "endedX"], "diamagnetic");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1) + "endedZ"], "paramagnetic");
    
      numb++;
      Logger.Log(posX, "fx");
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "endedZ"] = 16;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "startedZ"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posZ, 16);
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "endedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs + pos1X;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "startedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs - posX;
          posZ += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posZ, 16);
          if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
          if(!(posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["z"] = (mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb);
          }
          Logger.Log((mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb), "magnetic");
          
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "startedX"], "ferromagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "startedZ"], "ferrimagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "endedX"], "diamagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb) + "endedZ"], "paramagnetic");
          
          numb++;
          Logger.Log(posZ, "fz");
          
          
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "startedX"] = 0;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "endedX"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1X, 16);
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "endedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs + pos1Z;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "startedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].zs - posZ;
         pos1X += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1X, 16);
         if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
         if(!(pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x"] = (mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1);
         }
         Logger.Log((mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1), "magnetic");
         
         Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "startedX"], "ferromagnetic");
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "startedZ"], "ferrimagnetic");
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "endedX"], "diamagnetic");
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1) + "endedZ"], "paramagnetic");
        
         numb++;
         Logger.Log(pos1X, "f1x");
         
         
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"] = 0;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "endedZ"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1Z, 16);
          
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "endedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs + pos1X;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "startedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].xs - posX;
          
          pos1Z += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1Z, 16);
         if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
         if(!(pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"] = (mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb);
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"], "derry");
         }
          Logger.Log((mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb), "magnetic");
          
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "startedX"], "ferromagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"], "ferrimagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "endedX"], "diamagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb) + "endedZ"], "paramagnetic");
          
          numb++;
          Logger.Log(pos1Z, "f1z");
          
          
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "endedX"] = 16;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "startedX"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posX, 16);
      
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "endedZ"] = 16;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "startedZ"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posZ, 16);
          
          posX += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posX, 16);
          posZ += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posZ, 16);
          if(!(posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
            if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
          OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"] = (mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb);
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"], "derry");
          }
          Logger.Log((mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb), "magnetic");
          
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "startedX"], "ferromagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "startedZ"], "ferrimagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "endedX"], "diamagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb) + "endedZ"], "paramagnetic");
          
          numb++;
          Logger.Log(posX, "fxz x");
          Logger.Log(posZ, "fxz z");
          
          
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "startedX"] = 0;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "endedX"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1X, 16);
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "endedZ"] = 16;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "startedZ"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posZ, 16);
          pos1X += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1X, 16);
          posZ += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posZ, 16);
          if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
          if(!(pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"] = (mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb);
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"], "derry");
          }
          Logger.Log((mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb), "magnetic");
          
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "startedX"], "ferromagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "startedZ"], "ferrimagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "endedX"], "diamagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb) + "endedZ"], "paramagnetic");
          
          numb++;
          Logger.Log(pos1X, "f1x 1x");
          Logger.Log(posZ, "fz z");
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "endedX"] = 16;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "startedX"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posX, 16);
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"] = 0;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "endedZ"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1Z, 16);
          posX += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - posX - 1, 16);
          pos1Z += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1Z, 16);
          if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
          if(!(posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"] = (mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb);
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"], "derry");
          }
          
          Logger.Log((mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb), "magnetic");
          
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "startedX"], "ferromagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"], "ferrimagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "endedX"], "diamagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "endedZ"], "paramagnetic");
          
          numb++;
          Logger.Log(posX, "fx1z x");
          Logger.Log(pos1Z, "fx1z 1z");
        }
        numb = 1;
        posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2);
        posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].zs)
        pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].xs);
        pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].zs);
        while(pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "startedX"] = 0;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "endedX"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1X, 16);
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"] = 0;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "endedZ"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1Z, 16);
      
          pos1X += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1X, 16);
          pos1Z += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 - pos1Z, 16);
          if(!OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk) OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk = {};
          if(!(pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2 && pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size / 2)) {
          OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"] = (mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb);
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"], "derry");
          }
          
          Logger.Log((mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb), "magnetic");
          
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "startedX"], "ferromagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"], "ferrimagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "endedX"], "diamagnetic");
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb) + "endedZ"], "paramagnetic");
          
          numb++;
          Logger.Log(pos1X, "f1x1z 1x");
          Logger.Log(pos1Z, "f1x1z 1z");
        }
        numb = 0;
        posX = 0;
        posZ = 0;
        pos1X = 0;
        pos1Z = 0;
        
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"], "e");
      Logger.Log(mixX + "_" + mixZ, "ehj");
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]]) {
      for(let x = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].startX; x < OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].endX; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]][x] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].startZ + sizeing * (Math.random() * 2 - 1);
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]][x], "xz");
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["z"]]) {
      for(let x = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["z"]].startX; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].endX; x++) {
       OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["z"]][x] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["z"]].startZ + sizeing * (Math.random() * 2 - 1);
       Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["z"]][x], "z");
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]]) {
      for(let x = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]].startX; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]].endX; x++) {
       OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]][x] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]].startZ + sizeing * (Math.random() * 2 - 1);
       Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]][x], "1xz")
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]]) {
      for(let x = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]].startZ; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]].endZ; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]][x] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]].endZ + sizeing * (Math.random() * 2 - 1);
      
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]][x], "x1z")
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"]]) {
      for(let x = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"]].startX; x < OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"]].endX; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"]][x] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"]].endZ + sizeing * (Math.random() * 2 - 1);
      
          Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1z"]][x], "1z")
      }}
      
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]]) {
      for(let x = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]].startZ; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]].endZ; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]][x] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]].endZ + sizeing * (Math.random() * 2 - 1);
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]][x], "1x1z")
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]]) {
      for(let z = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].startX; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].endX; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]][z] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]].startX + sizeing * (Math.random() * 2 - 1);
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["xz"]][x], "xz")
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"]]) {
      for(let z = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"]].startX; x < OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"]].endX; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"]][z] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"]].startX + sizeing * (Math.random() * 2 - 1);
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x"]][x], "x")
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]]) {
      for(let z = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]].startX; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]].endX; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]][z] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]].startX + sizeing * (Math.random() * 2 - 1);
        Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["x1z"]][x], "x1z")
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]]) {
      for(let z = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]].startZ; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]].endZ; x++) {
       OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]][z] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1xz"]][z].endX + sizeing * (Math.random() * 2 - 1);
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x"]]) {
      for(let z = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x"]].startZ; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x"]].endZ; x++) {
       OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x"]][z] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x"]][z].endX + sizeing * (Math.random() * 2 - 1);
      }}
      
      if(OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]]) {
      for(let z = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]].startZ; x <= OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]].endZ; x++) {
        OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]][z] = OreDictionary.grids[dimension][mixX + "_" + mixZ][OreDictionary.grids[dimension][mixX + "_" + mixZ].endChunk["1x1z"]].endX + sizeing * (Math.random() * 2 - 1);
      }}
      } else {
        isgen = false;
      }
    }
  }
  
  if(OreDictionary.grids[dimension][mixX + "_" + mixZ].enabled) {
  //let cent
let endX = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ + "endedX"];
Logger.Log(chunkX + "_" + chunkZ + "started", "$$$");

Logger.Log(mixX + "_" + mixZ, "qiokoikf");
Logger.Log(chunkX + "_" + chunkZ, "pokoio");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name, "qikf");
    Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.size, "qikf");
    
let startX = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ + "startedX"];

let startZ = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ + "startedZ"];
let endZ = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX+ "_" + chunkZ + "endedZ"];
Logger.Log(startX, "qwa");
Logger.Log(endX, "qqwa");

Logger.Log(startZ, "sqwa");
Logger.Log(endZ, "qsqwa");

  let main = 3;
  let inbetween = 2;
  //let randomX = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
  //let randomX1 = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
  for(let x = startX; x < endX; x++) {
    for(let y = 0; y < 3; y++) {
        //let randomX = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
        //let randomX1 = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
      for(let z = startZ; z < endZ; z++) {
        //Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].ys, "Asher"); 
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
        if(OreDictionary.rollPercentage(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.density * 10, random)) {
        if(tile.id + "_" + tile.data in OreDictionary.blocks) {
          Logger.Log(tile.id, "zeak");
		if(Math.random() < 0.2) {
  			World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
  			Logger.Log("sporadic", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name);
		} else {
			World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.primary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
			Logger.Log("primary", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name);
	  }
	}
}
      }}}
for(let x = startX; x < endX; x++) {
    for(let y = 0; y < 2; y++) {
      for(let z = startZ; z < endZ; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
if(OreDictionary.rollPercentage(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.density * 10, random)) {
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
         Logger.Log(tile.id, "zeak");
  	if(Math.random() < 0.2) {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
		Logger.Log("sporadic", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name);
	} else {	
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.inbetween.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
		Logger.Log("inbetween", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name);
	}
}}
      }}}
  for(let x = startX; x < endX; x++) {
    for(let y = 0; y < 3; y++) {
      for(let z = startZ; z < endZ; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
if(OreDictionary.rollPercentage(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.density * 10, random)) {
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
         Logger.Log(tile.id, "zeakh");
  	if(Math.random() < 0.2) {
		  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
		Logger.Log("sporadic", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name);
	  } else {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.secondary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
		Logger.Log("secondary", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein.name);
	}
}}
      }}}
  }
  
  
  //smallores
  for(let i = 0; i < OreDictionary.ores.length; i++) {
    if(OreDictionary.smallgens[i].isgen && dimension in OreDictionary.smallgens[i] && highbl > OreDictionary.smallgens[i][dimension].minimalheight) {
      for(let d = 0; d < OreDictionary.smallgens[i][dimension].rarity; d++) {
        let coords;
        if(highbl > OreDictionary.smallgens[i][dimension].maximallheight) {
          coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i][dimension].minimalheight, OreDictionary.smallgens[i].maximalheight);
         } else {
          coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i][dimension].minimalheight, highbl);
        }
        let tile = World.getBlock(coords.x, coords.y, coords.z);
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
         Logger.Log(tile.id, "zeakggak");
          World.setBlock(coords.x, coords.y, coords.z, OreDictionary.dat[OreDictionary.ores[i].name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
        }
        }
    }
  }
  
  if(!isore[dimension]) isore[dimension] = {};
  isore[dimension][chunkX + "_" + chunkZ] = true;
  }
});

let customBiome = new CustomBiome("oilsands");
customBiome.setCoverBlock(42, 0).setSurfaceBlock(12, 0).setFillingBlock(1, 0).setSkyColor(0, 0, 0).setTemperatureAndDownfall(1, 1);

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