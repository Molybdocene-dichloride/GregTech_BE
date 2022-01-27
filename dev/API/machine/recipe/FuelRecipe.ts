export abstract class ContinuousRecipe extends Recipe {
	private inputs: LinkedHashMap<string, IStack>;
    private outputs: LinkedHashMap<string, IStack>;
    private duration: number;
    final private hidden: boolean;
    constructor(inputs: LinkedHashMap<string, IStack>, outputs: LinkedHashMap<string, IStack>, duration: number, hidden: boolean = true) {
      this.inputs = inputs;
      this.outputs = outputs;
      this.duration = duration;
      
      this,hidden = hidden;
    }
    getDuration(tier: number): number {
		return this.duration;
	}
    getEfficiency(): number {
		return 1;
	}
    isSteam() : boolean {
        return this.inputs.get("eut").count <= 16;
	}
	isHidden(): boolean {
		return hidden;
	}
	
	getInputs(): void {
		return this.inputs;
	}
	getOutputs(): void {
		return this.outputs;
	}
	provideRecipe(currentMachineInfo: MachineInfo): boolean {
		if((!currentMachineInfo.isProcess) || (checkOutputs(currentMachineInfo.itemStorage) && checkOutputs(currentMachineInfo.fluidStorage))) {
            input(currentMachineInfo.itemStorage);
			input(currentMachineInfo.fluidStorage);
			//input(currentMachineInfo.bus);
			
			output(currentMachineInfo.itemStorage);
			output(currentMachineInfo.fluidStorage);
			//output(currentMachineInfo.bus);
		}
		return true;
	}
}
