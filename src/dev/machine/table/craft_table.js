let uiw = new UI.StandardWindow({
	standart: {
		header: {
			text: {
				text: "Work bench"
			},
			color: android.graphics.Color.rgb(225, 119, 6)
		},
		inventory: {
			standart: true
		},
		background: {
			color: android.graphics.Color.rgb(225, 119, 6)
		},
	},
	params: {
		textures: {
			/*slot: "thaum_slot",
			invSlot: "thaum_inv_slot",
			selection: "thaum_selection",
			closeButton: "thaum_close_button_up",
			closeButton2: "thaum_close_button_down",
			frame: "thaum_frame_default"*/
		}
	},
	drawing: [],
	elements: {
		"slot0": { type: "slot", x: 467, y: 146, size: 60 },
		"slot1": { type: "slot", x: 537, y: 146, size: 60 },
		"slot2": { type: "slot", x: 607, y: 146, size: 60 },
		"slot3": { type: "slot", x: 467, y: 214, size: 60 },
		"slot4": { type: "slot", x: 537, y: 214, size: 60 },
		"slot5": { type: "slot", x: 607, y: 214, size: 60 },
		"slot6": { type: "slot", x: 467, y: 283, size: 60 },
		"slot7": { type: "slot", x: 537, y: 283, size: 60 },
		"slot8": { type: "slot", x: 607, y: 283, size: 60 },
		"resultSlot": {
			type: "slot", x: 698, y: 212, size: 60, clicker: {
				//При обычном клике
				onClick: function (position, container, tileEntity) {
					//Пробуем провести крафт
					let result = Recipes.provideRecipe(container, prefix);
					//Если получилось
					if (result) {
						//Добавляем результат в инвентарь
						Player.getInventory().addItem(result.id, result.count, result.data);
					}
				},
				onLongClick: function (position, container, tileEntity) {
					this.onClick(position, container, tileEntity);
				}
			}
		},
	}
});

//Создадим UID blockWorkbench
IDRegistry.genBlockID("blockWorkbench");

//Создаем наш верстак
Block.createBlock("blockWorkbench", [
	{ name: "workbench", texture: [["crafting_table", 0]], inCreative: true }
]);

//Регистрируем его как tileEntity
TileEntity.registerPrototype(BlockID.blockWorkbench, {
	useNetworkItemContainer: true,
	sourcesForCleaning: null,
	isOpened: false,
	tickk: 0,
	//Функция тика
	tick: function () {
		Logger.Log(Network.inRemoteWorld(), "tguiu");
		//Если интерфейс открыт
		if (this.tickk % 10 == 0) {
			Logger.Log(this.isOpened, "dedil");
			Logger.Log(this.tickk % 10 == 0, "dedsad");
			this.container.sendEvent("isOpened", { });
			Logger.Log(this.isOpened, "dedes");
			/*if(this.isOpened) {
				//Узнаем результат крафта
				let res = RecipeDictionary.getBySources([this.container.getSlot("slot0"), this.container.getSlot("slot1"), this.container.getSlot("slot2"), this.container.getSlot("slot3"), this.container.getSlot("slot4"), this.container.getSlot("slot5"), this.container.getSlot("slot6"), this.container.getSlot("slot7"), this.container.getSlot("slot8")]);
				//Если он есть
	//Logger.Log(res, "derrr");
				if (res) {
				//Отрисовываем его
					this.container.setSlot("resultSlot", res.result.id, res.result.count, res.result.data);
					this.sourcesForCleaning = res.cleaning;
				}
				else {
					//Иначе рисуем пустой слот
					this.container.setSlot("resultSlot", 0, 0, 0);
				}
			}*/

		}
		this.container.sendChanges();


		Logger.Log(this.tickk, "dedes");
		this.tickk++;
	},

	getGuiScreen: function () {
		return workbenchGui;
	},
	getScreenName: function (player, coords) {
		return "workbench"
	},
	// это событие вызывается на стороне клиента, this в данном случае не определен, по переданному имени, которое вернул метод getScreenName, возвращает окно, которое нужно открыть
	getScreenByName: function (screenName) {
		Logger.Log("vg", uiw);
		return workbenchGui;
	},
	click: function (id, count, data, coords, player) {
		this.pl = new PlayerActor(player);
	},
	destroy: function () {
		this.uid = null;
	},
	client: {
		load: function () {
			Logger.Log(Network.inRemoteWorld(), "tguiuiu");
		},
		containerEvents: {
			// события контейнера на стороне сервера, в данном случае this - серверный экземпляр, получивший пакет
			isOpened: function (container, window, windowContent, eventData) {
				// доступный только здесь метод:
				//this.container.sendResponseEvent("eventName", someData)
				Logger.Log(window.isOpened(), "zaer");
				container.sendEvent("isOpened", { isOpened: window.isOpened() });
			}
		}
	},

	containerEvents: {

		// события контейнера на стороне сервера, в данном случае this - серверный экземпляр, получивший пакет
		isOpened: function (eventData, connectedClient) {
			Logger.Log(this, "zubazh");
			this.isOpened = eventData.isOpened;
		},
		cleanSources: function (eventData, connectedClient) {

			if (this.resultForCleaning.length == 0 || this.sourcesForCleaning.length == 0) return;
			Logger.Log(this, "zazh");


			this.container.setSlot("resultSlot", this.container.getSlot("resultSlot").id, this.container.getSlot("resultSlot").count - this.resultForCleaning.count + 1, this.container.getSlot("resultSlot").data, this.container.getSlot("resultSlot").extra);

			this.pl.addItemToInventory(this.container.getSlot("resultSlot").id, this.resultForCleaning.count - 1, this.container.getSlot("resultSlot").data, this.container.getSlot("resultSlot").extra, true);

			for (let i in this.sourcesForCleaning) {
				Logger.Log("slat the", "zubazh");

				this.container.setSlot("slot" + this.sourcesForCleaning[i], this.container.getSlot("slot" + this.sourcesForCleaning[i]).id, this.container.getSlot("slot" + this.sourcesForCleaning[i]).count - 1, this.container.getSlot("slot" + this.sourcesForCleaning[i]).data, this.container.getSlot("slot" + this.sourcesForCleaning[i]).extra);
			}
			this.container.validateAll();
			this.sourcesForCleaning = [];
			this.resultForCleaning = [];
		},
		performCrafting: function (eventData, connectedClient) {
			Logger.Log("saxerd");

			let arr = [{ id: this.container.getSlot("slot0").id, data: this.container.getSlot("slot0").data, count: this.container.getSlot("slot0").count, extra: this.container.getSlot("slot0").extra, index: 0 }, { id: this.container.getSlot("slot1").id, data: this.container.getSlot("slot1").data, count: this.container.getSlot("slot1").count, extra: this.container.getSlot("slot1").extra, index: 1 }, { id: this.container.getSlot("slot2").id, data: this.container.getSlot("slot2").data, count: this.container.getSlot("slot2").count, extra: this.container.getSlot("slot2").extra, index: 2 }, { id: this.container.getSlot("slot3").id, data: this.container.getSlot("slot3").data, count: this.container.getSlot("slot3").count, extra: this.container.getSlot("slot3").extra, index: 3 }, { id: this.container.getSlot("slot4").id, data: this.container.getSlot("slot4").data, count: this.container.getSlot("slot4").count, extra: this.container.getSlot("slot4").extra, index: 4 }, { id: this.container.getSlot("slot5").id, data: this.container.getSlot("slot5").data, count: this.container.getSlot("slot5").count, extra: this.container.getSlot("slot5").extra, index: 5 }, { id: this.container.getSlot("slot6").id, data: this.container.getSlot("slot6").data, count: this.container.getSlot("slot6").count, extra: this.container.getSlot("slot6").extra, index: 6 }, { id: this.container.getSlot("slot7").id, data: this.container.getSlot("slot7").data, count: this.container.getSlot("slot7").count, extra: this.container.getSlot("slot7").extra, index: 7 }, { id: this.container.getSlot("slot8").id, data: this.container.getSlot("slot8").data, count: this.container.getSlot("slot8").count, extra: this.container.getSlot("slot8").extra, index: 8 }];
			let spliced = new Set();
			if (this.container.getSlot("slot0").id == 0 && this.container.getSlot("slot1").id == 0 && this.container.getSlot("slot2").id == 0) {
				spliced.push(0);
				spliced.push(1);
				spliced.push(2);
				Logger.Log(0, "derter");
				Logger.Log(1, "derter");
				Logger.Log(2, "derter");
				for (let i = 0; i < spliced.size(); i++) {
					Logger.Log(spliced.get(i), "derase");
				}
			}
			if (this.container.getSlot("slot3").id == 0 && this.container.getSlot("slot4").id == 0 && this.container.getSlot("slot5").id == 0) {

				spliced.push(3);
				spliced.push(4);
				spliced.push(5);
				Logger.Log(3, "derter");
				Logger.Log(4, "derter");
				Logger.Log(5, "derter");
				for (let i = 0; i < spliced.size(); i++) {
					Logger.Log(spliced.get(i), "derasgte");
				}
			}
			if (this.container.getSlot("slot6").id == 0 && this.container.getSlot("slot7").id == 0 && this.container.getSlot("slot8").id == 0) {

				spliced.push(6);
				spliced.push(7);
				spliced.push(8);
				Logger.Log(6, "derter");
				Logger.Log(7, "derter");
				Logger.Log(8, "derter");
				for (let i = 0; i < spliced.size(); i++) {
					Logger.Log(spliced.get(i), "derasgte");
				}
			}

			if (this.container.getSlot("slot0").id == 0 && this.container.getSlot("slot3").id == 0 && this.container.getSlot("slot6").id == 0) {

				spliced.push(0);
				spliced.push(3);
				spliced.push(6);
				Logger.Log(0, "derter");
				Logger.Log(3, "derter");
				Logger.Log(6, "derter");
				for (let i = 0; i < spliced.size(); i++) {
					Logger.Log(spliced.get(i), "derasgte");
				}
			}
			if (this.container.getSlot("slot1").id == 0 && this.container.getSlot("slot4").id == 0 && this.container.getSlot("slot7").id == 0) {

				spliced.push(1);
				spliced.push(4);
				spliced.push(7);
				Logger.Log(1, "derter");
				Logger.Log(4, "derter");
				Logger.Log(7, "derter");
				for (let i = 0; i < spliced.size(); i++) {
					Logger.Log(spliced.get(i), "derasgte");
				}
			}
			if (this.container.getSlot("slot2").id == 0 && this.container.getSlot("slot5").id == 0 && this.container.getSlot("slot8").id == 0) {

				spliced.push(2);
				spliced.push(5);
				spliced.push(8);
				Logger.Log(2, "derter");
				Logger.Log(5, "derter");
				Logger.Log(8, "derter");
				for (let i = 0; i < spliced.size(); i++) {
					Logger.Log(spliced.get(i), "derasgte");
				}
			}
			let spliceda = spliced.toArray();
			Logger.Log(arr, "splicedpre");
			for (let i = 0; i < spliceda.length; i++) {
				arr[spliceda[i]] = null;
				Logger.Log(spliceda[i], "derase");
			}
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] == null) {
					arr.splice(i, 1);
					i -= 1;
				}
			}
			Logger.Log(arr, "spliced");

			let res = RecipeDictionary.getBySources(arr);
			//Если он есть
			//Logger.Log(res, "derrr");
			if (res) {
				//Отрисовываем его
				this.container.setSlot("resultSlot", res.result.id, res.result.count, res.result.data);
				this.sourcesForCleaning = res.cleaning;
				this.resultForCleaning = res.result
			} else {
				//Иначе рисуем пустой слот
				this.container.setSlot("resultSlot", 0, 0, 0);

				this.sourcesForCleaning = [];
				this.resultForCleaning = [];
			}
		}
	},
	events: {

	}
});

//И так, мы видим, что наш верстак отображает результат крафта, когда он возможен.

//Создадим интерфейс:

//Создаем обычное окно
var workbenchGui = new UI.StandartWindow();
//Задаем его свойства
workbenchGui.setContent({
	standart: {
		header: {
			text: {
				text: "workbench"
			},
		},
		inventory: {
			standart: true
		},
		background: {
			standart: true
		},
		minHeight: 600
	},
	elements: {
		//Создаем слоты
		"slot0": {
			type: "slot", x: 467, y: 146, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");

		},
		"slot1": {
			type: "slot", x: 537, y: 146, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");

		},
		"slot2": {
			type: "slot", x: 607, y: 146, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");


		},
		"slot3": {
			type: "slot", x: 467, y: 214, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");

		},
		"slot4": {
			type: "slot", x: 537, y: 214, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");


		},
		"slot5": {
			type: "slot", x: 607, y: 214, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");

		},
		"slot6": {
			type: "slot", x: 467, y: 283, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");
		},
		"slot7": {
			type: "slot", x: 537, y: 283, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				Logger.Log(Network.inRemoteWorld(), "psukered");
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");
		},
		"slot8": {
			type: "slot", x: 607, y: 283, size: 60,
			//При  клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				container.getParent().sendEvent("performCrafting", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");
		},
		//Слот для результата
		"resultSlot": {
			type: "slot", x: 698, y: 212, size: 60,
			//При обычном клике
			onItemChanged: function (container, oldID, oldData, oldCount) {
				if (oldID == 0) return;
				if (container.getParent().getSlot("resultSlot").id == 0) return;
				if (container.getParent().getSlot("resultSlot").id != oldID) return;
				Logger.Log(container.getParent().getSlot("resultSlot").id, "zeak");

				container.getParent().sendEvent("cleanSources", { });
				//Пробуем провести краф

			}

			//this.getSlot("resultSlot");
		}
	},
});