export class ElectricStack implements IStack {
    id : number;
    amount : number;
    current : number;
    limit : number;
	constructor(id : string, limit : number);
	constructor(id : string, limit : number, amount : number, current : number);
    constructor(id : string, limit : number, amount : number = 0, current : number = 0) {
        this.id = id;
        this.amount = amount;
        this.current = current;
        this.limit = limit;
    }
}
