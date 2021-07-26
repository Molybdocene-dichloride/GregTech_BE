let concater = function(formulareal, material) {
    
	if(!material.formula.protons) {
		for(let i in material.formula) {
			concater(formulareal, material.formula[i].material);
			formulareal = formulareal.concat(material.formula[i].count);
		}
	} else if(!material.formula.neutrons) {
		formulareal = formulareal.concat(material.formula.formula);
	} else if(material.formula.neutrons) {
		formula = formulareal.concat(material.formula.formula);
	}
	return formulareal;
}

IDRegistry.genBlockID("gtblockpipe");
IDRegistry.genItemID("gtmetatool01");
Item.createItem("gtmetatool01", "_",  {name: "stick", meta: 0}, {stack: 1, isTech: true});
Item.setToolRender(ItemID.gtmetatool01, true);

Callback.addCallback("tick", function() {
	if(World.getThreadTime() % 20 == 0) {
	  var entities = Entity.getAll();
		for(var i in entities){
			var ent = entities[i];
			if(Entity.getHealth(ent) > 0) {
				var coords = Entity.getPosition(ent);
				damageEntityInR(ent, coords.x, coords.y, coords.z);
			}
		}
	}
});

function damageEntityInR(entity, x, y, z) {
	for(var yy = y-2; yy <= y+1; yy++)
	for(var xx = x-1; xx <= x+1; xx++)
	for(var zz = z-1; zz <= z+1; zz++){
		var blockID = World.getBlockID(Math.floor(xx), Math.floor(yy), Math.floor(zz));
		if(blockID == BlockID.gtblockpipe | blockID == BlockID.gtblockmechanism) {
		  let tile = TileEntity.getTileEntity(Math.floor(xx), Math.floor(yy), Math.floor(zz));
		  if(tile == null) {
		    continue;
		  }
		  if(tile.data.temperature > 60) {
		    let damage = Math.ceil((tile.data.temperature - 60) / 20);
		    
		    Entity.damageEntity(entity, damage);
		    return damage;
		  }
		}
	}
	return 0;
}
//APIs
let MaterialDictionary = {
    types: {},
    dict: {},
    data: [],
    invdata: {},
    lastdata: 0,
    firsted: true,
    firsts: [],
    ids: [],
    //string
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
    //Material
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
    isNumericIDisItemID: function(id) {
        let is = false;
        for(let item in ItemID) {
            if(id == ItemID[item]) {
                is = true;
            }
        }
        return is;
    },
    getBlockIDbyNumberID: function(id) {
        let is = null;
        for(let item in BlockID) {
            if(id == BlockID[item]) {
                is = item;
            }
        }
        return is;
    },
    getItemIDbyNumberID: function(id) {
        let is = null;
        for(let item in ItemID) {
            if(id == ItemID[item]) {
                is = item;
            }
        }
        return is;
    },
    blockvariables: [],
    limit: function(data, id, count, limit, bigdata, limited, material, form, type) {
        if(data == limit) {
			    if(type == "block") {
				    //Block.createBlock(id + (count), this.createvariables(this.blockvariables));
				//this.blockvariables = [];
			    } else if(type == "item") {
				    Item.createItem(id + (count), material.name + form,  [material.name + form, 0], {isTech: true});
				}
			count++;
			data = 0;
		}
		
		if(data == 0) {
            if(type == "block") {
                IDRegistry.genBlockID(id + count);
            this.data[BlockID[id + count]] = [];
            this.ids[form][count] = BlockID[id + count];
                //this.blockvariables = [];
            } else if(type == "item") {
			IDRegistry.genItemID(id + count);
			this.data[ItemID[id + count]] = [];
            }
        }
		//i{
		    if(type == "block") {
		            this.data[BlockID[id + count]][data] = {material: material, form: form};
		            this.invdata[form][material.name] = {id: BlockID[id + count], data: data};
		            
		        //this.blockvariables[data] = {material: material, form: form};
		    } else if(type == "item") {
		            this.data[ItemID[id + count]][data] = {material: material, form: form};
		            this.invdata[form][material.name] = {id: ItemID[id + count], data: data};
		            //this.enddata[form] = data;
		    }
            data++;
            bigdata++;
            /*if(limited) {
				if(type == "block") {
				    //Block.createBlock(id + (count), this.createvariables(this.blockvariables));
				    //Logger.Log("endblock");
				    //this.blockvariables = [];
			    } else if(type == "item") {
				    Item.createItem(id + (count), material.name + form,  [material.name + form, 0],  {isTech: true});
			    }
			    data = 0;
            }*/
		//}
		return [count, data];
    },
    createvariables: function(blockvariables) {
        let variables = [];
        for(let variable in blockvariables) {
            variables[variable] = {name: blockvariables[variable].material.name + " " + blockvariables[variable].form, texture: [[blockvariables[variable].material.name + "_" + blockvariables[variable].form, 0]], inCreative: true};
        }
        return variables;
    },
    getTexture : function(item) {
/*Item.registerNameOverrideFunction("gtmetaitem01", function(item, name){
			return MaterialDictionary.types[type][item.data];
    });*/
    let material = MaterialDictionary.data[item.id][item.data].material;
 let form = MaterialDictionary.data[item.id][item.data].form;
if(form == undefined) return {name: "unknown"};
   if(material == undefined) return {name: "unknown_" + form};
    return {name: material.name + "_" + form};
  },
  genItem: function(material, form, count) {
    let data;
    for(let i = 0; i < Object.keys(MaterialDictionary.types.length); i++) {
      let iobj = MaterialDictionary.types[Object.keys(MaterialDictionary.types)[i]];
      
      for(let i = 0; i < data[iobj].length; i++) {
        if(data[id][i].material == material & data[id][i].form == form) {
          data = i;
        }
      }
    }
    
    let xtra = new ItemExtraData();
xtra.putString("name", material.name);
    return {
      id: id,
      count: count,
      data: data,
      extra: xtra
    };
  },
  
genItemWithId: function(id, material, form, count) {
  let data;
  for(let i = 0; i < data[id].length; i++) {
    if(data[id][i].material == material & data[id][i].form == form) {
      data = i;
    }
  }
  
    var xtra = new ItemExtraData();
xtra.putString("name", material.name);
    return {
      id: id,
      count: count,
      data: data,
      extra: xtra
    };
  },
  
  upgradeItem: function(material, item) {
    var xtra = new ItemExtraData();
 xtra.putString("name", material.name);
    item.extra = xtra;
    return item;
},
};


function Isotope(protons, neutrons, halfLife, decayTo) {
	this.protons = protons;
    this.neutrons = neutrons;
    this.halfLifeSeconds = halfLife;
    this.decayTo = decayTo;
};
function Element(formula, name, protons, isotopes) {
	this.formula = formula;
    this.name = name;
    this.protons = protons;
	this.isotopes = isotopes;
	for(let i in isotopes) {
	    this[i] = isotopes[i];
	}
};
let Elements = {
	H: new Element("H", "Hydrogen", 1, [new Isotope(-1, 1, 0, null), new Isotope(-1, 1, 1, null), new Isotope(-1, 1, 2, null)]),
	He: new Element("He", "Helium", 2, [new Isotope(2, 1, -1, null), new Isotope(2, 2, -1, null)]),
	Li: new Element("Li", "Lithium", 3, [new Isotope(3, 4, -1, null)]),
	Be: new Element("Be", "Beryllium", 4, [new Isotope(4, 5, -1, null)]),
	B: new Element("B", "Boron", 5, [new Isotope(5, 5, -1, null)]),
	C: new Element("C", "Carbon", 3, [new Isotope(6, 6, -1, null)]),
	N: new Element("N", "Nitrogen", 4, [new Isotope(7, 7, -1, null)]),
	O: new Element("O", "Oxygen", 5, [new Isotope(8, 8, -1, null)]),
	F: new Element("F", "Fluorine", 9, [new Isotope(9, 9, -1, null)]),
	Ne: new Element("Ne", "Neon", 10, [new Isotope(10, 10, -1, null)]),
	Na: new Element("Na", "Sodium", 11, [new Isotope(11, 11, -1, null)]),
	Mg: new Element("Mg", "Magnesium", 12, [new Isotope(12, 12, -1, null)]),
	Al: new Element("Al", "Aluminium", 13, [new Isotope(13, 13, -1, null)]),
	Si: new Element("Si", "Silicon", 14, [new Isotope(14, 14, -1, null)]),
	P: new Element("P", "Phosphor", 15, [new Isotope(15, 15, -1, null)]),
    	S: new Element("S", "Sulfur", 16, [new Isotope(16, 16, -1, null)]),
	Cl: new Element("Cl", "Chlorine", 17, [new Isotope(17, 18, -1, null)]),
	Ar: new Element("Ar", "Argon", 18, [new Isotope(18, 22, -1, null)]),
	K: new Element("K", "Potassium", 19, [new Isotope(19, 20, -1, null)]),
	Ca: new Element("Ca", "Calcium", 20, [new Isotope(20, 20, -1, null)]),
	Sc: new Element("Sc", "Scadium", 21, [new Isotope(21, 24, -1, null)]),
    	Ti: new Element("Ti", "Titanium", 22, [new Isotope(22, 26, -1, null)]),
	V: new Element("V", "Vanadium", 23, [new Isotope(23, 28, -1, null)]),
    	Cr: new Element("Cr", "Chrome", 24, [new Isotope(24, 28, -1, null)]),
	Mn: new Element("Mn", "Manganese", 25, [new Isotope(25, 30, -1, null)]),
	Fe: new Element("Fe", "Iron", 26, [new Isotope(26, 30, -1, null)]),
	Ni: new Element("Ni", "Nickel", 27, [new Isotope(27, 32, -1, null)]),
	Co: new Element("Co", "Cobalt", 28, [new Isotope(28, 30, -1, null)]),
	Cu: new Element("Cu", "Copper", 29, [new Isotope(29, 34, -1, null)]),
    	Zn: new Element("Zn", "Zinc", 30, [new Isotope(30, 35, -1, null)]),
	Ga: new Element("Ga", "Gallium", 31, [new Isotope(31, 39, -1, null)]),
	Ge: new Element("Ge", "Germanium", 32, [new Isotope(32, 40, -1, null)]),
	As: new Element("As", "Arsenic", 33, [new Isotope(33, 42, -1, null)]),
	Se: new Element("Se", "Selenium", 34, [new Isotope(34, 45, -1, null)]),
	Br: new Element("Br", "Bromine", 35, [new Isotope(35, 48, -1, null)]),
	Kr: new Element("Kr", "Krypton", 36, [new Isotope(36, 48, -1, null)]),
	Rb: new Element("Rb", "Rubidium", 37, [new Isotope(37, 48, -1, null)]),
	Sr: new Element("Sr", "Strontium", 38, [new Isotope(38, 49, -1, null)]),
	Y: new Element("Y", "Yttrium", 39, [new Isotope(39, 50, -1, null)]),
    	Zr: new Element("Nb", "Zirconium", 40, [new Isotope(40, 51, -1, null)]),
	Nb: new Element("Nb", "Niobium", 41, [new Isotope(41, 53, -1, null)]),
    	Mo: new Element("Mo", "Molybdenum", 42, [new Isotope(42, 53, -1, null)]),
	Tc: new Element("Tc", "Technetium", 43, [new Isotope(43, 55, -1, null)]),
	Ru: new Element("Ru", "Ruthenium", 44, [new Isotope(44, 57, -1, null)]),
	Rh: new Element("Rh", "Rhodium", 45, [new Isotope(45, 58, -1, null)]),
	Pd: new Element("Pd", "Palladium", 46, [new Isotope(46, 60, -1, null)]),
	Ag: new Element("Ag", "Silver", 47, [new Isotope(47, 60, -1, null)]),
    	Cd: new Element("Cd", "Cadmium", 48, [new Isotope(48, 64, -1, null)]),
	In: new Element("In", "Indium", 49, [new Isotope(49, 65, -1, null)]),
	Sn: new Element("Sn", "Tin", 50, [new Isotope(50, 68, -1, null)]),
	Sb: new Element("Sb", "Antimony", 51, [new Isotope(51, 70, -1, null)]),
	Te: new Element("Te", "Tellurium", 52, [new Isotope(52, 75, -1, null)]),
	I: new Element("I", "Iodine", 53, [new Isotope(53, 74, -1, null)]),
	Xe: new Element("Xe", "Xenon", 54, [new Isotope(54, 77, -1, null)]),
  
	Cs: new Element("Cs", "Caesium", 55, [new Isotope(55, 77, -1, null)]),
	Ba: new Element("Ba", "Barium", 56, [new Isotope(56, 81, -1, null)]),
	La: new Element("La", "Lantanium", 57, [new Isotope(57, 81, -1, null)]),
    	Ce: new Element("Ce", "Cerium", 58, [new Isotope(58, 82, -1, null)]),
	Pr: new Element("Pr", "Praseodium", 59, [new Isotope(59, 81, -1, null)]),
    	Nd: new Element("Nd", "Neodymium", 60, [new Isotope(60, 84, -1, null)]),
	Pm: new Element("Pm", "Promethium", 61, [new Isotope(61, 83, -1, null)]),
	Sm: new Element("Sm", "Samarium", 62, [new Isotope(62, 88, -1, null)]),
	Eu: new Element("Eu", "Europium", 63, [new Isotope(63, 88, -1, null)]),
	Gd: new Element("Gd", "Gadolinium", 64, [new Isotope(64, 93, -1, null)]),
	Tb: new Element("Tb", "Terbium", 65, [new Isotope(65, 93, -1, null)]),
    	Dy: new Element("Dy", "Dysprosium", 66, [new Isotope(66, 96, -1, null)]),
	Ho: new Element("Ho", "Holmium", 67, [new Isotope(67, 97, -1, null)]),
	Er: new Element("Er", "Erbium", 68, [new Isotope(68, 99, -1, null)]),
	Tm: new Element("Tm", "Thulium", 69, [new Isotope(69, 99, -1, null)]),
	Yb: new Element("Yb", "Ytterbium", 70, [new Isotope(70, 103, -1, null)]),
	Lu: new Element("Lu", "Lutetium", 71, [new Isotope(71, 103, -1, null)]),
	Hf: new Element("Hf", "Hafnium", 72, [new Isotope(72, 106, -1, null)]),
	Ta: new Element("Ta", "Tantalum", 73, [new Isotope(73, 93, -1, null)]),
    	W: new Element("W", "Wolframium", 74, [new Isotope(74, 96, -1, null)]),
	Re: new Element("Rh", "Rhenium", 75, [new Isotope(75, 97, -1, null)]),
	Os: new Element("Os", "Osmium", 76, [new Isotope(76, 99, -1, null)]),
	Ir: new Element("Ir", "Iridium", 77, [new Isotope(77, 99, -1, null)]),
	Pt: new Element("Pt", "Platinum", 78, [new Isotope(78, 103, -1, null)]),
	Au: new Element("Au", "Gold", 79, [new Isotope(79, 103, -1, null)]),
	Hg: new Element("Hg", "Mercury", 80,[new Isotope(80, 106, -1, null)]),
	Tl: new Element("Tl", "Thallium", 81, [new Isotope(81, 123, -1, null)]),
	Pb: new Element("Pb", "Lead", 82, [new Isotope(82, 125, null)]),
	Bi: new Element("Bi", "Bismuth", 83, [new Isotope(83, 125, -1, null)]),
	Po: new Element("Po", "Polonium", 84, [new Isotope(84, 124, -1, null)]),
	At: new Element("At", "Astatine", 85, [new Isotope(85, 124, -1, null)]),
	Rn: new Element("Rn", "Radon", 86, [new Isotope(86, 134, -1, null)]),
	Fr: new Element("Fr", "Francium", 87, [new Isotope(87, 134, -1, null)]),
	Ra: new Element("Ra", "Radium", 88, [new Isotope(88, 136, -1, null)]),
	Ac: new Element("Ac", "Actinium", 89, [new Isotope(89, 136, -1, null)]),
    	Th: new Element("Th", "Thorium", 90, [new Isotope(90, 140, -1, null)]),
	Pa: new Element("Pa", "Pratactinium", 91, [new Isotope(91, 138, -1, null)]),
    	U: new Element("U", "Uranium", 92, {238: new Isotope(92, 146, -1, null), 235: new Isotope(92, 143, -1, null)}),
	Np: new Element("Np", "Neptunium", 93, [new Isotope(93, 144, -1, null)]),
	Pu: new Element("Pu", "Pltonium", 94, [new Isotope(94, 152, -1, null)]),
	Am: new Element("Am", "Americium", 95, [new Isotope(95, 149, -1, null)]),
	Cm: new Element("Cm", "Curium", 96, [new Isotope(96, 153, -1, null)]),
	Bk: new Element("Bk", "Berkelium", 97, [new Isotope(97, 152, -1, null)]),
    	Cf: new Element("Cf", "Californium", 98, [new Isotope(98, 153, -1, null)]),
	Es: new Element("Es", "Ensteinium", 99, [new Isotope(99, 153, -1, null)]),
	Fm: new Element("Fm", "Fermium", 100, [new Isotope(100, 157, -1, null)]),
	Md: new Element("Md", "Mendeleevium", 101, [new Isotope(101, 157, -1, null)]),
	No: new Element("No", "Nobelium", 102, [new Isotope(102, 157, -1, null)]),
	Lr: new Element("Lr", "Loyrencium", 103, [new Isotope(103, 159, -1, null)]),
	Rf: new Element("Rf", "Rutherfordium", 104, [new Isotope(104, 161, -1, null)]),
	Db: new Element("Db", "Dubnium", 105, [new Isotope(105, 163, -1, null)]),
	Sg: new Element("Sg", "Seaborgium", 106, [new Isotope(106, 165, -1, null)]),
	Bh: new Element("Bh", "Bohrium", 107, [new Isotope(107, 163, -1, null)]),
	Hs: new Element("Hs", "Hassium", 108, [new Isotope(108, 169, -1, null)]),
	Mt: new Element("Mt", "Meitnerium", 109, [new Isotope(109, 167, -1, null)]),
	Ds: new Element("Ds", "Darmstadtium", 110, [new Isotope(110, 171, -1, null)]),
	Rg: new Element("Rg", "Roentgenium", 111, [new Isotope(111, 169, -1, null)]),
	Cn: new Element("Cn", "Copernicium", 112, [new Isotope(112, 173, -1, null)]),
	Nh: new Element("Nh", "Nihonium", 113, [new Isotope(113, 171, -1, null)]),
	Fl: new Element("Fl", "Flerovium", 114, [new Isotope(114, 175, -1, null)]),
	Mc: new Element("Mc", "Moscovium", 115, [new Isotope(115, 173, -1, null)]),
	Lv: new Element("Lv", "Livermorium", 116, [new Isotope(116, 177, -1, null)]),
	Ts: new Element("Ts", "Tennessine", 117, [new Isotope(117, 177, -1, null)]),
	Og: new Element("Og", "Oganesson", 118, [new Isotope(118, 176, -1, null)]),
    	//stargate
	Tr: new Element("Tr", "Tritanium", 119, [new Isotope(119, 178, -1, null)]),
	Dr: new Element("Dr", "Duranium", 120, [new Isotope(120, 180, -1, null)]),
	Nq: new Element("Nq", "Naquadah", 121, [new Isotope(121, 172, -1, null)]),
};
function MaterialStack(material, count) {
	this.material = material;
	this.count = count;
};
function of() {
    let stacks = []; 
    for(let i in arguments) {
        stacks[i] == arguments[i];
    }
	return stacks;
}

function Material(name, formula, type, materialGenerationFlags, pointMelting, pointBoiling) {
  this.name = name;
  this.formula = formula;
  this.type = type;
  this.pointBoiling = pointBoiling;
  this.pointMelting = pointMelting;
	this.verifyMaterialBits = function(materialBits) {
		return materialBits;
	};
	this.materialGenerationFlags = this.verifyMaterialBits(materialGenerationFlags);
	this.addFlag = function(materialGenerationFlags) {
		let combined = 0;
		for (let materialGenerationFlag in materialGenerationFlags) {
            		combined |= materialGenerationFlag;
        	}
        	  	
		this.materialGenerationFlags |= verifyMaterialBits(combined);
	};
	this.hasFlag = function(generationFlag) {
        return Flags.hasFlag(materialGenerationFlags, generationFlag);
	};
	this.genItem = function(form, count) {
		MaterialDictionary.genItem(this, form, count);
	};
  
	this.upgradeItem = function(item, form) {
		MaterialDictionary.upgradeItem(this, item, form);
	};
	
	this.formulatext = "";
	this.formulatext = concater(this.formulatext, this);
	
	this.usablename = this.name[0].toUpperCase() + this.name.substring(1);
}