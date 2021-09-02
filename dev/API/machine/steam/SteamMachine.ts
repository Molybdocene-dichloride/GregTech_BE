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

abstract class SteamGenerator extends SteamMachine implements IGenerationLogic {
  recipes: FuelMap;
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
