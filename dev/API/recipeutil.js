let RecipeUtil = {
	//['symbol', [{}] or {}]
	shapedUtil: function (mask, input, pattern) {
		let inputUnraw = [];
		let inputRaw = [];
		let variants = 1;
		let letters = [];
		let newmask = [];

		let count = input.length;
		if(mask) {
			count = input.length / 2;
		}
		for(let i = 0; i < input.length / 2; i++) {
			if(Array.isArray(input[i * 2 + 1]) && input[i * 2 + 1].length > 1) {
				let count = 0;
				if(mask) {
					for(let a in mask) {
						let last = 0;
						while(mask[a].indexOf(input[i * 2], last) != -1) {
							last = mask[a].indexOf(input[i * 2], last) + 1;
							count++;
						}
					}
				} else {
					count = 1;
				}

				variants *= input[i * 2 + 1].length * count;
				
				if(mask) { 
					letters.push(input[i * 2]);
					inputRaw.push(input[i * 2 + 1]);
				} else {
					inputRaw.push(input[i]);
				}
				for(let j = 1; j < count; j++) {
					if(mask) {
						let ww = RecipeDictionary.arr_en.find(function(element, index, array) {
							if(mask[0].indexOf(element) != -1 || mask[1].indexOf(element) != -1 || mask[2].indexOf(element) != -1) {
								return false;
							}
							return true;
						});
						letters.push(ww);
					}

					inputRaw.push(input[i * 2 + 1]);
				}
				let at = 0;
				if(mask) {
					for(let a in mask) {
				  		let str = "";
				  		for(let b = 0; b < mask[a].length; b++) {
				    		if(mask[a][b] == letters[0]) {
				      			str += letters[at];
				      			at += 1;
				    		} else {
				      		str += mask[a][b];
				    		}
				  		}
						newmask.push(str);
						//newmask[a] = String(mask[a]);
					}
				}
			} else if(Array.isArray(input[i * 2 + 1]) && input[i * 2 + 1].length == 1) {
				if(mask) {
					inputUnraw.push(input[i * 2]);
					inputUnraw.push(input[i * 2 + 1][0]);
				} else {
					inputUnraw.push(input[i][0]);
				}
			} else if(!Array.isArray(input[i * 2 + 1])) {
				if(mask) {
					inputUnraw.push(input[i * 2]);
					inputUnraw.push(input[i * 2 + 1]);
				} else {
					inputUnraw.push(input[i]);
				}
			}
		}
		let result = {unraw: inputUnraw, raw: inputRaw,  variants: variants};
		if(mask) {
			result.mask = newmask;
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
	createInputs: function (inputs) {
		let iddatainput = [];
		let f = 0;
		for(let i in inputs[n]) {
			if(i % 2 == 0) {
				iddatainput[f] = inputs[n][i];
				f++;
			} else {
				if(inputs[n][i].type == "material") {
					let preiddatainput = MaterialDictionary.invdata[inputs[n][i].form][inputs[n][i].material.name];
					iddatainput[f] = preiddatainput.id;
					Logger.Log(iddatainput[f], "tyeer");
					f++;
					iddatainput[f] = preiddatainput.data;
					Logger.Log(iddatainput[f], "typeeer");
					f++;
				} else if(inputs[n][i].type == "pipe_machine") {
					let preiddatainput = PipeDictionary.pipes[inputs[n][i].typed + "_" + inputs[n][i].name];
					iddatainput[f] = BlockID.gtblockpipe;
					Logger.Log(iddatainput[f], "typear");
					f++;
					iddatainput[f] = preiddatainput;
					Logger.Log(iddatainput[f], "typeshar");
					f++;
				} else if(inputs[n][i].type == "machine") {
					let preiddatainput = MachineDictionary.steammachines[inputs[n][i].typed][inputs[n][i].name];

					iddatainput[f] = BlockID.gtblockmachine;
					f++;
					iddatainput[f] = preiddatainput.data;
					Logger.Log(iddatainput[f], "tpe");
					f++;
				} else if (inputs[n][i].type == "casing") {
					let preiddatainput = MachineDictionary.casings[inputs[n][i].typed];
					iddatainput[f] = BlockID.gtcasing;
					f++;
					iddatainput[f] = preiddatainput;
					Logger.Log(iddatainput[f], "typeer");
					f++;
				} else if (inputs[n][i].type == "common") {
					iddatainput[f] = inputs[n][i].id;
					Logger.Log(iddatainput[f], "typhe");
					f++;
					iddatainput[f] = inputs[n][i].data;
					Logger.Log(iddatainput[f], "typhe");
					f++;
				} else if(inputs[n][i].type == "ore") {
					let preiddatainput = {id: OreDictionary.data[inputs[n][i].material.name].id, data: 0};
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
	}
}