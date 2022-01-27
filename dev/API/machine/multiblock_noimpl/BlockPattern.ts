type PredicateVector = ArrayList<ArrayList<ArrayList<MachinePredicate<Vec3, BlockState>>>>;
abstract class BlockPattern { //and Validator
	private blockSource: BlockSource;
	private permitted: PredicateVector;
	constructor(permitted: PredicateVector, casings: ArrayList<BlockState>) {
		this.casings = casings;
		this.permitted = permitted;
	}
    abstract validatePattern(blockSource: BlockSource,  position: Vec3, size: AABBRange): void;
    
    getPredicators(): PredicateVector;
    setPredicators(): void;
}
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
class ClosedBlockPattern extends BlockPattern { //pile igniter multiblock
	private casings: ArrayList<BlockState>;
	private permitted: PredicateVector;
	private ioValidator: IOPredicate<String, BlockState>;
	private size: Vec3;
	constructor(permitted: PredicateVector, casings: ArrayList<Tile>) {
		super(permitted, casings);    
	}
    validatePattern(blockSource: BlockSource, position: Vec3, size: AABBRange): void {
		std::unordered_map<Block> checked();
		Block bll = getBlock(position.x, position.y - 1, position.z);
		if(!permitted.predicate(x, y, z, block) && x == size.min.x && y == size.min.y && z == size.min.z) {
			bool = false;
			return;
		} else {
			checked.push();
			checkAllBlockSides(position.x, position.y - 1, position.z, checked, aList2);
		}
	}
	checkAllBlockSides(int x, int y, int z, ArrayList<ChunkPosition> aList1, ArrayList<ChunkPosition> aList2): boolean {
		pr = permitted.predicate(x, y, z, block)
		if(!pr && x == size.min.x && y == size.min.y && z == size.min.z) {
			bool = false;
			return;
		} else {
			checkAllBlockSides(position.x, position.y - 1, position.z, checked, aList2);
			checked.add();
			if(pr.p1) checked.add(new ChunkPosition(aX, aY + 1, aZ));
			if(pr.p3) checked.add(new ChunkPosition(aX, aY + 1, aZ));
			if(pr.p4) checked.add(new ChunkPosition(aX, aY - 1, aZ));
			if(pr.p5) checked.add(new ChunkPosition(aX, aY, aZ + 1));
			if(pr.p6) checked.add(new ChunkPosition(aX, aY, aZ - 1));
		}
		
		
        p1 = false;
        p2 = false;
        p3 = false;
        p4 = false;
        p5 = false;
        p6 = false;
        Block tBlock = this.getBaseMetaTileEntity().getBlockOffset(aX + 1, aY, aZ);
        if (aX + 1 < 6 && (isWoodLog(tBlock))) {
            if (!aList1.contains(new ChunkPosition(aX + 1, aY, aZ)) && (!aList2.contains(new ChunkPosition(aX + 1, aY, aZ))))
                p1 = true;
        } else if (!(tBlock == Blocks.dirt || tBlock == Blocks.grass)) {
            return false;
        }

        tBlock = this.getBaseMetaTileEntity().getBlockOffset(aX - 1, aY, aZ);
        if (aX - 1 > -6 && (isWoodLog(tBlock))) {
            if (!aList1.contains(new ChunkPosition(aX - 1, aY, aZ)) && (!aList2.contains(new ChunkPosition(aX - 1, aY, aZ))))
                p2 = true;
        } else if (!(tBlock == Blocks.dirt || tBlock == Blocks.grass)) {
            return false;
        }

        tBlock = this.getBaseMetaTileEntity().getBlockOffset(aX, aY + 1, aZ);
        if (aY + 1 < 1 && (isWoodLog(tBlock))) {
            if (!aList1.contains(new ChunkPosition(aX, aY + 1, aZ)) && (!aList2.contains(new ChunkPosition(aX, aY + 1, aZ))))
                p3 = true;
        } else if (!(tBlock == Blocks.dirt || tBlock == Blocks.grass || (aX == 0 && aY == -1 && aZ == 0 && tBlock == GregTech_API.sBlockMachines))) {
            return false;
        }

        tBlock = this.getBaseMetaTileEntity().getBlockOffset(aX, aY - 1, aZ);
        if (aY - 1 > -6 && (isWoodLog(tBlock))) {
            if (!aList1.contains(new ChunkPosition(aX, aY - 1, aZ)) && (!aList2.contains(new ChunkPosition(aX, aY - 1, aZ))))
                p4 = true;
        } else if (tBlock != Blocks.brick_block) {
            return false;
        }

        tBlock = this.getBaseMetaTileEntity().getBlockOffset(aX, aY, aZ + 1);
        if (aZ + 1 < 6 && (isWoodLog(tBlock))) {
            if (!aList1.contains(new ChunkPosition(aX, aY, aZ + 1)) && (!aList2.contains(new ChunkPosition(aX, aY, aZ + 1))))
                p5 = true;
        } else if (!(tBlock == Blocks.dirt || tBlock == Blocks.grass)) {
            return false;
        }

        tBlock = this.getBaseMetaTileEntity().getBlockOffset(aX, aY, aZ - 1);
        if (aZ - 1 > -6 && (isWoodLog(tBlock))) {
            if (!aList1.contains(new ChunkPosition(aX, aY, aZ - 1)) && (!aList2.contains(new ChunkPosition(aX, aY, aZ - 1))))
                p6 = true;
        } else if (!(tBlock == Blocks.dirt || tBlock == Blocks.grass)) {
            return false;
        }
        aList1.add(new ChunkPosition(aX, aY, aZ));
        if (p1) aList2.add(new ChunkPosition(aX + 1, aY, aZ));
        if (p2) aList2.add(new ChunkPosition(aX - 1, aY, aZ));
        if (p3) aList2.add(new ChunkPosition(aX, aY + 1, aZ));
        if (p4) aList2.add(new ChunkPosition(aX, aY - 1, aZ));
        if (p5) aList2.add(new ChunkPosition(aX, aY, aZ + 1));
        if (p6) aList2.add(new ChunkPosition(aX, aY, aZ - 1));
        return true;
    }
}
