let ClientMaterialDictionary = {
    types: {},
    dict: {},
    data: [],
    invdata: {},
    lastdata: 0,
    registerForm: function(id, flag, form) {
      if(!this.types[id]) this.types[id] = {};
      //this.startData[form] = Object.keys(this.types[id]).length * 1000;
      this.types[id][form] = flag;
      this.invdata[form] = [];
      this.ids[form] = [];
    },
    registerMaterial: function(material) {
        setLoadingTip("GTMaterials:" + material.name);
        this.dict[material.name] = material;
    },
    addMaterials: function() {
	    for(let preid in this.types) {
        	let type = preid;
        	let id;
        	let limit;
        	if(type == "block") {
        	    id = "gtmetablock";
        	    limit = 16;
        	} else if(type == "item") {
        	    id = "gtmetaitem";
        	    limit = 32000;
        	}
        	let count = 1;
        	let bigdata = 0;
		let data = 0;
		let limited = false;
		
		for(let i = 0; i < Object.keys(this.types[type]).length; i++) {
            		let form = Object.keys(this.types[type])[i];
            if(type == "item") {
                data = 1000 * i;
                this.firsts[form] = {id: ItemID[id + count], data: data};
            } else if(type == "block") {
                //data = data;
                this.firsts[form] = {id: BlockID[id + count], data: data};
                 //this.ids[form][count] = id + count;
            }

			for(let e = 0; e < Object.keys(this.dict).length; e++) {

				let material = this.dict[Object.keys(this.dict)[e]];
				setLoadingTip("GTMaterials:" + material.name);
				//Logger.Log(material.name, "dsd,");
				if(material.type == "MARKER" || material.type == "FLUID") continue;
				if(!(material.type == "DUST" || material.type == "SOLID" || material.type == "INGOT" || material.type == "GEM")) {
					if(form == "dust" || form == "smallpiledust" || form == "tinypiledust") {
						continue;
					}
				}
				if(!(material.type == "SOLID" || material.type == "INGOT" || material.type == "GEM")) {
					if(form == "block") {
						continue;
					}
				}
				if(material.type != "INGOT") {
					if(form == "ingot" || form == "nugget") {
						continue;
					}	
				}
				if(material.type != "GEM") {
					if(form == "gem") {
						continue;
					}	
				}
				if(material.hasFlag(this.types[type][form]) || (OreDictionary.evblocks[material.name] && form == "dustImpure")) {
				    /*if(i == Object.keys(this.types[type]).length - 1 && e == Object.keys(this.dict).length - 1) {
				        Logger.Log(e, "zoosia");
					    limited = true;
					    }*/
		                let arr = this.limit(data, id, count, limit, bigdata, limited, material, form, type);
		                count = arr[0];
		                data = arr[1];
		                limited = false;
                }
			}
		}
		if(id == "gtmetaitem") {

		    Item.createItem(id + (count), "_",  ["_", 0],  {isTech: true});

		}
	    }
    },
	 addToCreative: function() {

    for(let id in this.data) {

        Item.setCategory(id, Native.ItemCategory.FOOD);
        if(invertedIDs.isNumericIDisItemID(id)) {
	        for(let data in this.data[id]) {
		        Item.addToCreative(invertedIDs.itemID[id], 1, data);
	        }
        } else {
            this.blockvariables = [];
            
            for(let i in this.data[id]) {
	            this.blockvariables[i] = this.data[id][i];
            }
			Block.createBlock(invertedIDs.blockID[id], this.createvariables(this.blockvariables));
			//this.blockvariables = [];
        }
    }
    },
}