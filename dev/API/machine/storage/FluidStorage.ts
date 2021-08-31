export enum Type {
    FLUID,
    ITEM,
    ENERGY
}
export class FluidStack {
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
export class FluidStorage {
    private limit : number;
    private limitStacks: number;
    
    private stacks : FluidStack[];

    constructor(limitStacks: number, limit : number) {
		this.limitStacks = limitStacks;
        this.limit = limit;
    }

    setLimitAll(limit : number, forced : boolean) : void {
        this.limit = limit;
        for (let i in limits) {
            setLimit(i, limit, forced, true);
        }
    }
    setLimit(index : number, limit : number, forced : boolean, inverted : boolean) : number {
        let pre = slots[index].amount;
        if (forced || limit < limits[index]) {
            limits[index] = limit;
            slots[index].limit = limit;
        }
        if (pre - limit > 0) return pre - limit;
        return 0;
    }
    getLimit() : number {
        return limit;
    }
    getLimit(index : number) : number {
        return limits[index];
    }
    setAmount(index : number, amount : number) : number {
        let oamount = Math.limit(slots[index].limit, amount);
        slots[index].amount = oamount;
        return amount - oamount;
    }
    getAmount(index : number) : number {
        return slots[index].amount;
    }
    getRelativeAmount(index : number) : number {
        return 1 / slots[index].amount;
    }
    isFull(index : number) : boolean {
        return slots[index].amount == slots[index].limit;
    }
    isEmpty(index : number) : boolean {
        return slots[index].amount == 0;
    }
    addLiquid(index : number, amount : number) : number {
        let oamount = Math.min(slots[index].limit - slots[index].amount, amount);
        slots[index].amount += oamount;
        return amount - oamount;
    }
    addLiquid(index : number, stack : Machine.FluidStack) : Machine.FluidStack {
        let oamount = Math.min(slots[index].limit - slots[index].amount, stack.amount);
        slots[index].amount += oamount;
        stack.amount -= oamount;
        return stack;
    }
    getliquid(index : number, amount : number) : Machine.FluidStack {
        let oamount = Math.min(slots[index].amount, amount);
        slots[index].amount -= oamount;
        return oamount;
    }
    getliquid(index : number, stack : Machine.FluidStack) : Machine.FluidStack {
        let oamount = Math.min(slots[index].amount, stack.amount);
        slots[index].amount -= oamount;
        stack.amount = oamount;
        return stack;
    }
    prepareStack(index : number, limit : number) : void {
        limit[index] = limit;
        slots[index] = new Machine.FluidStack(0, limit);
    }
    prepareStack(index : number, id : number, limit : number) : void {
        limit[index] = limit;
        slots[index] = new Machine.FluidStack(id, 0, limit);
    }
    prepareStack(index : number, id : number, limit : number, constId : boolean) : void {
        limit[index] = limit;
        slots[index] = new Machine.FluidStack(id, 0, limit, constId);
    }

    prepareStack(index : number, stack : Machine.FluidStack) : void {
        this.prepareStack(index, stack, false);
    }
    prepareStack(index : number, stack : Machine.FluidStack, constId : boolean) : void {
        limit[index] = stack.limit;
        slots[index] = stack;
        stack.constId = constId;
    }
    prepareStack(index : number, stack : Machine.FluidStack, isZero : boolean) : void {
        if (isZero) stack.amount = 0;
        limit[index] = stack.limit;
        slots[index] = stack;
    }

    addValidator() : void {

    }
    addValidator(index : number) : void {

    }
}
