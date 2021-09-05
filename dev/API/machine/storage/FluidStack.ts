export class FluidStack implement IStack {
    private id : string;
    private sealed: boolean;
    private amount : number;
    private limit : number;
    constructor(amount : number, limit : number);
    constructor(id : string, limit : number, amount : number);
    constructor(id : string, limit : number, amount : number = 0) {
        this.id = id;
        this.amount = amount;
        this.limit = limit;
        this.sealed = false;
    }
    setID(id : string) {
		this.id = id;
    }
    getID() {
		return this.id;
    }
    setLimit(limit : number, use: boolean): number {
        if(use || !sealed || limit >= this.amount) this.limit = limit;
        if(use) return limit - amount;
        return 0; 
    }
    setLimitForced(limit : number, use: boolean): number {
		this.limit = limit;
		return 0;
	}
    setAmount(amount : number): number {
        this.amount = Math.min(amount, limit);
        return amount - this.amount;
    }
    
    add() {
		
	}
}
