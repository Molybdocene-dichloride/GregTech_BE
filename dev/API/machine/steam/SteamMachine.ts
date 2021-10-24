abstract class SteamMachine extends Machine {
  init() : void {
    super.init();
    this.fluidStorage.prepareStack("steam", 16000, true);
    this.fluidStorage.prepareStack("water", 16000, true);
  }
}
