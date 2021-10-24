abstract class LowMultiblockMachine extends MultiblockMachine {
	constructor(id: string, tier: number, sizeAllowed: AABBRange) {
		super(id, tier, sizeAllowed);
	}

	preparePipe() : void {}
	connectTick() : void {}

	receive(fluid : Machine.FluidStack, sidepre: number) : Fluid {}
	receive(item : ItemInstance, sidepre : number) : Fluid {}
 
	provide(stack : ItemInstance, src: any)) : void {}
	provide(stack : FluidStack, src : any) : void {}
}
