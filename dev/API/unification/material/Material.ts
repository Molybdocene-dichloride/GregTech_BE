class Material {
    id: string;
    unlocalized_name: string;
    localizedNames: {[key: string]: string};
    constructor(id: string, unlocalized_name: string) {
		this.id = id;
		this.unlocalized_name = unlocalized_name;
	
		this.localizedNames = {};
    }
    getID(): string {
		return "material." + this.id;
    }
    getUnlocalizedName(): string {
		return this.unlocalized_name;
    }
    getLocalizedName(lang: string): string {
		if(!(LocalizationSystem.getCurrentLanguage() in localizedNames)) this.localizedNames[lang] = MaterialTranslator.translate(lang, this.unlocalized_name);
		return this.localizedNames[lang];
    }
    getCurrentName(): string {
		if(!(LocalizationSystem.getCurrentLanguage() in localizedNames)) this.localizedNames[LocalizationSystem.getCurrentLanguage()] = MaterialTranslator.translateToCurrent(this.unlocalized_name);
		return this.localizedNames[LocalizationSystem.getCurrentLanguage()];
    }
}
