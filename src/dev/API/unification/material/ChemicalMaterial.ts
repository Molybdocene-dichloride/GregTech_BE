class ChemicalMaterial extends Material {
    formula: ICompound;
    formulatext: string;
  
    constructor(id: string, unlocalized_name: string, formula: ICompound, materialGenerationFlags: number) {
		super(id, unlocalized_name);
		this.formula = formula;
		this.materialGenerationFlags = materialGenerationFlags;
		this.materialGenerationFlags = this.verifyMaterialBits(materialGenerationFlags);
		this.formulatext = concater(this.formula);
    }
    getFormula(): ICompound {
		return this.formula;
    };
    getFormulaText(): string {
		return this.formulatext;
    };
    verifyMaterialBits(materialBits): number {
		return materialBits;
    };
    
    addFlag(materialGenerationFlags): void {
		let combined = 0;
		for (let materialGenerationFlag in materialGenerationFlags) {
			combined |= materialGenerationFlag;
		}
		this.materialGenerationFlags |= verifyMaterialBits(combined);
    };
    hasFlag(generationFlag): boolean {
		return Flags.hasFlag(materialGenerationFlags, generationFlag);
    };
}

class DustMaterial extends ChemicalMaterial {
    constructor(id: string, unlocalized_name: string, formula: ICompound, materialGenerationFlags: number) {
		super(id, unlocalized_name, formula, materialGenerationFlags);
    }
    genItem(form, count) {
		MaterialDictionary.genItem(this, form, count);
    };
    upgradeItem(item, form) {
		MaterialDictionary.upgradeItem(this, item, form);
    };
}
class SolidMaterial extends DustMaterial {
    constructor(id: string, unlocalized_name: string, formula: ICompound, materialGenerationFlags: number) {
		super(id, unlocalized_name, formula, materialGenerationFlags);
    }
}
class IngotMaterial extends SolidMaterial {
    constructor(id: string, unlocalized_name: string, formula: ICompound, materialGenerationFlags: number) {
		super(id, unlocalized_name, formula, materialGenerationFlags);
    }
}
class RoughSolidMaterial extends SolidMaterial {
    constructor(id: string, unlocalized_name: string, formula: ICompound, materialGenerationFlags: number) {
		super(id, unlocalized_name, formula, materialGenerationFlags);
    }
}
class GemMaterial extends SolidMaterial {
    constructor(id: string, unlocalized_name: string, formula: ICompound, materialGenerationFlags: number) {
		super(id, unlocalized_name, formula, materialGenerationFlags);
    }
}
