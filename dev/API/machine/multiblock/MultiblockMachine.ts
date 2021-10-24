abstract class MultiblockMachine extends Machine {
	private AABBRange sizeAllowed;
	private AABB size;
	constructor(id: string, tier: number, sizeAllowed: AABBRange) {
		super(id, tier);
		this,sizeAllowed = sizeAllowed;
	}
	init(): void {
		super.init();
		prepareMultiblock();
	}
	tick(): void {
		super.tick();
		this.provideMultiblock();
	}
	prepareMultiblock() : void {
		if(this.validateBlocks()) {
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
		if(this.validateBlocks()) {
			correct = true;
		} else {
			correct = false;
		}
	}

	getBlock(position: Vec3) : Tile {
		return shape.getBlock(position);
	}
	validateBlocks() : boolean {
		return shape.checkBlocks();
	}
	
	getSize(): AABB {
		return this.size;
	}
	
	getAllowedSizes(): AABBRange {
		return this.sizeAllowed;
	}
	setAllowedSizes(AABBRange sizeAllowed): void {
		this.sizeAllowed = sizeAllowed;
	}
}
