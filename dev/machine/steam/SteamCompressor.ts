class SteamCompressor extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 1, 1, 1);
  }
}
