enum TypeScope {
	Block,
	Item
}
class OrePrefix {
	private id: string;
	private unlocalized_name: number;
	private startIndex: number;
	private maxStackSize: number;
	private materialAmount: number;
	private scope: TypeScope;
	private flag: number;
	
	constructor(id: string, unlocalized_name: string, scope: TypeScope, startIndex: number, materialAmount: number, flag: number, maxStackSize: number = 64) {
		this.id = id;
		this.unlocalized_name = unlocalized_name
		this.scope = scope;
		this.materialAmount = materialAmount;
		this.flag = flag;
		this.startIndex = startIndex;
		this.maxStackSize = maxStackSize;
	}
	
	getUnlocalizedName(): string {
		return this.unlocalized_name;
	}
	getName(lang: string): string {
		if(!LocalizationSystem.getCurrentLanguage() in localizedNames) this.localizedNames[lang] = MaterialTranslator.translate(lang, this.unlocalized_name);
		return this.localizedNames[lang];
	}
	getCurrentName(): string {
		if(!LocalizationSystem.getCurrentLanguage() in localizedNames) this.localizedNames[LocalizationSystem.getCurrentLanguage()] = MaterialTranslator.translateToCurrent(this.unlocalized_name);
		return this.localizedNames[LocalizationSystem.getCurrentLanguage()];
	}
	isBlock(): boolean {
		return scope == TypeScope.Block;
	}
	isItem(): boolean {
		return scope == TypeScope.Item;
	}
	startsWith(): number {
		return startIndex;
	}
	getFlag(): number {
		return flag;
	}
	getMaxStack(): number {
		return maxStackSize;
	}
}
