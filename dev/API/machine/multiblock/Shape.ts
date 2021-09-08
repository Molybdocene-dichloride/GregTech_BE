namespace MultiblockMachine {
	export abstract class MultiblockRegion {
		private blockSource: BlockSource;
		private position: Vec3;
		constructor(blockSource: BlockSource, position: Vec3) {
			this.blockSource = blockSource;
			this.position = position;
		}
		getBlockSource() : BlockSource {
			return blockSource;
		}
		getBlock(position: Vec3) : Tile {
			return blockSource.getBlock(this.position.x + position.x, this.position.y + position.y, this.position.z + position.z);
		}
		abstract checkBlocks() : boolean;
	}
	export class ClosedShape extends Shape {
		private supportedBlocks: ArrayList<Tile>;
		private maxDepth: number;
		constructor(blockSource: BlockSource, position: Vec3, wallBlocks: ArrayList<Tile>, supportedBlocks: ArrayList<Tile>, maxDepth: number) {
			super(blockSource, position);
			this.supportedBlocks = supportedBlocks;
			this.maxDepth = maxDepth;
		}
		checkBlocks() {
			
		}
	}
  export abstract class BoxShape extends Shape {
    size;
    constructor(position: Vec3, positionRel: Vec3, size: Vec3, casing: casing, blockSource: source) {
      super(position, positionRel, casing, blockSource);
      this.size = size;
    }
    
    getBlock(position: Vec3) : Tile {
      if(position.x > this.size.x && position.y > this.size.y && position.z > this.size.z) {
          return null;
        }
      return super.getBlock(position);
    }
    
    checkBlocks() : boolean {
      let is = true
      for(let i = 0; i < size.x; i++) {
        for(let j = 0; j < size.y; j++) {
      for(let j = 0; j < size.z; j++) {
  
        let block = blockSource.getBlock(this.position.x + i, this.position.y + j, this.position.z + k)
        if(!(block.id == casing.id && block.data == casing.data)) {
          is = false;
        }
      }
        }
      }
      return is;
    }
  }
}
