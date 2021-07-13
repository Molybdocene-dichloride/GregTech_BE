abstract class Machine implements TileEntity.TileEntityPrototype {
  useNetworkItemContainer: true,
  
  inited: false,
  enabled: false,
  correct: boolean;
  connectable: false,
  pipeconnectable: false,
  pipeconnectableSides: [],
  itemconnectable: false,
  fluidconnectable: false,
  connectEncounter: 0,
  rotation: 2,
  progress: 0,
  temperature: 293.15,
  fluidStorage: new Machine.FluidStorage(),
  
  init() : void {
    this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.textures, rotationOfBlock: this.data.rotation});
    
    this.prepareConnect();
    this.preparePipe();
    this.inited = true;
  }
  tick() : void {
    this.connectTick();
  }
  click(id, count, data, coords, player) : void {
    
  }
  getRotation() : number {
    return rotation;
  }
  rotate(rotation) : void {
    
  }
  worldRotationToBlockRotation: function (rotation, rotationOfBlock) {
    RotationTransforms.worldRotationToBlockRotation(rotation, rotationOfBlock);
  },
  blockRotationToWorldRotation: function (rotation, rotationOfBlock) {
    RotationTransforms.blockRotationToWorldRotation(rotation, rotationOfBlock);
  },
    
    
    
    client: {
        load: function() {},
    events: {
            // события, принимающие пакеты на стороне клиента, в данном случае this будет клиентским экземпляром, получившим этот пакет
            gtmachine_rotate: function(packetData, packetExtra, connectedClient) {
                // доступный только здесь метод, отправляет пакет конкретному клиенту:
                let rotationmap = [MetaRenderer.rotationMap[packetData.rotation][0], MetaRenderer.rotationMap[packetData.rotation][1], MetaRenderer.rotationMap[packetData.rotation][2], MetaRenderer.rotationMap[packetData.rotation][3], MetaRenderer.rotationMap[packetData.rotation][4], MetaRenderer.rotationMap[packetData.rotation][5]];
                let puts = [this.blockRotationToWorldRotation(packetData.put0, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put1, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put2, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put3, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put4, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put5, packetData.rotationOfBlock)];
                MetaRenderer.invalidateModel({x: this.x, y: this.y, z: this.z}, packetData.block, packetData.textures, rotationmap, puts);
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
    prepareConnect() : void {
      this.enabled = true;
      this.correct = true;
      this.connectable = true:
      this.pipeconnectable = true;
      this.itemconnectable = true;
      this.fluidconnectable = false;
    }
    preparePipe() : void {
      if(this.connectable) {
      Logger.Log(this, "fui");
      this.data.connectEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
    }
    }
    connectTick() : void {
      if(this.connectable) {
      if(this.data.connectEncounter == 4) {
			  this.data.connectEncounter = 0;
			  for(let name in this.__Types) {
				  if(this.isSource(name)) {
					  let net = this.__Nets[name];
					  if(net) {
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
        //if(!index) return this.fluidStorage.getLimit("steam"); 
        // установим лимит хранилища энергии в 2 миллиона (2e6 - это способ записи числа 2000000)
        return this.fluidStorage.getLimit(index);
    },
    getCapacity(fluid : FluidStack) : number {
        if(!fluid) return this.fluidStorage.getLimit("steam"); // установим лимит хранилища энергии в 2 миллиона (2e6 - это способ записи числа 2000000)
        return this.fluidStorage.getLimit(fluid);
    },
    canReceive(side: number, type : Machine.Type) : boolean {
      return true;
      // side != 0 выведет true, если сторона любая, кроме нижней.
    },
    canExtract(side: number, type : Machine.Type) : boolean {
      return false;
        // выведет true при подключении блока для выхода энергии с нижней стор.
    },
    receive(fluid : Machine.FluidStack, sidepre: number) : Fluid {
      //if(hatchs.some(element => return element === hatch) && (hatch instanceof InputHatch || hatch instanceof InputBus) && fluid.amount > 0) 
     //if(fluid.amount > 0)
     //this.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
     
     return this.fluidStorage.receiveFluid(fluid);
     //if(type == Type.ITEM) return fluidStorage.receiveFluid(fluid);
  },
  receive(item : ItemInstance, sidepre : number) : Fluid {
      /*if(hatchs.some(element => return element === hatch && item.amount > 0))*/
      let id == null;
      for(let i in slots) {
        if(slots[i].id == item.id && slots[i].data == item.data) {
          item.count = Math.min(item.count, Item.getMaxStack(item.id));
          item.count = Math.min(item.count, Item.getMaxStack(item.id) - this.container.getSlot(item).count);
          id == "input" + i;
          break;
        }
      }
      
      this.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
      
      this.container.setSlot(id, item);
      
      return item.count;
  },
  /*receive(items : ItemInstances, sidepre : number) : Fluid {
      /*if(hatchs.some(element => return element === hatch && item.amount > 0))/
      for(let i in slots) {
        //if slots[i] =
      }
      this.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
      
      item.count = Math.min(item.count, Item.getMaxStack(item.id));
      item.count = Math.min(item.count, Item.getMaxStack(item.id) - this.container.getSlot(item).count);
      
      this.container.addItem(item);
      
      return item.count;
  },*/
  provide(stack : ItemInstance, src: any) {
      /*if(hatchs.some(element => return element === hatch) && typeof hatch == typeofHatch(typeof stack) && fluid.amount > 0)*/
      
      for(let i in slotsResult) {
        if(slots[i].id == item.id && slots[i].data == item.data) {
          
          let output = Math.min(stack.count, Item.getMaxStack(item.id));
      
          this.container.addItem(src.add(this, output, "steam", {x: this.x, y: this.y, z: this.z}) - output);
          
          id == "output" + i;
          break;
        }
      }
      
      //fluidStorage.receive(fluid);
  },
  provide(stack : FluidStack, src : any) : Fluid {
      /*if(hatchs[hatchindex] instanceof InputBus | InputHatch | EnergyHatch && typeof hatch == typeofHatch(typeof stack) && fluid.amount > 0)*/
      //fluidStorage.receive(fluid);
      //let output = Math.min(this.getCapacity(), this.fluidStorage.getAmount("steam"));
      
      this.fluidStorage.addLiquid("steam", src.add(this, output, "steam", {x: this.x, y: this.y, z: this.z}) - output, this.sidepre);
      
  },
  /*provide(position: Vec3, stack : Stack | ItemInstance) : Fluid {
     let hatch = blockSource.getBlockEntity(position);
     //*if(hatch instanceof InputBus | InputHatch | EnergyHatch)
     this.deliver(hatch, fluid);
  },*/
}