class BlastFurnace extends LowMultiblockMachine {
	init() : void {
		shape = new StandardMultiblockRegion(new Vector3(x, y, z), new Vector3(2, 1, 1), Vector3(3, 4, 3), {id: BlockID.z, data: 0}, this.blockSource);
		super.init();
		recipes = new RecipeMap(1, 2, 1, 1);
	}
	tick(): void {
		super.tick();
		
	}
}
