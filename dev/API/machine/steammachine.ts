abstract class SteamMachine extends Machine implements ISteamLogic {
  
  init() {
    super.init();
    this.prepareSteam();
  }
  tick() {
    super.tick();
    this.provideSteam();
  }
  prepareSteam() : void {
    fluidStorage.prepareStack("steam", 16000);
  }
  provideSteam() : void {
    
  }
}