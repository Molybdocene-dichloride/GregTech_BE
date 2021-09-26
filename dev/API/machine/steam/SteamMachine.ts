abstract class SteamMachine extends Machine implements ISteamLogic {
  init() : void {
    super.init();
    this.prepareSteam();
  }
  tick() : void {
    super.tick();
    this.provideSteam();
  }
  prepareSteam() : void {
    this.fluidStorage.prepareStack("steam", 16000, true);
    this.fluidStorage.prepareStack("water", 16000, true);
  }
  provideSteam() : void {}
}
