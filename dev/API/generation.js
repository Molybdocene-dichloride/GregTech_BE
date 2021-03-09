let Matrix = function(x, y) {
  this.x = x;
  this.y = y;
  for(let i = 0; i < x; i++) {
    this[i] = [];
  }
}
let GenerationDictionary = {
  generateSphere: function(coords, id, data, random) {
    let sizze = random.nextInt(max - min);
    let size = sizze + min;
		for(let x = -size; x < size; x++) {
    			for(let y = -size; y <= size; y++) {
      				for(let z = -size; z <= size; z++) {
      				  Logger.Log("shiftakes", x * x + y * y + z * z);
					if(x * x + y * y + z * z <= size * size) {
						World.setBlock(coords.x + x, coords.y + y, coords.z + z, id, data);
					}
				}
    		}
		}
  },
  generateDisk: function(coords, id, data, random, min, max, isCenter, rotation) {
    let radius = 0;
    if(random) {
      let sizze = random.nextInt(max - min);
      radius = sizze + min;
    } else {
      radius = min;
    }
    let quart = radius - 0.5;
    if(!rotation || (rotation && rotation.yaw == 0 && rotation.pitch == 0 && rotation.roll == 0)) {
		  for(let x = -quart; x <= quart; x++) {
    		for(let z = -quart; z <= quart; z++) {
					Logger.Log("shiftskes", x * x + z * z);
					if(x * x + z * z <= radius * radius) {
					  if(!isCenter && x == 0 && z == 0) continue;
						World.setBlock(coords.x + x, coords.y, coords.z + z, id, data);
					}
				}
    	}
    } else {
      
    }
		},
  generateBox: function(coords, id, data, random, min, max, rotation) {
    let sizze = random.nextInt(max - min);
    let size = sizze + min;
		for(let x = -size; x < size; x++) {
    			for(let y = -size; y < size; y++) {
      				for(let z = -size; z < size; z++) {
			World.setBlock(coords.x, coords.y, coords.z, id, data);
		}}}
  },
  generateComplexStructure(structure, coords, source) {
    structure.func(coords, source);
  }
}