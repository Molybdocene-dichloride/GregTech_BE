//Server
abstract class Machine extends BlockStateTileEntity {
	private id: string;
    private tier: number;
    
    private progress : number;
    private temperature : number;
    
    private connectable : boolean;
    private pipeconnectable : boolean;
    private itemconnectable : boolean;
    private fluidconnectable : boolean;
    
    private connectCounter : number;
    
	private itemStorage : new ItemStorage();
    private fluidStorage : new FluidStorage();
	private _Nets: LinkedHashMap<? extends INet>;
	
	private shape: MachineRegion;
	constructor(id: string, tier: number) {
		this.id = id;
		this.tier = tier;
	}
    init() : void {
        this.enabled = true;
        this.progress = 0;
        this.temperature = 293.15;
        this.connectTick = 0;
        this.prepareConnect();
        this.preparePipe();
        this.inited = true;
    }
    getTier(): number {
      return tier;
    }
    getProgress(): number {
      return progress;
    }
    tryAbort(): boolean;
    getTemperature(): number {
		return temperature;
    }
    
    tick() : void {
        this.connectTick();
    }
    click(id, count, data, coords, player) : void {

    }
    prepareConnect() : void {
        this.connectable = true:
        this.pipeconnectable = true;
        this.itemconnectable = true;
        this.fluidconnectable = true;
    }
    preparePipe() : void {
        if(this.connectable && this.pipeconnectable) {
            this.connectEncounter = 0;
            this.__Nets = {};
            TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
            for (let name in this.__Types) {
                PipeNetBuilder.rebuild();
            }
        }
    }
    connectTick() : void {
        if (this.connectable) {
            if (this.data.connectEncounter == 4) {
                this.data.connectEncounter = 0;
                for (let name in this.__Types) {
                    if (this.isSource(name)) {
                        let net = this.__Nets[name];
                        if (net) {
                            let src = net.source;
                            //if(canExtract(side, type)
                            this.provide(name, src);
                        }
                    } else {
                    }
                }
            } else {
                this.data.connectEncounter++;
            }
        }
    }
    getCapacity(index : number) : number {
        return this.fluidStorage.getLimit(index);
    }
    getCapacity(fluid : FluidStack) : number {
        return this.fluidStorage.getLimit(fluid);
    }
    canReceive(side : number, type : Machine.Type) : boolean {
        return true;
    }
    canExtract(side : number, type : Machine.Type) : boolean {
        return false;
    },
    receive(fluid : Machine.FluidStack, sidepre : number) : Fluid {
        //if(hatchs.some(element => return element === hatch) && (hatch instanceof InputHatch || hatch instanceof InputBus) && fluid.amount > 0) 
        //if(fluid.amount > 0)
        //this.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);

        return this.fluidStorage.receiveFluid(fluid);
        //if(type == Type.ITEM) return fluidStorage.receiveFluid(fluid);
    },
    receive(item : ItemInstance, sidepre : number) : Fluid {
        /*if(hatchs.some(element => return element === hatch && item.amount > 0))*/
        let id == null;
        for (let i in slots) {
            if (slots[i].id == item.id && slots[i].data == item.data) {
                item.count = Math.min(item.count, Item.getMaxStack(item.id));
                item.count = Math.min(item.count, Item.getMaxStack(item.id) - this.container.getSlot(item).count);
                id == "input" + i;
                break;
            }
        }

        this.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);

        this.container.setSlot(id, item);

        return item.count;
    }
    provide(stack : ItemInstance, src : any) {
        /*if(hatchs.some(element => return element === hatch) && typeof hatch == typeofHatch(typeof stack) && fluid.amount > 0)*/
        for (let i in slotsResult) {
            if (slots[i].id == item.id && slots[i].data == item.data) {

                let output = Math.min(stack.count, Item.getMaxStack(item.id));

                this.container.addItem(src.add(this, output, "steam", { x: this.x, y: this.y, z: this.z }) - output);

                id == "output" + i;
                break;
            }
        }

        //fluidStorage.receive(fluid);
    }
    provide(stack : FluidStack, src : any) : Fluid {
        //fluidStorage.receive(fluid);
        this.fluidStorage.addLiquid("steam", src.add(this, output, "steam", { x: this.x, y: this.y, z: this.z }) - output, this.sidepre);

    }
	enableConnect(): void {
		connectable = true;
	}
	disableConnect(): void {
		connectable = true;
	}
	canConnect();
	canConnect(side: number);
	canConnect(side?: number): boolean {
		return connectable;
	}
	enablePipeConnect(): void {
		pipeconnectable = true;
	}
	disablePipeConnect(): void {
		pipeconnectable = true;
	}
	canPipeConnect();
	canPipeConnect(side: number);
	canPipeConnect(side?: number): boolean {
		return pipeconnectable;
	}
	enableItemConnect(): void {
		itemconnectable = true;
	}
	disableItemConnect(): void {
		itemconnectable = true;
	}
	canItemConnect();
	canItemConnect(side: number);
	canItemConnect(side?: number): boolean {
		return itemconnectable;
	}
	enableFluidConnect(): void {
		fluidconnectable = true;
	}
	disableFluidConnect(): void {
		fluidconnectable = true;
	}
	canFluidConnect();
	canFluidConnect(side: number);
	canFluidConnect(side?: number): boolean {
		return fluidconnectable;
	}
	
	getRegion() : MachineRegion {
		return shape;
	}
	setRegion(shape : MachineRegion) : void {
		this.shape = shape;
	}
	
	input: function(j): void {
		itemStorage.input(j);
		fluidStorage.input(j);
	}
	checkOutput: function(j): boolean {
		return !(!itemStorage.checkOutput(j) || !fluidStorage.checkOutput(j));
	}
	output: function(j): void {
		itemStorage.output(j);
		fluidStorage.output(j);
	}
	
	client: ClientTileEntitySide;
}




class ClientTileEntitySide {
  load(): void {},
  events = {
	  gtmachine_rotate: function(packetData, packetExtra, connectedClient) {
	    let rotationmap = [MetaRenderer.rotationMap[packetData.rotation][0], MetaRenderer.rotationMap[packetData.rotation][1], MetaRenderer.rotationMap[packetData.rotation][2], MetaRenderer.rotationMap[packetData.rotation][3], MetaRenderer.rotationMap[packetData.rotation][4], MetaRenderer.rotationMap[packetData.rotation][5]];
		  let puts = [this.blockRotationToWorldRotation(packetData.put0, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put1, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put2, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put3, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put4, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put5, packetData.rotationOfBlock)];
		  MetaRenderer.invalidateModel({ x: this.x, y: this.y, z: this.z }, packetData.block, packetData.textures, rotationmap, puts);
		  sounds.wrench.setInBlock(this.x, this.y, this.z, 5);
		  sounds.wrench.play();
	  },
	  gtmachine_sound: function(packetData, packetExtra, connectedClient) {
			packetData.sound.play();
		},
		gtmachine_soundStart: function(packetData, packetExtra, connectedClient) {
		  packetData.sound.setLooping(true);
			packetData.sound.play();
		},
		gtmachine_soundEnd: function(packetData, packetExtra, connectedClient) {
		  packetData.sound.stop();
		},
		gtmachine_discard: function(packetData, packetExtra, connectedClient) {
				let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.packetData.put);
				Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);
				//packetData.sound.stop();
			},
			gtmachine_ui: function(packetData, packetExtra, connectedClient) {
				//this.ui = packetData.ui;
				//packetData.sound.stop();
		},
		gterror: function() {

		}
	}
}
