interface ICompound {
  toString();
  toTrivialString();
  toIUPACString();
}
abstract class StackedCompound implements ICompound {
  stacks: Nullable<MaterialStack[]>;
  casual: string;
  constructor(stacks: Nullable<MaterialStack[]>) {
    this.stacks = stacks;
  }
  getStacks(): Nullable<MaterialStack[]> {
    return stacks;
  }
  getStack(index): Nullable<MaterialStack[]> {
    return stacks[index];
  }
  toString(): string {
    for(let i in formula) {
      
    }
  }
  toTrivialString(): string {
    return casual;
  }
  toIUPACString(): string {
    
  }
}
//simple cation | anion | molecule
class SimpleCompound extends StackedCompound {
  bonds: [];
  charge: number;
  constructor(stacks: Nullable<MaterialStack[]>, bonds) {
    super(stacks);
  }
  isSalt() {
    
  }
  //unstable
  isRadical() {
    
  }
  isIon() {
    return charge != 0;
  }
  isCation() {
    return charge > 0;
  }
  isAnion() {
    return charge < 0;
  }
}
class PolymericCompound extends StackedCompound {
  sequence: {};
  isIon() {
    
  }
  isCation() {
    
  }
  isAnion() {
    
  }
}
//Mixture of compounds. Ideal for ores and compounds which require a certain purity of the substance ()
class MixinCompound extends StackedCompound {
  
}
//Isotope maybe a oneatomic complete compound, Element may be alias a main isotope
class Element implements ICompound {
  static OxidationRange: class {
    min: number;
    max: number;
  }
  static Isotope: class implements ICompound {
  protons: number;
  neutrons: number;
  formula: string;
  iupac: string;
  casual: string;
  allowedValencies: number[];
  oxidationRange: OxidationRange;
  
  constructor(formula: string, iupac: string, protons: number, neutrons: number) {
    this.formula = isotopes;
    this.iupac = iupac;
    this.protons = protons;
    this.neutrons = neutrons;
  }
  getProtons(): number {
    return protons;
  }
  getNeutrons(): number {
    return neutrons;
  }
  getAtomicNumber(): number {
    return protons + neutrons;
  }
  
  get(): Isotope {
    return this;
  }
  
  toString(): string {
    return formula;
  }
  toTrivialString(): string {
    return casual;
  }
  toIUPACString(): string {
    return iupac;
  }
  }

  protons: number;
  isotopes: {[key: Isotope]: number};
  mainkey: number;
  formula: string;
  iupac: string;
  casual: string;
  constructor(formula: Isotope[] | string,  iupac?: string, protons?: number, neutrons?: number | number[]) {
    if(Array.isArray(isotopes)) {
      for(let i in isotopes) {
        if(typeof isotopes[i] == "string" || isotopes[i] instanceof String) {
          if(i == 0) {
            this.formula = isotopes[i].formula;
            this.iupac = isotopes[i].iupac;
            this.protons = isotopes[i].protons;
            mainkey = isotopes[i].protons + isotopes[i].neutrons;
          }
          this.isotopes[isotopes[i].protons + isotopes[i].neutrons] = isotopes[i];
        }
      }
    } else if(typeof isotopes == "string" || isotopes instanceof String) {
      this.formula = isotopes;
      this.iupac = iupac;
      this.protons = protons;
      if(Array.isArray(neutrons)) {
        for(let i in isotopes) {
          if(i == 0) mainkey = isotopes[i].protons + isotopes[i].neutrons;
          newIsotope(neutrons[i]);
        }
      } else {
        newIsotope(neutrons);
      }
    }
  }
  getProtons(): number {
    return protons;
  }
  
  get(): Isotope {
    return isotopes[this.protons + isotope.neutrons];
  }
  
  setIsotope(isotope: Isotope): void {
    if(isotope.protons == this.protons) isotopes[this.protons + isotope.neutrons] = isotope;
  }
  newIsotope(neutrons, insert = true): Isotope {
    let isotope = new Isotope(this.formula, this.iupac, this.protons, neutrons);
    if(insert) {
      isotopes[this.protons + neutrons] = isotope;
    }
    return isotope;
  }
  getIsotopeByNeutrons(neutrons: number): Isotope {
    return isotopes[this.protons + neutrons];
  }
  getIsotope(atomic_number: number): Isotope {
    return isotopes[atomic_number];
  }
  
  toString(): string {
    return formula;
  }
  toTrivialString(): string {
    return casual;
  }
  toIUPACString(): string {
    return iupac;
  }
}

let allValencies = -1;
type ChemAlias = Element | Isotope; //Element usually represent a main Isotope