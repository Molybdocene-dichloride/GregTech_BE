abstract class MultiblockMachine extends Machine {
	private AABBRange sizeAllowed;
	private AABB size;
	constructor(id: string, data: number, tier: number, sizeAllowed: AABBRange) {
		super(id, data, tier);
		this,sizeAllowed = sizeAllowed;
	}
	init(): void {
		super.init();
		
		this.connectable = false:
		this.pipeconnectable = false;
		this.itemconnectable = false;
		this.fluidconnectable = false;
	}
	tick(): void {
		super.tick();
		this.provideMultiblock();
	}
	provideMultiblock() : void {
		if(this.enabled || this.validateBlocks()) {
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
