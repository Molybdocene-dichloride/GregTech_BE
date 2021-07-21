Callback.addCallback('DestroyBlockStart', function (coords, block, playerUid) {
  let player = new PlayerActor(playerUid);
    let item = player.getInventorySlot(player.getSelectedSlot());
	  if(item.id == ItemID.gtmetatool01) {
	    let name = "_NULL";
    if(item.extra) name = item.extra.getString("name");
    let t = false;

    for(let e in ToolType) {
      if(ToolDictionary.getTypeByData(item.data) == ToolType[e]) t = true;
        
      }
      ToolLib.setTool(ItemID.gtmetatool01, String(name).valueOf(), ToolDictionary.getTypeByData(item.data));
    }
    let i = -1;
    /*for(let c = 0; c < 38; c++) {
    if(block.id == BlockID["gtblockores" + c]) i = c;
    }*/
    if(OreDictionary.number[block.id]) i = OreDictionary.number[block.id];
    if(i >= 0 && i % 2 == 0) {
      let type = "stone";
      ToolAPI.registerBlockMaterial(block.id, "stone", OreDictionary.invsmallgens[block.id].level + 1, false);
      let destroytime = 3;
      let explosionres = 15;
      Block.createSpecialType({
	          base: 1,
	          solid: true,
	          destroytime: 3,
	          explosionres: 15,
	          lightopacity: 15,
	          renderlayer: 2,
	          translucency: 0
      }, "gtore");
    } else if(i >= 0) {
      ToolAPI.registerBlockMaterial(block.id, "stone", OreDictionary.invsmallgen[block.id].level, false);
      Block.createSpecialType({
	      base: 1,
	      solid: true,
	      destroytime: 3,
	      explosionres: 15,
	      lightopacity: 15,
	      renderlayer: 2,
	      translucency: 0
      }, "gtore");
    }
    if(block.id == BlockID["gttree"]) {
      Logger.Log("gttree", "zaeqo");
          if(block.data == 0 || block.data == 2 || block.data == 4) {
            ToolAPI.registerBlockMaterial(block.id, "wood", 0, false);
            Block.createSpecialType({
	            base: 1,
	            solid: true,
	            destroytime: 3,
	            explosionres: 15,
	            lightopacity: 15,
	            renderlayer: 2,
	            translucency: 0
              }, "gtwood");
          } else {
            ToolAPI.registerBlockMaterial(block.id, "plant", 0, false);
            Block.createSpecialType({
	            base: 1,
	            solid: false,
	            destroytime: 0.2,
	            explosionres: 1,
	            lightopacity: 15,
	            renderlayer: 2,
	            translucency: 0,
	            sound: "grass",
	            renderallfaces: true,
              }, "gtwood");
              
          }
        }
});
Block.registerDropFunction(BlockID.gttree, function(coords, id, data, dig, enchant, item) {
    if(data == 1) {
      if(item.id == 359) return [[id, 1, data]];
      if(Math.random() < 0.04) return [[id, 1, 3]];
      if(Math.random() > 0.06 && Math.random() < 0.08) return [[280, 1, 0]];
      return [];
    }
    return [[id, 1, data]];
})
/*
type:  type {
	name:
	blocktype:
}
material: function Material
*/
let ToolDictionary = {
  WHITELIST: {
    MATERIAL: function (materials) {
      return materials;
    },
    TYPE: function (type) {
      
    },
  },
    types: [],
    materials: {},
    rods: {},
    invdata: {},
    registerType: function(type) {
    this.invdata[type.name] = {id: ItemID.gtmetatool01, data: this.types.length};
    type.toolDamage = 0;
    type.onDestroy = function(item, coords, block) {
      ToolDictionary.damageTool(item);
      return true;
    },
type.onBroke = function(item){return false;},
type.onAttack = function(item, mob){
    ToolDictionary.damageTool(item);
		return true;
	},
ToolType["gt" + type.name] = type;
this.types[this.types.length] = ToolType["gt" + type.name];
Logger.Log(this.types[this.types.length - 1].name, this.types.length - 1);
    },
    //after registertype
    registerMaterial: function(tool) {
        if(tool.material.type == "FLUID" || tool.material.type == "DUST") return;
        //this.materials[material.name] = material;
        this.materials[tool.material.name] = tool;
        tool.name = tool.material.name;
        tool.name2 = tool.material.name2;
        tool.level = tool.level + 1;
        tool.efficiency = tool.miningspeed;
        tool.damage = tool.attackdamage,
//this.rods[material.name] = rod;
ToolAPI.addToolMaterial(tool.name, tool);
    },
    getTypeByData: function(data) {
      return this.types[data];
    },
upgradeTool: function(material, tool) {
    let xtra = new ItemExtraData();
    /*xtra.setCustomName("§R" +
    material.name[0].toUpperCase() + material.name.substring(1) + " " + form + "\n" + material.formula);*/
 xtra.putString("name", material.name);
Logger.Log(material.name, "fuk");
  xtra.putInt("damage", 0);
    tool.extra = xtra;
    return tool;
},
damageTool: function(tool, slot) {
    let name;
    if(tool.extra) {
      Logger.Log(tool.extra.getInt("damage"), "damaged");
    } else {
      Logger.Log(0, "damaged");
    }
  if(tool.extra != null) {
  if(tool.extra.getInt("damage") != null) {
    tool.extra.putInt("damage", tool.extra.getInt("damage") + 50);
} else {
tool.extra.putInt("damage", 0 + 50);
}
} else {
  tool.extra = new ItemExtraData();
  tool.extra.putInt("damage", 0 + 50);
}
if(tool.extra.getString("name") == null) tool.extra.putString("name", "_NULL");
name = tool.extra.getString("name");
Logger.Log(name, "naming");
Logger.Log(tool.extra.getInt("damage"), "дамаг");
Logger.Log(MaterialDictionary.dict[name].durability, "дurability");
if(tool.extra.getInt("damage") >= ToolAPI.toolMaterials[name].durability) {
tool.id = tool.count = tool.data = 0;
tool.extra = null;
}
},
addToCreative: function() {
    Item.setCategory(ItemID.gtmetatool01, Native.ItemCategory.TOOL);
    for(let i in this.types) {
        Item.addToCreative(ItemID.gtmetatool01, 1, i);
    }
}
};