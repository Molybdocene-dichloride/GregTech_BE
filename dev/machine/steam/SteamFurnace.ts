class SteamFurnace extends SteamProcessor {
  init() : void {
    super.init();
    recipes = furnace_recipes;
    
    this.inited = true;
    this.enabled = true;
  }
}
