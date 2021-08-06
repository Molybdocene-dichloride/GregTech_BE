let MathExp = {
  factorial: function(number) {
    let num = 1;
    for(let i = 2; i < number; i++) {
      num *= i;
    }
    return num;
  },
  trapp: function(matrix) {
    let unescapei = 0;
    for(let i = 0; i < matrix.size().x; i++) {
      unescapei += matrix[i][i]
    }
    return unescapei;
  },
  calcP: function(matrices, ii) {
    Logger.Log(ii, "&iikj");
    let p = this.trapp(matrices[ii]);
    Logger.Log(p, "puiui");
    for(let i = 1; i <= ii - 1; i++) {
      Logger.Log(i, "&jjjju");
      let qw = this.trapp(matrices[ii - i]);
      Logger.Log(qw, "opcode");
      p -= qw * this.calcP(matrices, i);
    }
    Logger.Log(p / ii, "lololo");
    return p / ii;
  },
  calcQ: function(matrices, n, k, m) {
    if(m == 0) return this.calcP(matrices, k);
    if(k == n) {
      let rtyrt = this.calcP(matrices, k) * this.calcQ(matrices, n, 1, m - 1);
      Logger.Log(rtyrt, "&pedlik");
      return rtyrt;
    } else {
      Logger.Log(m, "&&&&&&&u");
    Logger.Log(k, "&&&&&&&u");
    let rtyrt = this.calcP(matrices, k) * this.calcQ(matrices, n, 1, m - 1) + this.calcQ(matrices, n, k + 1, m - 1);
    //Logger.Log(p / ii, "lololo");
    Logger.Log(rtyrt, "&pedlik");
    return rtyrt;
    }
    return 0;
  }
}
//Square matrix 
function CovarianceMatrix(elements, covariance) {
  //this.covarianceMatrix = true;
  this.sizeX = elements.length || elements.size().x;
  Logger.Log(elements, "iuytff");
  Logger.Log(this.sizeX, "iuytff");
  this.sizeY = elements.length || elements.size().y;
  Logger.Log(covariance);
  switch (covariance) {
    case null:
    switch (elements.sizeX) {
      case undefined:
      Logger.Log("aqwerty54");
      for(let i in elements) {
        this[i] = {};
        for(let j in elements) {
          this[i][j] = elements[i][j];
          Logger.Log(this[i][j], "aqwerty");
        }
      }
      break;
      case null:
      Logger.Log("aqwerty54");
      for(let i in elements) {
        this[i] = {};
        for(let j in elements) {
          this[i][j] = elements[i][j];
          Logger.Log(this[i][j], "aqwerty");
        }
      }
      break;
      default:
      Logger.Log("aqwerty54s");
      for(let i = 0; i < elements.size().x; i++) {
        this[i] = {};
        for(let j = 0; j < elements.size().x; j++) {
          this[i][j] = elements[i][j];
          Logger.Log(this[i][j], "aqwerty");
        }
      }
      break;
    }
    break;
    case undefined:
    switch (elements.sizeX) {
      case undefined:
      Logger.Log("aqwerty54");
      for(let i in elements) {
        this[i] = {};
        for(let j in elements) {
          this[i][j] = elements[i][j];
          Logger.Log(this[i][j], "aqwerty");
        }
      }
      break;
      case null:
      Logger.Log("aqwerty54");
      for(let i in elements) {
        this[i] = {};
        for(let j in elements) {
          this[i][j] = elements[i][j];
          Logger.Log(this[i][j], "aqwerty");
        }
      }
      break;
      default:
      Logger.Log("aqwerty54s");
        for(let i = 0; i < elements.size().x; i++) {
        this[i] = {};
        for(let j = 0; j < elements.size().x; j++) {
          this[i][j] = elements[i][j];
          Logger.Log(this[i][j], "aqwerty");
        }
      }
      break;
    }
    break;
  default:
    Logger.Log("aqwerty6654");
    for(let i in elements) {
      this[i] = {};
      for(let j in elements) {
        if(i == j) {
          this[i][i] = elements[i];
        } else {
          this[i][j] = covariance[i + "_" + j];
        }
      }
    }
  break;
  }
  this.length = this.sizeX;
  this.determinant = function() {
    if(this.size().x != this.size().y) throw new Error("The determinant only exists for square matrices! This matrix:" + this.toString());
    switch(this.size().x) {
      case 1:
      return this[0][0];
      case 2:
      return this[0][0] * this[1][1] - this[0][1] * this[1][0];
      case 3:
      return this[0][0] * this[1][1] * this[2][2] + this[0][1] * this[1][2] * this[2][0] + this[0][2] * this[1][0] * this[2][1] - this[0][2] * this[1][1] * this[2][0] - this[0][0] * this[2][1] * this[1][2] - this[2][2] * this[1][0] * this[0][1];
      default:
      return this.gauss();
    }
  }
  this.gauss = function() {
    let newmatrix = new CovarianceMatrix(this);
    let re = 0;
    for(let i = 0; i < this.size().x; i++) {
      if(i == 0) continue;
      for(let a = 0; a < i; a++) {
        let smk = -newmatrix[i][a] / newmatrix[a][a];
        for(let j = 0; j < this.size().y; j++) {
          newmatrix[i][j] = newmatrix[i][j] + newmatrix[a][j] * smk;
        }
      }
    }
    Logger.Log(newmatrix.toString(), "cedron");
    let det = 1;
    for(let i = 0; i < newmatrix.size().x; i++) {
        det *= newmatrix[i][i];
    }
    return Math.pow(-1, re) * det;
  }
  this.inverse = function() {
    let det = this.determinant();
    if(!det) throw new Error("The determinant equal zero, inversion is impossible! This matrix:" + this.toString());
    let newmatrix = this.transposite().matrixOfAlgebraicComplements();
    
    return newmatrix.division(det);
  }
  this.transposite = function() {
    let newmatrix = this.copy();
    for(let x = 0; x < this.size().x; x++) {
    for(let y = 0; y < this.size().y; y++) {
        newmatrix[x][y] = this[y][x];
      }
    }
    return newmatrix;
  }
  this.minor = function(xx, yy) {
    Logger.Log(xx, "xx");
    Logger.Log(yy, "yy");
    Logger.Log(this.toString(), "toStr");
    let newmatrix = NEW_ZERO_MATRIX_(this.size().x - 1, this.size().y - 1);
    let xl = 0;
    let yl = 0;
    for(let x = 0; x < this.size().x; x++) {
      if(x == xx) {
        continue;
      }
      
      for(let y = 0; y < this.size().y; y++) {
        if(y == yy) {
          continue;
        }
        Logger.Log(x, "xuiix");
        Logger.Log(y, "yuiiy");
        newmatrix[xl][yl] = this[x][y];
        
        Logger.Log("derrwx", xl);
        Logger.Log("derrwy", yl);
        Logger.Log("derrwinfo", newmatrix[xl][yl]);
         yl++;
      }
      yl = 0;
      xl++;
    }
    return newmatrix.determinant();
  }
  //matrix of algebraic complements
  this.matrixOfAlgebraicComplements = function() {
    let newmatrix = this.copy();
    for(let x = 0; x < this.size().x; x++) {
    for(let y = 0; y < this.size().y; y++) {
        newmatrix[x][y] = Math.pow(-1, x+y) * this.minor(x, y);
      }
    }
    return newmatrix;
  }
  this.multiply = function(number) {
    let newmatrix = this.copy();
    for(let x = 0; x < this.size().x; x++) {
    for(let y = 0; y < this.size().y; y++) {
        newmatrix[x][y] = newmatrix[x][y] * number;
      }
    }
    return newmatrix;
  }
  this.multiplyM = function(matrix) {
    let newmatrix = this.copy();
    for(let x = 0; x < this.size().x; x++) {
      for(let y = 0; y < this.size().y; y++) {
        let t = 0;
        for(let aa = 0; aa < this.size().x; aa++) {
          t += this[x][aa] * matrix[aa][y];
        }
        newmatrix[x][y] = t;
      }
    }
    return newmatrix;
  }
  this.summationM = function(matrix) {
    let newmatrix = this.copy();
    for(let x = 0; x < this.size().x; x++) {
    for(let y = 0; y < this.size().y; y++) {
        newmatrix[x][y] += matrix[x][y];
        
        Logger.Log(matrix[x][y], "during");
      }
    }
    Logger.Log(newmatrix.toString(), "durings");
    return newmatrix;
  }
  this.division = function(number) {
    let newmatrix = this.copy();
    for(let x = 0; x < this.size().x; x++) {
    for(let y = 0; y < this.size().y; y++) {
        newmatrix[x][y] = newmatrix[x][y] / number;
      }
    }
    return newmatrix;
  }
  this.exponentiation = function(number) {
    if(this.size().x != this.size().y) throw new Error("The exponentiation only exists for square matrices! This matrix:" + this.toString());
    
    let newmatrix = this.copy();
    for(let i = 1; i < number; i++) {
      newmatrix = newmatrix.multiplyM(this);
    }
    return newmatrix;
  }
  //e^matrix
  this.exp = function(number, t, eps) {
    let isnull = true;
    for(let x = 0; x < this.size().x; x++) {
      for(let y = 0; y < this.size().y; y++) {
        if(this[x][y] != 0) isnull = false;
      }
    }
    
    if(isnull) return 1;
    
    let matrices = [];
    matrices[0] = NEW_ZERO_MATRIX_(this.size().x, this.size().y);

    matrices[1] = this.copy();
    for(let i = 2; i < number + 1; i++) {
      matrices[i] = this.exponentiation(i);
    
      Logger.Log(matrices[i].toString(), "derrvabium");
    }
    
    let biggest = NEW_ZERO_MATRIX_(matrices[0].size().x, matrices[0].size().y);
    for(let i = 0; i < number; i++) {
        let big = Math.pow(t, i) / MathExp.factorial(i);
        
        big = matrices[i].multiply(big);
        Logger.Log(big, "biggy");
        biggest = biggest.summationM(big); 
        Logger.Log(biggest, "biggest");
    }
    return biggest;
  }
  this.size = function() {
    return {x: this.sizeX, y: this.sizeY};
  }
  this.copy = function() {
    return new CovarianceMatrix(this);
  }
  this.toString = function() {
    let str = "";
    Logger.Log(str, "rtes");
    for(let x = 0; x < this.size().x; x++) {
      Logger.Log(str, "zaweujnrq");
    for(let y = 0; y < this.size().y; y++) {
        Logger.Log(this[x][y], "asewq");
        str += this[x][y] + " ";
      }
      Logger.Log(str, "zawerq");
      if(x < this.size().x - 1) str += "\n"
      Logger.Log(str, "zaweyhrq");
    }
    return str;
  }
  
  
  //static
  
}
function NEW_ZERO_MATRIX_(x, y) {
    let elems = [];
    for(let i = 0; i < x; i++) {
      elems[i] = [];
      for(let j = 0; j < y; j++) {
        elems[i][j] = 0;
      }
    }
    return new CovarianceMatrix(elems);
  }
  //static
function NEW_IDENTITY_MATRIX_(x, y) {
    let elems = [];
    for(let i = 0; i < x; i++) {
      elems[i] = [];
      for(let j = 0; j < y; j++) {
        if(i == j) {
          elems[i][j] = 1;
        } else {
          elems[i][j] = 0;
        }
      }
      Logger.Log(elems.length, "dertyu");
    }
    return new CovarianceMatrix(elems);
  }
/*let ar = NEW_ZERO_MATRIX_(2, 2);
Logger.Log(ar.toString(), "dekeri");
Logger.Log(ar.size().x, "derer");
Logger.Log(ar.size().y, "dereir");
Logger.Log(ar.determinant(), "determinant");

let rtw = ar.multiply(2);
Logger.Log(rtw.toString(), "dekeri");
Logger.Log(rtw.size().x, "derer");
Logger.Log(rtw.size().y, "dereir");
Logger.Log(rtw.determinant(), "determinant");

let rtu = ar.division(2);
Logger.Log(rtu.toString(), "dekeri");
Logger.Log(rtu.size().x, "derer");
Logger.Log(rtu.size().y, "dereir");
Logger.Log(rtu.determinant(), "determinant");

let rtl = ar.exponentiation(20);
Logger.Log(rtl.toString(), "dekeri");
Logger.Log(rtl.size().x, "derer");
Logger.Log(rtl.size().y, "dereir");
Logger.Log(rtl.determinant(), "determinant");


let ear = NEW_IDENTITY_MATRIX_(2, 2);
Logger.Log(ear.toString(), "dekeri");
Logger.Log(ear.size().x, "derer");
Logger.Log(ear.size().y, "dereir");
Logger.Log(ear.determinant(), "determinant");

let ueazc = new CovarianceMatrix([[6, 1, 2], [9, 2, 2], [1, 1, 9]]);

Logger.Log(ueazc.exp(3, 1, 0.01), "*****34");

Logger.Log(ueazc.exp(7, 1, 0.01), "*****34");

Logger.Log(ueazc.exp(34, 1, 0.01), "*****34")

let uear = new CovarianceMatrix([[6, 1, 2, 1], [1, 9, 2, 2], [1, 1, 8, 9], [1, 2, 8, 9]]);
let rtdu = uear.transposite();
Logger.Log(rtdu.toString(), "jjdekeri");
Logger.Log(rtdu.size().x, "derer");
Logger.Log(rtdu.size().y, "dereir");
Logger.Log(rtdu.determinant(), "ghhhhhh");
let rtdo = uear.inverse();
Logger.Log(rtdo.toString(), "jjdekeri");
Logger.Log(rtdo.size().x, "derer");
Logger.Log(rtdo.size().y, "dereir");
Logger.Log(rtdo.determinant(), "ghhhhhhhu");

let rtd = ear.multiply(2);
Logger.Log(rtd.toString(), "dekeri");
Logger.Log(rtd.size().x, "derer");
Logger.Log(rtd.size().y, "dereir");
Logger.Log(rtd.determinant(), "determinant");


let rta = ear.division(2);
Logger.Log(rta.toString(), "dekeri");
Logger.Log(rta.size().x, "derer");
Logger.Log(rta.size().y, "dereir");
Logger.Log(rta.determinant(), "determinant");

let rtt = ear.exponentiation(20);
Logger.Log(rtt.toString(), "dekeri");
Logger.Log(rtt.size().x, "derer");
Logger.Log(rtt.size().y, "dereir");
Logger.Log(rtt.determinant(), "determinant");

let ratt = ar.multiplyM(ear);
Logger.Log(ratt.toString(), "dekeri");
Logger.Log(ratt.size().x, "derer");
Logger.Log(ratt.size().y, "dereir");
Logger.Log(ratt.determinant(), "determinant");*/

let GenerationDictionary = {
  CHUNKSIZE: {x: 16, y: 256, z: 16},
  CHUNKSIZEXZ: {x: 16, z: 16},
  rollPercentage: function(pr, random) {
      if(random) {
          return pr >= random.nextInt(100);
      }
      return pr >= round(Math.random() * 100, 2);
  },
  isInnerDiapozone: function(checkInt, start, end) {
    if(checkInt > start & checkInt < end) {
      return true;
    }
    return false;
  },
  randomInInner: function(random, start, end) {
    return start + random.nextInt(end - start);
  },
  randomInInnerGaussian: function(random, start, end) {
    return start + Math.floor(random.nextGaussian() * (end - start));
  },
  findChunkHighSurface: function (chunkX, chunkZ) {
    let highs = 0;
    for(let x = 0; x < 16; x++) {
      for(let z = 0; z < 16; z++) {
        let high = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z);
      if(high.y > highs) {
        highs = high.y;
      }
      }}
      return highs;
  },
  chunkExcavateForBlockCoords: function(xBlock, zBlock, ids, blockSource) {
    Logger.Log("dffer", "d");
    let chunkX = Math.floor(xBlock / 16);
    let chunkZ = Math.floor(zBlock / 16);
    this.chunkExcavate(chunkX, chunkZ, ids, blockSource);
  },
  chunkExcavate: function(chunkX, chunkZ, ids, blockSource) {
    let chunkBlockX = chunkX * 16;
    let chunkBlockZ = chunkZ * 16;
    if(blockSource) {
      for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 95; y++) {
          for(let z = 0; z < 16; z++) {
            Logger.Log(blockSource.getBlock(chunkBlockX + x, y, chunkBlockZ + z).id, "doiytr");
            if(ids.includes(blockSource.getBlock(chunkBlockX + x, y, chunkBlockZ + z).id)) {
              Logger.Log(blockSource.getBlock(chunkBlockX + x, y, chunkBlockZ + z).id, "d");
              blockSource.setBlock(chunkBlockX + x, y, chunkBlockZ + z, 0, 0);
            }
          }
        }
      }
    } else {
      for(let x = 0; x < 16; x++) {
        for(let y = 0; y < 95; y++) {
          for(let z = 0; z < 16; z++) {
            Logger.Log(World.getBlock(chunkBlockX + x, y, chunkBlockZ + z).id, "doiytr");
            if(ids.includes(World.getBlock(chunkBlockX + x, y, chunkBlockZ + z).id)) {
              Logger.Log(World.getBlock(chunkBlockX + x, y, chunkBlockZ + z).id, "d");
              World.setBlock(chunkBlockX + x, y, chunkBlockZ + z, 0, 0);
            }
          }
        }
      }
    }
  },
  //onlyIn - 0 all blocks
  //1 whitelist
  //2 blacklist
  generateSphere: function(coords, min, max, id, data, random, blockSource, onlyIn, ids) {
    let size = min;
    if(random) size = random.nextInt(max - min) + min;
    let is = true;
    switch (onlyIn) {
  case 1:
    for(let x = -size; x < size; x++) {
      for(let y = -size; y <= size; y++) {
      	for(let z = -size; z <= size; z++) {
      	  if(x * x + y * y + z * z <= size * size) {
      	    let tile = World.getBlock(coords.x + x, coords.y + y, coords.z + z);
      	    if(!(tile.id + "_" + tile.data in ids)) {
      	      is = false;
      	    }
      	  }
      	}
      }
    }
    break;
    case 2:
      for(let x = -size; x < size; x++) {
      for(let y = -size; y <= size; y++) {
      	for(let z = -size; z <= size; z++) {
      	  if(x * x + y * y + z * z <= size * size) {
      	    let tile = World.getBlock(coords.x + x, coords.y + y, coords.z + z);
      	    if((tile.id + "_" + tile.data in ids)) {
      	      is = false;
      	    }
      	  }
      	}
      }
    }
    break;
    }
    if(is) {
		for(let x = -size; x < size; x++) {
      for(let y = -size; y <= size; y++) {
      	for(let z = -size; z <= size; z++) {
      	  Logger.Log("shiftakes", x * x + y * y + z * z);
					if(x * x + y * y + z * z <= size * size) {
						World.setBlock(coords.x + x, coords.y + y, coords.z + z, id, data);
					}
				}
    	}
		}}
  },
  generateDisk: function(coords, id, data, random, min, max, isCenter, rotation, blockSource) {
    let radius = min;
    if(random) radius = random.nextInt(max - min) + min;
    
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
  generateBox: function(coords, id, data, min, random, max, rotation, blockSource) {
    let size = min;
    if(random) size = random.nextInt(max - min) + min;
		for(let x = -size; x < size; x++) {
    	for(let y = -size; y < size; y++) {
      	for(let z = -size; z < size; z++) {
			     World.setBlock(coords.x, coords.y, coords.z, id, data);
		    }
    	}
		}
  },
  generateRect: function(coords, id, data, min, random, max, rotation, blockSource) {
    let size = min;
    if(random) size = random.nextInt(max - min) + min;
    
		for(let x = -size; x < size; x++) {
      for(let z = -size; z < size; z++) {
			  World.setBlock(coords.x, coords.y, coords.z, id, data);
		  }
		}
  },
  generateChunkPerlin: function(coordsChunk, id, data, seed, scale, octaves, maxPos, onlyIn, ids) {
     GenerationDictionary.generateBoxPerlin({x: coordsChunk.x * 16, y: 5, z: coordsChunk.z * 16}, {x: 16, y: maxPos || OreDictionary.findChunkHighSurface(coordsChunk.x, coordsChunk.z), z: 16}, id, data, seed, scale, octaves, onlyIn, ids);
  },
  getStandardGaussianNoise: function(coords, seed) { //SEMI STANDARD
    return GenerationDictionary.getGaussianProbabilityDensity(coords, seed, new CovarianceMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), 0);
  },
  getSemiStandardGaussianNoise: function(coords, seed, center) { //SEMI STANDARD
    return GenerationDictionary.getGaussianProbabilityDensity(coords, seed, new CovarianceMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), center);
  },
  get3SigmaGaussianNoise: function(coords, size, seed, center) {
    let newsize = new Vector3(size.x / 3, size.y / 3, size.z / 3);
    return GenerationDictionary.getGaussianProbabilityDensity(coords, seed, new CovarianceMatrix([[Math.pow(newsize.x, 2), 0, 0], [0, Math.pow(newsize.y, 2), 0], [0, 0, Math.pow(newsize.z, 2)]]), center);
  },
  getGaussianProbabilityDensityWithSize: function(coords, size, seed, center, percent) {
    let newsize = new Vector3(size.x + percent * size.x, size.y + percent * size.y, size.z + percent * size.z);
    return GenerationDictionary.getGaussianProbabilityDensity(coords, seed, new CovarianceMatrix([[Math.pow(newsize.x, 2), 0, 0], [0, Math.pow(newsize.y, 2), 0], [0, 0, Math.pow(newsize.z, 2)]]), center);
  },
  //probability density of 3d normal distribution
  getGaussianProbabilityDensity: function(coords, seed, deviation, center) {
    if(deviation.determinant() < 0) throw "Eror"
    
    let relative = new Vector3(coords.x - center.x, coords.y - center.y, coords.z - center.z);
    relative[0] = relative.x;
    relative[1] = relative.y;
    relative[2] = relative.z;

    Logger.Log(deviation.determinant(), "Zeder");

    Logger.Log(1 / (Math.sqrt(deviation.determinant()) * Math.pow(2 * Math.PI, deviation.size().x / 2)), "oeder");
    
    let inv = deviation.inverse();
    
    let summ = 0;
    for(let x = 0; x < inv.size().x; x++) {
		  for(let y = 0; y < inv.size().y; y++) {
		    summ += inv[x][y] * relative[x] * relative[y];
		  }
    }
    
    Logger.Log(-summ/2, "Weder");
    Logger.Log(Math.exp(-summ/2), "Xeder");
    
    Logger.Log(1 / (Math.sqrt(deviation.determinant()) * Math.pow(2 * Math.PI, deviation.size().x / 2)) * Math.exp(-summ/2), "юeder");
    
    return 1 / (Math.sqrt(deviation.determinant()) * Math.pow(2 * Math.PI, deviation.size().x / 2)) * Math.exp(-summ/2);
    
    
    //return 1 / (Math.sqrt(deviation.determinant()) * Math.pow(2 * Math.PI, deviation.size().x / 2)) * deviation.inverse().multiply(relative.dot(relative)).division(-2).exp(32, 1, 0.01);
  },
  getGaussianProbability: function(coords, seed, deviation, center) {
    if(deviation.determinant() < 0) throw "Eror";
    
    let relative = new Vector3(coords.x - center.x, coords.y - center.y, coords.z - center.z);
    relative[0] = relative.x;
    relative[1] = relative.y;
    relative[2] = relative.z;
    
    let inv = deviation.inverse();
    
    let summ = 0;
    for(let x = 0; x < inv.size().x; x++) {
		  for(let y = 0; y < inv.size().y; y++) {
		    //summ += inv[x][y] * ;
		    
		    
		    //relative[x] * relative[y];
		  }
    }
    
    return 1 / (Math.sqrt(deviation.determinant()) * Math.pow(2 * Math.PI, deviation.size().x / 2)) * Math.exp(-summ/2);
  },
  generateBoxPerlin: function(coords, size, id, data, seed, scale, octaves, onlyIn, ids) {
    Logger.Log(GenerationUtils.getPerlinNoise(coords.x + 8, 0, coords.z + 8, seed, 1 / scale, octaves), " -& ");
    
    if(GenerationUtils.getPerlinNoise(coords.x + 8, 0, coords.z + 8, seed, 1 / scale, octaves) < 0.6 - 12 / scale) { 
    // проверка порога отбрасывания чанка
    return;
  }
    Logger.Log("der", " -& ");
    for(let x = 0; x < size.x; x++) {
		  for(let y = 0; y < size.y; y++) {
        for(let z = 0; z < size.z; z++) {
          let tile = World.getBlock(coords.x + x, coords.y + y, coords.z + z);
      	    if((tile.id + "_" + tile.data in ids)) {
      	      //Logger.Log("derhyu", " -& ioploi");
          if(GenerationUtils.getPerlinNoise(coords.x + x, coords.x + y, coords.z + z, seed, 1 / scale, octaves) > 0.6) World.setBlock(coords.x + x, coords.y + y, coords.z + z, id, data);
          }
		    }
		  }
		}
  },
  generateComplexStructure: function(structure, coords, blockSource, seed) {
    structure.generate(coords, blockSource);
  }
}

function ComplexStructure(coords, dimension) {
  this.coords = coords;
  this.dimension = dimension;
  
  this.pregenerate = function(blockSource) {
    
  }
  this.generate = function(blockSource) {
    
  }
  this.generated = function(blockSource) {
    
  }
  this.tick = function(blockSource) {
    
  }
  
  this.generate = function(coords, blockSource) {
    
  }
}
Callback.addCallback("DestroyBlock", function (coords, tile, playerUid) {
  if(tile.id != 61) return;
  Logger.Log(tile.id, "zolotz");
  let bs = new BlockState(8, {liquid_depth: 1});
  BlockSource.getDefaultForActor(playerUid).setBlock(coords.x, coords.y, coords.z, 8, 0);
});

Logger.Log(GenerationDictionary.getGaussianProbabilityDensity(new Vector3(0, 0, 0), 0, new CovarianceMatrix([[5, 0, 0], [0, 5, 0], [0, 0, 5]]), new Vector3(0, 0, 0)), "weakeэ");
Logger.Log(GenerationDictionary.getGaussianProbabilityDensity(new Vector3(0, 0, 0), 0, new CovarianceMatrix([[5, 0, 0], [0, 5, 0], [0, 0, 5]]), new Vector3(1, 0, 0)), "weakeэ");
Logger.Log(GenerationDictionary.getGaussianProbabilityDensity(new Vector3(0, 0, 0), 0, new CovarianceMatrix([[5, 0, 0], [0, 5, 0], [0, 0, 5]]), new Vector3(0, 0, 1)), "weakeэ");

