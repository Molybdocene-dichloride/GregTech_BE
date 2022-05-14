namespace Unification {
    class Colour {
		mc: number;
		hex: number;
    }
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
    let _null = new MarkerMaterial<null>(null, null, null);
    let Empty = new MarkerMaterial<null>("empty", "empty", null);
    namespace Colours {
		let Colorless = new MarkerMaterial<Unification.Colour>("colorless", "colourless", {hex: OxFFFFFF});
		let Black = new MarkerMaterial<Unification.Colour>("black", "black", {hex: Ox000000});
		let Red = new MarkerMaterial<Unification.Colour>("red", "red", {hex: 0});
		let Green = new MarkerMaterial<Unification.Colour>("green", "green", {hex: 0});
		let Brown = new MarkerMaterial<Unification.Colour>("brown", "brown", {hex: 0});
		let Blue = new MarkerMaterial<Unification.Colour>("blue", "blue", {hex: 0});
		let Purple = new MarkerMaterial<Unification.Colour>("purple", "purple", {hex: 0});
		let Cyan = new MarkerMaterial<Unification.Colour>("cyan", "cyan", {hex: 0});
		let Silver = new MarkerMaterial<Unification.Colour>("silver", "silver", {hex: 0});
		let Gray = new MarkerMaterial<Unification.Colour>("gray", "gray", {hex: 0});
		let Pink = new MarkerMaterial<Unification.Colour>("pink", "pink", {hex: 0xFF5555});
		let Lime = new MarkerMaterial<Unification.Colour>("lime", "lime", {hex: 0});
     
		let Yellow = new MarkerMaterial<Unification.Colour>("yellow", "yellow", {hex: 0});
		let LightBlue = new MarkerMaterial<Unification.Colour>("light_blue", "light_blue", {hex: 0});
		let Magenta = new MarkerMaterial<Unification.Colour>("magenta", "magenta", {hex:0});
		let Orange = new MarkerMaterial<Unification.Colour>("orange", "orange", {hex:0});
		let White = new MarkerMaterial<Unification.Colour>("white", "white", {hex:0});
  }
  namespace Tier {
      let Primitive = new MarkerMaterial<number>("primitive", "primitive", GTValues.ULV);
      let Basic = new MarkerMaterial<number>("basic", "basic", GTValues.LV);
      let Good = new MarkerMaterial<number>("good", "good", GTValues.MV);
      let Advanced = new MarkerMaterial<number>("advanced", "advanced", GTValues.HV);
      let Extreme = new MarkerMaterial<number>("extreme", "extreme", GTValues.EV);
      let Elite = new MarkerMaterial<number>("elite", "elite", GTValues.IV);
      let Master = new MarkerMaterial<number>("master", "master", GTValues.LuV);
      let Ultimate = new MarkerMaterial<number>("ultimate", "ultimate", GTValues.ZPM);
      let Superconductor = new MarkerMaterial<number>("superconductor", "superconductor", GTValues.UV);
      let Infinite = new MarkerMaterial<number>("infinite", "infinite", 0);
  }
}
