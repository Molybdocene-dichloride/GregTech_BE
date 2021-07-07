abstract class Pipe extends Machine {
  energyStorage: null
  init() : void {
    super.init();
    
  }
  preparePipe() : void {
    if(this.connectable) {
      Logger.Log(this, "fui");
      this.data.connectEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
    }
  }
  provide(stack : ItemInstance, src : any) : void {
    
  }
  provide(stack : FluidStack, src : any) : void {
    this.fluidStorage.addLiquid("steam", src.add(this, output, "steam", {x: this.x, y: this.y, z: this.z}) - output, this.sidepre);
  }
  receive(fluid : ItemInstance, sidepre: number) : void {

  }
  receive(fluid : Machine.FluidStack, sidepre: number) : void {
    return this.fluidStorage.receiveFluid(fluid);
  }
}