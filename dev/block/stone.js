StoneDictionary.registerType({
	name: "stone",
	isgen: true,
	gen: {
		minheight: 1,
		maxheight: 170,
		rarity: 10
	}
});
StoneDictionary.registerType({
	name: "cobble",
	isgen: false
});
StoneDictionary.registerType({
	name: "cobble_mossy",
	isgen: false
});
StoneDictionary.registerType({
	name: "BRICKS",
	isgen: false
});
StoneDictionary.registerType({
	name: "bricks_cracked",
	isgen: false
});
StoneDictionary.registerType({
	name: "bricks_mossy",
	isgen: false
});
StoneDictionary.registerType({
	name: "bricks_chiseled",
	isgen: false
});
StoneDictionary.registerType({
	name: "smooth",
	isgen: false
});
Stones.registerID(0, 0);
Stones.registerID(1, 1);
Stones.registerID(1, 3);
Stones.registerID(1, 5);
Stones.registerID(13, 0);
StoneDictionary.registerStone("granite", {
	hardness: 7.0,
	resistance: 12.0,
	level: 3,
	name: "granite_black",
	dimension: 0,
	minheight: 1,
	maxheight: 170,
	rarity: 0.2,
	name2: "granite_red",
	dimension2: 0,
	minheight2: 1,
	maxheight2: 170,
	rarity2: 0.2
});
StoneDictionary.registerStone("mineral", {
	hardness: 3.0,
	resistance: 6.0,
	level: 1,
	name: "marble",
	dimension: 0,
	rarity: 0.5,
	minheight: 1,
	maxheight: 170,
	name2: "basalt",
	dimension2: 0,
	rarity2: 0.5,
	minheight2: 1,
	maxheight2: 170,
});
Callback.addCallback("PreBlocksDefined", function(screenName, lastScreenName, isPushEvent) {
	/*Logger.Log(screenName, "sewio");
	if(screenName == "play_screen - worlds") {
		Stones.ends();
	}*/
});
