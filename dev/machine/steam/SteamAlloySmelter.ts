class SteamAlloySmelter extends SteamProcessor {
  init() : void {
    super.init();
    recipes = new RecipeMap(1, 2, 1, 1);
  }
}
