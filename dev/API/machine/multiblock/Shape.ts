namespace MultiblockMachine {
	export abstract class MultiblockRegion {
		private blockSource: BlockSource;
		private position: Vec3;
		private pattern: BlockPattern;
		constructor(blockSource: BlockSource, position: Vec3, pattern: BlockPattern) {
			this.blockSource = blockSource;
			this.position = position;
			this.pattern = pattern;
		}
		getBlockSource() : BlockSource {
			return blockSource;
		}
		getBlock(position: Vec3) : Tile {
			return blockSource.getBlock(this.position.x + position.x, this.position.y + position.y, this.position.z + position.z);
		}
		validateBlocks(): boolean {
			pattern.validatePattern();
		};
	}
	export class ClosedMultiblockRegion extends MultiblockRegion {
		private supportedBlocks: ArrayList<Tile>;
		private wallBlocks: ArrayList<Tile>;
		private maxDepth: number;
		constructor(blockSource: BlockSource, position: Vec3, wallBlocks: ArrayList<Tile>, supportedBlocks: ArrayList<Tile>, minDepth: number, maxDepth: number) {
			super(blockSource, position);
			this.wallBlocks = wallBlocks;
			this.supportedBlocks = supportedBlocks;
			this.maxDepth = maxDepth;
		}
	}
  export class StandardMultiblockRegion extends MultiblockRegion {
    size: number;
    constructor(position: Vec3, positionRel: Vec3, size: Vec3, casing: casing, blockSource: source) {
      super(position, positionRel, casing, blockSource);
    }
    
    getBlock(position: Vec3) : Tile {
      if(position.x > this.size.x && position.y > this.size.y && position.z > this.size.z) {
          return null;
        }
      return super.getBlock(position);
    }
  }
}
