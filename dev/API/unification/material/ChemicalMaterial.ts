class ChemicalMaterial extends Material {
  this.formula = formula;
  this.formulatext = concater(this.formula);
  
  constructor(id, unlocalized_name, formula, materialGenerationFlags) {
    super(id, unlocalized_name, materialGenerationFlags);
  }
  
  this.getFormula = function() {
		return this.formula;
	};
	this.getFormulaText = function() {
		return this.formulatext;
	};
}

class DustMaterial extends ChemicalMaterial {
  constructor(id, unlocalized_name, formula, materialGenerationFlags) {
    super(id, unlocalized_name, formula, materialGenerationFlags);
  }
  this.genItem = function (form, count) {
		MaterialDictionary.genItem(this, form, count);
	};
	this.upgradeItem = function (item, form) {
		MaterialDictionary.upgradeItem(this, item, form);
	};
}
class SolidMaterial extends DustMaterial {
  constructor(id, unlocalized_name, formula, materialGenerationFlags) {
    super(id, unlocalized_name, formula, materialGenerationFlags);
  }
}
class IngotMaterial extends SolidMaterial {
  constructor(id, unlocalized_name, formula, materialGenerationFlags) {
    super(id, unlocalized_name, formula, materialGenerationFlags);
  }
}
class RoughSolidMaterial extends SolidMaterial {
  constructor(id, unlocalized_name, formula, materialGenerationFlags) {
    super(id, unlocalized_name, formula, materialGenerationFlags);
  }
}
class GemMaterial extends SolidMaterial {
  constructor(id, unlocalized_name, formula, materialGenerationFlags) {
    super(id, unlocalized_name, formula, materialGenerationFlags);
  }
}