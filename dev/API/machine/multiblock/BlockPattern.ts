abstract class BlockPattern { //and Validator
	private blockSource: BlockSource;
	private position: Vec3;	
	constructor(blockSource: BlockSource, position: Vec3) {
		this.blockSource = blockSource;
		this.position = position;    
	}
    abstract validatePattern(): void;
}
class StandardBlockPattern extends BlockPattern { //simple & standard box multiblock
	private mainBlock: BlockState;
	private casings: ArrayList<BlockState>;
	private permitted: BlockPermittedPredicate<Vec3, BlockState>;
	private ioValidator: IOPredicate<String, BlockState>;
	private size: Vec3;
	constructor(blockSource: BlockSource, mainBlock: BlockState, sized: Predicate<Vec3>, permitted: BlockPermittedPredicate<Vec3, BlockState>, casings: ArrayList<BlockState>, ioValidator: IOPredicate<String, Hatch>) {
		super(blockSource, mainBlock.position);
		this.mainBlock = mainBlock;
		this.casings = casings;
		this.sized = sized;
		this.permitted = permitted;    
		this.ioValidator = ioValidator;    
	}
    validatePattern(): ArrayList<Hatch> {
		for(let x = -8; x < 8; x++) {
			let wall;
			for(let y = -8; y < 8; y++) {
				for(let z = -8; z < 8; z++) {
					if(permitted.predicate( mainBlock)) {
						
					}
				}
			}
		}
	}
}

class SizedStandardBlockPattern extends BlockPattern { //simple & standard box multiblock
	constructor(blockSource: BlockSource, mainBlock: BlockState, sized: Predicate<Vec3>, permitted: BlockPermittedPredicate<Vec3, BlockState>, casings: ArrayList<BlockState>, size: number, ioValidator: IOPredicate<String, Hatch>) {
		super(blockSource, mainBlock, sized, permitted, casings, ioValidator);
		this.size = size;
	}
	validatePattern(): ArrayList<Hatch> {
	}
}

class ClosedBlockPattern extends BlockPattern { //pile igniter multiblock
	private casings: ArrayList<BlockState>;
	private permitted: BlockPermittedPredicate<Vec3, BlockState>;
	private ioValidator: IOPredicate<String, BlockState>;
	private size: Vec3;
	constructor(blockSource: BlockSource, position: Vec3, permitted: BlockPermittedPredicate<Vec3, BlockState>, wallBlocks: ArrayList<Tile>) {
		super(blockSource, position);
		this.casings = casings;
		this.permitted = permitted;    
		this.ioValidator = ioValidator;    
	}
    validatePattern(): void {
		
	}
}
