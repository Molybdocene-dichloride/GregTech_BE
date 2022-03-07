interface Stack {
	getID(): string;
	getTemperature(): double;
	getCount(): number;
	
	add(stack : Stack);
}

class Phase : Stack {
	temperature;
	state;
	stacks Stack;
	constructor() {}
	constructor(stacks, temperature) {
		this.stacks = stacks;
		this.temperature = temperature;
	}
	getStacks(): stacks {
		return stacks;
	}
	getTemperature(): double {
		return temperature;
	}
	getCount(): number {
		for(stack : stacks) {
			count += stack.count;
		}
		return count;
	}
	
	add(stack : Stack) {
		if(this.stacks[i] != nullptr) {
			this.stacks[i].amount += stack.get();
		} else {
			stacks.add(mew ChemicalStack(stack.get()));
		}
	}
}
