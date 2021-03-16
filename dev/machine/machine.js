setLoadingTip("GTMachines: register Machines");
MachineDictionary.registerCasings();
//1234
let bitmap = android.graphics.BitmapFactory.decodeFile(__dir__ + "gui/BronzeAlloySmelterPocket.png");


MachineDictionary.registerSteamMachine({ name: "alloy_smelter", 
type: MachineDictionary.PROCESSING, 
hull: ["BRONZE", "STEEL"],
tier: [0, 1],
recipes: new RecipeMap(1, 2, 1, 1)
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Alloy Smelter"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeAlloySmelterPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
       "energySlot": {type: "slot", x: 395, y: 310, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 170, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input1": {type: "slot", x: 260, y: 
120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 390, y: 125, direction: 0, bitmap: "bronze_furnace_process", scale: 5, value: 0},
        "output0": {type: "slot", x: 530, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function() {return false;}},
     },
}));
MachineDictionary.registerSteamMachine({
    name: "furnace",
    type: MachineDictionary.PROCESSING,
    hull: ["BRONZE", "STEEL"],
    tier: [0, 1],
    recipes: RecipeDictionary.RECIPE_FURNACE_MAP
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Furnace"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeFurnacePocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
       "energySlot": {type: "slot", x: 395, y: 310, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 260, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 390, y: 125, direction: 0, bitmap: "bronze_furnace_process", scale: 5, value: 0},
        "output0": {type: "slot", x: 530, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
}));
MachineDictionary.registerSteamMachine({
    name: "macerator",
    type: MachineDictionary.PROCESSING,
    hull: ["BRONZE", "STEEL"],
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1)
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Macerator"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeMaceratorPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
       "energySlot": {type: "slot", x: 395, y: 310, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 260, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 390, y: 125, direction: 0, bitmap: "bronze_macerator_process", scale: 5, value: 0},
        "output0": {type: "slot", x: 530, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
}));
MachineDictionary.registerSteamMachine({
    name: "extractor",
    type: MachineDictionary.PROCESSING,
    hull: ["BRONZE", "STEEL"],
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1),
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Extractor"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeExtractorPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
       "energySlot": {type: "slot", x: 395, y: 310, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 260, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 390, y: 125, direction: 0, bitmap: "bronze_extractor_process", scale: 5, value: 0},
        "output0": {type: "slot", x: 530, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
}));
MachineDictionary.registerSteamMachine({
    name: "compressor",
    type: MachineDictionary.PROCESSING,
    hull: ["BRONZE", "STEEL"],
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1)
}, new UI.StandardWindow({ 
     standart: {
          header: {
               text: {
                    text: "Compressor"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeCompressorPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
       "energySlot": {type: "slot", x: 395, y: 310, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 260, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 390, y: 125, direction: 0, bitmap: "bronze_compressor_process", scale: 5, value: 0},
        "output0": {type: "slot", x: 530, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
}));
MachineDictionary.registerSteamMachine({
    name: "hammer",
    type: MachineDictionary.PROCESSING,
    hull: ["BRONZE", "STEEL"],
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1),
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Forge hammer"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeHammerPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
       "energySlot": {type: "slot", x: 395, y: 310, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 260, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 390, y: 125, direction: 3, bitmap: "bronze_hammer_process", scale: 5, value: 0},
        "output0": {type: "slot", x: 530, y: 120, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
}));

MachineDictionary.registerSteamMachine({
    name: "boiler",
    type: MachineDictionary.GENERATOR,
    hull: ["BRONZEBRICKS", "STEELBRICKS"],
    tier: [0, 1],
    recipes: new FuelMap(1, 1),
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Bronze boiler"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          //minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeBoilerPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
        "inputCan0": {type: "slot", x: 215, y: 125, size: 90, bitmap: "slot", needClean: true,isTransparentBackground: true},
       "coal0": {type: "slot", x: 575, y: 305, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
        "ash0": {type: "slot", x: 575, y: 125, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "outputCan0": {type: "slot", x: 215, y: 305, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "waterScale": {type: "scale", x: 415, y: 125, direction: 1, bitmap: "water_scale", scale: 5, value: 0},
        "steamScale": {type: "scale", x: 350, y: 125, direction: 1, bitmap: "steam_scale", scale: 5, value: 0},
        "hScale": {type: "scale", x: 480, y: 125, direction: 1, bitmap: "heat_scale", scale: 5, value: 0},
     
        "sccale": {type: "scale", x: 580, y: 215, direction: 1, bitmap: "bronze_boiler_process", scale: 5, value: 0},
     },
}));

MachineDictionary.registerSteamMachine({
    name: "boiler_solar",
    type: MachineDictionary.GENERATOR,
    hull: ["BRONZEBRICKS"],
    tier: [0],
    recipes: new FuelMap(0, 0),
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "Solar boiler"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "SolarBoilerPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
        "inputCan0": {type: "slot", x: 215, y: 125, size: 90, bitmap: "slot", needClean: true,isTransparentBackground: true},
    "sccale": {type: "scale", x: 580, y: 215, direction: 1, bitmap: "bronze_boiler_process", scale: 5, value: 0},
        "outputCan0": {type: "slot", x: 215, y: 305, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "waterScale": {type: "scale", x: 415, y: 125, direction: 1, bitmap: "water_scale", scale: 5, value: 0},
        "steamScale": {type: "scale", x: 350, y: 125, direction: 1, bitmap: "steam_scale", scale: 5, value: 0},
        "hScale": {type: "scale", x: 480, y: 125, direction: 1, bitmap: "heat_scale", scale: 5, value: 0},
     },
}));

MachineDictionary.registerSteamMachine({
    name: "boiler_lava",
    type: MachineDictionary.GENERATOR,
    hull: ["STEELBRICKS"],
    tier: [1],
    recipes: new FuelMap(1, 1),
}, new UI.StandardWindow({
     standart: {
          header: {
               text: {
                    text: "HP Lava boiler"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "LavaBoilerPocket", x: 0, y: 0, width: bitmap.getWidth() * 5, height: bitmap.getHeight() * 5}
     ],
     elements: {
        "inputCan0": {type: "slot", x: 215, y: 125, size: 90, bitmap: "slot", needClean: true,isTransparentBackground: true},
       "coal0": {type: "slot", x: 575, y: 305, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "sccale": {type: "scale", x: 580, y: 215, direction: 1, bitmap: "bronze_boiler_process", scale: 5, value: 0},
        "ash0": {type: "slot", x: 575, y: 125, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "outputCan0": {type: "slot", x: 215, y: 305, size: 90, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "waterScale": {type: "scale", x: 415, y: 125, direction: 1, bitmap: "water_scale", scale: 5, value: 0},
        "steamScale": {type: "scale", x: 350, y: 125, direction: 1, bitmap: "steam_scale", scale: 5, value: 0},
        "hScale": {type: "scale", x: 480, y: 125, direction: 1, bitmap: "heat_scale", scale: 5, value: 0},
     },
}));
//MachineDictionary.addToCreative();

let ui = {
 alloy_smelter: null
};

LiquidRegistry.registerLiquid("steam", "Steam", ["steam"]);


let pos = null;
let protation = null;
Block.registerPlaceFunction(BlockID.gtblockmachine, function(coords, item, block, player, region){
    region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, item.data);
    
    let playerobject = new PlayerActor(player);
    let rotation = MetaRenderer.getBlockRotation(player, false);
    let tileEntity = TileEntity.getTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
    if(tileEntity) {
        tileEntity.data.rotation = proration;
    } else {
        pos = coords.relative;
        protation = rotation;
    }
});

MachineDictionary.addToCreative();

Callback.addCallback("tick", function() {
// playerUid - сущность игрока
// isPlayerDead - дополнительный параметр - мертв ли данный игрок
        if(!pos) return;
        let tileEntity = TileEntity.getTileEntity(pos.x, pos.y, pos.z);
        if(tileEntity) {
            tileEntity.data.rotation = protation;
            pos = null;
            protation = null;
    }
});

TileEntity.registerPrototype(BlockID.gtblockmachine, {
    useNetworkItemContainer: true,
     defaultValues: {
          //is uses steam instead energy
        isSteam: true,
        rotation: 2,
        put0: true,
        put1: true,
        put2: true,
        put3: true,
        put4: true,
        put5: true,
        pipe: false,
        type: null,
        
        ui: null,
          
        amount: 0,
        steamcomsumption: 0,
        
        isProcess: false,
        original_work_time: 0,
        work_time: 0,
        progress: 0,
          
        /*energy: 0,
        energy_receive: 0,
		last_energy_receive: 0,
	    voltage: 0,
	    last_voltage: 0,*/
			    
		temperatureTickEncouter: 0,
		fuelTickEncounter: 0,
		steamTickEncounter: 0,
		temperature: 20,
	    fuel: 0,
     },
init: function() {
  //if(!this.data.inited) this.data.put = [];
  Logger.Log(this.data.rotation, "hyper");
    let dat = 0;
    //for() {
    /*for(let m in MachineDictionary.steammachines) {
      let uuu = false;
      let steamobj = MachineDictionary.steammachines[m];
      for(let i = 0; i < steamobj.tier.length; i++) {
      if(this.blockSource.getBlock(this.x, this.y, this.z).data == dat) {
        Logger.Log(dat, "soooli");
        this.data.type = steamobj;
        this.data.tier = steamobj.tier[i];
        Logger.Log(steamobj.name, "so9ooli");
Logger.Log(steamobj.type, "so8i");
		uuu = true;
        break;
    }
    Logger.Log(dat, "cerr");
    dat++;
      }
      if(uuu) break;
  }*/
  Logger.Log(this.liquidStorage.getAmount("water"), "unifis");
  Logger.Log(this.liquidStorage.getRelativeAmount("water"), "despair");
  
  this.data.name = MachineDictionary.invsteammachines[this.blockSource.getBlock(this.x, this.y, this.z).data].name;
  this.data.tier = MachineDictionary.invsteammachines[this.blockSource.getBlock(this.x, this.y, this.z).data].tier;
  this.data.type = MachineDictionary.steammachines[this.data.name];
  if(this.data.type != null) {
  Logger.Log(this.data.tier, "syyyk");
    if(this.data.type.type == MachineDictionary.GENERATOR) {
      this.liquidStorage.setLimit("water", 16000);
      this.liquidStorage.setLimit("steam", 16000);
      this.liquidStorage.setLimit("lava", 16000);
    } else {
      this.liquidStorage.setLimit("water", 0);
      this.liquidStorage.setLimit("lava", 0);
      this.liquidStorage.setLimit("steam", 16000);
    }
    //this.data.rotation = PipeNetBuilder.;
    Logger.Log(this.data.rotation, "lev");
    Logger.Log({x: this.x, y: this.y, z: this.z}, "levis");
    Logger.Log(this.data.put0, "lev");
    Logger.Log(this.data.put1, "lev");
    Logger.Log(this.data.put2, "lev");
    Logger.Log(this.data.put3, "lev");
    Logger.Log(this.data.put4, "lev");
    Logger.Log(this.data.put5, "levj");
    
this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, textures: this.data.type["variable" + this.data.tier]});
    //this.sendPacket("gtmachine_ui", {ui: this.data.type.ui});
    this.data.inited = true;
    }
    
    this.data.pipeEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
			
			
			let screenName = this.data.type.name + "_" + this.data.type.tier;
      Logger.Log(screenName.substring(0, screenName.indexOf("_"), "fear"));
    //Logger.Log(screenName.substring(0, screenName.indexOf("_") + 1, "fealui"));
    this.data.tick = -1;
    Logger.Log("inited", "hyper");
},
     tick: function() {
       this.data.tick++;
         Logger.Log("Ferrumhi", this.data.tick);
       if(this.data.type != null) {
           //Logger.Log(this.data.type.type , "Fumhi");
           //Logger.Log(MachineDictionary.PROCESSING, "Fumhi");
         if(this.data.type.type == MachineDictionary.PROCESSING) {
             //Logger.Log("Frumhi");
           /*for(let xx = -1; xx < 2; xx += 2) {
            for(let yy = -1; yy < 2; yy += 2) {
            ipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier) / 4));
            }}}}*/
          /*if(this.container.getGuiContent()) {
               if(this.data.errored) {
                    this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() / 2 + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() / 2 + 101, bitmap: "bronze_error", scale: 3};
               } else {
                    this.container.getGuiContent().elements["error"] = null;
               }
          }*/
          if(!this.data.isProcess) {
            Logger.Log(this.data.tick, "sheko");
            Logger.Log(this.data.tick % 10, "shei");
            if(this.data.tick % 10 != 0) {
              
              return;
            }
              //Logger.Log(this.data.type.recipes, "ss");
              if(this.data.type.recipes) {
         
         //for(let i in this.data.type.recipes) {
             Logger.Log(this.data.tick, "sheoe");
           //this.data.i = this.data.type.recipes[i];
           
           
           //Logger.Log(this.data.type.recipes[i], "heanolol");
           
           //Logger.Log(this.data.i.inputs[0], "xcpu_zukoper");
           //if(!this.data.i.isSteam()) continue;
           
             if(this.checkInput()) {
               
               if(!this.check(this.data.i.EUt * 2, false, true)) {
                this.data.i = null;
                 return;
                } else {
                 this.data.errored = false;
                 /*if(this.container.getGuiContent() != null) {
                    this.container.getGuiContent().elements["error"] = null;
                 }*/
                }
               
               if(this.checkOutput(this.data.i)) {
                 
                 if(this.data.tier == 0) {
              this.data.original_work_time = this.data.i.time * 2;
              
              this.data.work_time = this.data.original_work_time;
              //Logger.Log(this.data.work_time, "derjbl");
              this.data.steamcomsumption = this.data.i.EUt * 2;
              //Logger.Log(this.data.steamcomsumption, "deolbl");
            } else if(this.data.tier == 1) {
              this.data.original_work_time = this.data.i.time * 2 / 2;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = this.data.i.EUt * 2 * 3;
            }
            
            this.input(this.data.i);
            //this.outputSet(this.data.i);
            
            this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
            
            //Logger.Log(this.liquidStorage.getAmount("steam"), "yusa");
            
            this.data.isProcess = true;
            this.data.progress += 1/this.data.original_work_time;
            this.container.setScale("scale", this.data.progress);
            //Logger.Log("yuki");
	    //SoundApi
	    /*sounds[this.data.type.name + "_sound"].setInBlock(this.x, this.y, this.z, 10);
	        this.sendPacket("gtmachine_soundStart", {sound: sounds[this.data.type.name + "_sound"]});*/
            //sounds[this.data.type.name + "_sound"].play();
            //break;
               }
             }
         //}
         
              } else {
                  //if(this.checkInput(this.data.i)) {
                  //Logger.Log(this.container, "seas");
                      if(RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace")) {
                         // Logger.Log("seal"); 
                          if(this.checkOutputF(RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace"))) {
                    //this.data.isProcess = true;
                 if(this.data.tier == 0) {
              this.data.original_work_time = 256;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = 8;
            } else if(this.data.tier == 1) {
              this.data.original_work_time = 128;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = 24;
            }
            if(!this.check(this.data.i.EUt * 2, false,this.data.i.EUt * 2, false, true)) {
                 this.data.i = null;
                 return;
            } else {
                 this.data.errored = false;
                 /*if(this.container.getGuiContent() != null) {
                    this.container.getGuiContent().elements["error"] = null;
                 }*/
            }
            this.data.i = RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace");//()

            this.inputF(/*RecipeDictionary.provideFurnaceByRecipe(this.container, "GTFurnace")*/);
            //this.outputSet(this.data.i);
            
            this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
            this.data.isProcess = true;
            this.data.progress += 1/this.data.original_work_time;
            this.container.setScale("scale", this.data.progress);
	    //SoundApi
	    /*sounds[this.data.type.name + "_sound"].setInBlock(this.x, this.y, this.z, 10);
	        this.sendPacket("gtmachine_soundStart", {sound: sounds[this.data.type.name + "_sound"]});*/
            //sounds[this.data.type.name + "_sound"].play();
                        }
                      }
                      Logger.Log("zealser, zoob");
                  //}
              }
         } else {
           
           if(this.data.type.recipes) {
           if(this.data.work_time > 0) {
             this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
             if(!this.check(this.data.steamcomsumption, true, false)) return;
             this.data.progress += 1/this.data.original_work_time;
              this.data.work_time -= 1;
              this.container.setScale("scale", this.data.progress);
           } else {
               /*this.sendPacket("gtmachine_soundEnd", {sound: sounds[this.data.type.name + "_sound"]});*/
             this.output(this.data.i);
             this.data.progress = 0;
             this.container.setScale("scale", 0);
             
             this.data.isProcess = false;
             this.data.original_work_time = 0;
             //this.clearPut(this.data.i);
             this.data.steamcomsumption = 0;
             let yuki_onna = 0;
             for(let i = 1; i < 6; i++) {
                    if(this.data["put" + i] === null || this.data["put" + i] === undefined) continue;
                   yuki_onna = i;   
             }
             /*let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.data["put" + yuki_onna]);
                Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);*/
                /*this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
           }
         } else {
             if(this.data.work_time > 0) {
             this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
             if(!this.check(this.data.steamcomsumption, true, false)) return;
             this.data.progress += 1/this.data.original_work_time;
              this.data.work_time -= 1;
              this.container.setScale("scale", this.data.progress);
           } else {
               /*this.sendPacket("gtmachine_soundEnd", {sound: sounds[this.data.type.name + "_sound"]});*/
             this.outputF(this.data.i);
             this.data.progress = 0;
             this.container.setScale("scale", 0);
             
             this.data.isProcess = false;
             this.data.original_work_time = 0;
             //this.clearPut(this.data.i);
             this.data.steamcomsumption = 0;
             let yuki_onna = 0;
             for(let i = 1; i < 6; i++) {
                    if(this.data["put" + i] === null || this.data["put" + i] === undefined) continue;
                   yuki_onna = i;
                   break;
             }
             if(yuki_onna > -1) {
                 //юки онна!
                 /*let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.data["put" + yuki_onna]);
                Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);*/
             } else {
                /*this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
             }
           }
         }
             
         }
              } else if(this.data.type.type == MachineDictionary.GENERATOR) {
                  if(this.liquidStorage.getAmount("water") + 1000 <= this.liquidStorage.getLimit("water") & this.container.getSlot("inputCan0").id == 325 & this.container.getSlot("inputCan0").data == 8 & this.container.getSlot("inputCan0").count > 0) {
                    if(this.container.getSlot("outputCan0").id == 0 || (this.container.getSlot("outputCan0").id == 325 & this.container.getSlot("outputCan0").count < Item.getMaxStack(325))) {
                  this.container.setSlot("inputCan0", 325, this.container.getSlot("inputCan0").count - 1, 8);
                  if(this.data.temperature > 100) {
                    this.blockSource.explode(this.x, this.y, this.z, 5, false);
                    this.container.close();
                    return;
                  }
                  this.liquidStorage.addLiquid("water", 1000);
                  this.container.setScale("waterScale", this.liquidStorage.getRelativeAmount("water"));
                  if(this.container.getSlot("outputCan0").id == 0 || this.container.getSlot("outputCan0").id == 325) {
                  this.container.setSlot("outputCan0", 325, this.container.getSlot("outputCan0").count + 1, 0);
                  }
                }}
                this.container.validateSlot("inputCan0");
                this.container.validateSlot("outputCan0");
                if(this.data.type.name == "boiler_solar") {
                if(this.data.solarTickEncounter < 255) {
                  this.data.solarTickEncounter++;
                } else {
                  this.data.solarTickEncounter = 0;
                  Logger.Log(this.blockSource.canSeeSky(this.x, this.y + 1, this.z), "xed");
                  Logger.Log(World.getWorldTime(), "xedors");
                  Logger.Log(this.blockSource.canSeeSky(this.x, this.y + 1, this.z), "xolor");
                  if(this.dimension == Native.Dimension.NORMAL && this.blockSource.canSeeSky(this.x, this.y + 1, this.z) && OreDictionary.isInnerDiapozone(World.getWorldTime(), 0, 12000)) {
                  this.data.fuel += 8;
                  }
                }
                }
                if(this.data.fuelTickEncounter < 11) {
                  this.data.fuelTickEncounter++;
                } else {
                    if(this.data.fuel > 0) {
                      this.data.fuel--;
                      if(this.data.temperature < 500) {
                        this.data.temperature += 1;
                        
                        this.container.setScale("hScale", (this.data.temperature - 20) / 480);
                    if(this.data.i) { this.container.setScale("sccale", this.data.fuel / this.data.i.time);
                    } else {
                      this.container.setScale("sccale", this.data.fuel / 32);
                    }
                      }
                    } else if(this.data.type.name != "boiler_solar") {
                      
                      for(let i in this.data.type.recipes) {
                        
                       //if(this.data.type.recipes[i] && this.data.type.recipes[i].type) Logger.Log(this.data.type.recipes[i].type, "heanoikl");
                      }
                      
                      
                        for(let i in this.data.type.recipes) {
                        if(this.data.type.recipes[i] && this.data.type.recipes[i].type && this.data.type.recipes[i].type == "fuel") {
                        this.data.i = this.data.type.recipes[i];
                        let irdata = MaterialDictionary.invdata[this.data.type.recipes[i].inputs[0].form][this.data.type.recipes[i].inputs[0].material.name];
                        let irdata1 = MaterialDictionary.invdata[this.data.type.recipes[i].outputs[0].form][this.data.type.recipes[i].outputs[0].material.name];
                      if(this.container.getSlot("coal0").id == irdata.id && this.container.getSlot("coal0").data == irdata.data && this.container.getSlot("coal0").count > 0) {
                      this.container.setSlot("coal0", irdata.id, this.container.getSlot("coal0").count - 1, irdata.data);
                      
                      //Logger.Log(this.container.getSlot("coal0").id, "ol");
                      
                    
                      this.data.fuel = this.data.type.recipes[i].time;
                      if(Math.random() < 0.33) {
                        if(this.container.getSlot("ash0").id == 0 || this.container.getSlot("ash0").id == irdata1.id && this.container.getSlot("ash0").data == irdata1.data) {
                          this.container.setSlot("ash0", irdata1.id, this.container.getSlot("ash0").count + 1, irdata1.data);
                        }
                      }
                      this.data.temperature += 1;
                      }
                        }}
                      this.container.validateSlot("coal0");
                      this.container.validateSlot("ash0");
                  
                    }
                  
                    this.container.setScale("hScale", (this.data.temperature - 20) / 480);
                  if(this.data.i) { this.container.setScale("sccale", this.data.fuel / this.data.i.time);
                    } else {
                      this.container.setScale("sccale", this.data.fuel / 32);
                    }
                this.data.fuelTickEncounter = 0;
                
                }
                
                if(this.data.temperatureTickEncounter < 44) {
                  this.data.temperatureTickEncounter++;
                } else {
                  if(this.data.temperature > 20) {
                  this.data.temperature -= 1;
                  this.container.setScale("hScale", (this.data.temperature - 20) / 480);
                  }
                    this.data.temperatureTickEncounter = 0;
                  }
                  
                if(this.data.steamTickEncounter < 24) {
                  this.data.steamTickEncounter++;
                } else {
                  if(this.data.temperature > 100) {
                  if(this.liquidStorage.getAmount("steam") <= this.liquidStorage.getLimit("steam") & this.liquidStorage.getAmount("water") - 1 >= 0) {
                  this.liquidStorage.getLiquid("water", 1);
                  this.container.setScale("waterScale", this.liquidStorage.getRelativeAmount("water"));
                  
                  Logger.Log("peopokl", this.liquidStorage.getAmount("steam"));
                  Logger.Log("peopiil", this.liquidStorage.addLiquid("steam", 150));
                  Logger.Log("piiil", this.liquidStorage.getAmount("steam"));

                  if(this.liquidStorage.getAmount("steam") >= this.getCapacity("steam")) {
                    this.liquidStorage.getLiquid("steam", this.liquidStorage.getAmount("steam") / 4);
                  }
                  this.container.setScale("steamScale", this.liquidStorage.getRelativeAmount("steam"));

                  }}
                  this.data.steamTickEncounter = 0;
              }
              Logger.Log("peopopl", this.container.getValue("sccale", 0));
          } Logger.Log("peopl", 8);}
        
        
        
        
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
			//this.data.tick++;
			
			this.container.sendChanges();
     },
     
     click: function(id, count, data, coords, player) {
        let playerobject = new PlayerActor(player);
        
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
      Game.message("id:" + block.id + "\n" + "data:" + block.data + "\n" + "hardness" + Block.getDestroyTime(block.id) + "\n" + "resistance" + Block.getExplosionResistance(block.id) + "\n" + "isConnectable" + true + "\n" + type + "\n" + "required" + 16 + "maximum" + 16 + "\n" + "temperature:" + this.data.temperature + "\n progress: " + this.data.progress);
      if(type == "pipe") Game.message("steam: " + this.data.amount + "\n type:" + this.data.typeLiquid);
      if(type == "machine") Game.message("steam: " + this.liquidStorage.getAmount("steam"));
    }
  //}
         return true;
       }
        
       if(this.data.type != null && (this.data.name == "boiler" || this.data.name == "boiler_solar" || this.data.name == "boiler_lava")) {
       if(id == 325 & data == 8) {
         playerobject.setInventorySlot(playerobject.getSelectedSlot(), 325, 1, 0, null);
         if(this.data.temperature > 100) {
           this.blockSource.explode(this.x, this.y, this.z, 5, false);
           return true;
         }
         Logger.Log(this.liquidStorage.getAmount("water"), "derrous");
         Logger.Log(this.liquidStorage.getRelativeAmount("water"), "derrousas");
         this.liquidStorage.addLiquid("water", 1000);
         Logger.Log(this.liquidStorage.getAmount("water"), "derrau");
         Logger.Log(this.liquidStorage.getRelativeAmount("water"), "des");
         
         this.container.setScale("waterScale", this.liquidStorage.getRelativeAmount("water"));
         //this.container.invalidateUI();
         this.container.sendChanges();
         return true;
       }}/*else if(id == ItemID.gtmetatool01 && ToolDictionary.types[data].name == "wrench") {
         let item = playerobject.getInventorySlot(playerobject.getSelectedSlot());
         ToolDictionary.damageTool(item);
    Logger.Log(coords.side, "zopp");
    Logger.Log(this.blockRotationToWorldRotation(3), "zoppexiwq");
    if(coords.side != this.blockRotationToWorldRotation(3)) {
      Logger.Log("sneak", Entity.getSneaking(player));
      if(Entity.getSneaking(player) && coords.side != 0 && coords.side != 1) {
      let rotation = MetaRenderer.getBlockRotation(player, false);
      this.data.rotation = rotation;
      
      this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.variable0, rotationOfBlock: this.data.rotation});
      
      } else {
        //Logger.Log(this.data.put.length);
        if(this.data["put" + this.worldRotationToBlockRotation(coords.side)] == this.worldRotationToBlockRotation(coords.side)) {
          this.data["put" + this.worldRotationToBlockRotation(coords.side)] = null;
        } else {
          this.data["put" + this.worldRotationToBlockRotation(coords.side)] = this.worldRotationToBlockRotation(coords.side);
        }
        //Logger.Log(this.data.put.length);
        
        this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.variable0, rotationOfBlock: this.data.rotation});
      }
    }
         return true;
       }*/
       //this.container.sendChanges();
    },
    
    events: {
        // события, принимающие пакеты на стороне сервера, в данном случае this -серверный экземпляр, получивший пакет
        
    },
containerEvents: {
// события контейнера на стороне сервера, в данном случае this - серверный экземпляр, получивший пакет
eventName: function(eventData, connectedClient) {
// доступный только здесь метод:
this.container.sendResponseEvent("eventName", someData)
}
},

    getScreenName: function(player, coords) {
      let screenName = this.data.type.name + "-" + this.data.tier;
      Logger.Log(screenName.substring(0, screenName.indexOf("-"), "fear"));
Logger.Log(screenName.substring(0, screenName.indexOf("-") + 1, "fealui"));
        return screenName;
    },
    // это событие вызывается на стороне клиента, this в данном случае не определен, по переданному имени, которое вернул метод getScreenName, возвращает окно, которое нужно открыть
    getScreenByName: function(screenName){
Logger.Log(screenName.substring(0, screenName.indexOf("-")), "fear");
Logger.Log(screenName.substring(screenName.indexOf("-") + 1), "fealui");
Logger.Log(MachineDictionary.steammachines[screenName.substring(0, screenName.indexOf("-"))].ui0, "fpu");
Logger.Log(MachineDictionary.steammachines[screenName.substring(0, screenName.indexOf("-"))].ui1, "fpi");
        if(!screenName.substring(screenName.indexOf("-") + 1) || screenName.substring(screenName.indexOf("-") + 1) == 0) return MachineDictionary.steammachines[screenName.substring(0, screenName.indexOf("-"))].ui0;
        if(screenName.substring(screenName.indexOf("-") + 1) == 1) return MachineDictionary.steammachines[screenName.substring(0, screenName.indexOf("-"))].ui1;
    },


     check: function(consumption, processing, error) {
       let checked = true;
       if(this.liquidStorage.getAmount("steam") < this.data.steamcomsumption) {
            checked = false;
          }
          if(!error && !checked) {
              this.data.errored = true;
          if(this.data.tier == 0) {
            /*if(this.container.getGuiContent() != null) {
               this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() / 2 + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() / 2 + 101, bitmap: "bronze_error", scale: 3};
            }*/
          } else if(this.data.tier == 1) {
              //this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 101, bitmap: "steel_error", scale: 3};
                }
              /*sounds["interrupt"].setInBlock(this.x, this.y, this.z, 10);
              this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
              //sounds.interrupt.play();
              if(processing) {
              this.data.progress = 0;
              this.container.setScale("scale", 0);
             
              this.data.isProcess = false;
              this.data.original_work_time = 0;
              this.data.work_time = 0;
              //this.clearPut();
              this.data.steamcomsumption = 0;
              }
            }
          return checked;
     },
     checkInput: function() {
       Logger.Log("pentazonium", ".");
       //let checked = true;
       let f = null;
       let t = "";
       for(let i = 0; i < this.data.type.recipes.maxInputs; i++) {

           t += this.container.getSlot("input" + i).id + "_";
          t += this.container.getSlot("input" + i).data + "_";
           
         t = t.substring(0, t.length - 2);
       }
         
         Logger.Log(this.data.type.recipes.get[t] != null, "sad");
         
         //let o = null;
         if(this.data.type.recipes.get[t] != null) {
           for(let i = 0; i < this.data.type.recipes.get[t].length; i++) {
             let checked = true;
              for(let j = 0; j < this.data.type.recipes.maxInputs; j++) {
                Logger.Log(j, "???");
                Logger.Log(this.data.type.recipes.get[t][i].inputs[j].count, "zooi");
                Logger.Log(this.container.getSlot("input" + j).count, "zouu");
                if(!(this.data.type.recipes.get[t][i].inputs[j].count <= this.container.getSlot("input" + j).count)) {
                  checked = false;
                  break;
                }
                
              }
              Logger.Log(checked, "ziilou");
              if(checked && this.data.type.recipes.get[t][i].isSteam()) {
              
                 f = this.data.type.recipes.get[t][i];
                  this.data.i = f;
                 return f != null;
              }
           }
         }
        
        return false;
     },
     checkInputF: function(j) {
       let checked = true;
            if(this.container.getSlot("input0").id == 0 || (this.container.getSlot("input0").id == j.id & this.container.getSlot("input0").data == j.data & this.container.getSlot("input0").count + j.count < Item.getMaxStack(this.container.getSlot("input0").id))) {
            } else {
              checked = false;
            }
       return checked;
     },
     input: function(j) {
       for(let i = 0; i < this.data.type.recipes.maxInputs; i++) {
              //this.data["input" + i] = j[i];
              if(j.inputs[i].type == "material") {
              iddata = MaterialDictionary.invdata[j.inputs[i].form][j.inputs[i].material.name];
            } else if(j.inputs[i].type == "ore") {
              iddata = {id: OreDictionary.data[j.inputs[i].material.name].id};
            }
          if(j.inputs[i].type == "material") {
              this.container.setSlot("input" + i, this.container.getSlot("input" + i).id, this.container.getSlot("input" + i).count - j.inputs[i].count, this.container.getSlot("input" + i).data /*this.container.getSlot("input" + i).extra*/);
          } else if(j.inputs[i].type == "ore") {
            this.container.setSlot("input" + i, this.container.getSlot("input" + i).id, this.container.getSlot("input" + i).count - j.inputs[i].count, this.container.getSlot("input" + i).data /*this.container.getSlot("input" + i).extra*/);
          }
              this.container.validateSlot("input" + i);
              Logger.Log("this", "decoun");
              Logger.Log(this.container.getSlot("input" + i).id, "de");
              Logger.Log(this.container.getSlot("input" + i).data, "de");
              Logger.Log(this.container.getSlot("input" + i).count, "de");
             //this.data["input" + i] = j[i]; 
       }
     },
     inputF: function(j) {
       /*let jj = j.toArray();
       for(let i in jj) {
         jj[i].
       }*/
              //this.data["input0"] = j;
              this.container.setSlot("input0", this.container.getSlot("input0").id, this.container.getSlot("input0").count - 1, this.container.getSlot("input0").data /*this.container.getSlot("input0").extra*/);
              
              this.container.validateSlot("input0");
              
             //this.data["input0"] = j; 
     },
     checkOutput: function(j) {
       Logger.Log("xcom ui");
       let checked = true;
       for(let i = 0; i < this.data.type.recipes.maxOutputs; i++) {
           let iddata = MaterialDictionary.invdata[j.outputs[i].form][j.outputs[i].material.name];
           
           Logger.Log(this.container.getSlot("output" + i).id, "details");
           Logger.Log(this.container.getSlot("output" + i).data, "details");
           Logger.Log(this.container.getSlot("output" + i).count, "details");
           
           Logger.Log(iddata.id, "details");
           Logger.Log(iddata.data, "details");
           Logger.Log(j.outputs[i].count, "detailee");
           
            if(this.container.getSlot("output" + i).id == 0 || (this.container.getSlot("output" + i).id == iddata.id && this.container.getSlot("output" + i).data == iddata.data && this.container.getSlot("output" + i).count + j.outputs[i].count < Item.getMaxStack(this.container.getSlot("output" + i).id))) {
            } else {
              checked = false;
            }
       }
       Logger.Log("qshablop", checked);
       return checked;
     },
    checkOutputF: function(j) {
       let checked = true;
            if(this.container.getSlot("output0").id == 0 || (this.container.getSlot("output0").id == j.id & this.container.getSlot("output0").data == j.data & this.container.getSlot("output0").count + j.count < Item.getMaxStack(this.container.getSlot("output0").id))) {
            } else {
              checked = false;
            }
       return checked;
     },
     output: function(j) {
       Logger.Log("peakks", "zoom");
       for(let i = 0; i < this.data.type.recipes.maxOutputs; i++) {
           let iddata = MaterialDictionary.invdata[j.outputs[i].form][j.outputs[i].material.name];
                Logger.Log("peakoiks", iddata.id);
                Logger.Log("peakoiks", iddata.data);
                Logger.Log("peakoiks", j.outputs[i].count);
               this.container.setSlot("output" + i, iddata.id, this.container.getSlot("output" + i).count + j.outputs[i].count, iddata.data/*iddata.extra*/);
               this.container.validateSlot("output" + i);
              }
     },
     outputF: function(result) {
       Logger.Log("peakks", "zomb");
               this.container.setSlot("output0", result.id, this.container.getSlot("output0").count + result.count, result.data /*result.extra*/);
               this.container.validateSlot("output0");
     },
     canConnect: function () {
       return true;
     },
     isSource: function() {
        return this.data.type.type; // блок может отдавать энергию
    },
    isGenerator: function() {
        return this.data.type.type; // блок может отдавать энергию и не может принимать
    },
    canReceive: function(side, type) {
      Logger.Log(this.data.type.name, "azas");
        if(this.data.type.type === MachineDictionary.GENERATOR) return false;
        //let rt = this.worldRotationToBlockRotation(side ^ 1);
        /*if(rt === this.data["put" + rt]) {
          return true; 
        }*/
        //Logger.Log(this.data["put" + rt], "€!!");
      return true;
      // side != 0 выведет true, если сторона любая, кроме нижней.
    },
    canExtract: function(side, type) {
      Logger.Log("peaks++", "iptables");
      if(this.data.type.type === MachineDictionary.PROCESSING) return false;
      //let rt = this.worldRotationToBlockRotation(side);
      return true;
        // выведет true при подключении блока для выхода энергии с нижней стороны.
    },
    getCapacity: function(fluid) {
        if(!fluid) return this.liquidStorage.getLimit("steam"); // установим лимит хранилища энергии в 2 миллиона (2e6 - это способ записи числа 2000000)
        return this.liquidStorage.getLimit(fluid);
    },
    receive: function(type, amount, sidepre) {
      
        amount = Math.min(amount, this.getCapacity()); // устанавлимаем максимальное количество энергии, которое может принять механизм равным 1000.
        Logger.Log(amount, "zaebok");
        let add = Math.min(amount, this.getCapacity() - this.liquidStorage.getAmount("steam")); // уменьшаем количество энергии, так, чтобы хранилище не переполнялось;
        Logger.Log(this.liquidStorage.getAmount("steam"), "as");
        this.liquidStorage.addLiquid("steam", add); // добавляем энергию в хранилище
        Logger.Log(this.liquidStorage.getAmount("steam"), "as");
        this.data.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
        return add; // и возвращаем сколько забрали энергии
    },
    Еtick: function(type, src){
        let output = Math.min(this.getCapacity(), this.liquidStorage.getAmount("steam")); // определяем, сколько энергии блок может отдать
        //Logger.Log(output, "osmocene");
        this.liquidStorage.addLiquid("steam", src.add(this, output, "steam", {x: this.x, y: this.y, z: this.z}) - output, this.data.sidepre); // прибавляем к хранилищу количество энергии, которое осталось после отправки пакета, и вычитаем сколько отправляли.
        //Logger.Log(this.liquidStorage.getAmount("steam"), "ruthenocene");
        //this.data.sidepre = null;
    },
    
    worldRotationToBlockRotation: function (rotation) {
          Logger.Log(this.data.rotation, "@seao");
          if(this.data.rotation == 3) {
            return rotation;
          }
          let e;
          for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) {
            if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
          }
          return MetaRenderer.rotationMap[this.data.rotation][e];
        },
        blockRotationToWorldRotation: function (rotation) {
          Logger.Log(this.data.rotation, "@sas");
          if(this.data.rotation == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < MetaRenderer.rotationMap[this.data.rotation].length; i++) {
        if(MetaRenderer.rotationMap[this.data.rotation][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(MetaRenderer.rotationMap[3][e], "@sashok");
      return MetaRenderer.rotationMap[3][e];
    },
    destroy: function() {
			TileEntityRegistry.removeMachineAccessAtCoords(this.x, this.y, this.z);
			
			PipeNetBuilder.rebuild();
;
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
                //let puts = [this.blockRotationToWorldRotation(packetData.put0, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put1, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put2, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put3, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put4, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put5, packetData.rotationOfBlock)];
                MetaRenderer.invalidateModel(packetData.block, packetData.textures, rotationmap);
                //sounds.wrench.setInBlock(this.x, this.y, this.z, 5);
                //sounds.wrench.play();
            },
            gtmachine_put: function(packetData, packetExtra, connectedClient) {
                // доступный только здесь метод, отправляет пакет конкретному клиенту:
                //let texture = MachineDictionary.textures[block.id][block.data].arr;
                let rotationmap = [MetaRenderer.rotationMap[packetData.rotation][0], MetaRenderer.rotationMap[packetData.rotation][1], MetaRenderer.rotationMap[packetData.rotation][2], MetaRenderer.rotationMap[packetData.rotation][3], MetaRenderer.rotationMap[packetData.rotation][4], MetaRenderer.rotationMap[packetData.rotation][5]];
                let puts = [this.blockRotationToWorldRotation(packetData.put0), this.blockRotationToWorldRotation(packetData.put1), this.blockRotationToWorldRotation(packetData.put2), this.blockRotationToWorldRotation(packetData.put3), this.blockRotationToWorldRotation(packetData.put4), this.blockRotationToWorldRotation(packetData.put5)];
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
                /*if(this.container.getGuiContent() != null) {
                    if(packetData) {
                       this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() / 2 + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() / 2 + 101, bitmap: "bronze_error", scale: 3};
                    } else {
                        this.container.getGuiContent().elements["error"] = null;
                    }
                }*/
                let container = new UI.Container();
			    container.openAs(errorimage);
            }
            
        },
        containerEvents: {
            // события клиентского экземпляра контейнера, this не определен
            // эти события предназначены для редактирования содержимого окна
            eventName: function(container, window, windowContent, eventData) {
                // window и windowContent могут быть null
                // Чтобы отправить данные на сервер
                container.sendEvent("eventName", someData)
            }
        }
    }
});

TileEntity.getPrototype(BlockID.gtblockmachine).__energyLibInit = true;
TileEntity.getPrototype(BlockID.gtblockmachine).__Types = {};
TileEntity.getPrototype(BlockID.gtblockmachine).__Nets = {};

Logger.Log(TileEntity.getPrototype(BlockID.gtblockmachine).__Types, "xekror");
	
TileEntityRegistry.addEnergyTypeForId(BlockID.gtblockmachine, "liquid");
 





/*new UI.Window({
     location: {
          x: 0,
          y: 0,
          width: 1000,
          height: UI.getScreenHeight(),
      },
     params: {
          // стилизация (изменение стандартных текстур)
     },
     drawing: [{type: "bitmap", bitmap: "BronzeAlloySmelter", x: 1000 / 2 - bitmap.getWidth(), y: UI.getScreenHeight() / 2 - bitmap.getHeight(), width: bitmap.getWidth() * 2, height: bitmap.getHeight() * 2}],
     elements: {
       "close": {type: "closeButton", global: true, bitmap: "close", bitmap2: "slot", x: 1000 / 2 - bitmap.getWidth(), y: UI.getScreenHeight() / 2 - bitmap.getHeight(), scale: 2},
       "invSlot0": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 0, bitmap: "slot"},
   "invSlot1": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 1, bitmap: "slot"},
      "invSlot2": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 2, bitmap: "slot"},
     "invSlot3": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 3, bitmap: "slot"},
     "invSlot4": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 4, bitmap: "slot"},
     "invSlot5": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 5, bitmap: "slot"},
     "invSlot6": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 6, bitmap: "slot"},
     "invSlot7": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 7, bitmap: "slot"},
     "invSlot8": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 8, bitmap: "slot"},
     "invSlot9": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 9, bitmap: "slot"},
       "invSlot10": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 10, bitmap: "slot"},
   "invSlot11": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 11, bitmap: "slot"},
      "invSlot12": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 12, bitmap: "slot"},
     "invSlot13": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 13, bitmap: "slot"},
     "invSlot14": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 14, bitmap: "slot"},
     "invSlot15": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 15, bitmap: "slot"},
     "invSlot16": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 16, bitmap: "slot"},
     "invSlot17": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 17, bitmap: "slot"},
     "invSlot18": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 18, bitmap: "slot"},
    "invSlot19": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 19, bitmap: "slot"},
        "invSlot20": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 20, bitmap: "slot"},
   "invSlot21": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 21, bitmap: "slot"},
      "invSlot22": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 22, bitmap: "slot"},
     "invSlot23": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 23, bitmap: "slot"},
     "invSlot24": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 24, bitmap: "slot"},
     "invSlot25": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 25, bitmap: "slot"},
     "invSlot26": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 26, bitmap: "slot"},
     "invSlot27": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 27, bitmap: "slot"},
     "invSlot28": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 28, bitmap: "slot"},
    "invSlot29": {type: "invSlot", x:1000 / 2 - bitmap.getWidth() + 14 +
    72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 29, bitmap: "slot"},
    "invSlot30": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 30, bitmap: "slot"},
   "invSlot31": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 31, bitmap: "slot"},
      "invSlot32": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 32, bitmap: "slot"},
     "invSlot33": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 33, bitmap: "slot"},
     "invSlot34": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 34, bitmap: "slot"},
     "invSlot35": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 35, bitmap: "slot"},
       "error": {type: "image", x: 890, y: 890, bitmap: "bronze_error", scale: 1},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 68, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, size: 36, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input1": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 104, y: 
UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, size: 36, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, direction: 0, bitmap: "bronze_furnace_process", scale: 0 overlay: "текстура", overlayScale: число, overlayOffset: {x: число, y: число}},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 190, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, size: 36, bitmap: "slot", needClean: true, isTransparentBackground: true},
     },
}));*/

group.add(BlockID.gtblockmachine, -1);