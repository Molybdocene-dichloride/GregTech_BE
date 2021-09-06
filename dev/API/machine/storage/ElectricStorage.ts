export class ElectricStorage extends IStorage<ElectricStack> {
	private limit : number;
    private slots : LinkedHashMap<string, ElectricPartStorage>;
	private limiter: Limiter;
    constructor(limit: string) {
		this.limiter = new StandardLimiter<ElectricPartStorage>();
		this.slots = new LinkedHashMap<string, ElectricPartStorage>();
        this.limit = limit;
    }
    
    setLimitAll(limit : string, forced : boolean = false) : void {
		let bool = false;
		for(let i in this.slots) {
			if(this.limit < this.slots.get(i).limit) bool = true;
		}
		if(!bool || forced) {
			this.limit = limit;
			for(let i in slots) {
				setLimit(i, limit, true, true);
			}
		}
    }
    setLimit(limit : string, forced: boolean = false, limiter: Limiter = this.limiter) : void {
		let bool = false;
		let summ = 0;
		let count = 0;
		for(let i in this.slots) {
			summ += this.slots.get(i).limit;
			count++;
		}
		if(limit < summ) bool = true;
		if(forced || !bool) {
			this.limit = limit;
			for(let i in this.slots) {
				limiter.limit(this.slots.get(i), limit, count, forced);
			}
		}
	}
	relimite(forced: boolean = false, limiter: Limiter = this.limiter) : void {
		this.setLimit(this.limit, forced, limiter);
	}
	
    setLimit(index: string, limit: number, forced: boolean = false) : void {
		let summ = 0;
		let summ1 = 0;
		for(let i in this.slots) {
			if(i == index) {
				summ += limit;
				summ1 += this.slots.get(i).limit;
			} else {
				summ += this.slots.get(i).limit;
				summ1 += this.slots.get(i).limit;
			}
		}
		if(summ > summ1) return 0;
        let pre = this.slots.get(index).amount;
        if(forced || limit > pre) {
            this.slots.get(index).limit = limit;
            if(limit < pre) {
				this.slots.get(index).amount -= pre - limit;
				return pre - limit;
			}
        }
        return 0;
    }
    getLimit() : number {
        return this.limit;
    }
    getLimit(index : string) : number {
        return this.slots.get(index).getLimit;
    }
    setAmount(index : string, amount : number) : number {
        let oamount = Math.limit(this.slots.get(index).limit, amount);
        this.slots.get(index).amount = oamount;
        return amount - oamount;
    }
    addEnergy(index : string, amount : number) : number {
        let oamount = Math.limit(slots.get(index).limit - this.slots.get(index).amount, amount);
        this.slots.get(index).amount += oamount;
        return amount - oamount;
    }
    addEnergy(index : string, stack : ElectricStack) : ElectricStack {
        let oamount = Math.limit(slots.get(index).limit - this.slots.get(index).amount, stack.amount);
        this.slots.get(index).amount += oamount;
        stack.amount -= (oamount);
        return stack;
    }
    
	getAmount(index : string) : number {
        return this.slots.get(index).amount;
    }
    getRelativeAmount(index : string) : number {
        return 1 / this.slots.get(index).amount;
    }
    isFull(index : string) : boolean {
        return this.slots.get(index).amount == this.slots.get(index).limit;
    }
    isEmpty(index : string) : boolean {
        return this.slots.get(index).amount == 0;
    }
    getEnergy(index : string, amount : number) : ElectricStack {
        let oamount = Math.limit(slots(index).amount, amount);
        this.slots.get(index).amount -= oamount;
        return oamount;
    }
    getEnergy(index : string, stack : ItemStack) : ElectricStack {
        let oamount = Math.limit(slots(index).amount, stack.amount);
        this.slots.get(index).amount -= oamount;
        stack.amount = (oamount);
        return stack;
    }
    prepareStack(index : string, id : number, limit : number): void {
        this.stacks.get(index) = new ItemStack(id, 0, limit);
    }
    prepareStack(index : string, stack : ItemStack, zero : boolean = true): void {
        if(zero) stack.amount = 0;
        this.stacks.get(index) = stack;
    }
}






export class ElectricPartStorage extends IPartStorage<ElectricStack> {
    private limit : number;
    private slots : LinkedHashMap<string, ElectricStack>;

    constructor(limit : number) {
		this.slots = new LinkedHashMap<string, ElectricStack>();
        this.limit = limit;
    }
    setLimit(limit : number, forced : boolean = false): LinkedHashMap<string, ElectricStack> {
		let amount = 0;
		for(let i in this.slots) {
			amount += this.slots.get(i).amount;
		}
		
		let ret = new LinkedHashMap<string, ElectricStack>();
		if(forced || amount < limit) {
			this.limit = limit;
			let length = amount - limit / this.slots.size();
			
			for(let i in this.slots) {
				ret.put(i, new ElectricStack(id, this.slots.get(i).amount - limit));
			}
		}
		return ret;
	}

    setAmount(index: string, amount: number) : number {
        let oamount = Math.limit(this.slots.get(index).limit, amount);
        this.slots.get(index).amount = oamount;
        return amount - oamount;
    }
    
    addEnergy(index : string, amount : number) : number {
        let oamount = Math.limit(this.slots.get(index).limit - this.slots.get(index).amount, amount);
        this.slots.get(index).amount += oamount;
        return amount - oamount;
    }
    addEnergy(index : string, stack : ElectricStack) : ElectricStack {
        let oamount = Math.limit(this.slots.get(index).limit - this.slots.get(index).amount, stack.amount);
        this.slots.get(index).amount += oamount;
        stack.amount -= (oamount);
        return stack;
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
    getAmount(index: string): number {
        return this.slots.get(index).amount;
    }
    getRelativeAmount(): number {
        return this.slots.get(index).amount / this.limit;
    }
    getRelativeAmount(index: string): number {
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
    getEnergy(index : string, amount : number) : number {
        let oamount = Math.min(this.slots.get(string).amount, amount);
        this.slots.get(index).amount -= oamount;
        return oamount;
    }
    getEnergy(index : string, stack : ElectricStack) : ElectricStack {
        let oamount = Math.min(this.slots.get(index).amount, stack.amount);
        this.slots.get(index).amount -= oamount;
        stack.amount = oamount;
        return stack;
    }
    
    
    prepareStack(index : number, id : number, limit : number): void {
        this.stacks.put(index, new ElectricStack(id, 0, limit));
    }
    prepareStack(index : number, stack : ElectricStack, zero : boolean = true): void {
        if(zero) stack.amount = 0;
        this.stacks.put(index, stack);
    }
}
