let TileEntityRegistry = {

	// adds energy type for tile entity prototype

	addEnergyType: function(Prototype, energyType) {
		/*if (!Prototype.__energyLibInit) {
			this.setupInitialParams(Prototype);
		}*/
		Prototype.__Types[energyType] = energyType;
	},

	//same as addEnergyType, but works on already created prototypes, accessing them by id
	addEnergyTypeForId: function(id, energyType) {
		let Prototype = TileEntity.getPrototype(id);
		if (Prototype) {
			this.addEnergyType(Prototype, energyType);
		}
		else {
			Logger.Log("cannot add energy type no prototype defined for id " + id, "ERROR");
		}
	},

	setupInitialParams: function(Prototype) {
		Prototype.__energyLibInit = true;
		
		Prototype.__Types = {};
		Prototype.__Nets = {};
		//Prototype.__connectedNets = {};

		Prototype.__init = Prototype.init || function() {};
		Prototype.__tick = Prototype.tick || function() {};
		Prototype.__destroy = Prototype.destroy || function() {};
		
		if (!Prototype.energyTick) {
			Prototype.energyTick = function(type, src) {
				// called for each energy type
			}
		}
		
		Prototype.receive = Prototype.receive || function() {
			return 0;
		}
		
		Prototype.canReceive = Prototype.canReceive || function() {
			return true;
		}
		
		if (Prototype.isSource) {
		  Prototype.isGenerator = Prototype.isGenerator || function() {
				return false;
			}
			Prototype.canExtract = Prototype.canExtract || function() {
				return true;
			}
		}
		else {
		  Prototype.isGenerator = function() {
				return false;
			}
			Prototype.canExtract = function() {
				return false;
			}
		}
		
		Prototype.init = function() {
		  this.__init();
		  this.data.pipeEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
		}
		
		Prototype.destroy = function() {
			TileEntityRegistry.removeMachineAccessAtCoords(this.x, this.y, this.z);
			
			PipeNetBuilder.rebuild();
			this.__destroy();
		}
			
		Prototype.tick = function() {
			this.__tick();
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
		}
	},



	/* machine is tile entity, that uses energy */
	machineIDs: {},

	isMachine: function(id) {
		return this.machineIDs[id];
	},

	quickCoordAccess: {},
	addMacineAccessAtCoords: function(x, y, z, machine) {
		this.quickCoordAccess[x + ":" + y + ":" + z] = machine;
	},

	removeMachineAccessAtCoords: function(x, y, z) {
		delete this.quickCoordAccess[x + ":" + y + ":" + z];
	},

	accessMachineAtCoords: function(x, y, z) {
		return this.quickCoordAccess[x + ":" + y + ":" + z];
	},

	executeForAllInNet: function(net, func) {
		for (var i in net.tileEntities) {
			var mech = net.tileEntities[i];
			func(mech);
		}
	},
};


var PipeNetBuilder = {

	pipeNets: [],

	addPipeNet: function(net) {
		this.pipeNets.push(net);
	},

	removeNet: function(net) {
		TileEntityRegistry.executeForAllInNet(net, function(tileEntity) {
			delete tileEntity.__connectedNets[net.netId];
		});
		
		for (var i in net.connectedNets) {
			net.connectedNets[i].removeConnection(net);
		}
		net.removed = true;
		for (var i in this.pipeNets) {
			if (this.pipeNets[i] == net) {
				this.pipeNets.splice(i, 1);
				break;
			}
		}
	},

	removeNetOnCoords: function(x, y, z) {
		var net = this.getNetOnCoords(x, y, z);
		if (net) {
			this.removeNet(net);
		}
	},

	removeNetByBlock: function(x, y, z, pipeId) {
		if (World.getBlockID(x, y, z) == pipeId) {
			PipeNetBuilder.removeNetOnCoords(x, y, z);
		}
	},
	
	mergeNets: function(net1, net2) {
		for (let key in net2.pipeMap) {
			net1.pipeMap[key] = true;
		}
		for (let i in net2.tileEntities) {
			net1.addUnit(net2.tileEntities[i]);
		}
		for (let i in net2.connectedNets) {
			var otherNet = net2.connectedNets[i];
			net1.addConnection(otherNet);
			otherNet.addConnection(net1);
		}
		this.removeNet(net2);
	},
	
	getForTile: function(tile) {
	  let isnet = true;
	  let net = null;
		for (let i in this.pipeNets) {
		  let pipes = this.pipeNets[i].getUnits();
		  for(let e in pipes) {
		    if(pipes[e].x == tile.x & pipes[e].y == tile.y & pipes[e].z == tile.z) {
		      isnet = false;
		      net = nett;
		      break;
		    }
		  }
		  if(!isnet) {
		    break;
		  }
		}
		return net;
	},
	buildForTile: function(tile, type) {
	  let isnet = true;
	  let net = null;
		for(let i in this.pipeNets) {
		  let pipes = this.pipeNets[i].getUnits();
		  for(let e in pipes) {
		    if(pipes[e].x == tile.x & pipes[e].y == tile.y & pipes[e].z == tile.z) {
		      isnet = false;
		      //net = nett;
		      break;
		    }
		  }
		  if(!isnet) {
		    break;
		  }
		}
		if(isnet) {
		  net = new PipeNet(type);
		  net.sourceTile = tile;
		  net.sourceCoords = {x : tile.x, y: tile.y, z: tile.z};
		  this.addPipeNet(net);
		
		  for (let side = 0; side < 6; side++) {
				var c = this.getRelativeCoords(tile.x, tile.y, tile.z, side);
				this.buildTileNet(net, c.x, c.y, c.z, side ^ 1);
		  }
		}
		
		return net;
	},
	
	buildTileNet: function(net, x, y, z, side) {
		var type = net.Name;
		var tile = TileEntityRegistry.accessMachineAtCoords(x, y, z);
		if (tile && tile.__Types[type]) {
				net.enabledSide[side] = true;
		}
	},
	rebuild: function() {
      PipeNetBuilder.pipeNets = [];
			  //priority
			  let machinesource = [];
			  let machinestorage = [];
			  let others = [];
			  
			  //Logger.Log("zza");
			  for(let i in TileEntityRegistry.quickCoordAccess) {
			      
			    let tile = TileEntityRegistry.quickCoordAccess[i];
			    
			    if(tile.isSource() && tile.isGenerator()) {
			        
			      machinesource.push(tile);
			    } else if(tile.isSource()) {
			      machinestorage.push(tile);
			    } else {
			      others.push(tile);
			    }
			  }
			  for(let i in machinesource) {
			    let created = PipeNetBuilder.buildForTile(machinesource[i], "liquid");
			    
			    if(created != null) {
			      //is tileentity is not connected
			      machinesource[i].__Nets["liquid"] = created;
			    }
			  }
			  for(let i in machinestorage) {
			    let created = PipeNetBuilder.buildForTile(machinestorage[i], "liquid");
			    if(created != null) {
			      //is tileentity is not connected
			      machinestorage[i].__Nets["liquid"] = created;
			    }
			  }
			  for(let i in others) {
			      
			    let created = PipeNetBuilder.buildForTile(others[i], "liquid");
			    if(created != null) {
			      //is tileentity is not connected
			      others[i].__Nets["liquid"] = created;
			    }
			  }
			  
},
	/*rebuildForPipe: function(x, y, z, id) {
		var blockID = World.getBlock(x, y, z);
		if (blockID == id && ! PipeNetBuilder.getNetOnCoords(x, y, z)) {
			this.buildForPipe(x, y, z, blockID);
		}
	},*/
	
	buildRecursive: function(net, pipeId, x, y, z, side) {
		if (net.removed) return;
		
		var coordKey = x + ":" + y + ":" + z;
		if (net.pipeMap[coordKey]) {
			return;
		}
		
		var type = net.Name;
		var tileEntity = TileEntityRegistry.accessMachineAtCoords(x, y, z);
		if (tileEntity && tileEntity.__pipeTypes[type]) {
			if (tileEntity.isSource(type)) {
				var tnet = tileEntity.__Nets[type];
				if (tnet) {
					tnet.addConnection(net);
					net.addConnection(tnet);
				}
			}
			/*if (tileEntity.can*/
				net.addUnit(tileEntity);
		}
		else {
			var otherNet = this.getNetOnCoords(x, y, z);
			if (otherNet == net) {
				return;
			}
			
			var block = World.getBlock(x, y, z);
			if (pipeId == block.id) {
				if (otherNet) {
					this.mergeNets(net, otherNet);
				}
				else {
					net.pipeMap[coordKey] = true;
					this.rebuildFor6Sides(net, block, x, y, z);
				}
			}
			else if (otherNet) {
				if (otherNet.Name == type) {
					net.addConnection(otherNet);
					otherNet.addConnection(net);
				}
			}
			else if (PipeDictionary.isPipe(block.id, block.data, type)) {
				this.buildForPipe(x, y, z, block.id);
			}
		}
	},

	rebuildFor6Sides: function(net, pipeBlock, x, y, z) {
		/*var pipeData = PipeDictionary.getPipeData(pipeBlock.id);*/
		var coord1 = {x: x, y: y, z: z};
		for(var side = 0; side < 6; side++) {
			var coord2 = this.getRelativeCoords(x, y, z, side);
			if(TileEntity.getTileEntity(x, y, z).canConnect(pipeBlock, coord2, side)) {
				this.buildRecursive(net, pipeBlock.id, coord2.x, coord2.y, coord2.z, side ^ 1);
			}
		}
	},
	
	
	rebuildTileNet: function(tile) {
		var nets = tile.__Nets;
		for (var i in nets) {
			PipeNetBuilder.removeNet(nets[i]);
			delete nets[i];
		}
		PipeNetBuilder.rebuildTileConnections(tile.x, tile.y, tile.z, tile);
	},
	
	rebuildTileConnections: function(x, y, z, tile) {
		for (var name in tile.__Types) {
			for (var side = 0; side < 6; side++) {
				//if (tile.canReceive(side, name)) {
					var c = this.getRelativeCoords(x, y, z, side);
					var tileSource = TileEntityRegistry.accessMachineAtCoords(c.x, c.y, c.z);
					if (tileSource && tileSource.__Types[name]) {
						//if (tileSource.canExtract(side ^ 1, name)) {
							var net = tileSource.__Nets[name];
							if (net) net.addUnit(tile);
						//}
					}
					else {
						var net = this.getNetOnCoords(c.x, c.y, c.z);
						if (net && net.Name == name) {
							net.addUnit(tile);
						}
					//}
				}
			}
		}
	},

	getNetOnCoords: function(x, y, z) {
		for (var i in this.Nets) {
			var net = this.Nets[i];
			var key = x + ":" + y + ":" + z;
			if (net.pipeMap[key]) return net;
		}
		return null;
	},
	
	getNetByBlock: function(x, y, z, pipeId) {
		if (World.getBlockID(x, y, z) == pipeId) {
			return this.getNetOnCoords(x, y, z);
		}
		return null;
	},

	tickPipeNets: function() {
		for (var i in this.pipeNets) {
		  
			this.pipeNets[i].tick();
		}
	},
	directions: [
			{x: 0, y: -1, z: 0}, // down
			{x: 0, y: 1, z: 0}, // up
			{x: 0, y: 0, z: -1}, // east
			{x: 0, y: 0, z: 1}, // west
			{x: -1, y: 0, z: 0}, // south
			{x: 1, y: 0, z: 0} // north
		],
	getSide: function(relative) {
	  for(let i = 0; i < this.directions.length; i++) {
	    if(this.directions[i].x == relative.x & this.directions[i].y == relative.y & this.directions[i].z == relative.z) {
	      return i;
	    }
	  }
	  return null;
	},
	getRelativeSide: function(coords1/*main side*/, coords2) {
	  let relative = {x: coords2.x - coords1.x, y: coords2.y - coords1.y, z: coords2.z - coords1.z};
	  return this.getSide(relative);
	},
	getRelativeCoords: function(x, y, z, side) {
		var dir = this.directions[side];
		return {x: x + dir.x, y: y + dir.y, z: z + dir.z};
	},
	sideToNeighboring: function(side) {
	  if(side % 2 == 0) {
	    return side + 1;
	  } else {
	    return side - 1;
	  }
	}
}

var GLOBAL_WEB_ID = 0;
function PipeNet(Type, overloadFunc) {

	this.Type = Type; //item, liquid

	this.Name = Type.name;
	
	this.netId = GLOBAL_WEB_ID++;
	//this.onOverload = overloadFunc || function() {};
	this.sourceTile = null;
	this.sourceCoords = null;
	this.enabledSide = [];
	let self = this;
	this.source = {
		parent: function() {
			return self;
		},
		
		add: function(pretile, amount, type, coords, sidepre) {
		  
		  //Logger.Log(amount, "io");
		  
			var add = self.add(pretile, amount, type, coords, sidepre);
			//Logger.Log(add, "io's");
			return amount - add;
		},
	}
	this.connectedNets = {};
	this.connectionsCount = 0;
	this.addConnection = function(net) {
		if(!this.connectedNets[net.netId]) {
			this.connectedNets[net.netId] = net;
			this.connectionsCount++;
		}
	}

	this.removeConnection = function(net) {
		delete this.connectedNets[net.netId];
		this.connectionsCount--;
	}
  
  this.getUnits = function() {
    let units = [];
    if(this.sourceTile && this.sourceTile.__Types && this.sourceTile.__Types[this.Type]) {
    units[units.length] = this.sourceTile;
    if(this.sourceTile.canConnect() && this.sourceTile.isSource()) {
    for (let side = 0; side < 6; side++) {
      if(this.enabledSide[side]) {
				let c = PipeNetBuilder.getRelativeCoords(sourceCoords.x, sourceCoords.y, sourceCoords.z, side);
				let tile = World.getTileEntity(c.x, c.y, c.z);
				if(tile && tile.__Types && tile.__Types[this.Type] && tile.canConnect() && !tile.isGenerator()) {
				  units[units.length] = tile;
				  if(tile.isSource()) {
				    this.getUnits1(units, c, sourceCoords);
				  }
				}
      }
		  }
    }
		  return units;
    }
    return null;
  }
  this.getUnits1 = function(units, coords, coordspre) {
    for (let side = 0; side < 6; side++) {
				let c = PipeNetBuilder.getRelativeCoords(coords.x, coords.y, soords.z, side);
				if(!(c == coordspre)) {
				  let tile = World.getTileEntity(c.x, c.y, c.z);
				if(tile && tile.__Types && tile.__Types[this.Type] && tile.canConnect() && !tile.isGenerator()) {
				  units[units.length] = tile;
				  if(tile.isSource()) {
				    this.getUnits1(units, c, coords);
				  }
				}
      }
		  }
  }
	this.tileEntities = [];
	this.addUnit = function(tileEntity) {
		if (!tileEntity.__connectedNets[this.netId]) {
			this.tileEntities.push(tileEntity);
			tileEntity.__connectedNets[this.netId] = this;
		}
	}

	this.add = function(pretile, amount, type, coords, sidepre) {
	  
		let inAmount = amount;
		/*var n = this.tileEntities.length;
		for (var i in this.tileEntities) {
			if (amount <= 0) break;
			var tile = this.tileEntities[i];
			if(tile != source) {
			  if(pretile.canExtract(PipeNetBuilder.getSide({x: tile.x - pretile.x, y: tile.y - pretile.y, z: tile.z - pretile.z}), "liquid", tile.x, tile.y, tile.z)) {
			  if(tile.canReceive(PipeNetBuilder.getSide({x: tile.x - pretile.x, y: tile.y - pretile.y, z: tile.z - pretile.z}), "liquid", xPrev, yPrev, zPrev, x, y, z)) {
				amount -= tile.receive(type, amount/n, x, y, z);
			  }
			}
			}
		}
		
		for (var i in this.connectedNets) {
			if (amount <= 0) break;
			var net = this.connectedNets[i];
			if (!net.sourceTile) {
				amount -= net.add(amount, source, explored);
			}
		}*/
		let divider = 2;
		for(let side = 0; side < 6; side++) {
		    
				if(pretile.canExtract(side, type)) {
				let c = PipeNetBuilder.getRelativeCoords(pretile.x, pretile.y, pretile.z, side);
				let tile = World.getTileEntity(c.x, c.y, c.z);
				if(side !== sidepre) {
				if(tile && tile.__Types && tile.__Types[this.Type] && tile.canConnect() && !tile.isGenerator()) {
				  if(tile != this.sourceTile) {
			      if(tile.canReceive(side, type)) {
			        let amont = Math.min(inAmount / divider, amount);
				      amount -= tile.receive(type, amont, side);

				      divider = divider * 2;
			      }
      }
		  }}
        }}
		if (inAmount > amount) {
				//this.onOverload(inVoltage);
			  //this.transfered += inAmount - amount;
		}
		return inAmount - amount;
	}

	this.toString = function() {
		var r = function(x) {return Math.round(x * 100) / 100};
		return "[PipeNet id=" + this.netId + " type=" + this.Name + "| stored =" +"]";
	}
	this.tick = function() {
		
	}
}