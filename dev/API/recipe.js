function Recipe(inputs, outputs, time, EUt, postHandler) {
    this.type = "normal";
    this.inputs = inputs;
    this.outputs = outputs;
    this.time = time;
    this.EUt = EUt || 0;
    this.isSteam = function() {
        return this.EUt <= 16;
    }
}
function FuelRecipe(inputs, outputs, time, EUt, postHandler) {
    this.type = "fuel";
    this.inputs = inputs;
    this.outputs = outputs;
    this.time = time;
    this.EUt = EUt || 0;
    this.isSteam = function() {
        return this.EUt <= 16;
    }
}
function RecipeMap(minInputs, maxInputs, minOutputs, maxOutputs, minFluidInputs, maxFluidInputs, minFluidOutputs, maxFluidOutputs, defaultEUt) {
    this.minInputs = minInputs;
    this.maxInputs = maxInputs;
    this.minOutputs = minOutputs;
    this.maxOutputs = maxOutputs;
    this.length = 0;
    this.defaultEUt = defaultEUt;
    this.get = {};
    this.addRecipe = function(recipe) {
        this[this.length] = recipe;
        let t = "";
        
        for(let input in recipe.inputs) {
          let iddata = null;
              //Logger.Log("pentazonium", i);
              if(recipe.inputs[input].type == "material") {
                Logger.Log("pe", iddata);

              iddata = MaterialDictionary.invdata[recipe.inputs[input].form][recipe.inputs[input].material.name];
              
              Logger.Log("eeyue", iddata);

            } else if(recipe.inputs[input].type == "ore") {
              Logger.Log(recipe.inputs[input].material.name, ".•o°");

              iddata = {id: OreDictionary.data[recipe.inputs[input].material.name].id, data: 0};
            }
            
          t += iddata.id + "_";
          t += iddata.data + "_";
          
        }
        t = t.substring(0, t.length - 2);
        
        
        if(!this.get[t]) this.get[t] = [];
        
        
        this.get[t].push(recipe);
        
        this.length++;
    }
    this.deleteRecipe = function(recipe) {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
}
function FuelMap(minInputs, maxInputs, defaultEUt) {
    this.minInputs = minInputs;
    this.maxInputs = maxInputs;
    this.minOutputs = 1;
    this.maxOutputs = 1;
    this.length = 0;
    /*this.minInputs = minInputs;
    this.maxInputs = maxInputs;*/
    this.defaultEUt = defaultEUt;
    this.get = {};
    this.addRecipe = function(recipe) {
        this[this.length] = recipe;
        let t = "";
        for(let input in recipe.inputs) {
          let iddata = null;
              //Logger.Log("pentazonium", i);
              if(recipe.inputs[input].type == "material") {
                Logger.Log("pe", iddata);

              iddata = MaterialDictionary.invdata[recipe.inputs[input].form][recipe.inputs[input].material.name];
              
              Logger.Log("eeyue", iddata);

            } else if(recipe.inputs[input].type == "ore") {
              Logger.Log(recipe.inputs[input].material.name, ".•o°");

              iddata = {id: OreDictionary.data[recipe.inputs[input].material.name].id, data: 0};
            }
            
          t += iddata.id + "_";
          t += recipe.inputs[input].count + "_";
          t += iddata.data + "_";
        }
        t = t.substring(0, t.length - 2);
        this.get[t] = recipe;
        
        this.length++;
    }
    this.deleteRecipe = function(recipe) {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
}

let RecipeDictionary = {
    RECIPE_FURNACE_MAP: false,
    recipes: null,
    recipesU: null,
    recipes2: null,
    create: function() {
      let itt = this.recipesU.entrySet().iterator();
      while(itt.hasNext()) {
        let f = itt.next();
        Logger.Log(f.getKey(), "starikl");
        Logger.Log(f.getValue(), "oipui");
        let recipe = f.getValue();
        Logger.Log(recipe.getClass().getName(), "oipui");
        if(recipe.getClass().getName().contains("Shaped")) {
          Logger.Log("$", "Shd");
          let pfield = recipe.getClass().getDeclaredField("pattern");
          pfield.setAccessible(true);
          let entries = pfield.get(recipe);
          let bigstr = "";
          let countOv0 = 0;
          for(let x = 0; x < entries.length; x++) {
            let countOf0 = 0;
            for(let z = 0; z < entries.length; z++) {
              if(entries[x][z].id != 0) countOf0 += 1;
              Logger.Log(entries[x][z].id, "Xerriopl");
              Logger.Log(entries[x][z].data, "Ferriopl");
              Logger.Log(entries[x][z].getCode(), "Code");
            }
            if(countOf0 != 0) {
              for(let z = 0; z < entries.length; z++) {
                bigstr += entries[x][z].getCode() + "_";
              }
            }
          }
          bigstr = bigstr.substring(0, bigstr.length - 1);
          Logger.Log(bigstr, "biggy");
        } else if(recipe.getClass().getName().contains("Shapeless")) {
          Logger.Log("&", "Shls");
          let entries = recipe.getSortedEntries();
          let arr = [];
          for(let i = 0; i < entries.length; i++) {
            Logger.Log(entries[i].id, "Xerriopl");
            Logger.Log(entries[i].data, "Ferriopl");
            arr.push(entries[i].getCode());
          }
          Logger.Log(entries.length, "length");
        }
        //bigstr += recipe.getPrefix();
        //recipes2[bigstr] = result;
        let result = recipe.getResult();
        Logger.Log(result.id, "result");
        Logger.Log(result.data, "result");
        Logger.Log(recipe.getPrefix(), "prefix");
        
      }
    },
    createOfCombinations: function(arr) {
      let arrOfArrs = [];
      if(arr.length == 0) {
        
      } else if(arr.length == 1) {
        arrOfArrs.push(arr);
      } else {
      for(let i in arr) {
        let all = createOfCombinations0(arr, arr[i].substring(0, 0));
        for(let j in all) {
          arrOfArrs.push(all);
        }
      }
      }
      return arrOfArrs;
    },
    createOfCombinations0: function(arr, arrI) {
      let arrOfArrs = [];
      for(let i in arr) {
        if(arrI[i] == arr.substring(arrI.length - 1)) continue;
        arrI[i] += "_" + arr.substring(arrI.length - 1);
        let all = createOfCombinations0(arr, arr[i]);
        for(let j in all) {
          arrOfArrs.push(all);
        }
      }
      return arrOfArrs;
    },
    getBySources: function(slots) {
      if(slots.length == 0) return null;
      if(slots.length == 1) {
        slots[0].index = 1;
      }
      if(slots.length == 2) {
        if(row(slots[0].index) == row(slots[1].index) && row2(slots[0].index) == row2(slots[1].index) + 1) {
          slots[0].index = 1;
          slots[1].index = 0;
        }
        if(row(slots[0].index) == row(slots[1].index) && row2(slots[0].index) == row2(slots[1].index) + 2) {
          slots[0].index = 2;
          slots[1].index = 0;
        }
        if(row(slots[0].index) == row(slots[1].index) && row2(slots[0].index) == row2(slots[1].index) - 1) {
          slots[0].index = 0;
          slots[1].index = 1;
        }
        if(row(slots[0].index) == row(slots[1].index) && row2(slots[0].index) == row2(slots[1].index) + 2) {
          slots[0].index = 0;
          slots[1].index = 2;
        }
      }
      
      let r;
      let it = RecipeDictionary.recipes.keySet().iterator();
      while(it.hasNext()) {
        let u = it.next();
        
        let trv = RecipeDictionary.recipes.get(u);
      if(java.lang.Long.toString(u) == "17") r = u;
      }
      
      let sslot;
      for(let slot in slots) {
        if(!sslot || slots[slot].data > sslot.data) {
          sslot = slots[slot];
        }
      }
      
      let trv = RecipeDictionary.recipes.get(new java.lang.Long(Flags.pack2(Flags.recepiee(sslot.data), sslot.id)));
      let trvminus = RecipeDictionary.recipes.get(new java.lang.Long(Flags.pack2(Flags.recepiee(-1), sslot.id)));
      
      Logger.Log(trv == null, "xenoss");
      
      let trsv = RecipeDictionary.recipes.get(r);
      
        Logger.Log(trsv == null, "xenoss");
      
      if(trv == null) return null;
      
      let sourcesForCleaning = [];
        let result;
      
      let ittas = trv.iterator();
      while(ittas.hasNext()) {
        let trvi = ittas.next();
        Logger.Log(trvi.getResult().id, "xenos_12");
      }
      if(trvminus != null) {
      let ittaols = trvminus.iterator();
      while(ittaols.hasNext()) {
        let trvi = ittaols.next();
        Logger.Log(trvi.getResult().id, "xenkiopuy_102");
      }}
      
      let itt = trv.iterator();
      while(itt.hasNext()) {
        let trvi = itt.next();
        let eeeeeee = true;
        Logger.Log(",,,,,,.m", "yyseddly");

        for(let i in slots) {
          Logger.Log(slots, "deriu");
          Logger.Log(trvi.getResult().id, "zanaras");
          Logger.Log(trvi.getResult().data, "zanjiaras");
          Logger.Log(trvi.getResult().count, "hunki");
          Logger.Log(i, "leass");
          let trvim;
          
          if(slots[i] != null && trvi.getSortedEntries()[slots[i].index]) {
          Logger.Log(trvi.getSortedEntries()[slots[i].index].id, "yyseddly");
          Logger.Log(trvi.getSortedEntries()[slots[i].index].data, "seddl7y");
          trvim = trvi.getSortedEntries()[slots[i].index];
          } else {
            trvim = {id: 0, data: 0, count: 0}
          }
          
          if(slots[i] == null) {
            Logger.Log("cunnot", slots[i] != null);
            eeeeeee = false;
            break;
          } else if(slots[i] != null && (slots[i].id != trvim.id || (trvim.data != -1 && slots[i].data != trvim.data))) {
            //return 
            Logger.Log("cumnnot", slots[i] != null);
            Logger.Log(slots[i].id, "y777y");
          Logger.Log(slots[i].data, "s66y");
          
            eeeeeee = false;
            break;
          } else if(slots[i] != null && slots[i].count >= 1) {
            
            Logger.Log("cannot", slots[i] != null);
            
            Logger.Log(slots[i].id, "y777y");
          Logger.Log(slots[i].data, "s66y");
          
          
            sourcesForCleaning.push(i);
            result = trvi.getResult();
          }
        }
        
        //Logger.Log(trvi.getSortedEntries()[i].data, "seddl7y");
        
        if(eeeeeee) {
          //result
          Logger.Log("zases", "daqwasder");
            break;
          } else {
            Logger.Log(sourcesForCleaning.length, "xedasofi");
            sourcesForCleaning = sourcesForCleaning.slice(sourcesForCleaning.length);
            Logger.Log(sourcesForCleaning.length, "rered");
            result = null;
          }
        /*if(rtv[i]) {
          sslot = slots[slot];
        }*/
      }
      
      if(trvminus != null && result == null) {
      let itto = trvminus.iterator();
      while(itto.hasNext()) {
        let trviminus = itto.next();
        let eeeeeee = true;
        Logger.Log(",,,,,,.m", "yyseddly");
        
        if(trviminus != null) {
          for(let i in slots) {
          //if(trviminus.getSortedEntries()[i].id == 0) continue;
          
          let trvim;
          if(slots[i] != null && trviminus.getSortedEntries()[slots[i].index]) {
          Logger.Log(trviminus.getSortedEntries()[slots[i].index].id, "yyseddly");
          Logger.Log(trviminus.getSortedEntries()[slots[i].index].data, "seddl7y");
          trvim = trviminus.getSortedEntries()[slots[i].index];
          } else {
            trvim = {id: 0, data: 0, count: 0}
          }
          
          Logger.Log(i, "leass");
          Logger.Log(trvim.id, "yyseddly");
          Logger.Log(trvim.data, "seddl7y");
            
          
          if(slots[i] == null) {
            Logger.Log("cunnot", slots[i] != null);
            eeeeeee = false;
            break;
          } else if(slots[i] != null && (slots[i].id != trvim.id || (trvim.data != -1 && slots[i].data != trvim.data))) {
            //return 
            Logger.Log("cumnnot", slots[i] != null);
            Logger.Log(slots[i].id, "y777y");
          Logger.Log(slots[i].data, "s66y");
          
            eeeeeee = false;
            break;
          } else if(slots[i] != null && slots[i].count >= 1) {
            
            Logger.Log("cannopnot", slots[i] != null);
            
            Logger.Log(slots[i].id, "y777y");
          Logger.Log(slots[i].data, "s66y");
          
          
            sourcesForCleaning.push(i);
            result = trviminus.getResult();
          }
        }
        
        //Logger.Log(trvi.getSortedEntries()[i].data, "seddl7y");
        
        if(eeeeeee) {
          //result
          Logger.Log("zases", "daqwasder");
            break;
          } else {
            Logger.Log(sourcesForCleaning.length, "xedasofi");
            sourcesForCleaning = sourcesForCleaning.slice(sourcesForCleaning.length);
            Logger.Log(sourcesForCleaning.length, "rered");
            result = null;
          }
          }
      }
      }
      
      for(let i in sourcesForCleaning) {
        Logger.Log(sourcesForCleaning[i], "xedasoi");
      }
      
      if(result != null) {
        Logger.Log(result.id, "xedoi");
        Logger.Log(result.data, "xsoi");
        Logger.Log(result.count, "xeoi");
      }
      
      if(result == null) {
        return null;
      }
      return {cleaning: sourcesForCleaning, result: result};
      /*let it = RecipeDictionary.recipes.values().iterator();
      while(it.hasNext()) {
        let u = it.next();
        Logger.Log(u, "ghhh");
        let itt = u.iterator();
      while(itt.hasNext()) {
        let uu = itt.next();
        Logger.Log(uu.getSortedEntries()[0], "ghhhggtko");
        Logger.Log(uu.getSortedEntries()[0].id, "gooo");
        Logger.Log(uu.getSortedEntries()[0].data, "gsss");
        Logger.Log(uu.getSortedEntries()[0].count, "gsss");
      }
      }*/
    },
    
    
    SimulatedField: function(slots, prefix, pattern) {
      this.pattern = pattern;
      this.slots = slots;
      this.prefix = prefix;
      
      Logger.Log(this.slots[0], "$$lolol");
      
      this.getFieldSlot = function(index) {
        return this.slots[index];
      }
      
      isMatchingSimulatedField = function (field) {
      for (let y = 0; y < this.pattern.length; y++) {
            for (let x = 0; x < this.pattern[y].length; x++) {
                if (!this.pattern[y][x].isMatching(field.getFieldSlot((y * 3) + x))) {
                    return false;
                }
            }
        }
        return true;
    }
    isMatchingSimulatedPrefix = function (prefix2) {
      if (prefix2 == null || prefix2.isEmpty() || prefix2.equals("undefined")) {
            return this.prefix == null || this.prefix.isEmpty();
        }
        return prefix2.contains(this.prefix);
    }
    },
    
    getSimulatedFieldMasks: function(field) {
      let chars = new java.util.ArrayList();
        let shaped = "";
        for (let i = 0; i < 9; i++) {
            let slot = field.getFieldSlot(i);
            Logger.Log(slot.getClass(), "$$lolol");
            Logger.Log(slot.getCount(), "$$");
            Logger.Log(slot.getId(), "$$$$");
            let c = (slot.getCount() > 0 ? slot.getId() : 0);
            shaped = shaped + c;
            if (c != 0) {
                chars.add(java.lang.Character.valueOf(c));
            }
        }
        let shapeless = "$$";
java.util.Collections.sort(chars);
        let it = chars.iterator();
        while (it.hasNext()) {
            shapeless = shapeless + it.next();
        }
        return [shaped, shapeless];
    },
    getRecipeByItems: function(field, prefix) {
      let masks = this.getSimulatedFieldMasks(field);
        if(recipes.containsKey(masks[0])) {
            let it = recipes.get(masks[0]).iterator();
            while (it.hasNext()) {
                let recipe = it.next();
                if (recipe.isMatchingSimulatedField(field) && recipe.isMatchingSimulatedPrefix(prefix)) {
                    return recipe;
                }
            }
        }
        if (!recipes.containsKey(masks[1])) {
            return null;
        }
        let it2 = recipes.get(masks[1]).iterator();
        while (it2.hasNext()) {
            let recipe2 = it2.next();
            if (recipe2.isMatchingSimulatedField(field)) {
                return recipe2;
            }
        }
        return null;
    },
    addFurnace: function(input, output, prefix) {
      let iddatainput = null;
      let iddataoutput = null;
      if(input.type == "material") {
        iddatainput = MaterialDictionary.invdata[input.form][input.material.name];
      } else if(input.type == "common") {
        iddatainput = {id: input.id, data: input.data};
      }
      if(output.type == "material") {
        iddataoutput = MaterialDictionary.invdata[output.form][output.material.name];
      } else if(output.type == "common") {
        iddataoutput = {id: output.id, data: output.data};
      }
        Recipes.addFurnace(iddatainput.id, iddatainput.data, iddataoutput.id, iddataoutput.data, prefix);
    },
    addFurnaceFuel: function(input, time, output, isCoalBoiler) {
      setLoadingTip("Recipes: fuel of " + input.name);
       let iddatainput = MaterialDictionary.invdata[input.form][input.material.name];
      if(isCoalBoiler) {
        MachineDictionary.steammachines["boiler"].recipes.addRecipe(new FuelRecipe([{type: "material", material: input.material, form: input.form, count: 1}], [{type: "material", material: output.material, form: output.form, count: 1}], time, 1));
      }
        Recipes.addFurnaceFuel(iddatainput.id, iddatainput.data, time);
    },
    addShaped: function(mask, input, output, prefix, func) {
        let iddatainput = [];
        let f = 0;
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
              if(input[i].type == "material") {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                Logger.Log(iddatainput[f], "typeeer");
                f++;
              } else if(input[i].type == "pipe_machine") {
                let preiddatainput = PipeDictionary.pipes[input[i].typed + "_" + input[i].name];
                iddatainput[f] = BlockID.gtblockpipe;
                f++;
                iddatainput[f] = preiddatainput;
                Logger.Log(iddatainput[f], "typeshar");
                f++;
              } else if(input[i].type == "machine") {
                let preiddatainput = MachineDictionary.steammachines[input[i].typed][input[i].name];
                iddatainput[f] = BlockID.gtblockmachine;
                f++;
                iddatainput[f] = preiddatainput.data;
                Logger.Log(iddatainput[f], "tpe");
                f++;
              } else if(input[i].type == "casing") {
                let preiddatainput = MachineDictionary.casings[input[i].typed];
                iddatainput[f] = BlockID.gtcasing;
                f++;
                iddatainput[f] = preiddatainput;
                Logger.Log(iddatainput[f], "typeer");
                f++;
              } else if(input[i].type == "common") {
                iddatainput[f] = input[i].id;
                f++;
                iddatainput[f] = input[i].data;
                Logger.Log(iddatainput[f], "typhe");
                f++;
              }
            }
        }
        let iddataoutput = null;
        if(output.type == "material") {
          iddataoutput = {id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data};
        } else if(output.type == "machine_steam") {
          iddataoutput = {id: BlockID.gtblockmachine, count: output.count, data: MachineDictionary.steammachines[output.name]["data" + output.tier]};
        } else if(output.type == "casing") {
          iddataoutput = {id: BlockID.gtblockmachine, count: output.count, data: MachineDictionary.casings[output.typed]};
        }
        Recipes.addShaped(iddataoutput, mask, iddatainput, func, prefix);
    },
    addShapedForTool: function(mask, input, output, prefix, func) {
      //setLoadingTip("Recipes: tool of " + input.name);
        let iddatainput = [];
        let f = 0;
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        function fun(api, field, result) {
           ToolDictionary.upgradeTool(output.material, result);
           if(func) func(api, field, result);
        }
        //let iddataoutput = ToolDictionary.invdata[output.type];
        let iddataoutput = {id: ToolDictionary.invdata[output.type].id, count: 1, data: ToolDictionary.invdata[output.type].data};
            Recipes.addShaped(iddataoutput, mask, iddatainput, fun, prefix);
    },
    addShapeless: function(input, output, prefix, func) {
        let iddatainput = [];
        let f = 0;
        for(let i in input) {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
        }
        //let iddataoutput = MaterialDictionary.invdata[output.form][output.material.name];
        let iddataoutput = {id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data};
        Recipes.addShapeless(iddataoutput, iddatainput, func, prefix);
    },
    arr_en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    addToolShaped: function(tools, mask, input, output, prefix, func) {
        let newmask = [];
        let pos = [];
        let j = 0;
        for(let i in mask) {
            newmask[i] = mask[i];
            pos[i] = [];
            let index = 0;
            while(true) {
            if(mask[i].indexOf("_", index) != -1) {
                pos[i][mask[i].indexOf("_", index)] = mask[i].indexOf("_", index);
                newmask[i] = newmask[i].replaceAt(mask[i].indexOf("_", index), this.arr_en[this.arr_en.length - 1 - j]);
                index = mask[i].indexOf("_", index) + 1;
                j++;
                Logger.Log(index, "assem");
                Logger.Log(newmask[i], "aem");
            } else {
                break;
            }
            }
        }
        let iddatainput = [];
        let f = 0;
        for(let i in tools) {
            Logger.Log(this.arr_en[this.arr_en.length - 1 - i], "TRex __");
            Logger.Log(tools[i], "upcore");
            iddatainput[f] = this.arr_en[this.arr_en.length - 1 - i];
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].id;
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].data;
            f++;
        }
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
              let preiddatainput = null;
              if(input[i].type == "material") {
                preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
              } else if(input[i].type == "common") {
                preiddatainput = {id: input[i].id, data: input[i].data};
              }
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        //let iddataoutput = MaterialDictionary.invdata[output.form][output.material.name];
        for(let i in iddatainput) {
          Logger.Log(iddatainput[i], "edro");
        }
        let iddataoutput = null;
        if(output.type == "material") {
          Logger.Log(output.form, "zomboss");
           iddataoutput = {id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data};
        } else if(output.type == "common") {
          iddataoutput = {id: output.id, count: output.count, data: output.data};
        } else if(output.type == "pipe_machine") {
           iddataoutput = {id: BlockID.gtblockpipe, data: PipeDictionary.pipes[output.typed + "_" + output.name], count: output.count};
        }
            function fun(api, field, result) {
               for (let y in field) {
				    if (field[y].id == ItemID.gtmetatool01) {
                        ToolDictionary.damageTool(field[y]);
				              break;
				    } else {
                      field[y].count -= 1;
                    }
               }
                if(func) func(api, field, result);
            }
        Recipes.addShaped(iddataoutput, newmask, iddatainput, fun, prefix);
    },
    addToolShapedForTool: function(tools, mask, input, output, prefix, func) {
      //setLoadingTip("Recipes: tool of " + input.name);
      Logger.Log(output.type, "хуйня");
        let newmask = [];
        let pos = [];
        let j = 0;
        for(let i in mask) {
            newmask[i] = mask[i];
            pos[i] = [];
            let index = 0;
            while(true) {
            Logger.Log(index, "aзждm");
            if(mask[i].indexOf("_", index) != -1) {
                pos[i][mask[i].indexOf("_", index)] = mask[i].indexOf("_", index);
                newmask[i] = newmask[i].replaceAt(mask[i].indexOf("_", index), this.arr_en[this.arr_en.length - 1 - j]);
                Logger.Log(this.arr_en[this.arr_en.length - 1 - j], "TRex __");
                
                index = mask[i].indexOf("_", index) + 1;
                j++;
                Logger.Log(index, "assem");
                Logger.Log(newmask[i], "aem");
            } else {
                break;
            }
            }
        }
        let iddatainput = [];
        let f = 0;
        for(let i in tools) {
          Logger.Log(tools[i], "upcore");
            iddatainput[f] = this.arr_en[this.arr_en.length - 1 - i];
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].id;
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].data;
            f++;
        }
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        for(let i in iddatainput) {
          Logger.Log(iddatainput[i], "edro");
        }
        //let iddataoutput = ToolDictionary.invdata[output.type];
        let iddataoutput = {id: ToolDictionary.invdata[output.type].id, count: 1, data: ToolDictionary.invdata[output.type].data};
            function fun(api, field, result) {
              for (let y in field) {
				    if (field[y].id == ItemID.gtmetatool01) {
                        ToolDictionary.damageTool(field[y]);
				    } else {
                      field[y].count -= 1;
                    }
               }
                ToolDictionary.upgradeTool(output.material, result);
                if(func) func(api, field, result);
            }
        Recipes.addShaped(iddataoutput, newmask, iddatainput, fun, prefix);
    },
    provideFurnaceRecipe: function(container, prefix) {
      Logger.Log(container, "dero");
      Logger.Log(container.getSlot("input0"), "derrekpro");
        return Recipes.getFurnaceRecipeResult(container.getSlot("input0").id, container.getSlot("input0").data, prefix);
    },
    provideFurnaceRecipeA: function(item, prefix) {
      Logger.Log(container, "dero");
      Logger.Log(container.getSlot("input0"), "derrekpro");
        return Recipes.getFurnaceRecipeResult(item.id, item.data, prefix);
    },
    provideFurnaceByRecipe: function(container, prefix) {
      Logger.Log(container, "dero");
      Logger.Log(container.getSlot("input0"), "derrekpro");
        return Recipes.getFurnaceRecipeByResult(container.getSlot("output0").id, container.getSlot("output0").data, prefix);
    },
    provideFurnaceByRecipeA: function(item, prefix) {
      Logger.Log(container, "dero");
      Logger.Log(container.getSlot("input0"), "derrekpro");
        return Recipes.getFurnaceRecipeByResult(item.id, item.data, prefix);
    },
    provideFurnaceFuel: function(inputs) {
        let iddata = MaterialDictionary.invdata[inputs[0].material][inputs[0].form];
        if(Recipes.getFuelBurnDuration(iddata.id, iddata.data) > 0) {
            return true;
        }
        return false;
    },
    registerFormHandlingRecipes: function(input, EUt) {
      setLoadingTip("Recipes: processing of " + input.name);
        Logger.Log(input.name, "formsGor");
        if(input.type == "MARKER" || input.type == "FLUID") return;
        if(input.type == "INGOT") { RecipeDictionary.addFurnace({type: "material", material: input, form: "dust"}, {type: "material", material: input, form: "ingot"});
        
        Logger.Log(MaterialDictionary.invdata["dust"][input.name].data, "formsooor");
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material");
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material");
        }
        
        if(input.type == "INGOT") { RecipeDictionary.addFurnace({type: "material", material: input, form: "ingot"}, {type: "material", material: input, form: "nugget"});
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }//
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "crushed"}, {type: "material", material: input, form: "nugget"});
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "crushedCentrifuged"}, {type: "material", material: input, form: "nugget"});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "crushedPurified"}, {type: "material", material: input, form: "nugget"});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].material.name, "cancater1material"); //?!
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_BOLT_SCREW)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "bolt"}, {type: "material", material: input, form: "nugget"});
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["bolt"][input.name].id][MaterialDictionary.invdata["bolt"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["bolt"][input.name].id][MaterialDictionary.invdata["bolt"][input.name].data].material.name, "cancater1material");

          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_BOLT_SCREW)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "screw"}, {type: "material", material: input, form: "nugget"});
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["screw"][input.name].id][MaterialDictionary.invdata["screw"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["screw"][input.name].id][MaterialDictionary.invdata["screw"][input.name].data].material.name, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ROD)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "stick"}, {type: "material", material: input, form: "nugget"});
        
        Logger.Log("Ma", MaterialDictionary.invdata["stick"]);
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "dustImpure"}, {type: "material", material: input, form: "ingot"});
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustImpure"][input.name].id][MaterialDictionary.invdata["dustImpure"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustImpure"][input.name].id][MaterialDictionary.invdata["dustImpure"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) {RecipeDictionary.addFurnace({type: "material", material: input, form: "dustPure"}, {type: "material", material: input, form: "ingot"});
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustPure"][input.name].id][MaterialDictionary.invdata["dustPure"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustPure"][input.name].id][MaterialDictionary.invdata["dustPure"][input.name].data].material.name, "cancater1material");
        }
        
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "crushedCentrifuged"}, {type: "material", material: input, form: "ingot"});
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) { RecipeDictionary.addFurnace({type: "material", material: input, form: "crushedPurified"}, {type: "material", material: input, form: "ingot"});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) {RecipeDictionary.addFurnace({type: "material", material: input, form: "crushed"}, {type: "material", material: input, form: "ingot"});
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].material.name, "cancater1material");
}
        
        if(input.type == "INGOT") { RecipeDictionary.addToolShaped(["mortar"], ["_", "i"], ['i', {type: "material", material: input, form: "ingot"}], {type: "material", material: input, form: "dust", count: 1});
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material");
        }
            if(input.type == "GEM") { RecipeDictionary.addToolShaped(["mortar"], ["_", "i"], ['i', {type: "material", material: input, form: "gem"}], {type: "material", material: input, form: "dust", count: 1});
            
            Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
            Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].material.name, "cancater1material");
            }
        if(input.hasFlag(GENERATE_PLATE)) { RecipeDictionary.addToolShaped(["mortar"],  ["_", "i"], ['i', {type: "material", material: input, form: "plate"}], {type: "material", material: input, form: "dust", count: 1});
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_PLATE)) { RecipeDictionary.addToolShaped(["hammer"], ["_", "i", "i"],  ['i', {type: "material", material: input, form: "ingot"}], {type: "material", material: input, form: "plate", count: 1});
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "GEM" && input.hasFlag(GENERATE_PLATE)) { RecipeDictionary.addToolShaped(["hammer"], ["_", "i"],  ['i', {type: "material", material: input, form: "gem"}], {type: "material", material: input, form: "plate", count: 1});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
        }
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ROD)) { RecipeDictionary.addToolShaped(["file"], ["_ ", " i"],  ['i', {type: "material", material: input, form: "ingot"}], {type: "material", material: input, form: "stick", count: 1});
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_LONG_ROD)) { RecipeDictionary.addToolShaped(["hammer"], ["i_i"],  ['i', {type: "material", material: input, form: "stick"}], {type: "material", material: input, form: "stickLong", count: 1});
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stickLong"][input.name].id][MaterialDictionary.invdata["stickLong"][input.name].data].form, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stickLong"][input.name].id][MaterialDictionary.invdata["stickLong"][input.name].data].material.name, "cancater1material");
        }
        //if(input.type == "INGOT" && input.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShaped(["chainsaw"], ["_", "i"],  ['i', {type: "material", material: input, form: "stickLong"}], {type: "material", material: input, form: "stick", count: 2});
        
        RecipeDictionary.addShaped(["ddd", "ddd", "ddd"], ['d', {type: "material", material: input, form: "dustTiny"}], {type: "material", material: input, form: "dust", count: 1});
        
        RecipeDictionary.addShaped(["dd", "dd"], ['d', {type: "material", type: "material", material: input, form: "dustSmall"}], {type: "material", material: input, form: "dust", count: 1});
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].material.name, "cancater1material")
          
        RecipeDictionary.addShaped(["d  ", "  ", "  "], ['d', {type: "material", material: input, form: "dust"}], {type: "material", material: input, form: "dustTiny", count: 9});
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].material.name, "cancater1material")
          
        RecipeDictionary.addShaped([" d ", "  ", "  "], ['d', {type: "material", type: "material", material: input, form: "dust"}], {type: "material", material: input, form: "dustSmall", count: 4});
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].material.name, "cancater1material")
        if(input.hasFlag(GENERATE_PLATE) && input.hasFlag(GENERATE_FOIL)) { RecipeDictionary.addToolShaped(["hammer"], ["_p"], ['p', {type: "material", material: input, form: "plate"}], {type: "material", material: input, form: "foil", count: 1});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["foil"][input.name].id][MaterialDictionary.invdata["foil"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["foil"][input.name].id][MaterialDictionary.invdata["foil"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_FOIL) && input.hasFlag(GENERATE_FINE_WIRE)) { RecipeDictionary.addToolShaped(["wirecutter"], ["_p"], ['p', {type: "material", material: input, form: "foil"}], {type: "material", material: input, form: "wireFine", count: 1});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["foil"][input.name].id][MaterialDictionary.invdata["foil"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["foil"][input.name].id][MaterialDictionary.invdata["foil"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["wireFine"][input.name].id][MaterialDictionary.invdata["wireFine"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["wireFine"][input.name].id][MaterialDictionary.invdata["wireFine"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_BOLT_SCREW)) {RecipeDictionary.addToolShaped(["file"], ["_p", "p "], ['p', {type: "material", material: input, form: "bolt"}], {type: "material", material: input, form: "screw", count: 1});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["bolt"][input.name].id][MaterialDictionary.invdata["bolt"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["bolt"][input.name].id][MaterialDictionary.invdata["bolt"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["screw"][input.name].id][MaterialDictionary.invdata["screw"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["screw"][input.name].id][MaterialDictionary.invdata["screw"][input.name].data].material.name, "cancater1material");
        }
        //if(input.hasFlag(GENERATE_BOLT_SCREW) && input.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShaped(["chainsaw"], ["_ ", "p "], ['p', {type: "material", material: input, form: "screw"}], {type: "material", material: input, form: "bolt", count: 1});
        if(input.hasFlag(GENERATE_PLATE) && input.hasFlag(GENERATE_GEAR) && input.hasFlag(GENERATE_ROD)) { RecipeDictionary.addToolShaped(["screwdriver"], ["rpr", "p_p", "rpr"], ['p', {type: "material", material: input, form: "plate"}, 'r', {type: "material", material: input, form: "stick"}], {type: "material", material: input, form: "gearGt", count: 1});
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
           Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGt"][input.name].id][MaterialDictionary.invdata["gearGt"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGt"][input.name].id][MaterialDictionary.invdata["gearGt"][input.name].data].material.name, "cancater1material");
        }
if(input.hasFlag(GENERATE_PLATE) && input.hasFlag(GENERATE_SMALL_GEAR)) { RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {type: "material", material: input, form: "plate"}], {type: "material", material: input, form: "gearGtSmall", count: 1});

          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGtSmall"][input.name].id][MaterialDictionary.invdata["gearGtSmall"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGtSmall"][input.name].id][MaterialDictionary.invdata["gearGtSmall"][input.name].data].material.name, "cancater1material");
          
       }
        if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_FRAME)) { RecipeDictionary.addToolShaped(["wrench"], ["ppp", "p_p", "ppp"], ['p', {type: "material", material: input, form: "stick"}], {type: "material", material: input, form: "frameGt", count: 1});

      Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
      Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
      Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["frameGt"][input.name].id][MaterialDictionary.invdata["frameGt"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["frameGt"][input.name].id][MaterialDictionary.invdata["frameGt"][input.name].data].material.name, "cancater1material");
      }
if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_RING)) {RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {type: "material", material: input, form: "stick"}], {type: "material", material: input, form: "ring", count: 1});

          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ring"][input.name].id][MaterialDictionary.invdata["ring"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ring"][input.name].id][MaterialDictionary.invdata["ring"][input.name].data].material.name, "cancater1material");
}
        
        if(input.hasFlag(GENERATE_PLATE)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "plate", count: 1}], [{material: input, form: "dust", count: 1}], 56, 4));
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_FOIL)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "foil", count: 1}], [{material: input, form: "dustSmall", count: 1}], 56, 4));
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["foil"][input.name].id][MaterialDictionary.invdata["foil"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["foil"][input.name].id][MaterialDictionary.invdata["foil"][input.name].data].material.name, "cancater1material")
        }
        if(input.hasFlag(GENERATE_RING)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "ring", count: 1}], [{material: input, form: "dustSmall", count: 1}], 56, 4));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustSmall"][input.name].id][MaterialDictionary.invdata["dustSmall"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ring"][input.name].id][MaterialDictionary.invdata["ring"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ring"][input.name].id][MaterialDictionary.invdata["ring"][input.name].data].material.name, "cancater1material")
        }
        if(input.type == "INGOT") { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "ingot", count: 1}], [{material: input, form: "dust", count: 1}], 56, 4));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
        }
        if(input.hasFlag(GENERATE_SMALL_GEAR)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "gearGtSmall", count: 1}], [{material: input, form: "dust", count: 1}], 56, 4));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGtSmall"][input.name].id][MaterialDictionary.invdata["gearGtSmall"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGtSmall"][input.name].id][MaterialDictionary.invdata["gearGtSmall"][input.name].data].material.name, "cancater1material")
        }
        if(input.hasFlag(GENERATE_GEAR)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "gearGt", count: 1}], [{material: input, form: "dust", count: 4}], 224, 4));
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGt"][input.name].id][MaterialDictionary.invdata["gearGt"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gearGt"][input.name].id][MaterialDictionary.invdata["gearGt"][input.name].data].material.name, "cancater1material")
        }
        if(input.hasFlag(GENERATE_BOLT_SCREW)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "bolt", count: 1}], [{material: input, form: "dustTiny", count: 1}], 56, 4));
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["bolt"][input.name].id][MaterialDictionary.invdata["bolt"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["bolt"][input.name].id][MaterialDictionary.invdata["bolt"][input.name].data].material.name, "cancater1material");
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].material.name, "cancater1material")
        }
       if(input.hasFlag(GENERATE_FINE_WIRE)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "wireFine", count: 1}], [{material: input, form: "dustTiny", count: 1}], 56, 4));
       
       Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["wireFine"][input.name].id][MaterialDictionary.invdata["wireFine"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["wireFine"][input.name].id][MaterialDictionary.invdata["wireFine"][input.name].data].material.name, "cancater1material");
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].material.name, "cancater1material")
       }
        if(input.hasFlag(GENERATE_BOLT_SCREW)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "screw", count: 1}], [{material: input, form: "dustTiny", count: 1}], 56, 4));
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["screw"][input.name].id][MaterialDictionary.invdata["screw"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["screw"][input.name].id][MaterialDictionary.invdata["screw"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].material.name, "cancater1material")
        }
        if(input.type == "GEM") { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "gem", count: 1}], [{material: input, form: "dust", count: 1}], 56, 4));
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].material.name, "cancater1material")
        }
        //if(input.type == "GEM") MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "frameGt", count: 1}], [{material: input, form: "dust", count: 2}], 128, 4));
        
        if(input.type == "INGOT") { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "nugget", count: 1}], [{material: input, form: "dustTiny", count: 1}], 16, 4));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustTiny"][input.name].id][MaterialDictionary.invdata["dustTiny"][input.name].data].material.name, "cancater1material")
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["nugget"][input.name].id][MaterialDictionary.invdata["nugget"][input.name].data].material.name, "cancater1material")
        }
        if(input.type == "INGOT") { MachineDictionary.steammachines["compressor"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "ingot", count: 9}], [{material: input, form: "block", count: 1}], 300, 2));
        Logger.Log(input.name, "daredevil");
        Logger.Log(MaterialDictionary.invdata["block"]["iron"].id, "ztрщy");
        
        
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material");

        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["block"][input.name].id][MaterialDictionary.invdata["block"][input.name].data].form, "cancater1")
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["block"][input.name].id][MaterialDictionary.invdata["block"][input.name].data].material.name, "cancater1material")
        }
        if(input.type == "GEM") { MachineDictionary.steammachines["compressor"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "gem", count: 9}], [{material: input, form: "block", count: 1}], 300, 2));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["gem"][input.name].id][MaterialDictionary.invdata["gem"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["block"][input.name].id][MaterialDictionary.invdata["block"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["block"][input.name].id][MaterialDictionary.invdata["block"][input.name].data].material.name, "cancater1material");
        }
        //if(input.type == "INGOT" || input.type == "GEM") MachineDictionary.steammachines["compressor"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "dust", count: 9}], [{material: input, form: "block", count: 1}], ));
        if(input.type == "INGOT" && input.hasFlag(GENERATE_PLATE)) { MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "ingot", count: 3}], [{material: input, form: "plate", count: 2}], 55, 16));
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["ingot"][input.name].id][MaterialDictionary.invdata["ingot"][input.name].data].material.name, "cancater1material")
          
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["plate"][input.name].id][MaterialDictionary.invdata["plate"][input.name].data].material.name, "cancater1material")
        }
        if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_LONG_ROD)) { MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "stick", count: 2}], [{material: input, form: "stickLong", count: 1}], 208, 16));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stick"][input.name].id][MaterialDictionary.invdata["stick"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stickLong"][input.name].id][MaterialDictionary.invdata["stickLong"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["stickLong"][input.name].id][MaterialDictionary.invdata["stickLong"][input.name].data].material.name, "cancater1material");
        }
        Logger.Log("GENERATE_OREo", GENERATE_ORE);
        Logger.Log("inputs", input.name);
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{type: "ore", material: input, count: 1}], [{material: input, form: "crushed", count: 1}], 16, 10));
        
          Logger.Log(OreDictionary.invdata[OreDictionary.data[input.name].id].name, "cancaterore1material");
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].material.name, "cancater1material")
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "crushed", count: 1}], [{material: input, form: "dustImpure", count: 1}], 10, 16));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustImpure"][input.name].id][MaterialDictionary.invdata["dustImpure"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustImpure"][input.name].id][MaterialDictionary.invdata["dustImpure"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "ore", material: input, count: 1}], [{material: input, form: "crushed", count: 2}], 400, 2));
          
          Logger.Log(OreDictionary.invdata[OreDictionary.data[input.name].id].name, "cancaterore1material");
          
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "crushed", count: 1}], [{material: input, form: "dustImpure", count: 1}], 400, 2));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushed"][input.name].id][MaterialDictionary.invdata["crushed"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustImpure"][input.name].id][MaterialDictionary.invdata["dustImpure"][input.name].data].form, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustImpure"][input.name].id][MaterialDictionary.invdata["dustImpure"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "crushedPurified", count: 1}], [{material: input, form: "dustPure", count: 1}], 10, 16));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustPure"][input.name].id][MaterialDictionary.invdata["dustPure"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustPure"][input.name].id][MaterialDictionary.invdata["dustPure"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "crushedCentrifuged", count: 1}], [{material: input, form: "dust", count: 1}], 10, 16));
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "crushedPurified", count: 1}], [{material: input, form: "dustPure", count: 2}], 400, 2));
        
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedPurified"][input.name].id][MaterialDictionary.invdata["crushedPurified"][input.name].data].material.name, "cancater1material");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustPure"][input.name].id][MaterialDictionary.invdata["dustPure"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dustPure"][input.name].id][MaterialDictionary.invdata["dustPure"][input.name].data].material.name, "cancater1material");
        }
        if(input.hasFlag(GENERATE_ORE)) { MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{type: "material", material: input, form: "crushedCentrifuged", count: 1}], [{material: input, form: "dust", count: 1}], 400, 2));
        
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["dust"][input.name].id][MaterialDictionary.invdata["dust"][input.name].data].material.name, "cancater1material");
        Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].form, "cancater1");
          Logger.Log(MaterialDictionary.data[MaterialDictionary.invdata["crushedCentrifuged"][input.name].id][MaterialDictionary.invdata["crushedCentrifuged"][input.name].data].material.name, "cancater1material");
        }
    },
    registerAlloy: function(output, EUt) {
      setLoadingTip("Recipes: alloying of " + output.name);
      let inputs = output.formula;
        //if(inputs[0].material.type != "INGOT") return;
        if(inputs.length == 0) return;
        //if(output.length == 0) return;
       for(let i in inputs) {
         //ifinputs[i].type != "ingot") {}
       }
        if(inputs.length == 2) MachineDictionary.steammachines["alloy_smelter"].recipes.addRecipe(new Recipe([{type: "material", material: inputs[0].material, form: "ingot", count: inputs[0].count}, {type: "material", material: inputs[1].material, form: "ingot", count: inputs[1].count}], [{material: output, form: "ingot", count: 1}]));
        
        let mask = [];
        for(let i in inputs) {
            mask.push({material: inputs[i].material, form: "dust"});
        }
        RecipeDictionary.addShapeless(mask,  {material: output, form: "dust", count: 1});
        
        let omask = [];
        for(let i in inputs) {
            omask.push({material: inputs[i].material, form: "dustTiny"});
        }
        RecipeDictionary.addShapeless(omask,  {material: output, form: "dustTiny", count: 1});
        
        let kmask = [];
        for(let i in inputs) {
            kmask.push({material: inputs[i].material, form: "dustSmall"});
        }
        RecipeDictionary.addShapeless(kmask,  {material: output, form: "dustSmall", count: 1});
    },
    addMachineShaped: function (mask, input, machine) {
      if(machine.type = "machine_steam") {
        let machine0 = {type: machine.type, name: machine.name, count: machine.count, tier: 0};
        let machine1 = {type: machine.type, name: machine.name, count: machine.count, tier: 1};
        let input0 = [];
        let input1 = [];
        for(let i in input) {
          if(i % 2 == 0) {
            input0.push(input[i]);
            input1.push(input[i]);
          } else {
            if(input[i].type == "casing") {
              input0.push({type: "casing", typed: "bronze_" + input[i].typed});
              input1.push({type: "casing", typed: "steel_" + input[i].typed});
            } else if(input[i].type == "pipe_machine") {
              input0.push({type: "pipe_machine", name: input[i].name, typed: "bronze"});
              input1.push({type: "pipe_machine", name: input[i].name, typed: "steel"});
            } else {
              input0.push(input[i]);
              input1.push(input[i]);
            }
          }
        }
        if(MachineDictionary.steammachines[machine.name].tier[0] == 0) this.addShaped(mask, input0, machine0);
        if(MachineDictionary.steammachines[machine.name].tier[1] == 1) this.addShaped(mask, input1, machine1);
      } else if("machine_electric") {
        //this.addShaped();
      } else if("casing") {
        this.addShaped(mask, input, machine);
      }
    },
    registerToolRecipe: function(input) {
      setLoadingTip("Recipes: tool of " + input.name);
        Logger.Log(input.material2.name, "ger");
        Logger.Log(input.material.name, "zombied");
        if(ToolDictionary.invdata[input.name]) return;
        if(!input.material2.hasFlag(GENERATE_ROD)) return;
        if(!(input.material.type == "INGOT" || input.material.type == "GEM")) return;
        if(!input.material.hasFlag(GENERATE_PLATE)) return;
        Logger.Log(input.material.type, "rexium");
        let material = ToolDictionary.materials[input.name].material;
        let material2 = ToolDictionary.materials[input.name].material2;
        if(input.material.type == "INGOT") RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pii", "_s_", " s "], ['p', {material: material, form: "plate"}, 'i', {material: material, form: "ingot"}, 's', {material: material2, form: "stick"}], {material: material, type: "pickaxe"});
      if(input.material.type == "GEM") RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pii", "_s_", " s "], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "gem"}, 's', {material: material2, form: "stick"}], {material: material, type: "pickaxe"});
if(input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["_p_", " s ", " s "], ['p', {material: input, form: "plate"}, 's', {material: material2, form: "stick"}], {material: material, type: "shovel"});
if(input.material.type == "INGOT" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pi_", "ps ", "_s "], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "ingot"}, 's', {material: material2, form: "stick"}], {material: material, type: "axe"});
if(input.material.type == "GEM" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pi_", "ps ", "_s "], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "gem"}, 's', {material: material2, form: "stick"}], {material: material, type: "axe"});
if(input.material.type == "INGOT" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pi_", "_s", " s"], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "ingot"}, 's', {material: material2, form: "stick"}], {material: material, type: "hoe"});
if(input.material.type == "GEM" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pi_", "_s", " s"], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "gem"}, 's', {material: material2, form: "stick"}], {material: material, type: "hoe"});
if(input.material.type == "INGOT" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addShapedForTool(["xx ", "xxs", "xx "], ['x', {material: material, form: "ingot"}, 's', {material: material2, form: "stick"}], {material: material, type: "hammer"});
if(material.type == "GEM" && material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addShapedForTool(["xx ", "xxs", "xx "], ['x', {material: material, form: "gem"}, 's', {material: material2, form: "stick"}], {material: material, type: "hammer"});
if(material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addShapedForTool(["x", "x", "s"], ['x', {material: material, form: "plate"}, 's', {material: material2, form: "stick"}], {material: material, type: "file"});
if(material.type == "INGOT") RecipeDictionary.addToolShapedForTool(["hammer"], ["i_i", "iii", " i "], ['i', {material: material, form: "ingot"}], {material: material, type: "wrench"});
if(material.type == "GEM") RecipeDictionary.addToolShapedForTool(["hammer"], ["i_i", "iii", " i "], ['i', {material: material, form: "gem"}], {material: material, type: "wrench"});

if(material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["file", "hammer"], [" p ", "_p_", " s "], ['p', {material: material, form: "plate"}, 's', {material: material2, form: "stick"}], {material: material, type: "sword"});

if(material.hasFlag(GENERATE_PLATE) && material.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShapedForTool(["file", "hammer", "screwdriver"], ["p_p", "_p_", "rsr"], ['p', {material: material, form: "plate"}, 'r', {material: material, form: "stick"}, 's', {material: material, form: "screw"}], {material: material, type: "wirecutter"});

if(material.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShapedForTool(["file", "hammer"], [" _r", " r_", "s  "], ['r', {material: material, form: "stick"}, 's', {material: material2, form: "stick"}], {material: material, type: "screwdriver"});


if(material.type == "INGOT") RecipeDictionary.addShapedForTool([" s ", "xsx", "xxх"], ['x', {material: material, form: "ingot"}, 's', {material: MaterialDictionary.dict["flint"], form: "gem"}], {material: material, type: "mortar"});
if(material.type == "GEM") RecipeDictionary.addShapedForTool(["x x", "xxх"], ['x', {material: material, form: "gem"}], {material: material, type: "mortar"});
    },
    toNotConsumable: function(input) {
        return {id: input.id, data: input.data, count: 0};
    },
    Builder: function() {
        this.inputs = [];
        this.outputs = [];
        this.duration = 0;
        this.EUt = 0;
        this.recipes = null;
        
        this.setRecipeMap = function(recipes) {
            this.recipes = recipes;
            return this;
        }
        this.input = function(input) {
            this.inputs.push(input);
            return this;
        }
        this.notConsumable = function(input) {
            this.input(RecipeDictionary.toNotConsumable(input));
            return this;
        }
        this.inputs = function(inputs) {
	        [].push.apply(this.inputs, inputs);
            return this;
        }
        this.output = function(output) {
            this.outputs.push(output);
            return this;
        }
        this.outputs = function(outputs) {
            [].push.apply(this.inputs, inputs);
            return this;
        }
        this.duration = function(duration) {
            this.duration = duration;
            return this;
        }
        this.EUt = function(EUt) {
            this.EUt = EUt;
            return this;
        }
        this.build = function() {
            return new Recipe(inputs, outputs, duration, EUt);
        }
        this.buildAndRegister = function() {
            let builded = this.build();
            recipeMap.addRecipe(builded);
        
            return builded;
        }
    },
};

Callback.addCallback("PostLoaded", function() {
  setLoadingTip("Register recipies for crafting table");
  let t = new com.zhekasmirnov.innercore.api.mod.recipes.workbench.WorkbenchRecipeRegistry().getClass();
  
  let field = t.getDeclaredField("componentQuickAccess");
  field.setAccessible(true);
  RecipeDictionary.recipes = field.get(t);
  
  let fiel = t.getDeclaredField("recipeByUid");
  fiel.setAccessible(true);
  RecipeDictionary.recipesU = fiel.get(t);
  
  let eeed = [{id: 5, data: 0, count: 1, index: 0}];
  Logger.Log("red", eeed[0].count, "ced");
  RecipeDictionary.create();

  RecipeDictionary.getBySources(eeed);
  setLoadingTip("");
});