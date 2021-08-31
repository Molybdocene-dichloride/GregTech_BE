class MarkerMaterial<V> extends Material {
    private val: V;
    constructor(id: string, unlocalized_name: string, val: V) {
      super(id, unlocalized_name);
      this.val = val;
    }
    getValue(): V {
	return val;
    }
}
