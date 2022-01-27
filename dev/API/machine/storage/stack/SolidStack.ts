class ItemStack extends ItemInstance implements Stack {
	temperature
	constructor(id, data, count) {
		id = id;
		data = data;
		count = count;
	}
	getID(): string {
		return this.id;
	}
	getData(): number {
		return this.data;
	}
	getTemperature() {
		
	}
	getCount(): number {
		return this.count;
	}
	getName() {
		return this.extra.getCustomName();
	}
}
