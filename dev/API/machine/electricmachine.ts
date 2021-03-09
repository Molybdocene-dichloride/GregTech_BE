abstract class ElectricMachine extends Machine implements IElectricLogic {
  
  energyconnectable: false
  energyinputconnectable: false
  dynamoconnectable: false
  electricStorage: new Machine.ElectricStorage();
  init() {
    super.init();
    this.prepareWire();
  }
  tick() {
    super.tick();
    this.provideWire();
  }
  prepareWire() : void {
    energyconnectable = true;
    energyinputconnectable = true;
    
    energyStorage.prepareStack("Eu", 16000);
  }
  provideWire() : {}
}