abstract class BlockStateTileEntity extends TileEntity {
	useNetworkItemContainer: boolean = true,
	private blockData: number;
	
	private initialized: boolean;
	private enabled: boolean;
	private errored: boolean;
	
	private rotation: number;
	constructor(id: string, data: number) {
		this.id = id;
		this.data = data;
		
		this.initialized = false;
		this.enabled = false;
		this.errored = false;
	}
	init(): void {
		this.rotate = 2;
		this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.textures, rotationOfBlock: this.data.rotation});
	}
	canRotate(): boolean;
	canRotate(rotation: number): boolean;
	canRotate(rotation?: number): boolean {
		if(rotation == null || rotation) {
			return true;
		}
		return false;
	}
	//Block rotation!
	rotate(rotation: number) : void {
		if(this.canRotate() && this.canRotate(rotation)) {
			this.rotation = rotation;
		}
	}
	getRotation() : number {
		return rotation;
	}
	isInitialized(): boolean {
		return this.initialized;
	}
	isEnabled(): boolean {
		return this.initialized;
	}
	enable(): void {
		this.enabled = true;
	}
	disable(): void {
		this.enabled = false;
	}
	isCorrect(): boolean;
	
	worldRotationToBlockRotation: function (rotation) {
		RotationTransforms.worldRotationToBlockRotation(rotation, this.rotation);
	},
	blockRotationToWorldRotation: function (rotation) {
		RotationTransforms.blockRotationToWorldRotation(rotation, this.rotation);
	},
}
