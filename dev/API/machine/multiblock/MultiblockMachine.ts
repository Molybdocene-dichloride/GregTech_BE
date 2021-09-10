abstract class MultiblockMachine extends Machine implements IProcessingLogic {
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
	}
	
	private getBlock(position: Vec3) : Tile {
		return shape.getBlock(position);
	}
	checkBlocks() : boolean {
		return shape.checkBlocks();
	}
}
