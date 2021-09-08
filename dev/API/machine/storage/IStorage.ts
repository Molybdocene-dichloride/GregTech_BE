export interface IStorage<S extends IStack> extends GameObject {
	setLimit(limit : string, forced: boolean = false, limiter: Limiter = this.limiter): void;
	relimite(forced: boolean = false, limiter: Limiter = this.limiter) : void;
	setLimit(index: string, limit: number, forced: boolean = false): void;
		
	getLimit(): number;
	getLimit(index : string): number;
	
	isFull();
	isFull(index: string);
	isEmpty();
	isEmpty(index: string);
	
	prepareStorage(index : string, id : number, limit : number): void;
    prepareStorage(index : string, stack : ElectricPartStorage, zero : boolean = true): void;
    
    getPart(index: number): IPartStorage<? extends S>;
	
	tick(): void;
}
export interface IPartStorage<S extends IStack> implements Cloneable {
	setLimit(): LinkedHashMap<string, ? extends S>;
	setAmount(index : string, amount : number): number;
		
	getLimit(): number;
	getAmount(index : string): number;
	getRelativeAmount(index : string): number;
	
	getStacks(): LinkedHashMap<string, ? extends S>;
	getStack(id: string): S;
	
	isFull() : boolean;
	isEmpty() : boolean;
	
	prepareStack(index : string, id : number, limit : number): void;
	prepareStack(stack : IStack, zero: boolean = true): void;

	tick(): void;
	
	clean(): void;
	clcopy(): void;
}
