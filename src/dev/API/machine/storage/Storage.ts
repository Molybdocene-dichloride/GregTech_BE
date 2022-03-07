export class Storage : Node {
	private id: string;
    private limit : number;
	private stacks: ArrayList<Stack>;
	constructor(id: string, limit : number) {
		this.id = id;
		this.stacks = new ArrayList<Stack>();
        this.limit = limit;
    }
	
	canGet(items: ArrayList<Stack>): boolean {
		if(items.getCount() > stacks.getCount()) return false;
		for(let i in items) {
			if(stacks[i] == null || stacks[i].getData() != items[i].getData() || stacks[i].getCount() < items[i].getCount()) return false;
		}
		return true;
	}
	canAdd(items: ArrayList<Stack>): boolean {
		if(stacks.getCount() + items.getCount() > this.limit) return false;
		return true;
	}
	
	add(index : number, amount : number) : number {
        let oamount = Math.limit(this.limit - this.stacks.get(index).amount, amount);
        
        this.stacks.get(stack.id).add(oamount);
        
        return amount - oamount;
    }
    add(stack : Stack) : Stack {
        let oamount = Math.limit(this.limit - this.stacks.get(stack.id).amount, stack.amount);
        
        this.stacks.get(stack.id).add(oamount);
        
        return stack;
    }
    add(index : number, stack : Stack): void {
        this.stacks.put(index, stack);
  	}
    
	get(index : number, amount : number) : Stack {
		if(this.stacks.containsKey(index)) return null;
        let oamount = Math.min(this.stacks.get(string).amount, amount);
        this.stacks.get(index).amount -= oamount;
        return new Stack(this.stacks.get(string).id, oamount, this.limit);
    }
    get(stack : Stack) : Stack {
		if(this.stacks.containsKey(index)) return null;
        let oamount = Math.min(this.stacks.get(index).amount, stack.amount);
        this.stacks.get(index).amount -= oamount;
        stack.amount = oamount;
        return stack;
    }
	
	setLimit(limit : number, forced : boolean = false): ArrayList<Stack> {
		let amount = 0;
		for(let i in this.stacks) {
			amount += this.stacks.get(i).amount;
		}
		
		let ret = new ArrayList<Stack>();
		if(forced || amount < limit) {
			this.limit = limit;
			let length = amount - limit / this.stacks.size();
			
			for(let i in this.stacks) {
				ret.put(i, new Stack(id, this.stacks.get(i).amount - limit));
			}
		}
		return ret;	
	}
		
	getLimit(): number {
		return this.stacks[index];
	}
	getLimit(index : number): number {
		return this.stacks[index].getLimit();
	}
    
    getAmount(index : number): number {
		let amount = 0;
		for(let i in this.stacks) {
			amount += this.stacks.get(i).amount;
		}
        return amount;
	}
	getRelativeAmount(index : number): number {
        return this.stacks.get(index).amount / this.limit;
	}
	
	isFull() : boolean {
		let amount = 0;
		for(let i in this.stacks) {
			amount += this.stacks.get(i).amount;
		}
        return amount == this.limit;
	}
	isEmpty() : boolean {
		let amount = 0;
		for(let i in this.stacks) {
			amount += this.stacks.get(i).amount;
		}
        return amount == 0;
	}
	
    getStacks(): ArrayList<Stack> {
		return this.stacks;
	}
    getStack(index: number): Stack {
		return this.stacks[index];
	}
	
	tick(currentMachineInfo: MachineInfo): void {
		for(let i in this.stacks) {
			this.stacks[i].tick();
		}
	}
	
	setAmount(index : number, amount : number): ArrayList<Stack> {
		let oamount = Math.limit(limit, amount);
        this.stacks.get(index).amount = oamount;
        return amount - oamount;
	}
	
	clean(): void {
		this.stacks.clear();
	}
	clcopy(): void {
		this.stacks.clear();
	}
}
