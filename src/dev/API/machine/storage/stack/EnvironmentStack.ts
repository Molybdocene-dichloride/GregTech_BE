//electromagnetic radiation, water drops, snow drops
class EnvironmentStack implements IStack {
	constructor(id: string, count: number) {
		id = id;
		count = count;
	}
	getID(): string {
		return this.id;
	}
	getCount(): number {
		return this.count;
	}
}
