class HasName {
  private unlocalized_name: number;
  private id: string;
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