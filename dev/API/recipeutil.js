let RecipeUtil = {
	//['symbol', [{}] or {}]
	shapedUtil: function (mask, input) {
		let inputUnraw = [];
		let inputRaw = [];
		let variants = 1;
		for(let i = 0; i < input.length / 2; i++) {
			if(Array.isArray(input[i * 2 + 1]) && input[i * 2 + 1].length > 1) {
				let count = 0;
				for(let a in mask) {
					let last = 0;
					while(mask[a].indexOf(last, input[i * 2]) != -1) {
						last = mask[a].indexOf(last, input[i * 2]);
						count++;
					}
				}

				variants *= input[i * 2 + 1].length * count;

				inputRaw.push(input[i * 2 + 1]);
				input[i * 2 + 1][0].letter = input[i * 2];
				for(let j = 1; j < input[i * 2 + 1].length; j++) {
					let ww = 0;
					while(RecipeDictionary.arr_en.find(function(element, index, array) {
						if(mask[0].indexOf(element) != -1 || mask[1].indexOf(element) != -1 || mask[2].indexOf(element) != -1) {
							return true;
						}
						return false;
					})) {
						ww++;
					}
					input[i * 2 + 1][j].letter = RecipeDictionary.arr_en[ww];
				}
			} else if(Array.isArray(input[i * 2 + 1]) && input[i * 2 + 1].length == 1) {
				inputUnraw.push(input[i * 2]);
				inputUnraw.push(input[i * 2 + 1][0]);
			} else if(!Array.isArray(input[i * 2 + 1])) {
				inputUnraw.push(input[i * 2]);
				inputUnraw.push(input[i * 2 + 1]);
			}
		}
		return {unraw: inputUnraw, raw: inputRaw, mask: mask, variants: variants};
	},
	createOfCombinations: function(arr, collisions, variants) {
		let arrOfArrs = [];
		if (variants == 0) {
		} else if (variants == 1) {
			arrOfArrs.push(arr[0]);
		} else {
			if (arr[0].type == "common") {
				for (let j in arr[0]) {
					let index = arr.length - 1;
					Logger.Log(arr[0].length, "medal");
					Logger.Log(arr.length - 1, "medical");
					if (index > 0) {
						let all = this.createOfCombinations0(arr, arr[0][j], j, index, collisions);
						for (let k in all) {
							arrOfArrs.push(all[k]);
						}
					} else {
						arrOfArrs.push([arr[0][j]]);
					}
				}
			}
		}
		return arrOfArrs;
	},
	createOfCombinations0: function (arr, arrI, jj, index, collisions) {
		let arrOfArrs = [];
		if (arr[arr.length - index].type == "common") {
			for (let j in arr[arr.length - index].id) {
				if (!collisions && arrI.id == arr[arr.length - index][j].id && j == jj) continue;
				let inde = index;
				inde--;
				let arrt = arrI.slice(0);
				arrt.push(arr[arr.length - index][j]);
				Logger.Log(arrt, "ui");
				Logger.Log(inde, "uoii");
				if (inde > 0) {
					let all = this.createOfCombinations0(arr, arrt, j, inde, collisions);
					for (let k in all) {
						arrOfArrs.push(all[k]);
					}
				} else {
					arrOfArrs.push(arrt);
				}
			}
		}
		return arrOfArrs;
	},
}