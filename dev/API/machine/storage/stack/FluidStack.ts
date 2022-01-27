export class ChemicalStack : Stack {
    private id : string;
    private amount : number;
    constructor(id : string, amount : number) {
        this.id = id;
        this.amount = amount;
    }
    setID(id : string) {
		this.id = id;
    }
    getID() {
		return this.id;
    }
    setAmount(amount : number): number {
        this.amount = Math.min(amount, limit);
        return amount - this.amount;
    }
    
    add(stack : Stack) {
        this.amount += stack.get();
	}
	add(amount : number) {
        this.amount += amount;
	}
}
