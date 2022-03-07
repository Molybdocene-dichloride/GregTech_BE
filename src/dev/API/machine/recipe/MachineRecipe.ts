export class StandardRecipe implements IRecipe {
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
	checkInputs(storage: Storage): boolean {
		
	}
	checKOutputs(storage: Storage): boolean {
		
	}
	inputs(storage: Storage): boolean {
		
	}
	outputs(storage: Storage): boolean {
		
	}
	provideRecipe(currentMachineInfo: MachineInfo): boolean {
		if((!currentMachineInfo.isProcess) || (checkOutput(itemStorage) && checkOutput(fluidStorage))) {
			if(!currentMachineInfo.isProcess) {
				currentMachineInfo.duration = this.duration;
				currentMachineInfo.worktime = 0;
				currentMachineInfo.isProcess = true;
				input(currentMachineInfo.itemStorage);
				input(currentMachineInfo.region);
				input(currentMachineInfo.fluidStorage);
            }
			fluidStorage.getLiquid("steam", currentMachineInfo.steamcomsumption);
			
			currentMachineInfo.worktime += 1;
			
			if(currentMachineInfo.worktime >= this.duration) {
				output(currentMachineInfo.itemStorage);
				output(currentMachineInfo.fluidStorage);
				output(currentMachineInfo.region);
				
				currentMachineInfo.end = true;
				currentMachineInfo.isProcess = false;
				currentMachineInfo.duration = 0;
				currentMachineInfo.worktime = 0;
			}
			//currentMachineInfo.relative_worktime = currentMachineInfo.worktime / currentMachineInfo.duration;
			//this.uiContainer.setScale("scale", currentMachineInfo.relative_worktime);
		}
		return !currentMachineInfo.end;
	}
}
