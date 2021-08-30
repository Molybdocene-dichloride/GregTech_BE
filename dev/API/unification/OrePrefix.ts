enum TypeScope {
  Block,
  Item
}
class OrePrefix {
  id: string;
  unlocalized_name: number;
  startIndex: number;
  maxStackSize: number;
  materialAmount: number;
  scope: TypeScope;
  flag: number;
    
  constructor(id: string, unlocalized_name: string, scope: TypeScope, materialAmount: number, flag: number, startIndex: number, maxStackSize: number = 64) {
    this.id = id;
    this.unlocalized_name = unlocalized_name
    this.scope = scope;
    this.materialAmount = materialAmount;
    this.flag = flag;
    this.startIndex = startIndex;
    this.maxStackSize = maxStackSize;
  }
  this.getUnlocalizedName = function() {
		return this.unlocalized_name;
	};
	this.getName = function(lang) {
		if(!LocalizationSystem.getCurrentLanguage() in localizedNames) this.localizedNames[lang] = MaterialTranslator.translate(lang, this.unlocalized_name);
		return this.localizedNames[lang];
	};
	this.getCurrentName = function() {
		if(!LocalizationSystem.getCurrentLanguage() in localizedNames) this.localizedNames[LocalizationSystem.getCurrentLanguage()] = MaterialTranslator.translateToCurrent(this.unlocalized_name);
		return this.localizedNames[LocalizationSystem.getCurrentLanguage()];
	};
}