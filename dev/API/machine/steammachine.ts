abstract class SteamMachine extends Machine implements ISteamLogic {
  init() : void {
    super.init();
    this.prepareSteam();
  }
  tick() : void {
    super.tick();
    this.provideSteam();
  }
  prepareSteam() : void {
    this.fluidStorage.prepareStack("steam", 16000, true);
    this.fluidStorage.prepareStack("water", 16000, true);
  }
  provideSteam() : void {}
}

abstract class BronzeSteamGenerator extends SteamMachine implements IGenerationLogic {
  recipes: FuelMap;
  maxTemperature: number = 0;
  getRecipes(): FuelMap {
    return recipes:
  }
  getRecipe(index : number): FuelRecipe {
    return recipes[index];
  }
  addRecipe(recipe: FuelRecipe): void {
    recipes[recipes.length] = recipe;
  }
  init() : void {
    super.init();
  }
  tick() : void {
    super.tick();
    provideGeneration();
  }
  provideGeneration() : void {
    if(this.data.fuelTickEncounter < 11) {
                  this.data.fuelTickEncounter++;
                } else {
                    if(this.data.fuel > 0) {
                      this.data.fuel--;
                      if(this.data.temperature < maxTemperature) {
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
  }
}
abstract class BronzeSteamGenerator extends SteamGenerator {
  init() : void {
    super.init();
    tier = 0;
  }
}
abstract class SteelSteamGenerator extends SteamGenerator {
  init() : void {
    super.init();
    tier = 1;
  }

  
}
abstract class SteamProcessor extends SteamMachine implements IProcessingLogic {
  tier: number;
  recipes: RecipeMap;
  getRecipes(): RecipeMap {
    return recipes:
  }
  getRecipe(index : number): Recipe {
    return recipes[index];
  }
  addRecipe(recipe: Recipe): void {
    recipes[recipes.length] = recipe;
  }
  tick() : void {
    super.tick();
    provideProcessing();
  }
  provideProcessing() : void {
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
  }
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
}

abstract class BronzeSteamProcessor extends SteamProcessor {
  init() : void {
    super.init();
    tier = 0;
  }
}

abstract class SteelSteamProcessor extends SteamProcessor {
  init() : void {
    super.init();
    tier = 1;
  }
}