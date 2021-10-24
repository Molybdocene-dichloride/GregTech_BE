class MachineRegion {
	private BlockSource bs;
	private position: Vec3;
	constructor(BlockSource bs, position: Vec3) {
		this.bs = bs;
		this.position = position;
	}
	canSeeSky(): boolean {
		return bs.canSeeSky();
	}
		
	getSolarRadiation(): number {
		return bs.getLightLevel();
	}
	getBlockRadiation(): number {
		return bs.getLightLevel();
	}
	getElectromagneticRadiation(): number {
		return bs.getLightLevel();
	}

	findAtSide(side: number, depth: number, finder: ObstacleFinder, mode: ObstacleMode): boolean {
			return finder.find(side, depth, mode);
	}
	canSeeAtSide(side: number, finder: ObstacleFinder, mode: ObstacleMode): boolean {
			return findAtSide(side, 1, finder, mode);
	}
		
	getTime(): number {
			return World.getTime();
	}
	getWeather(): number {
			return World.getWeather();
	}
	getBiome(): number {
			return bs.getBiome(x, z);
	}
	getDownfall(): number {
			return bs.getBiomeDownfallAt(x, y, z);
	}
	getTemperature(): number {
			return bs.getBiomeTemperatureAt(x, y, z);
		}
		
	addParticle(type: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, data?: number): void {
			Particles.addParticle(x, y, z, vx, vy, vz);
		}
	addFarParticle(type: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, data?: number): void {
			Particles.addFarParticle(x, y, z, vx, vy, vz);
		}
		
	getBlock(position: Vec3) : Tile {
		return blockSource.getBlock(this.position.x + position.x, this.position.y + position.y, this.position.z + position.z);
		}
		
	getBlockSource() {
		return bs;
	}
	setBlockSource(BlockSource bs) {
		this.bs = bs;
	}
	
	getPosition(): void {
		return this.position;
	}
}
class MultiblockRegion extends MachineRegion {
	private pattern: BlockPattern;
	private AABBRange sizeAllowed;
	private	AABB size;
	constructor(blockSource: BlockSource, pattern: BlockPattern, position: Vec3, AABBRange sizeAllowed) {
		super(blockSource, position);
		this.pattern = pattern;
		this.sizeAllowed = sizeAllowed;
	}
	validateBlocks(): boolean {
		return pattern.validatePattern(bs, position, size);
	}
		
	getPattern(): void {
		return this.pattern;
	}
	setPattern(BlockPattern pattern): void {
		this.pattern = pattern;
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
