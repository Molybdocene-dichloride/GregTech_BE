abstract class LowMultiblockMachine extends Machine implements IMultiblockLogic {
  shape: Shape;
  getShape() {
    return shape;
  }
  setShape(shape : Shape) {
    this.shape = shape;
  }
  getBlock(position: Vec3) : Tile {
     return shape.getBlock(position);
  },
  checkBlocks() : boolean {
    return shape.checkBlocks();
  },
  init(shape) {
    super.init();
    prepareMultiblock(shape);
  }
  tick() {
    super.tick();
    this.provideMultiblock();
  }
  prepareMultiblock(shape) : void {
    setShape(shape);
    
    if(shape.checkBlocks) {
      correct = true;
    } else {
      correct = false;
    }
    
    this.connectable = false:
    this.pipeconnectable = false;
    this.itemconnectable = false;
    this.fluidconnectable = false;
  }
  provideMultiblock() : void {
    if(shape.checkBlocks) {
      correct = true;
    } else {
      correct = false;
    }
    if(shape.shape instanceof CustomShape) {
      shape.findBlocks();
    }
  }
  preparePipe() : void {}
  connectTick() : void {}
  //providePipe() : void {}
  receive(hatch, type, fluid, sidepre) : Fluid {},
  receive(hatch : InputBus, type, item : Item, sidepre : Vec3) : Fluid {},
  
  provide(stack : Stack | ItemInstance) {}
  provide(hatch : InputBus | InputHatch | EnergyHatch, stack : Stack | ItemInstance) {},
  provide(hatchindex : number, stack : Stack | ItemInstance) : Fluid {},
  provide(position: Vec3, stack : Stack | ItemInstance) : Fluid {},
}

/*abstract class MultiblockMachine extends  ElectricMachine implements IMultiblockLogic {
  shape: Shape;
  hatchs: Hatch[];
  maintenanceHatch: MaintenanceHatch
  getShape() {
    return shape;
  }
  setShape(shape : Shape) {
    this.shape = shape;
  }
  getBlock(position: Vec3) : Tile {
     return shape.getBlock(position);
  },
  checkBlocks() : boolean {
    return shape.checkBlocks();
  },
  updateHatches() : void {
      let hatchs = this.findHatchs();
      maintenanceHatch = this.hatchs.find(element => return element instanceof MaintenanceHatch);
      for(let i in hatchs) {
        if(hatchs[i] instanceof InputHatch) {
          fluidStorage.addFluid(hatch[i].requireFluid());
          
          
        } else if(hatchs[i] instanceof OutputHatch) {
          fluidStorage.addFluid(hatch.addFluid(fluidStorage.getLiquid()));
          
          
        } else if(hatchs[i] instanceof InputBus) {
          container.add(hatch.requireItem());
          
         
        } else if(hatchs[i] instanceof OutputBus) {
          container.add(hatch.addItem(container.getLiquid()));
          
        }
      }
  },
  
  updateEnergyHatches() : void {
      let hatchs = findHatchs();
      for(let i in hatchs) {
        if(hatchs[i] instanceof EnergyHatch) {
          energyStorage.addEnergy(hatchs[i].requireEnergy());
        } else if(hatchs[i] instanceof DynamoHatch) {
          this.energyStorage.addEnergy(hatchs[i].addEnergy(this.energyStorage.getEnergy()));
        }
      }
  },
  
  findHatchs(Vec3 position) : Hatch[] {
    return shape.findBlocks(MultiblockMachine.hatchs);
  }
  getHatchs() : Hatch[] {
    return hatchs;
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
  
  init(shape) {
    super.init();
    this.prepareMultiblock(shape);
  }
  tick() {
    super.tick();
    this.provideMultiblock();
  }
  getShape() {
    return shape;
  }
  prepareMultiblock(shape) : void {
    setShape(shape);
    
    if(shape.checkBlocks) {
      correct = true;
      this.hatchs = findHatchs();
    } else {
      correct = false;
    }
    
    
  }
  provideMultiblock() : void {
    if(shape.checkBlocks) {
      correct = true;
      this.hatchs = findHatchs();
    } else {
      correct = false;
    }
  }
  
  prepareConnect() : {
      this.enabled = true;
      this.correct = true;
      this.connectable = true:
      this.pipeconnectable = true;
      this.itemconnectable = true;
    }
  
  preparePipe() : void {
    
  }
  providePipe() : void {
    if(inited && enabled && connectable && pipeconnectable) updateHatches();
  }
  prepareWire() : void {
    
  }
  provideWire() : void {
    for(hatch) {
      if(hatch typeof EnergyHatch) {
        hatch.requireEnergy();
      } /*else if(hatch typeof DynamoHatch) {
        hatch.addEnergy();
      }*
    }
    
    if(inited && enabled && connectable && energyconnectable) updateEnergyHatches();
  }
}*/