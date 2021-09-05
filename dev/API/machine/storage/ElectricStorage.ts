export class ElectricStorage {
    limit : number = 0,
    limits : number[] = [],
    slots : Machine.ElectricStack[] = [],

    constructor(limit : number) {
        this.limit = limit;
    }

    setLimitAll(limit : number, forced : boolean) : void {
        this.limit = limit;
        for (let i in limits) {
            setLimit(i, limit, true, true);
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
    addEnergy(index : number, amount : number) : number {
        let oamount = Math.limit(slots[index].limit - slots[index].amount, amount);
        slots[index].amount += oamount;
        return amount - oamount;
    }
    addEnergy(index : number, stack : ElectricStack) : Machine.FluidStack {
        let oamount = Math.limit(slots[index].limit - slots[index].amount, stack.amount);
        slots[index].amount += oamount;
        stack.amount -= (oamount);
        return stack;
    }
    getEnergy(index : number, amount : number) : Machine.FluidStack {
        let oamount = Math.limit(slots[index].amount, amount);
        slots[index].amount -= oamount;
        return oamount;
    }
    getEnergy(index : number, stack : ElectricStack) : Machine.FluidStack {
        let oamount = Math.limit(slots[index].amount, stack.amount);
        slots[index].amount -= oamount;
        stack.amount = (oamount);
        return stack;
    }
    prepareStack(index : number, id : number, limit : number) : void {
        limits[index] = limit;
        stacks[index] = new Machine.FluidStack(id, 0, limit);
    }
    prepareStack(index : number, stack : ElectricStack) : void {
        limits[index] = stack.limit;
        stacks[index] = stack;
    }
    prepareStack(index : number, stack : ElectricStack, isZero : boolean) : void {
        if (isZero) stack.amount = 0;
        limits[index] = stack.limit;
        stacks[index] = stack;
    }
}
