enum TypeScope {
	Block,
	Item
}
class OrePrefix extends HasID, HasName {
	private id: string;
	private unlocalized_name: number;
	//private startIndex: number;
	
	private maxStackSize: number;
	private temperature: number;
	private materialAmount: number;
	private scope: TypeScope;
	//private flag: number;
	
	constructor(id: string, unlocalized_name: string, scope: TypeScope, materialAmount: number, maxStackSize: number = 64) {
		this.id = id;
		this.unlocalized_name = unlocalized_name;
		
		this.scope = scope;
		this.materialAmount = materialAmount;
		//this.flag = flag;
		this.maxStackSize = maxStackSize;
	}
	
	getUnlocalizedName(): string {
		return "gt:prefix." + this.unlocalized_name + ".n";
	}
	getName(lang: string): string {
		
	}
	getCurrentName(): string {
		
	}
	
	isBlock(): boolean {
		return scope == TypeScope.Block;
	}
	isItem(): boolean {
		return scope == TypeScope.Item;
	}
	
	startsWith(): number {
		return startIndex;
	}
	getMaxStack(): number {
		return maxStackSize;
	}
}
