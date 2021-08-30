function Material(id, unlocalized_name, materialGenerationFlags) {
  this.id = id;
	this.unlocalized_name = unlocalized_name;

	this.localizedNames = {};

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

	this.verifyMaterialBits = function(materialBits) {
		return materialBits;
	};
	this.materialGenerationFlags = this.verifyMaterialBits(materialGenerationFlags);
	this.addFlag = function (materialGenerationFlags) {
		let combined = 0;
		for (let materialGenerationFlag in materialGenerationFlags) {
			combined |= materialGenerationFlag;
		}
		this.materialGenerationFlags |= verifyMaterialBits(combined);
	};
	this.hasFlag = function (generationFlag) {
		return Flags.hasFlag(materialGenerationFlags, generationFlag);
	};
}