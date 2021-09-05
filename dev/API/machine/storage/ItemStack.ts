interface IStack {
	getID(): string;
	getCount(): number;
}
class ItemStack extends ItemInstance implements IStack {
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
	getCount(): number {
		return this.count;
	}
	getName() {
		return this.extra.getCustomName();
	}
}
