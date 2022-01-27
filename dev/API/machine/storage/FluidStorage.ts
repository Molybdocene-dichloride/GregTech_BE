export class FluidStorage exte {
	private id: string;
    private limit : number;
    private slots : LinkedHashMap<string, FluidStack>;

    constructor(id: string, limit : number) {
		this.id = id;
		this.slots = new LinkedHashMap<string, FluidStack>();
        this.limit = limit;
    }
    
    prepareStack(id : number, limit : number): void {
        this.stacks.put(id, new FluidStack(id, 0, limit));
    }
    prepareStack(stack : FluidStack, zero : boolean = true): void {
        if(zero) stack.amount = 0;
        this.stacks.put(stack.id, stack);
    }
    
    add(index : string, amount : number) : number {
        let oamount = Math.limit(this.slots.get(index).limit - this.slots.get(index).amount, amount);
        this.slots.get(index).amount += oamount;
        return amount - oamount;
    }
    add(stack : FluidStack) : FluidStack {
        let oamount = Math.limit(this.slots.get(stack.id).limit - this.slots.get(stack.id).amount, stack.amount);
        this.slots.get(stack.id).amount += oamount;
        stack.amount -= (oamount);
        return stack;
    }
    
    getStacks(): LinkedHashMap<string, FluidStack> {
		return slots;
	}
	getStack(id: string): FluidStack {
		return slots;
	}
	
	can(items: LinkedHashMap<string, IStack>): boolean {
		if(items.getCount() > stacks.getCount()) return false;
		for(let i in items) {
			if(slots[i] == null || slots[i].getData() != items[i].getData() || slots[i].getCount() < items[i].getCount()) return false;
		}
		return true;
	}
	
    getLimit() : number {
        return this.limit;
    }
    
    getAmount() : number {
		let amount = 0;
		for(let i in this.slots) {
			amount += this.slots.get(i).amount;
		}
        return amount;
    }
    getRelativeAmount(): number {
        return this.slots.get(index).amount / this.limit;
    }
    isFull() : boolean {
		let amount = 0;
		for(let i in this.slots) {
			amount += this.slots.get(i).amount;
		}
        return amount == this.limit;
    }
    isEmpty() : boolean {
		let amount = 0;
		for(let i in this.slots) {
			amount += this.slots.get(i).amount;
		}
        return amount == 0;
    }
    
    getAmount(index: string): number {
        return this.slots.get(index).amount;
    }
    getRelativeAmount(index: string): number {
        return this.slots.get(index).amount / this.limit;
    }
    
    get(index : string, amount : number) : FluidStack {
		if(this.slots.containsKey(index)) return null;
        let oamount = Math.min(this.slots.get(string).amount, amount);
        this.slots.get(index).amount -= oamount;
        return new FluidStack(this.slots.get(string).id, oamount, this.slots.get(string).limit);
    }
    get(stack : FluidStack) : FluidStack {
		if(this.slots.containsKey(index)) return null;
        let oamount = Math.min(this.slots.get(index).amount, stack.amount);
        this.slots.get(index).amount -= oamount;
        stack.amount = oamount;
        return stack;
    }
	
	setLimit(limit : number, forced : boolean = false): LinkedHashMap<string, FluidStack> {
		let amount = 0;
		for(let i in this.slots) {
			amount += this.slots.get(i).amount;
		}
		
		let ret = new LinkedHashMap<string, FluidStack>();
		if(forced || amount < limit) {
			this.limit = limit;
			let length = amount - limit / this.slots.size();
			
			for(let i in this.slots) {
				ret.put(i, new FluidStack(id, this.slots.get(i).amount - limit));
			}
		}
		return ret;
	}
	
    setAmount(index: string, amount: number) : number {
        let oamount = Math.limit(this.slots.get(index).limit, amount);
        this.slots.get(index).amount = oamount;
        return amount - oamount;
    }
    
    tick(): void {
		
	}
	
    clean(): void {
		this.slots.clear();
	}
	clcopy(): void {
		this.clone();
		this.slots.clear();
	}
}
