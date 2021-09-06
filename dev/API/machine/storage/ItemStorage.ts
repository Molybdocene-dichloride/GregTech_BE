export class ItemPartStorage extends IPartStorage<ItemStack> {
	private limit : number;
    private slots : LinkedHashMap<string, ItemStack>;

    constructor(limit : number) {
		this.slots = new LinkedHashMap<string, ItemStack>();
        this.limit = limit;
    }

    setLimitAll(limit : number, forced : boolean) : void {
		let bool = false;
		for(let i in this.slots) {
			if(this.limit < this.slots.get(i).limit) bool = true;
		}
		if(!bool || forced) {
			this.limit = limit;
			for (let i in slots) {
				setLimit(i, limit, true, true);
			}
		}
    }
    setLimit(limit : number, forced : boolean) : void {
		let bool = false;
		for(let i in this.slots) {
			if(this.limit < this.slots.get(i).limit) bool = true;
		}
		if(!bool || forced) {
			this.limit = limit;
		}
	}
    setLimit(index: number, limit: number, forced: boolean, inverted: boolean) : void {
        let pre = this.slots.get(index).amount;
        if(forced || limit < this.slots.get(index).limit) {
            this.slots.get(index).limit = limit;
        }
        if(pre - limit > 0) return pre - limit;
        return 0;
    }
    getLimit() : number {
        return this.limit;
    }
    getLimit(index : number) : number {
        return this.slots.get(index).getLimit;
    }
    setAmount(index : number, amount : number) : number {
        let oamount = Math.limit(this.slots.get(index).limit, amount);
        this.slots.get(index).amount = oamount;
        return amount - oamount;
    }
    getAmount(index : number) : number {
        return this.slots.get(index).amount;
    }
    getRelativeAmount(index : number) : number {
        return 1 / this.slots.get(index).amount;
    }
    isFull(index : number) : boolean {
        return this.slots.get(index).amount == this.slots.get(index).limit;
    }
    isEmpty(index : number) : boolean {
        return this.slots.get(index).amount == 0;
    }
    addEnergy(index : number, amount : number) : number {
        let oamount = Math.limit(slots.get(index).limit - this.slots.get(index).amount, amount);
        this.slots.get(index).amount += oamount;
        return amount - oamount;
    }
    addEnergy(index : number, stack : ElectricStack) : ItemStack {
        let oamount = Math.limit(slots.get(index).limit - this.slots.get(index).amount, stack.amount);
        this.slots.get(index).amount += oamount;
        stack.amount -= (oamount);
        return stack;
    }
    getEnergy(index : number, amount : number) : ItemStack {
        let oamount = Math.limit(slots[index).amount, amount);
        this.slots.get(index).amount -= oamount;
        return oamount;
    }
    getEnergy(index : number, stack : ItemStack) : ItemStack {
        let oamount = Math.limit(slots[index).amount, stack.amount);
        this.slots.get(index).amount -= oamount;
        stack.amount = (oamount);
        return stack;
    }
    prepareStack(index : number, id : number, limit : number): void {
        this.stacks.get(index) = new ItemStack(id, 0, limit);
    }
    prepareStack(index : number, stack : ItemStack, zero : boolean = true): void {
        if(zero) stack.amount = 0;
        this.stacks.get(index) = stack;
    }
}	
