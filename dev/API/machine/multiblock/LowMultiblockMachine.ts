abstract class LowMultiblockMachine extends MultiblockMachine {
  preparePipe() : void {}
  connectTick() : void {}

  receive(fluid : Machine.FluidStack, sidepre: number) : Fluid {},
  receive(item : ItemInstance, sidepre : number) : Fluid {},
  
  provide(stack : ItemInstance, src: any)) : void {},
  provide(stack : FluidStack, src : any) : void {},
}
