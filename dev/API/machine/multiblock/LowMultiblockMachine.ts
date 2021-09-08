abstract class LowMultiblockMachine extends Machine implements IMultiblockLogic, IProcessingLogic {
  private shape: MultiblockMachine.Shape;

  private getShape() : MultiblockMachine.Shape {
    return shape;
  }
  private setShape(shape : MultiblockMachine.Shape) : void {
    this.shape = shape;
  }
  private getBlock(position: Vec3) : Tile {
     return shape.getBlock(position);
  }
  checkBlocks() : boolean {
    return shape.checkBlocks();
  }
  init() : void {
    super.init();
    prepareMultiblock();
  }
  tick() : void {
    super.tick();
    this.provideMultiblock();
  }
  prepareMultiblock() : void {
    //setShape(shape);
    if(shape.checkBlocks) {
      correct = true;
    } else {
      correct = false;
    }
    
    this.connectable = false:
    this.pipeconnectable = false;
    this.itemconnectable = false;
    this.fluidconnectable = false;
  }
  provideMultiblock() : void {
    if(shape.checkBlocks) {
      correct = true;
    } else {
      correct = false;
    }
    if(shape.shape instanceof CustomShape) {
      shape.findBlocks();
    }
  }
  preparePipe() : void {}
  connectTick() : void {}
  //providePipe() : void {}
  receive(fluid : Machine.FluidStack, sidepre: number) : Fluid {},
  receive(item : ItemInstance, sidepre : number) : Fluid {},
  
  provide(stack : ItemInstance, src: any)) : void {},
  provide(stack : FluidStack, src : any) : void {},
}
