class StoneType extends OrePrefix {
  id: number;
  unlocalized_name: string;
  material: DustMaterial;
  constructor(id: string, unlocalized_name: string, scope: TypeScope, startIndex: number, material: DustMaterial) {
    super(id, unlocalized_name, TypeScope.Block, 9, GENERATE_ORE, startIndex);
    this.material = material;
  }
}