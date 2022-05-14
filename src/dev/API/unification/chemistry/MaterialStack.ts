//this is incomplete compound, but a several atoms | groups | cations | anions | molecules
class MaterialStack {
  this.formula: ICompound;
  this.count: number;
  stacks: Nullable<MaterialStack[]> = null;
  constructor(formula : Material | ICompound, count: number) {
	  this.formula = formula.formula || formula;
	  this.count = count;
  }
  toString(): string {
    return "Stack {" + "}"
  }
}