abstract class BlockPattern { //and Validator
	constructor(walls: ArrayList<BlockState>) {
		this.walls = walls;
	}
    abstract validatePattern(blockSource: BlockSource,  position: Vec3): void;
    
    getPredicators(): PredicateVector;
    setPredicators(): void;
}

class ClosedBlockPattern extends BlockPattern { //pile igniter multiblock
	private walls: ArrayList<BlockState>;
	
	private size: Vec3;
	constructor(walls: ArrayList<BlockState>) {
		super(permitted, walls);    
	}
    validatePattern(blockSource: BlockSource, position: Vec3): void {
		std::unordered_map<Block> checked();
		Block bll = getBlock(position.x, position.y - 1, position.z);
		if(!permitted.predicate(x, y, z, block) && x == size.min.x && y == size.min.y && z == size.min.z) {
			bool = false;
			return;
		} else {
			checked.push();
			checkAllBlockSides(position.x, position.y - 1, position.z, checked, aList2);
		}
		
		for(i : 6) {
			for(x : 16) {
				if(!wall) {
					bool = false;
					return;
				}
			}
		}
		for(i : 6) {
			checkAllBlockOnSide(position.x, position.y - 1, position.z, checked, aList2);
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
    checkAllBlockOnSide(int x, int y, int z, ArrayList<ChunkPosition> aList): boolean {
		for(i : 6) {
			if(!aList.contains()) continue;
			if(block == walls) {
				aList.add(t);
				if(!checkAllBlockOnSide(position.x, position.y - 1, position.z, aList)) {
					return false;
				}
			} else {
				return false;
			}
		}
		return true;
	}
}
