class Material extends HasID, HasName {
    id: string;
    unlocalized_name: string;
    //chem
    
    constructor(id: string, unlocalized_name: string) {
		  this.id = id;
		  this.unlocalized_name = unlocalized_name;
    }
    
    getID(): string {
		return "gt:material." + this.id;
    }
    getUnlocalizedName(): string {
		return "gt:material." + this.unlocalized_name + ".name";
    }
    getLocalizedName(lang: string): string {
	
    }
    getCurrentName(): string {
    }
}