export interface IStorage<S extends IStack> extends GameObject {
	setLimit(): void;
	
	setPart(): void;
	setPartLimit(): void;
	
	getLimit(): number;
	
	getPart(): IPartStorage<? extends S>;
	getPartLimit(): number;
	
	tick(): void;
}
export interface IPartStorage<S extends IStack> {
	setLimit(): LinkedHashMap<string, ? extends S>;
	setAmount(index : string, amount : number): number;
	
	setStack(): void;
	
	getLimit(): number;
	getAmount(index : string): number;
	getRelativeAmount(index : string): number;
	
	getStacks(): LinkedHashMap<string, ? extends S>;
	getStack(): S;
	
	isFull() : boolean;
	isEmpty() : boolean;
	
	prepareStack(index : string, id : number, limit : number): void;
	prepareStack(index : string, stack : IStack, zero: boolean = true): void;

	tick(): void;
}
