class SteamMacerator extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 1, 1, 1);
  }
}
class SteamFurnace extends SteamProcessor {
  init() : void {
    super.init();
    recipes = RecipeDictionary.RECIPE_FURNACE_MAP;
  }
}
class SteamAlloySmelter extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 2, 1, 1);
  }
}
class SteamHammer extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 1, 1, 1);
  }
}
class SteamCompressor extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 1, 1, 1);
  }
}
class SteamExtractor extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 1, 1, 1);
  }
}
classSteamBoiler extends SteamGenerator {
  init() : void {
    super.init();
    recipes = new FuelMap(1, 1, 1, 1);
    maxTemperature = 773.15;
  }
}
class SteamSolarBoier extends BronzeSteamGenerator {
  init() : void {
    super.init();
    recipes = new FuelMap(0, 0, 0, 0);
    maxTemperature = 773.15;
  }
}
class SteamLavaBoier extends SteamGenerator {
  init() : void {
    super.init();
    recipes = new FuelMap(1, 1, 0, 0);
    maxTemperature = 773.15;
  }
}

class BronzeBlastFurnace extends LowMultiblockMachine {
  init() : void {
    shape = new MultiblockMachine.BoxShape(new Vector3(x, y, z), new Vector3(2, 1, 1), Vector3(3, 4, 3), {id: BlockID.z, data: 0}, this.blockSource);
    super.init();
    recipes = new RecipeMap(1, 2, 1, 1);
  }
}

class PileIgniter extends LowMultiblockMachine {
  init() : void {
    shape = new MultiblockMachine.Shape(new Vector3(x, y, z), new Vector3(2, 1, 1), Vector3(3, 4, 3), {id: BlockID.z, data: 0}, this.blockSource);
    super.init();
    recipes = new RecipeMap(1, 2, 1, 1);
  }
}