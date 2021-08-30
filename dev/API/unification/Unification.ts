namespace Unification {
  parseChem(chemString: string) {
    
  }
  of(...formula: MaterialStack[]) {
	  let stacks = [];
	  for(let i in arguments) {
	  if(arguments[i] instanceof MaterialStack) stacks[i] == arguments[i];
	  if(arguments[i] instanceof StackedFormula) stacks[i] == new MaterialStack(arguments[i]);
	  }
	  return new StackedFormula(stacks);
  }
  public static MarkerMaterial Empty = new MarkerMaterial("empty");
  namespace Colours {
    public static MarkerMaterial Colorless = new MarkerMaterial("colorless");
    public static MarkerMaterial Black = new MarkerMaterial("black");
    public static MarkerMaterial Red = new MarkerMaterial("red");
    public static MarkerMaterial Green = new MarkerMaterial("green");
    public static MarkerMaterial Brown = new MarkerMaterial("brown");
    public static MarkerMaterial Blue = new MarkerMaterial("blue");
    public static MarkerMaterial Purple = new MarkerMaterial("purple");
        public static MarkerMaterial Cyan = new MarkerMaterial("cyan");
        public static MarkerMaterial Silver = new MarkerMaterial("silver");
        public static MarkerMaterial Gray = new MarkerMaterial("gray");
        public static MarkerMaterial Pink = new MarkerMaterial("pink");
        public static MarkerMaterial Lime = new MarkerMaterial("lime");
     
    public static MarkerMaterial Yellow = new MarkerMaterial("yellow");
    public static MarkerMaterial LightBlue = new MarkerMaterial("light_blue");
    public static MarkerMaterial Magenta = new MarkerMaterial("magenta");
    public static MarkerMaterial Orange = new MarkerMaterial("orange");
    public static MarkerMaterial White = new MarkerMaterial("white");
  }
  namespace Tier {
    public static Material Primitive = new MarkerMaterial("primitive");
    public static Material Basic = new MarkerMaterial("basic");
    public static Material Good = new MarkerMaterial("good");
    public static Material Advanced = new MarkerMaterial("advanced");
    public static Material Extreme = new MarkerMaterial("extreme");
    public static Material Elite = new MarkerMaterial("elite");
    public static Material Master = new MarkerMaterial("master");
    public static Material Ultimate = new MarkerMaterial("ultimate");
    public static Material Superconductor = new Material(354, "superconductor", 0xFFFFFF, MaterialIconSet.NONE, of(), 0L, null);
    public static Material Infinite = new MarkerMaterial("infinite");
  }
}