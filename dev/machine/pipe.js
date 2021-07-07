PipeDictionary.registerMaterial(MaterialDictionary.dict["copper"], 10);
PipeDictionary.registerMaterial(MaterialDictionary.dict["bronze"], 20);
PipeDictionary.registerMaterial(MaterialDictionary.dict["steel"], 40);

PipeDictionary.registerSize({type: "tiny", multiplier: 1});
PipeDictionary.registerSize({type: "small", multiplier: 2});
PipeDictionary.registerSize({type: "normal", multiplier: 4});
PipeDictionary.registerSize({type: "large", multiplier: 8});
PipeDictionary.registerSize({type: "huge", multiplier: 16});

PipeDictionary.addToCreative();

TileEntity.registerPrototype(BlockID.gtblockpipe, {
    defaultValues: {
         pipe: true,
         typePipe: "",
         sizePipe: 0,
         temperature: 20,
         typeLiquid: null,
         rate: 0,
         limit: 0,
         amount: 0,
         x: 0,
         y: 0,
         z: 0,
         tickEncouter: 0,
    },
    init: function() {
      this.data.typePipe = PipeDictionary.data[this.blockSource.getBlock(this.x, this.y, this.z).data].type;
      this.data.sizePipe = PipeDictionary.data[this.blockSource.getBlock(this.x, this.y, this.z).data].size.index;
      
      Logger.Log(this.data.typePipe, "ruex");
      Logger.Log(this.data.sizePipe, "iruex");

      this.liquidStorage.setLimit("lava", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
      this.liquidStorage.setLimit("milk", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
       this.liquidStorage.setLimit("water", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
       this.liquidStorage.setLimit("steam", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
       
       this.data.rate = PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe].multiplier;
       this.data.limit = this.data.rate * 20;
    
    this.data.pipeEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
    },
    tick: function() {
      if(this.data.pipeEncounter == 4) {
			  this.data.pipeEncounter = 0;
			for(let name in this.__Types) {
				if(this.isSource(name)) {
					let net = this.__Nets[name];
					if(net) {
					  let src = net.source;
					  //if(canExtract(side, type)
					  this.Еtick(name, src);
					}
				} else {
				}
			}
			} else {
			  this.data.pipeEncounter++;
			}
    },
    click: function(id, count, data, coords) {
      if(id == ItemID.gtdebug) {
         //if(TileEntity.isTileEntityBlock(this.id)) {
           Logger.Log("zomb$");
    if(this.data.pipe != null) {
      let block = this.blockSource.getBlock(this.x, this.y, this.z);
      Logger.Log("zo$");
      let type = null;
      if(this.data.pipe == true) {
        type = "pipe"
      } else {
        type = "machine"
      }
      Logger.Log("zomb$", type);
      Game.message("id:" + block.id + "\n" + "data:" + block.data + "\n" + "GT_Machine" + "\n" + type + "\n temperature: " + this.data.temperature + "\n progress: " + this.data.progress);
      if(type == "pipe") Game.message("steam: " + this.data.amount + "\n type:" + this.data.typeLiquid);
      if(type == "machine") Game.message("steam: " + this.liquidStorage.getAmount("steam"));
    }
  //}
         return true;
       }
    },
   returnLiquid: function(x, y, z, type, amount) {
      if(this.data.type == type) {
       return this.liquidStorage.addLiquid(type, amount);
      } else if(this.data.type == "") {
       this.data.type = type;
       
       return this.liquidStorage.addLiquid(type, amount);
      } else {
        return amount;
      }
    },
    requestLiquid: function(x, y, z, type, amount) {
      if(this.data.typeLiquid == type) {
       let tr = this.liquidStorage.getLiquid(type, amount);
       
       return tr;
      }
      return 0;
    },
    checkLiquidAmount: function(type, amount) {
      if(this.data.typeLiquid == null) Logger.Log("this liquid 'null' invalid!");
      if(type == null) Logger.Log("this liquid 'null' invalid!");
      if(this.data.typeLiquid != type) Logger.Log("this liquid not exists!");
      if(amount > this.liquidStorage.getAmount(type)) {
       return this.liquidStorage.getAmount(type);
      } else {
        return amount;
      }
    },
    checkLiquid: function(type) {
      if(this.data.typeLiquid == null) Logger.Log("this liquid 'null' invalid!");
      if(type == null) Logger.Log("this liquid 'null' invalid!");
      if(this.data.typeLiquid != type) Logger.Log("this liquid not exists!");
       return this.liquidStorage.getAmount(type);
    },
    checkLiquid: function() {
       return {type: this.data.typeLiquid, amount: this.liquidStorage.getAmount(this.data.typeLiquid)};
    },
    
    
    
   canConnect: function () {
      return true;
   },
   isSource: function() {
       return true; // блок может отдавать энергию
   },
   isGenerator: function() {
       return false; // блок может отдавать энергию
   },
   canReceive: function(side, type) {
       return true;// side != 0 выведет true, если сторона любая, кроме нижней.
   },
   canExtract: function(side, type) {
     /*Logger.Log(this.x, "pei");
     Logger.Log(this.y, "pei");
       Logger.Log(this.z, "extract");
       return side != this.data.sidePrev;*/
       return true;
       // выведет true при подключении блока для выхода энергии с нижней стороны.
   },
   getCapacity: function(){
       return this.data.limit; // установим лимит хранилища энергии в 2 миллиона (2e6 - это способ записи числа 2000000)
   },
   receive: function(type, amount, sidepre) {
     Logger.Log(amount, "zirconocene dichloride");
       amount = Math.min(amount, this.data.rate); // устанавлимаем максимальное количество энергии, которое может принять механизм равным 1000.
       let add = Math.min(amount, this.getCapacity() - this.data.amount); // уменьшаем количество энергии, так, чтобы хранилище не переполнялось;
       Logger.Log(this.getCapacity(), "tantalocene diiodide");
       Logger.Log(this.data.amount, "niobocene dichloride");
       Logger.Log(add, "zirconocene difluoride");
       this.data.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
       this.data.amount += add; // добавляем энергию в хранилище
       Logger.Log(this.data.amount, "zirconocene dibromide");

       if(add > 0 & this.data.type == null) {
         Logger.Log(type, "hexacarbonylmolybdenum");
         this.data.typeLiquid = type;
       } else if (add == 0 & this.data.amount == 0) {
         this.data.typeLiquid = null;
       }
       return add; // и возвращаем сколько забрали энергии
   },
   Еtick: function(type, src){
     Logger.Log(this.data.amount, "manganocene");
       let output = Math.min(this.data.rate, this.data.amount / 2); // определяем, сколько энергии блок может отдать
       Logger.Log(output, "osmoce");
       this.data.amount += src.add(this, output, this.data.typeLiquid, {x: this.x, y: this.y, z: this.z}, this.data.sidepre) - output; // прибавляем к хранилищу количество энергии, которое осталось после отправки пакета, и вычитаем сколько отправляли.
       Logger.Log(this.data.amount, "titanocene dichloride");
       //this.data.sidepre = null;
       /*this.data.x = null;
       this.data.y = null;
       this.data.z = null;*/
        if (this.data.amount == 0) {
         this.data.typeLiquid = null;
       }
   },
});

TileEntity.getPrototype(BlockID.gtblockpipe).__energyLibInit = true;
TileEntity.getPrototype(BlockID.gtblockpipe).__Types = {};
TileEntity.getPrototype(BlockID.gtblockpipe).__Nets = {};

TileEntityRegistry.addEnergyTypeForId(BlockID.gtblockpipe, "liquid");

var id = BlockID.gtblockpipe// id блока провода 
var group = ICRender.getGroup("GTpipe"); // группа блоков 
group.add(id, -1); // добавим сам провод в группу


for(let m = 0; m < Object.keys(PipeDictionary.materials).length; m++) {
    for(let s = 0; s < PipeDictionary.sizes.length; s++) {
      let width = 0;
      if(s >= PipeDictionary.sizes.length - 2) {
        width = 1/16 * (4 + s * 2 + 2);
      } else {
        width = 1/16 * (4 + s * 2);
      }
      let model = new ICRender.Model();
      let collmodel = new ICRender.CollisionShape();
      
  model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, "bedrock", 0)); 
  
  let boxes = [
      {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
      {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
      {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
      {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
      {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
      {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}
  ];
  
  for(let i in boxes) {
      let box = boxes[i].box; 
      let side = boxes[i].side;
      model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], "bedrock", 0))
          .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
  }
      var entry = collmodel.addEntry();
      entry.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2);
      for(let i in boxes) {
      var box = boxes[i].box; 
      var side = boxes[i].side;
      let entri = collmodel.addEntry();
      entri.addBox(box[0], box[1], box[2], box[3], box[4], box[5])
          .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
  }
      BlockRenderer.setCustomCollisionShape(id, m * PipeDictionary.sizes.length + s, collmodel);
      BlockRenderer.setCustomRaycastShape(id, m * PipeDictionary.sizes.length + s, collmodel);
      BlockRenderer.setStaticICRender(id, m * PipeDictionary.sizes.length + s, model);
    }
  }