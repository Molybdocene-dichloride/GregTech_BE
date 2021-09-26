export abstract class ContinuousRecipe implements IRecipe {
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
	provideRecipe(currentMachineInfo: MachineInfo, itemStorage: ItemStorage, fluidStorage: fluidStorage, electricStorage?: ElectricStorage): boolean {
		if((!currentMachineInfo.isProcess) || !(!itemStorage.checkOutput(j) || !fluidStorage.checkOutput(j))) {
			if(!currentMachineInfo.isProcess) {
				currentMachineInfo.duration = this.duration;
				currentMachineInfo.worktime = 0;
				currentMachineInfo.steamcomsumption = this.EUt * 6;
				currentMachineInfo.isProcess = true;
            }
            
            itemStorage.input(this);
			fluidStorage.input(this);
			
			itemStorage.output(this);
			fluidStorage.output(this);
			
			currentMachineInfo.worktime += 1;
			
			if(currentMachineInfo.worktime >= this.duration) {
				currentMachineInfo.end = true;
				currentMachineInfo.isProcess = false;
				currentMachineInfo.duration = 0;
				currentMachineInfo.worktime = 0;
				currentMachineInfo.steamcomsumption = 0;
			}
			currentMachineInfo.relative_worktime = currentMachineInfo.worktime / currentMachineInfo.duration;
			this.uiContainer.setScale("scale", currentMachineInfo.relative_worktime);
		}
		return currentMachineInfo.end;
	}
}
