let saved = {};
Saver.addSavesScope("generationSaves",
  function read(scope) {
    Logger.Log("read", "reds");
    for(let d in scope) {
      if (!OreDictionary.grids[d]) OreDictionary.grids[d] = {};
      for(let m in scope[d]) {
        if(!OreDictionary.grids[d][m]) {
          OreDictionary.grids[d][m] = {};
          OreDictionary.grids[d][m].vein_status = {};
        }
        OreDictionary.grids[d][m].vein_status.enabled = scope[d][m].vein_status.enabled;
        if(scope[d][m].vein_status.enabled) {
          OreDictionary.grids[d][m].vein_status.xs = scope[d][m].vein_status.xs;
          OreDictionary.grids[d][m].vein_status.ys = scope[d][m].vein_status.ys;
          OreDictionary.grids[d][m].vein_status.zs = scope[d][m].vein_status.zs;
          OreDictionary.grids[d][m].vein_status.gaussianXs = scope[d][m].vein_status.gaussianXs;
          OreDictionary.grids[d][m].vein_status.gaussianYs = scope[d][m].vein_status.gaussianYs;
          OreDictionary.grids[d][m].vein_status.gaussianZs = scope[d][m].vein_status.gaussianZs;
          OreDictionary.grids[d][m].vein_status.vein = OreDictionary.veinsByName[scope[d][m].vein_status.vein];
          for(let i = 0; i < OreDictionary.grid_size; i++) {
            OreDictionary.grids[d][m].vein_status["startedX_" + i] = scope[d][m].vein_status["startedX_" + i];
            OreDictionary.grids[d][m].vein_status["startedZ_" + i] = scope[d][m].vein_status["startedZ_" + i];
            OreDictionary.grids[d][m].vein_status["endedX_" + i] = scope[d][m].vein_status["endedX_" + i];
            OreDictionary.grids[d][m].vein_status["endedZ_" + i] = scope[d][m].vein_status["endedZ_" + i];
          }
        }
        for(let x = 0; x < OreDictionary.grid_size; x++) {
          for(let z = 0; z < OreDictionary.grid_size; z++) {
            OreDictionary.grids[d][m][OreDictionary.grids[d][m].xM * 3 + x + "_" + OreDictionary.grids[d][m].zM * 3 + z] = scope[d][m][OreDictionary.grids[d][m].xM * 3 + x + "_" + OreDictionary.grids[d][m].zM + z];
          }
        }
      }
    }
    saved = scope;
  },
  function save() {
    for(let d in OreDictionary.grids) {
      if (!saved[d]) saved[d] = {};
      for(let m in OreDictionary.grids[d]) {
        if(!saved[d][m]) {
          saved[d][m] = {};
          saved[d][m].vein_status = {};
        }
        if(saved[d][m].saved) continue;
        saved[d][m].vein_status.enabled = OreDictionary.grids[d][m].vein_status.enabled;
        if(saved[d][m].vein_status.enabled) {
          saved[d][m].vein_status.xs = OreDictionary.grids[d][m].vein_status.xs;
          saved[d][m].vein_status.ys = OreDictionary.grids[d][m].vein_status.ys;
          saved[d][m].vein_status.zs = OreDictionary.grids[d][m].vein_status.zs;
          saved[d][m].vein_status.gaussianXs = OreDictionary.grids[d][m].vein_status.gaussianXs;
          saved[d][m].vein_status.gaussianYs = OreDictionary.grids[d][m].vein_status.gaussianYs;
          saved[d][m].vein_status.gaussianZs = OreDictionary.grids[d][m].vein_status.gaussianZs;
          saved[d][m].vein_status.vein = OreDictionary.grids[d][m].vein_status.vein.name;
          for(let i = 0; i < OreDictionary.grid_size; i++) {
            saved[d][m].vein_status["startedX_" + i] = OreDictionary.grids[d][m].vein_status["startedX_" + i];
            saved[d][m].vein_status["startedZ_" + i] = OreDictionary.grids[d][m].vein_status["startedZ_" + i];
            saved[d][m].vein_status["endedX_" + i] = OreDictionary.grids[d][m].vein_status["endedX_" + i];
            saved[d][m].vein_status["endedZ_" + i] = OreDictionary.grids[d][m].vein_status["endedZ_" + i];
          }
        }
        for(let x = 0; x < OreDictionary.grid_size; x++) {
          for(let z = 0; z < OreDictionary.grid_size; z++) {
            saved[d][m][(OreDictionary.grids[d][m].xM * 3 + x) + "_" + (OreDictionary.grids[d][m].zM * 3 + z)] = OreDictionary.grids[d][m][(OreDictionary.grids[d][m].xM * 3 + x) + "_" + (OreDictionary.grids[d][m].zM * 3 + z)];
          }
        }
        saved[d][m].saved = true;
      }
    }
    return saved;
  }
);
Callback.addCallback("GenerateChunkUniversal", function (chunkX, chunkZ, random, dimension, chunkSeed, worldSeed, dimensionSeed) {
  //coords of 3x3 chunk grid
  let mixX = Math.floor(chunkX / 3);
  let mixZ = Math.floor(chunkZ / 3);

  if (!OreDictionary.grids[dimension] || !OreDictionary.grids[dimension][mixX + "_" + mixZ] || !OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ] || !OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ].generated) {
    Logger.Log(chunkX + "_" + chunkZ, "zoppo");
    Logger.Log(mixX + "_" + mixZ, "zoppoop");
    if (!OreDictionary.grids[dimension]) OreDictionary.grids[dimension] = {};
    //granites
    let highbl = OreDictionary.findChunkHighSurface(chunkX, chunkZ);
    //Flags.generate(chunkX, chunkZ);
    if (!OreDictionary.grids[dimension][mixX + "_" + mixZ]) {
      OreDictionary.grids[dimension][mixX + "_" + mixZ] = {};
      OreDictionary.grids[dimension][mixX + "_" + mixZ].xM = mixX;
      OreDictionary.grids[dimension][mixX + "_" + mixZ].zM = mixZ;
      OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status = {};
      for (let i = 0; i < 3; i++) {
        for (let z = 0; z < 3; z++) {
          Logger.Log((mixX * 3 + i) + "_" + (mixZ * 3 + z), "uuuh");
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + i) + "_" + (mixZ * 3 + z)] = {};
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + i) + "_" + (mixZ * 3 + z)].generated = false;
        }
      }
      // ore vein
      let isden = false;
      if (Math.random() < 0.5) {
        let rand = Math.random();
        let rarity = 0;
        for (let i = 0; i < OreDictionary.veins.length; i++) {
          if (!(dimension in OreDictionary.veins[i].dimensions)) continue;
          let prerarity = rarity;
          rarity += OreDictionary.veins[i].rarity / OreDictionary.sumOfRarites;
          if (OreDictionary.isInnerDiapozone(rand, prerarity, rarity)) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein = OreDictionary.veins[i];
            isden = true;
            break;
          }
        }

        if (OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein) {
          for (let x = 0; x < 16; x++) {
            for (let z = 0; z < 16; z++) {
              if (OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.minimalheight > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z)) {
                isden = false;
              }
            }
          }
          let height = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.maximalheight;
          for (let x = 0; x < 16; x++) {
            for (let z = 0; z < 16; z++) {
              if (height > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z) - 5) {
                height = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z) - 5;
              }
            }
          }

          OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys = OreDictionary.randomInInner(random, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.minimalheight, height);
          OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.gaussianYs = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + OreDictionary.randomInInnerGaussian(random, -2, 2);
          OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs = OreDictionary.randomInInner(random, 0, 15);
          OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.gaussianXs = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs + OreDictionary.randomInInnerGaussian(random, -7, 4);
          OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs = OreDictionary.randomInInner(random, 0, 15);
          OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.gaussianZs = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs + OreDictionary.randomInInnerGaussian(random, -3, 4);

          let posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          let posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          let pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          let pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);

          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1)]["startedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1)]["startedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ;
          Logger.Log(mixX * 3 + 1 + "started", "saq");

          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1)]["endedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs + pos1X;
          OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1)]["endedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs + pos1Z;

          let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);
          let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);
          let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
          let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

          for (let i = posX; i < pos1X; i++) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
          }
          for (let i = posX; i < pos1X; i++) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
          }
          for (let i = posZ; i < pos1Z; i++) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
          }
          for (let i = posZ; i < pos1Z; i++) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
          }

          //OreDictionary.grids[dimension][mixX + "_" + mixZ].posChunkX = mixX * 3 + 1;
          //OreDictionary.grids[dimension][mixX + "_" + mixZ].posChunkY = mixY * 3 + 1;

          let numb = 1;
          while (posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1)]["endedX"] = 16;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1)]["startedX"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posX, 16);
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1)]["endedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs + pos1Z;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1)]["startedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ;

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);
            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);
            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            posX += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posX, 16);

            numb++;
            Logger.Log(posX, "fx");
          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb)]["endedZ"] = 16;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb)]["startedZ"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posZ, 16);
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb)]["endedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs + pos1X;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 - numb)]["startedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX;

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            posZ += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posZ, 16);

            numb++;
          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1)]["startedX"] = 0;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1)]["endedX"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1X, 16);
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1)]["endedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs + pos1Z;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1)]["startedZ"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ;

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            pos1X += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1X, 16);
            numb++;
          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb)]["startedZ"] = 0;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb)]["endedZ"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1Z, 16);

            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb)]["endedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs + pos1X;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1) + "_" + (mixZ * 3 + 1 + numb)]["startedX"] = OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX;

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            pos1Z += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1Z, 16);

            numb++;
            Logger.Log(pos1Z, "f1z");


          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 && posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["endedX"] = 16;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["startedX"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posX, 16);

            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["endedZ"] = 16;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["startedZ"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posZ, 16);

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            posX += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posX, 16);
            posZ += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posZ, 16);

            Logger.Log((mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb), "magnetic");

            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["startedX"], "ferromagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["startedZ"], "ferrimagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["endedX"], "diamagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 - numb)]["endedZ"], "paramagnetic");

            numb++;
            Logger.Log(posX, "fxz x");
            Logger.Log(posZ, "fxz z");


          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 && posZ < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["startedX"] = 0;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["endedX"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1X, 16);
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["endedZ"] = 16;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["startedZ"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posZ, 16);

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            pos1X += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1X, 16);
            posZ += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posZ, 16);

            Logger.Log((mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb), "magnetic");

            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["startedX"], "ferromagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["startedZ"], "ferrimagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["endedX"], "diamagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 - numb)]["endedZ"], "paramagnetic");

            numb++;
            Logger.Log(pos1X, "f1x 1x");
            Logger.Log(posZ, "fz z");
          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (posX < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 && pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["endedX"] = 16;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["startedX"] = 16 - Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posX, 16);
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["startedZ"] = 0;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["endedZ"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1Z, 16);

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);

            }

            posX += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - posX - 1, 16);
            pos1Z += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1Z, 16);

            Logger.Log((mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb), "magnetic");

            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["startedX"], "ferromagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb) + "startedZ"], "ferrimagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["endedX"], "diamagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 - numb) + "_" + (mixZ * 3 + 1 + numb)]["endedZ"], "paramagnetic");

            numb++;
            Logger.Log(posX, "fx1z x");
            Logger.Log(pos1Z, "fx1z 1z");
          }
          numb = 1;
          posX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2);
          posZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs)
          pos1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs);
          pos1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2, 16 - OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs);
          while (pos1X < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 && pos1Z < OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2) {
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["startedX"] = 0;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["endedX"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1X, 16);
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["startedZ"] = 0;
            OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["endedZ"] = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1Z, 16);

            let upwX = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - posX);

            let upw1X = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.xs - pos1X);

            let upwZ = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - posZ);
            let upw1Z = Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sizeing, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.zs - pos1Z);

            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + i] = posZ + upwZ * (Math.random() * 2 - 1);
            }
            for (let i = posX; i < pos1X; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endZ_" + i] = pos1Z + upw1Z * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + i] = posX + upwX * (Math.random() * 2 - 1);
            }
            for (let i = posZ; i < pos1Z; i++) {
              OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["endX_" + i] = pos1X + upw1X * (Math.random() * 2 - 1);
            }

            pos1X += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1X, 16);
            pos1Z += Math.min(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size / 2 - pos1Z, 16);

            Logger.Log((mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb), "magnetic");

            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["startedX"], "ferromagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["startedZ"], "ferrimagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["endedX"], "diamagnetic");
            Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ][(mixX * 3 + 1 + numb) + "_" + (mixZ * 3 + 1 + numb)]["endedZ"], "paramagnetic");

            numb++;
            Logger.Log(pos1X, "f1x1z 1x");
            Logger.Log(pos1Z, "f1x1z 1z");
          }
          numb = 0;
          posX = 0;
          posZ = 0;
          pos1X = 0;
          pos1Z = 0;
        } else {
          isden = false;
        }
      }
      //torrent
      Logger.Log(isden, "Zukor");
      OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.enabled = isden;
    }

    if (OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.enabled && OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]) {
      //let cent
      let endX = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endedX"];
      Logger.Log(chunkX + "_" + chunkZ + "started", "$$$");

      Logger.Log(mixX + "_" + mixZ, "qiokoikf");
      Logger.Log(chunkX + "_" + chunkZ, "pokoio");
      Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name, "qikf");
      Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.size, "qikf");

      let startX = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["startedX"];

      let startZ = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["startedZ"];
      let endZ = OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endedZ"];
      Logger.Log(startX, "qwa");
      Logger.Log(endX, "qqwa");

      Logger.Log(startZ, "sqwa");
      Logger.Log(endZ, "qsqwa");

      let main = 3;
      let inbetween = 2;
      //let randomX = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
      //let randomX1 = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
      for (let x = startX; x < endX; x++) {
        for (let y = 0; y < 3; y++) {
          //let randomX = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
          //let randomX1 = GenerationDictionary.randomInInnerGaussian(random, -2, 2);
          for (let z = startZ; z < endZ; z++) {
            //Logger.Log(OreDictionary.grids[dimension][mixX + "_" + mixZ].ys, "Asher"); [chunkX + "_" + chunkZ]
            if (x > OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + z] && x < OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endX_" + z]) continue;
            if (z > OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + x] && z < OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endZ_" + x]) continue;

            let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + 2 + y, chunkZ * 16 + z);
            if (OreDictionary.rollPercentage(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.density * 10, random)) {
              if (tile.id + "_" + tile.data in OreDictionary.blocks) {
                Logger.Log(tile.id, "zeak");
                if (Math.random() < 0.2) {
                  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
                  Logger.Log("sporadic", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name);
                } else {
                  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.primary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
                  Logger.Log("primary", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name);
                }
              }
            }
          }
        }
      }
      for (let x = startX; x < endX; x++) {
        for (let y = 0; y < 2; y++) {
          for (let z = startZ; z < endZ; z++) {
            if (x > OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + z] && x < OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endX_" + z]) continue;
            if (z > OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + x] && z < OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endZ_" + x]) continue;
            let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + 2 + y, chunkZ * 16 + z);
            if (OreDictionary.rollPercentage(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.density * 10, random)) {
              if (tile.id + "_" + tile.data in OreDictionary.blocks) {
                Logger.Log(tile.id, "zeak");
                if (Math.random() < 0.2) {
                  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
                  Logger.Log("sporadic", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name);
                } else {
                  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.inbetween.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
                  Logger.Log("inbetween", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name);
                }
              }
            }
          }
        }
      }
      for (let x = startX; x < endX; x++) {
        for (let y = 0; y < 3; y++) {
          for (let z = startZ; z < endZ; z++) {
            if (x > OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedX_" + z] && x < OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endX_" + z]) continue;
            if (z > OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status["startedZ_" + x] && z < OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ]["endZ_" + x]) continue;
            let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys + 2 + y, chunkZ * 16 + z);
            if (OreDictionary.rollPercentage(OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.density * 10, random)) {
              if (tile.id + "_" + tile.data in OreDictionary.blocks) {
                Logger.Log(tile.id, "zeakh");
                if (Math.random() < 0.2) {
                  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
                  Logger.Log("sporadic", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name);
                } else {
                  World.setBlock(chunkX * 16 + x, OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.secondary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
                  Logger.Log("secondary", OreDictionary.grids[dimension][mixX + "_" + mixZ].vein_status.vein.name);
                }
              }
            }
          }
        }
      }
    }
    //smallores
    for (let i = 0; i < OreDictionary.ores.length; i++) {
      if (OreDictionary.smallgens[i].isgen && dimension in OreDictionary.smallgens[i] && highbl > OreDictionary.smallgens[i][dimension].minimalheight) {
        for (let d = 0; d < OreDictionary.smallgens[i][dimension].rarity; d++) {
          let coords;
          if (highbl > OreDictionary.smallgens[i][dimension].maximallheight) {
            coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i][dimension].minimalheight, OreDictionary.smallgens[i].maximalheight);
          } else {
            coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i][dimension].minimalheight, highbl);
          }
          let tile = World.getBlock(coords.x, coords.y, coords.z);
          if (tile.id + "_" + tile.data in OreDictionary.blocks) {
            World.setBlock(coords.x, coords.y, coords.z, OreDictionary.dat[OreDictionary.ores[i].name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
          }
        }
      }
    }
    Logger.Log(mixX + "_" + mixZ, "Zen");
    OreDictionary.grids[dimension][mixX + "_" + mixZ][chunkX + "_" + chunkZ].generated = true;
  }
});

let customBiome = new CustomBiome("oilsands");
customBiome.setCoverBlock(12, 0).setSurfaceBlock(12, 0).setFillingBlock(1, 0).setSkyColor(0, 0, 0).setTemperatureAndDownfall(1, 1);

Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
  if (dimensionId != 0) return;
  if (GenerationUtils.getPerlinNoise(chunkX * 16 + 8, 0, chunkZ * 16 + 8, dimensionSeed, 1 / 72, 2) < 0.7 - 12 / 72 && (World.getBiomeMap(chunkX * 16 + 7, chunkZ * 16 + 7) != 2 || World.getBiomeMap(chunkX * 16 + 7, chunkZ * 16 + 7) != 17)) {
    // проверка порога отбрасывания чанка
    return;
  }
  Logger.Log("bicepoij", World.getBiomeMap(chunkX * 16 + 1, chunkZ * 16 + 1));
  for (let x = 0; x < 16; x++) {
    for (let z = 0; z < 16; z++) {
      if (World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z) != 2 && World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z) != 17) continue;
      Logger.Log("bicep", World.getBiomeMap(chunkX * 16 + x, chunkZ * 16 + z))
      if (GenerationUtils.getPerlinNoise(chunkX * 16 + x, 0, chunkZ * 16 + z, dimensionSeed, 1 / 72, 2) > 0.7) World.setBiomeMap(chunkX * 16 + x, chunkZ * 16 + z, customBiome.id)
    }
  }
});