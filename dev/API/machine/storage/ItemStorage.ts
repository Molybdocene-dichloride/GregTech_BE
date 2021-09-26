export class ElectricStorage extends IStorage<ElectricStack> {
	private limit : number;
    private slots : LinkedHashMap<string, ElectricPartStorage>;
	private limiter: Limiter;
    constructor(limit: string) {
		this.limiter = new StandardLimiter<ElectricPartStorage>();
		this.slots = new LinkedHashMap<string, ElectricPartStorage>();
        this.limit = limit;
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
    
    isFull(): boolean {
		let amount = 0;
		for(let i in this.slots) {
			for(let i in this.slots.get(index).slots) {
				amount += this.slots.get(index).slots.get(i).amount;
			}
		}
        return amount == this.limit;    
	}
    isFull(index : string): boolean {
		let amount = 0;
		for(let i in this.slots.get(index).slots) {
			amount += this.slots.get(index).slots.get(i).amount;
		}
        return amount == this.slots.get(index).limit;    
	}
	isEmpty(): boolean {
		let amount = 0;
		for(let i in this.slots) {
			for(let i in this.slots.get(index).slots) {
				amount += this.slots.get(index).slots.get(i).amount;
			}
		}
        return amount == 0;    
	}
    isEmpty(index : string): boolean {
		let amount = 0;
		for(let i in this.slots.get(index).slots) {
			amount += this.slots.get(index).slots.get(i).amount;
		}
        return amount == 0;
	}
    
    getEnergy(index : string, amount : number) : ElectricStack {
		return this.slots.get(index).getEnergy(amount);
    }
    getEnergy(index : string, stack : ItemStack) : ElectricStack {
		return this.slots.get(index).getEnergy(amount);
    }
    
    prepareStorage(index : string, id : number, limit : number): void {
        this.stacks.put(index, new ElectricPartStorage(id, 0, limit));
    }
    prepareStorage(index : string, stack : ElectricPartStorage, zero : boolean = true): void {
        if(zero) stack.clean();
        this.stacks.put(index, stack);
    }
    getStorage(index : string): ElectricPartStorage {
		return this.slots.get(index)
	}
	
	input: function(j) {
		for(let i = 0; i < this.recipes.maxInputs; i++) {
			this.itemStorage.get("input" + i).hide(this.itemStorage.getSlot("input" + i).id, j.inputs[i].count, this.itemStorage.getSlot("input" + i).data /*this.container.getSlot("input" + i).extra*/);
			this.itemStorage.validate("input" + i);
		}
	}
	output: function(j) {
       Logger.Log("peakks", "zoom");
       for(let i = 0; i < this.data.type.recipes.maxOutputs; i++) {
           let iddata = MaterialDictionary.invdata[j.outputs[i].form][j.outputs[i].material.name];
			Logger.Log("peakoiks", iddata.id);
			Logger.Log("peakoiks", iddata.data);
			Logger.Log("peakoiks", j.outputs[i].count);
			this.container.setSlot("output" + i, iddata.id, this.container.getSlot("output" + i).count + j.outputs[i].count, iddata.data/*iddata.extra*/);
			this.container.validateSlot("output" + i);
		}
	}
	checkOutput: function(j) {
		let checked = true;
		for(let i = 0; i < this.recipes.maxOutputs; i++) {
			if(!this.container.getSlot("output" + i).id == 0 || (this.container.getSlot("output" + i).id == iddata.id && this.container.getSlot("output" + i).data == iddata.data && this.container.getSlot("output" + i).count + j.outputs[i].count < Item.getMaxStack(this.container.getSlot("output" + i).id))) {
				checked = false;
			}
		}
		Logger.Log("qshablop", checked);
		return checked;
	}
    
    tick(): void {}
}






export class ElectricPartStorage extends IPartStorage<ElectricStack> {
	private id: string;
    private limit : number;
    private slots : LinkedHashMap<string, ElectricStack>;

    constructor(id: string, limit : number) {
		this.id = id;
		this.slots = new LinkedHashMap<string, ElectricStack>();
        this.limit = limit;
    }
    
    getStacks(): LinkedHashMap<string, ElectricStack> {
		return slots;
	}
	getStack(id: string): ElectricStack {
		return slots;
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
    
    getEnergy(index : string, amount : number) : ElectricStack {
		if(this.slots.containsKey(index)) return null;
        let oamount = Math.min(this.slots.get(string).amount, amount);
        this.slots.get(index).amount -= oamount;
        return new ElectricStack(this.slots.get(string).id, oamount, this.slots.get(string).limit);
    }
    getEnergy(stack : ElectricStack) : ElectricStack {
		if(this.slots.containsKey(index)) return null;
        let oamount = Math.min(this.slots.get(index).amount, stack.amount);
        this.slots.get(index).amount -= oamount;
        stack.amount = oamount;
        return stack;
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
    addEnergy(stack : ElectricStack) : ElectricStack {
        let oamount = Math.limit(this.slots.get(stack.id).limit - this.slots.get(stack.id).amount, stack.amount);
        this.slots.get(stack.id).amount += oamount;
        stack.amount -= (oamount);
        return stack;
    }
    
    prepareStack(id : number, limit : number): void {
        this.stacks.put(id, new ElectricStack(id, 0, limit));
    }
    prepareStack(stack : ElectricStack, zero : boolean = true): void {
        if(zero) stack.amount = 0;
        this.stacks.put(stack.id, stack);
    }
    
    clean(): void {
		this.slots.clear();
	}
	clcopy(): void {
		this.slots.clear();
	}
}
