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
  temperature: 20,
  fluidStorage: new Machine.FluidStorage(),
  
  init: function() {
    this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.textures, rotationOfBlock: this.data.rotation});
    
    this.prepareConnect();
    this.preparePipe();
    this.inited = true;
  }
  tick: function() {
    this.connectTick();
  }
  click: function(id, count, data, coords, player) {
    
  }
  getRotation() {
    return rotation;
  }
  rotate(rotation) {
    
  }
  worldRotationToBlockRotation: function (rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@seao");
          if(rotationOfBlock == 3) {
            return rotation;
          }
          let e;
          for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) {
            if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
          }
          return MetaRenderer.rotationMap[rotationOfBlock][e];
        },
        blockRotationToWorldRotation: function (rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@sas");
          if(rotationOfBlock == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < MetaRenderer.rotationMap[rotationOfBlock].length; i++) {
        if(MetaRenderer.rotationMap[rotationOfBlock][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(MetaRenderer.rotationMap[3][e], "@sashok");
      return MetaRenderer.rotationMap[3][e];
    },
    
    
    
    client: {
        load: function() {},
        worldRotationToBlockRotation: function (rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@seao");
          if(rotationOfBlock == 3) {
            return rotation;
          }
          let e;
          for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) {
            if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
          }
          return MetaRenderer.rotationMap[rotationOfBlock][e];
        },
        blockRotationToWorldRotation: function (rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@sas");
          if(rotationOfBlock == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < MetaRenderer.rotationMap[rotationOfBlock].length; i++) {
        if(MetaRenderer.rotationMap[rotationOfBlock][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(MetaRenderer.rotationMap[3][e], "@sashok");
      return MetaRenderer.rotationMap[3][e];
    },
    
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
            let container = new UI.Container();
			    container.openAs(errorimage);
            }
    }
    prepareConnect() : {
      this.enabled = true;
      this.correct = true;
      this.connectable = true:
      this.pipeconnectable = true;
      this.itemconnectable = true;
      this.fluidconnectable = false;
    }
    preparePipe() : {
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
    connectTick() : {
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
    receive(hatch, type, fluid, sidepre) : Fluid {
      if(hatchs.some(element => return element === hatch) && (hatch instanceof InputHatch || hatch instanceof InputBus) && fluid.amount > 0) return fluidStorage.addFluid(fluid);
  },
  receive(hatch : InputBus, type, item : Item, sidepre : Vec3) : Fluid {
      if(hatchs.some(element => return element === hatch && item.amount > 0)) return container.addItem(item);
  },
  
  provide(stack : Stack | ItemInstance) {
    for(let i in hatchs) {
    if(fluid.amount > 0) this.deliver(i, fluid);
    }
  }
  provide(hatch : InputBus | InputHatch | EnergyHatch, stack : Stack | ItemInstance) {
      if(hatchs.some(element => return element === hatch) && typeof hatch == typeofHatch(typeof stack) && fluid.amount > 0) hatch.receive(fluid);
  },
  provide(hatchindex : number, stack : Stack | ItemInstance) : Fluid {
      if(hatchs[hatchindex] instanceof InputBus | InputHatch | EnergyHatch && typeof hatch == typeofHatch(typeof stack) && fluid.amount > 0) hatchs[hatchindex].receive(fluid);
  },
  provide(position: Vec3, stack : Stack | ItemInstance) : Fluid {
     let hatch = blockSource.getBlockEntity(position);
     if(hatch instanceof InputBus | InputHatch | EnergyHatch) this.deliver(hatch, fluid);
  },
}}