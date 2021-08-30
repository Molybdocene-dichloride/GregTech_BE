let RecipeUtil = {
	//['symbol', [{}] or {}]
	shapedUtil: function(input, pattern) {
		let inputUnraw = [];
		let inputRaw = [];
		let variants = 1;
		let letters = [];
		let newmask = [];

		let count = input.length;
		if(pattern) {
			count = input.length / 2;
		}
		for(let i = 0; i < input.length / 2; i++) {
			if(Array.isArray(input[i * 2 + 1]) && input[i * 2 + 1].length > 1) {
				let count = 0;
				if(pattern) {
					for(let a in pattern) {
						let last = 0;
						while(pattern[a].indexOf(input[i * 2], last) != -1) {
							last = pattern[a].indexOf(input[i * 2], last) + 1;
							count++;
						}
					}
				} else {
					count = 1;
				}

				variants *= input[i * 2 + 1].length * count;
				
				if(pattern) { 
					letters.push(input[i * 2]);
					inputRaw.push(input[i * 2 + 1]);
				} else {
					inputRaw.push(input[i]);
				}
				for(let j = 1; j < count; j++) {
					if(pattern) {
						let ww = RecipeDictionary.arr_en.find(function(element, index, array) {
							if(pattern[0].indexOf(element) != -1 || pattern[1].indexOf(element) != -1 || pattern[2].indexOf(element) != -1) {
								return false;
							}
							return true;
						});
						letters.push(ww);
					}

					inputRaw.push(input[i * 2 + 1]);
				}
				let at = 0;
				if(pattern) {
					for(let a in pattern) {
				  		let str = "";
				  		for(let b = 0; b < pattern[a].length; b++) {
				    		if(pattern[a][b] == letters[0]) {
				      			str += letters[at];
				      			at += 1;
				    		} else {
				      		str += pattern[a][b];
				    		}
				  		}
						newmask.push(str);
						//newmask[a] = String(pattern[a]);
					}
				}
			} else if(Array.isArray(input[i * 2 + 1]) && input[i * 2 + 1].length == 1) {
				if(pattern) {
					inputUnraw.push(input[i * 2]);
					inputUnraw.push(input[i * 2 + 1][0]);
				} else {
					inputUnraw.push(input[i][0]);
				}
			} else if(!Array.isArray(input[i * 2 + 1])) {
				if(pattern) {
					inputUnraw.push(input[i * 2]);
					inputUnraw.push(input[i * 2 + 1]);
				} else {
					inputUnraw.push(input[i]);
				}
			}
		}
		let result = {unraw: inputUnraw, raw: inputRaw,  variants: variants};
		if(pattern) {
			result.pattern = newmask;
			result.letters = letters;
		}
		return result;
	},
	createOfCombinations: function (arr, letters, collisions, variants) {
		let arrOfArrs = [];
		if (variants == 0) {
		} else {
			for (let j in arr[0]) {
				let index = arr.length - 1;
				Logger.Log(arr[0].length, "medal");
				Logger.Log(arr.length - 1, "medical");
				if (index > 0) {
					let all = this.createOfCombinations0(arr, letters, [letters[0], arr[0][j]], j, index, collisions);
					for (let k in all) {
						arrOfArrs.push(all[k]);
					}
				} else {
					if (letters) {
						arrOfArrs.push([letters[0], arr[0][j]]);
					} else {
						arrOfArrs.push([arr[0][j]]);
					}
				}
			}
		}
		return arrOfArrs;
	},
	createOfCombinations0: function (arr, letters, arrI, jj, index, collisions) {
		let arrOfArrs = [];
			for(let j in arr[arr.length - index]) {
				if(!collisions && arrI == arr[arr.length - index][j] && j == jj) continue;
				let inde = index;
				inde--;
				let arrt = arrI.slice(0);
				if(letters) arrt.push(letters[arr.length - index]);
				arrt.push(arr[arr.length - index][j]);
				Logger.Log(arrt, "ui");
				Logger.Log(inde, "uoii");
				if(inde > 0) {
					let all = this.createOfCombinations0(arr, letters, arrt, j, inde, collisions);
					for (let k in all) {
						arrOfArrs.push(all[k]);
					}
				} else {
					arrOfArrs.push(arrt);
				}
			}
		
		return arrOfArrs;
	},
	createInput: function (input) {
		let iddatainput = [];
		let f = 0;
		for(let i in input) {
			if(i % 2 == 0) {
				iddatainput[f] = input[i];
				f++;
			} else {
				if(input[i].type == "material") {
					let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
					iddatainput[f] = preiddatainput.id;
					Logger.Log(iddatainput[f], "tyeer");
					f++;
					iddatainput[f] = preiddatainput.data;
					Logger.Log(iddatainput[f], "typeeer");
					f++;
				} else if(input[i].type == "pipe_machine") {
					let preiddatainput = PipeDictionary.pipes[input[i].typed + "_" + input[i].name];
					iddatainput[f] = BlockID.gtblockpipe;
					Logger.Log(iddatainput[f], "typear");
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
				} else if (input[i].type == "casing") {
					let preiddatainput = MachineDictionary.casings[input[i].typed];
					iddatainput[f] = BlockID.gtcasing;
					f++;
					iddatainput[f] = preiddatainput;
					Logger.Log(iddatainput[f], "typeer");
					f++;
				} else if (input[i].type == "common") {
					iddatainput[f] = input[i].id;
					Logger.Log(iddatainput[f], "typhe");
					f++;
					iddatainput[f] = input[i].data;
					Logger.Log(iddatainput[f], "typhe");
					f++;
				} else if(input[i].type == "ore") {
					let preiddatainput = {id: OreDictionary.data[input[i].material.name].id, data: 0};
					iddatainput[f] = preiddatainput.id;
					Logger.Log(iddatainput[f], "tyeer");
					f++;
					iddatainput[f] = preiddatainput.data;
					Logger.Log(iddatainput[f], "typeeer");
					f++;
				}
			}
		}
		return iddatainput;
	},
	createOutput: function (output) {
		let iddataoutput = null;
		if (output.type == "material") {
			iddataoutput = { id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data };
		} else if (output.type == "machine_steam") {
			iddataoutput = { id: BlockID.gtblockmachine, count: output.count, data: MachineDictionary.steammachines[output.name]["data" + output.tier] };
		} else if (output.type == "casing") {
			iddataoutput = { id: BlockID.gtblockmachine, count: output.count, data: MachineDictionary.casings[output.typed] };
		} else if (output.type == "common") {
			iddataoutput = { id: output.id, count: output.count, data: output.data };
		} else if (output.type == "pipe_machine") {
			iddataoutput = { id: BlockID.gtblockpipe, data: PipeDictionary.pipes[output.typed + "_" + output.name], count: output.count };
		}
		return iddataoutput;
	}
}