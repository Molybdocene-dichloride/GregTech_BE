class StandardBlockPattern extends BlockPattern { //simple & standard box multiblock
	private mainBlock: BlockState;
	private casings: ArrayList<BlockState>;
	private ioValidator: IOPredicate<String, BlockState>;
	constructor(permitted: PredicateVector, casings: ArrayList<BlockState>) {
		super(permitted, casings);
	}
    validatePattern(blockSource: BlockSource, position: Vec3, size: AABBRange): void {
		let bool = true;
		let x = 0;
		let y = 0;
		let z = 0;
		for(; x < size.max.x; x++) {
			x++;
			for(; y < size.max.y; y++) {
				y++;
				for(; z < size.max.z; z++) {
					z++;
					if(!permitted.predicate(x, y, z, block) && x == size.min.x && y == size.min.y && z == size.min.z) {
						bool = false;
						return;
					}
				}
			}
		}
		
	}
	getPredicators(): PredicateVector {
		return permitted;
	}
	setPredicators(PredicateVector pv): void {
		permitted = pv;
	}
}
