setLoadingTip("GTMaterials: register Materials");
MaterialDictionary.registerForm("item", 0, "ingot");
MaterialDictionary.registerForm("item", 0, "dust");
MaterialDictionary.registerForm("item", GENERATE_PLATE, "plate");
MaterialDictionary.registerForm("item", GENERATE_DENSE, "plateDense");
MaterialDictionary.registerForm("item", GENERATE_ROD, "stick");
MaterialDictionary.registerForm("item", GENERATE_LONG_ROD, "stickLong");
MaterialDictionary.registerForm("item", 0, "dustSmall");
MaterialDictionary.registerForm("item", 0, "dustTiny");
MaterialDictionary.registerForm("item", GENERATE_FOIL, "foil");
MaterialDictionary.registerForm("item", GENERATE_FINE_WIRE, "wireFine");
MaterialDictionary.registerForm("item", GENERATE_SMALL_GEAR, "gearGtSmall");
MaterialDictionary.registerForm("item", GENERATE_GEAR, "gearGt");
MaterialDictionary.registerForm("item", GENERATE_RING, "ring");
MaterialDictionary.registerForm("item", GENERATE_BOLT_SCREW, "bolt");
MaterialDictionary.registerForm("item", GENERATE_BOLT_SCREW, "screw");
//MaterialDictionary.registerForm(ItemID.gtmetaitem01, GENERATE_TURBINE_BLADE, "gear");
MaterialDictionary.registerForm("item", 0, "nugget");

MaterialDictionary.registerForm("item", 0, "gem");
MaterialDictionary.registerForm("item", GENERATE_LENSE, "lens");

MaterialDictionary.registerForm("item", GENERATE_ORE, "crushed");
MaterialDictionary.registerForm("item", GENERATE_ORE, "crushedPurified");
MaterialDictionary.registerForm("item", GENERATE_ORE, "crushedCentrifuged");
MaterialDictionary.registerForm("item", GENERATE_ORE, "dustImpure");
MaterialDictionary.registerForm("item", GENERATE_ORE, "dustPure");

MaterialDictionary.registerForm("block", 0, "block");
MaterialDictionary.registerForm("block", GENERATE_FRAME, "frameGt");

MaterialDictionary.registerMaterial(new Material("_NULL", of(), "MARKER"));

MaterialDictionary.registerMaterial(new Material("aluminium", Elements.Al, "INGOT", EXT2_METAL | GENERATE_SMALL_GEAR | GENERATE_ORE | GENERATE_RING | GENERATE_FRAME, 933.25, 2773.15));
MaterialDictionary.registerMaterial(new Material("americium", Elements.Am, "INGOT", STD_METAL | GENERATE_ROD | GENERATE_LONG_ROD, 1473.15, 2873.15));
MaterialDictionary.registerMaterial(new Material("antimony", Elements.Sb, "INGOT", EXT_METAL | MORTAR_GRINDABLE, 903.78, 1908 ));
MaterialDictionary.registerMaterial(new Material("arsenic", Elements.As, "DUST", 0, TemperaturePoints.NO, 887));
MaterialDictionary.registerMaterial(new Material("barium", Elements.Ba, "INGOT", STD_METAL, 983.15, 2118));
MaterialDictionary.registerMaterial(new Material("beryllium", Elements.Be, "INGOT", STD_METAL | GENERATE_ORE, 1558.15, 3243.15));
MaterialDictionary.registerMaterial(new Material("bismuth", Elements.Bi, "INGOT", GENERATE_ORE, 544.45, 1833.15));
MaterialDictionary.registerMaterial(new Material("boron", Elements.B, "DUST", 0, 2349.15, 4073));
MaterialDictionary.registerMaterial(new Material("cadmium", Elements.Cd, "INGOT", 0, 594.18, 1038));
MaterialDictionary.registerMaterial(new Material("calcium", Elements.Ca, "INGOT", 0, 1112, 1757));
MaterialDictionary.registerMaterial(new Material("carbon", Elements.C, "INGOT", 0, 3780, 4130));
MaterialDictionary.registerMaterial(new Material("cerium", Elements.Ce, "INGOT", 0, 1072, 3699));
MaterialDictionary.registerMaterial(new Material("cobalt", Elements.Co, "INGOT", GENERATE_ORE | STD_METAL, 1768, 3143));
MaterialDictionary.registerMaterial(new Material("copper", Elements.Cu, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_DENSE, 1356.55, 2840.15));
MaterialDictionary.registerMaterial(new Material("chlorine", Elements.Cl, "FLUID",  STATE_GAS, -101, 172));
MaterialDictionary.registerMaterial(new Material("chrome", Elements.Cr, "INGOT",  EXT2_METAL | GENERATE_RING | GENERATE_ROTOR, 2130, 2945));
MaterialDictionary.registerMaterial(new Material("gallium", Elements.Ga, "INGOT", GENERATE_PLATE, 302.91, 2477));
MaterialDictionary.registerMaterial(new Material("gold", Elements.Au, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 1337.33, 3129));
MaterialDictionary.registerMaterial(new Material("fluorine", Elements.F, "FLUID", STATE_GAS, -219.67, 53.48));
MaterialDictionary.registerMaterial(new Material("iridium", Elements.Ir, "INGOT", GENERATE_ORE | EXT2_METAL | GENERATE_ORE | GENERATE_RING | GENERATE_ROTOR, 2739, 4701));
MaterialDictionary.registerMaterial(new Material("iron", Elements.Fe, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_DENSE | GENERATE_FRAME | GENERATE_LONG_ROD | GENERATE_PLASMA | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 1811, 3134));
MaterialDictionary.registerMaterial(new Material("lead", Elements.Pb, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_DENSE, 600, 2022));
MaterialDictionary.registerMaterial(new Material("magnesium", Elements.Mg, "INGOT", STD_METAL, 923.15, 1363.15));
MaterialDictionary.registerMaterial(new Material("manganese", Elements.Mn, "INGOT", GENERATE_FOIL, 1517, 2235));
MaterialDictionary.registerMaterial(new Material("lithium", Elements.Li, "INGOT", STD_METAL | GENERATE_ORE, 453.65,	1603));
MaterialDictionary.registerMaterial(new Material("mercury", Elements.Hg, "FLUID", SMELT_INTO_FLUID, 234.3210, 629.88));
MaterialDictionary.registerMaterial(new Material("molybdenum", Elements.Mo, "INGOT", GENERATE_ORE, 2896, 4912));
MaterialDictionary.registerMaterial(new Material("neodymium", Elements.Nd, "INGOT", STD_METAL | GENERATE_ROD | GENERATE_ORE, 1297, 3347));
MaterialDictionary.registerMaterial(new Material("nickel", Elements.Ni, "INGOT", STD_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_PLASMA, 1728, 3003));
MaterialDictionary.registerMaterial(new Material("niobium", Elements.Nb, "INGOT", STD_METAL, 2741, 5015));
MaterialDictionary.registerMaterial(new Material("nitrogen", Elements.N, "FLUID", STATE_GAS | GENERATE_PLASMA, 63.29, 77.4));
MaterialDictionary.registerMaterial(new Material("oxygen", Elements.O, "FLUID", STATE_GAS | GENERATE_PLASMA, 54.8, 90.19));
MaterialDictionary.registerMaterial(new Material("hydrogen", Elements.H, "FLUID", STATE_GAS, 14.01, 20,28));
MaterialDictionary.registerMaterial(new Material("palladium", Elements.Pd, "INGOT", EXT2_METAL | GENERATE_ORE | GENERATE_FLUID_BLOCK, 1828, 2940));
MaterialDictionary.registerMaterial(new Material("phosphorus", Elements.P, "DUST", GENERATE_ORE, 317.3, 553));
MaterialDictionary.registerMaterial(new Material("platinum", Elements.Pt, "INGOT", EXT2_METAL | GENERATE_ORE | GENERATE_FLUID_BLOCK, 2041.4, 4098));
MaterialDictionary.registerMaterial(new Material("potassium", Elements.K, "INGOT", EXT_METAL, 336.8, 1047));
MaterialDictionary.registerMaterial(new Material("titanium", Elements.Ti, "INGOT", EXT2_METAL | MORTAR_GRINDABLE, 1943, 3560));
MaterialDictionary.registerMaterial(new Material("silver", Elements.Ag, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE, 1235.1, 2485));
MaterialDictionary.registerMaterial(new Material("silicon", Elements.Si, "INGOT", STD_METAL | GENERATE_FOIL, 1688, 2623));
MaterialDictionary.registerMaterial(new Material("sodium", Elements.Na, "INGOT", STD_METAL, 370.96, 1156,1));
MaterialDictionary.registerMaterial(new Material("sulfur", Elements.S, "DUST", NO_SMASHING | NO_SMELTING | FLAMMABLE | GENERATE_ORE, 386, 717.824));
MaterialDictionary.registerMaterial(new Material("tantalum", Elements.Ta, "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING, 3290, 5731));
MaterialDictionary.registerMaterial(new Material("tin", Elements.Sn, "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_ROTOR | GENERATE_ORE, 505.06, 2893));
MaterialDictionary.registerMaterial(new Material("thorium", Elements.Th, "INGOT", STD_METAL | GENERATE_ORE, 2028, 5060));
MaterialDictionary.registerMaterial(new Material("tungsten", Elements.W, "INGOT", EXT2_METAL, 3695, 5828));
MaterialDictionary.registerMaterial(new Material("uranium", Elements.U[238], "INGOT", STD_METAL | GENERATE_ORE, 1405.5, 4018));
MaterialDictionary.registerMaterial(new Material("uranium235", Elements.U[235], "INGOT", STD_METAL | GENERATE_ORE | GENERATE_ROD, 1405.5, 4018));
MaterialDictionary.registerMaterial(new Material("vanadium", Elements.V, "INGOT", STD_METAL, 2160, 3650));
MaterialDictionary.registerMaterial(new Material("zinc", Elements.Zn, "INGOT", STD_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_FOIL, 692.75, 1179.35));








MaterialDictionary.registerMaterial(new Material("almandine", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["iron"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("amber", of(), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | 
HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("banded_iron", of(new MaterialStack(MaterialDictionary.dict["iron"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("barite", of(new MaterialStack(MaterialDictionary.dict["barium"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("bastnasite",  of(new MaterialStack(MaterialDictionary.dict["cerium"], 1), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["fluorine"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("battery_alloy", of(new MaterialStack(MaterialDictionary.dict["lead"], 4), new MaterialStack(MaterialDictionary.dict["antimony"], 1)), "INGOT", EXT_METAL));
MaterialDictionary.registerMaterial(new Material("blue_topaz", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["fluorine"], 2), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "GEM", GENERATE_ORE | STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("bronze", of(new MaterialStack(MaterialDictionary.dict["tin"], 1), new MaterialStack(MaterialDictionary.dict["copper"], 3)), "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_ROTOR | GENERATE_FRAME | GENERATE_LONG_ROD));
MaterialDictionary.registerMaterial(new Material("brown_limonite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["hydrogen"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("certus_quartz", of(), "GEM", STD_SOLID | NO_SMELTING | CRYSTALLISABLE | GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("coal", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "GEM", GENERATE_ORE | FLAMMABLE | NO_SMELTING | NO_SMASHING | MORTAR_GRINDABLE | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES));
MaterialDictionary.registerMaterial(new Material("calcite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 1), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("cassiterite", of(new MaterialStack(MaterialDictionary.dict["tin"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("chalcopyrite", of(new MaterialStack(MaterialDictionary.dict["copper"], 1), new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DIST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("cinnabar", of(new MaterialStack(MaterialDictionary.dict["mercury"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("cobaltite", of(new MaterialStack(MaterialDictionary.dict["cobalt"], 1), new MaterialStack(MaterialDictionary.dict["arsenic"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("cooperite", of(new MaterialStack(MaterialDictionary.dict["platinum"], 3), new MaterialStack(MaterialDictionary.dict["nickel"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1), new MaterialStack(MaterialDictionary.dict["palladium"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("dark_ash", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "DUST", DISABLE_DECOMPOSITION));
MaterialDictionary.registerMaterial(new Material("ash", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "DUST", DISABLE_DECOMPOSITION));
MaterialDictionary.registerMaterial(new Material("diamond", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "GEM", GENERATE_ROD | GENERATE_BOLT_SCREW | GENERATE_LENSE | GENERATE_GEAR | NO_SMASHING | NO_SMELTING | FLAMMABLE | HIGH_SIFTER_OUTPUT | GENERATE_ORE | DISABLE_DECOMPOSITION | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES));
MaterialDictionary.registerMaterial(new Material("emerald", of(new MaterialStack(MaterialDictionary.dict["beryllium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 6), new MaterialStack(MaterialDictionary.dict["oxygen"], 18)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES));
MaterialDictionary.registerMaterial(new Material("ender_pearl", of(new MaterialStack(MaterialDictionary.dict["beryllium"], 3), new MaterialStack(MaterialDictionary.dict["potassium"], 4), new MaterialStack(MaterialDictionary.dict["nitrogen"], 5)), "GEM", GENERATE_PLATE | GENERATE_LENSE | NO_SMASHING | NO_SMELTING));
MaterialDictionary.registerMaterial(new Material("galena", of(new MaterialStack(MaterialDictionary.dict["lead"], 3), new MaterialStack(MaterialDictionary.dict["silver"], 3), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("garnierite", of(new MaterialStack(MaterialDictionary.dict["nickel"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("glauconite", of(new MaterialStack(MaterialDictionary.dict["potassium"], 1), new MaterialStack(MaterialDictionary.dict["magnesium"], 2), new MaterialStack(MaterialDictionary.dict["aluminium"], 4), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("glowstone", of(), "DUST", NO_SMASHING | SMELT_INTO_FLUID | GENERATE_PLATE | EXCLUDE_PLATE_COMPRESSOR_RECIPE));
MaterialDictionary.registerMaterial(new Material("graphite", of(), "INGOT", GENERATE_PLATE | GENERATE_ORE | NO_SMELTING | FLAMMABLE));
MaterialDictionary.registerMaterial(new Material("green_sapphire", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "GEM", GENERATE_ORE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_LENSE));
MaterialDictionary.registerMaterial(new Material("andradite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", 0));
MaterialDictionary.registerMaterial(new Material("grossular", of(new MaterialStack(MaterialDictionary.dict["calcium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("gunpowder", of(), "DUST", FLAMMABLE | EXPLOSIVE | NO_SMELTING | NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("quartzite", of(), "GEM", NO_SMELTING | CRYSTALLISABLE | GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("ilmenite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["titanium"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("jasper", of(), "GEM", STD_GEM | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("lazurite", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 6), new MaterialStack(MaterialDictionary.dict["silicon"], 6), new MaterialStack(MaterialDictionary.dict["calcium"], 8), new MaterialStack(MaterialDictionary.dict["sodium"], 8)), "GEM", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("lepidolite", of(new MaterialStack(MaterialDictionary.dict["potassium"], 1), new MaterialStack(MaterialDictionary.dict["lithium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 4), new MaterialStack(MaterialDictionary.dict["fluorine"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 10)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("magnesite", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 1), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("magnetite", of(new MaterialStack(MaterialDictionary.dict["iron"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("malachite", of(new MaterialStack(MaterialDictionary.dict["copper"], 2), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 5)), "DUST", GENERATE_ORE | INDUCTION_SMELTING_LOW_OUTPUT));
MaterialDictionary.registerMaterial(new Material("molybdenite",  of(new MaterialStack(MaterialDictionary.dict["molybdenum"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("nether_quartz", of(), "GEM", STD_SOLID | NO_SMELTING | CRYSTALLISABLE | GENERATE_ORE | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES));
MaterialDictionary.registerMaterial(new Material("nether_star", of(), "GEM", STD_SOLID | GENERATE_LENSE | NO_SMASHING | NO_SMELTING));
MaterialDictionary.registerMaterial(new Material("pentlandite", of(new MaterialStack(MaterialDictionary.dict["nickel"], 9), new MaterialStack(MaterialDictionary.dict["sulfur"], 8)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("phosphate", of(new MaterialStack(MaterialDictionary.dict["phosphorus"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)),  "DUST", GENERATE_ORE | NO_SMASHING | NO_SMELTING | FLAMMABLE | EXPLOSIVE));
MaterialDictionary.registerMaterial(new Material("powellite",  of(new MaterialStack(MaterialDictionary.dict["calcium"], 1), new MaterialStack(MaterialDictionary.dict["molybdenum"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("pyrite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("pyrochlore", of(new MaterialStack(MaterialDictionary.dict["calcium"], 2), new MaterialStack(MaterialDictionary.dict["niobium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 7)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("pyrolusite", of(new MaterialStack(MaterialDictionary.dict["manganese"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("pyrope", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["magnesium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("salt",  of(new MaterialStack(MaterialDictionary.dict["sodium"], 1), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("silicon_dioxide", of(new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", NO_SMASHING | NO_SMELTING | CRYSTALLISABLE));
MaterialDictionary.registerMaterial(new Material("soapstone", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 4), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("spessartine", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["manganese"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("spodumene", of(new MaterialStack(MaterialDictionary.dict["lithium"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 1), new MaterialStack(MaterialDictionary.dict["silicon"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("rare_earth", of(), "DUST", 0));
MaterialDictionary.registerMaterial(new Material("rock_salt",  of(new MaterialStack(MaterialDictionary.dict["potassium"], 1), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("ruby", of(new MaterialStack(MaterialDictionary.dict["chrome"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("fools_ruby", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("rutile", of(new MaterialStack(MaterialDictionary.dict["titanium"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "GEM",  STD_GEM | DISABLE_DECOMPOSITION));
MaterialDictionary.registerMaterial(new Material("sapphire", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("sodalite", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["sodium"], 4), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "GEM", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("tanzanite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 2), new MaterialStack(MaterialDictionary.dict["aluminium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["hydrogen"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 13)), "GEM", EXT_METAL | GENERATE_ORE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("topaz", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["fluorine"], 2), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "GEM", GENERATE_ORE | STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("steel", of(new MaterialStack(MaterialDictionary.dict["iron"], 1)), "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_ROTOR | GENERATE_SMALL_GEAR | GENERATE_DENSE | DISABLE_DECOMPOSITION | GENERATE_FRAME | GENERATE_LONG_ROD));
MaterialDictionary.registerMaterial(new Material("stibnite", of(new MaterialStack(MaterialDictionary.dict["antimony"], 2), new MaterialStack(MaterialDictionary.dict["sulfur"], 3)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("scheelite", of(new MaterialStack(MaterialDictionary.dict["tungsten"], 1), new MaterialStack(MaterialDictionary.dict["calcium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("talc", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 4), new MaterialStack(MaterialDictionary.dict["hydrogen"],2), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("tantalite", of(new MaterialStack(MaterialDictionary.dict["manganese"], 1), new MaterialStack(MaterialDictionary.dict["tantalum"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("tungstate", of(new MaterialStack(MaterialDictionary.dict["tungsten"], 1), new MaterialStack(MaterialDictionary.dict["lithium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("tetrahedrite", of(new MaterialStack(MaterialDictionary.dict["copper"], 3), new MaterialStack(MaterialDictionary.dict["antimony"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 3), new MaterialStack(MaterialDictionary.dict["iron"], 1)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("wroughtiron", of(new MaterialStack(MaterialDictionary.dict["iron"], 1)), "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_LONG_ROD | DISABLE_DECOMPOSITION));
MaterialDictionary.registerMaterial(new Material("wulfenite", of(new MaterialStack(MaterialDictionary.dict["lead"], 1), new MaterialStack(MaterialDictionary.dict["molybdenum"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("water", of(new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 1)), "FLUID", NO_RECYCLING | DISABLE_DECOMPOSITION));
MaterialDictionary.registerMaterial(new Material("yellow_limonite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["hydrogen"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("uraninite", of(new MaterialStack(MaterialDictionary.dict["uranium"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("uvarovite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 3), new MaterialStack(MaterialDictionary.dict["chrome"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", 0));

MaterialDictionary.registerMaterial(new Material("andesite", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("basalt", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("black_granite", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("diorite", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("endstone", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("granite", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("gravel", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("marble", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("netherrack", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("sandstone", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("stone", of(), "DUST", MORTAR_GRINDABLE | GENERATE_GEAR | GENERATE_PLATE | NO_SMASHING | NO_RECYCLING));
MaterialDictionary.registerMaterial(new Material("red_granite", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("red_sandstone", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("red_granite", of(), "DUST", NO_SMASHING));
MaterialDictionary.registerMaterial(new Material("red_sandstone", of(), "DUST", NO_SMASHING));


MaterialDictionary.registerMaterial(new Material("lava", of(), "FLUID", 0));
MaterialDictionary.registerMaterial(new Material("clay", of(new MaterialStack(MaterialDictionary.dict["sodium"], 2), new MaterialStack(MaterialDictionary.dict["lithium"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 2), new MaterialStack(MaterialDictionary.dict["water"], 6)), "DUST", MORTAR_GRINDABLE));
MaterialDictionary.registerMaterial(new Material("charcoal", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "GEM", FLAMMABLE | NO_SMELTING | NO_SMASHING | MORTAR_GRINDABLE));
MaterialDictionary.registerMaterial(new Material("glass", of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 1)), "GEM", GENERATE_PLATE | GENERATE_LENSE | NO_SMASHING | NO_RECYCLING | SMELT_INTO_FLUID | EXCLUDE_BLOCK_CRAFTING_RECIPES));
MaterialDictionary.registerMaterial(new Material("wheat", of(), "DUST", 0));
MaterialDictionary.registerMaterial(new Material("brick", of(new MaterialStack(MaterialDictionary.dict["clay"], 1)), "DUST", EXCLUDE_BLOCK_CRAFTING_RECIPES | DECOMPOSITION_BY_CENTRIFUGING));
MaterialDictionary.registerMaterial(new Material("steam", of(new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 1)), "FLUID", NO_RECYCLING | GENERATE_FLUID_BLOCK | DISABLE_DECOMPOSITION));




MaterialDictionary.registerMaterial(new Material("amethyst", of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 4), new MaterialStack(MaterialDictionary.dict["iron"], 1)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("apatite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 5), new MaterialStack(MaterialDictionary.dict["phosphate"], 3), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "GEM", GENERATE_ORE | NO_SMASHING | NO_SMELTING | CRYSTALLISABLE));
MaterialDictionary.registerMaterial(new Material("bauxite", of(new MaterialStack(MaterialDictionary.dict["rutile"], 2), new MaterialStack(MaterialDictionary.dict["aluminium"], 16), new MaterialStack(MaterialDictionary.dict["hydrogen"], 10), new MaterialStack(MaterialDictionary.dict["oxygen"], 11)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("bentonite", of(new MaterialStack(MaterialDictionary.dict["sodium"], 1), new MaterialStack(MaterialDictionary.dict["magnesium"], 6), new MaterialStack(MaterialDictionary.dict["silicon"], 12), new MaterialStack(MaterialDictionary.dict["hydrogen"], 4), new MaterialStack(MaterialDictionary.dict["water"], 5), new MaterialStack(MaterialDictionary.dict["oxygen"], 36)), "DUST", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("blaze", of(new MaterialStack(MaterialDictionary.dict["dark_ash"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1)), "DUST", NO_SMELTING | SMELT_INTO_FLUID | MORTAR_GRINDABLE | BURNING));
MaterialDictionary.registerMaterial(new Material("ender_eye", of(new MaterialStack(MaterialDictionary.dict["ender_pearl"], 1), new MaterialStack(MaterialDictionary.dict["blaze"], 1)), "GEM", GENERATE_PLATE | GENERATE_LENSE | NO_SMASHING | NO_SMELTING));
MaterialDictionary.registerMaterial(new Material("monazite", of(new MaterialStack(MaterialDictionary.dict["rare_earth"], 1), new MaterialStack(MaterialDictionary.dict["phosphate"], 1)), "GEM", GENERATE_ORE | NO_SMASHING | NO_SMELTING | CRYSTALLISABLE)); // ? - lantanoids rateearh
MaterialDictionary.registerMaterial(new Material("olivine", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 2), new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 2)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("opal", of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 1)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT));
MaterialDictionary.registerMaterial(new Material("lapis",  of(new MaterialStack(MaterialDictionary.dict["lazurite"], 12), new MaterialStack(MaterialDictionary.dict["sodalite"], 2), new MaterialStack(MaterialDictionary.dict["pyrite"], 1), new MaterialStack(MaterialDictionary.dict["calcite"], 1)), "GEM", GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("lignite", of(new MaterialStack(MaterialDictionary.dict["carbon"], 2), new MaterialStack(MaterialDictionary.dict["water"], 4), new MaterialStack(MaterialDictionary.dict["dark_ash"], 1)), "GEM", GENERATE_ORE | FLAMMABLE | NO_SMELTING | NO_SMASHING | MORTAR_GRINDABLE));
MaterialDictionary.registerMaterial(new Material("pitchblende", of(new MaterialStack(MaterialDictionary.dict["uraninite"], 3), new MaterialStack(MaterialDictionary.dict["thorium"], 1), new MaterialStack(MaterialDictionary.dict["lead"], 1)), "DUST", GENERATE_ORE));


MaterialDictionary.registerMaterial(new Material("red_garnet", of(new MaterialStack(MaterialDictionary.dict["pyrope"], 3), new MaterialStack(MaterialDictionary.dict["almandine"], 5), new MaterialStack(MaterialDictionary.dict["spessartine"], 8)), "GEM", STD_SOLID | GENERATE_LENSE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("redstone", of(new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["pyrite"], 5), new MaterialStack(MaterialDictionary.dict["ruby"], 1), new MaterialStack(MaterialDictionary.dict["mercury"], 3)), "DUST", GENERATE_ORE));

MaterialDictionary.registerMaterial(new Material("yellow_garnet", of(new MaterialStack(MaterialDictionary.dict["andradite"], 5), new MaterialStack(MaterialDictionary.dict["grossular"], 8), new MaterialStack(MaterialDictionary.dict["uvarovite"], 3)), "GEM", STD_SOLID | GENERATE_LENSE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_ORE));
MaterialDictionary.registerMaterial(new Material("flint",  of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 1)), "GEM", NO_SMASHING | MORTAR_GRINDABLE));
MaterialDictionary.registerMaterial(new Material("vanadium_magnetite",  of(new MaterialStack(MaterialDictionary.dict["magnetite"], 1), new MaterialStack(MaterialDictionary.dict["vanadium"], 1)), "DUST", GENERATE_ORE));




MaterialDictionary.registerMaterial(new Material("red_alloy", of(new MaterialStack(MaterialDictionary.dict["copper"], 1), new MaterialStack(MaterialDictionary.dict["redstone"], 4)), "INGOT", GENERATE_PLATE | GENERATE_FINE_WIRE));

MaterialDictionary.addMaterials();
//MaterialDictionary.registerMaterial(new Material("amber", "Al2O3", "gem", "",  0x0000FF, ));
//MaterialDictionary.registerMaterial(new Material("fake_ruby", "Al2O3", "gem", "ored", , 0xBD4949, ));
//MaterialDictionary.registerMaterial(new Material("pyrochlore", "Al2O3", "DUST", GENERATE_ORE,  0xE6D2D2, ));


invertedIDs.invertIDs();
MaterialDictionary.addToCreative();

setLoadingTip("GTMaterials: register Ores");
OreDictionary.registerChangeableBlock({id: 1, data: 0, texture: "stone"});
OreDictionary.registerChangeableBlock({id: 1, data: 1, texture: "granite"});
OreDictionary.registerChangeableBlock({id: 1, data: 3, texture: "diorite"});
OreDictionary.registerChangeableBlock({id: 1, data: 5, texture: "andesite"});
OreDictionary.registerChangeableBlock({id: 13, data: 0, texture: "gravel"});
OreDictionary.registerChangeableBlock({id: 7, data: 0, texture: "bedrock"});
OreDictionary.registerChangeableBlock({id: 87, data: 0, texture: "netherrack"});
OreDictionary.registerChangeableBlock({id: 121, data: 0, texture: "endstone"});
OreDictionary.registerChangeableBlock({id: 24, data: 0, texture: "sandstone"});
OreDictionary.registerChangeableBlock({id: 179, data: 0, texture: "sandstone_red"});
for(let stone in StoneDictionary.stones) {
    OreDictionary.registerChangeableBlock({id: stone, data: 0, texture: StoneDictionary.stones[stone].name});
    OreDictionary.registerChangeableBlock({id: stone, data: 8, texture: StoneDictionary.stones[stone].name2});
}


OreDictionary.registerOre(MaterialDictionary.dict.copper, {level: 1, isgen: true, minimalheight: 60, maximalheight: 120, rarity: 32});
OreDictionary.registerOre(MaterialDictionary.dict.cobalt, {level: 1, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tin, {level: 1, isgen: true, minimalheight: 60, maximalheight: 120, rarity: 32});
OreDictionary.registerOre(MaterialDictionary.dict.iron, {level: 2, isgen: true, minimalheight: 40, maximalheight: 80, rarity: 16});
OreDictionary.registerOre(MaterialDictionary.dict.coal, {level: 1, isgen: true, minimalheight: 60, maximalheight: 100, rarity: 24});
OreDictionary.registerOre(MaterialDictionary.dict.lignite, {level: 0, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.magnetite, {level: 1, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.vanadium_magnetite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.redstone, {level: 2, isgen: true, minimalheight: 5, maximalheight: 20, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.gold, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.graphite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.diamond, {level: 3, isgen: true, minimalheight: 5, maximalheight: 10, rarity: 2});
OreDictionary.registerOre(MaterialDictionary.dict.bismuth, {level: 1, isgen: true, minimalheight: 80, maximalheight: 120, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.lead, {level: 1, isgen: true, minimalheight: 40, maximalheight: 80, rarity: 16});
OreDictionary.registerOre(MaterialDictionary.dict.zinc, {level: 1, isgen: true, minimalheight: 30, maximalheight: 60, rarity: 12});
OreDictionary.registerOre(MaterialDictionary.dict.silver, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.nickel, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.lapis, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 4});
OreDictionary.registerOre(MaterialDictionary.dict.emerald, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.ruby, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.sapphire, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.green_sapphire, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.olivine, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.topaz, {level: 3, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.tanzanite, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.amethyst, {level: 3, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.opal, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.blue_topaz, {level: 3, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.amber, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.jasper, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.fools_ruby, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.red_garnet, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.yellow_garnet, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.sulfur, {level: 2, isgen: true, minimalheight: 5, maximalheight: 15, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.nether_quartz, {level: 2, isgen: false/*,minimalheight: 5, maximalheight: 15, rarity: 8*/});
OreDictionary.registerOre(MaterialDictionary.dict.brown_limonite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.yellow_limonite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.banded_iron, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.malachite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cassiterite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tetrahedrite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.stibnite, {level: 2, sgenn: false});
OreDictionary.registerOre(MaterialDictionary.dict.chalcopyrite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.bauxite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.aluminium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.ilmenite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.salt, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.rock_salt, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.lepidolite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.spodumene, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cinnabar, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.soapstone, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.talc, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.glauconite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pentlandite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.garnierite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cobaltite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cooperite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.palladium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.iridium, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.platinum, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pitchblende, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.uraninite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.uranium, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.uranium235, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.bastnasite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.monazite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.neodymium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.wulfenite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.molybdenite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.molybdenum, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.powellite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.scheelite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tungstate, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.lithium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.almandine, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrope, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.grossular, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.spessartine, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrolusite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tantalite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.quartzite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.certus_quartz, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.barite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.bentonite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.magnesite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.apatite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.phosphorus, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrochlore, {level: 0, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.galena, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.sodalite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.lazurite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.calcite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.beryllium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.thorium, {level: 2, isgen: false});

OreDictionary.registerOre(MaterialDictionary.dict.rutile, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.steel, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.wroughtiron, {level: 2, isgen: false});
//OreDictionary.addToCreative();

//Logger.Log(Object.keys(OreDictionary.invdata[BlockID.gtblockores0]).length, "sharovar");

/*Item.registerNameOverrideFunction(BlockID["gtblockores" + id], function(item){
  if(item.data == OreDictionary.counter * OreDictionary.stones.length + i) {
    return OreDictionary.ores[i].name + " ore";
  }
});
Item.registerNameOverrideFunction(BlockID["gtblockores" + smallid], function(item){
  if(item.data == OreDictionary.counter * OreDictionary.stones.length + i) {
    return "Small" + OreDictionary.ores[i].name + " ore";
  }
});*/
setLoadingTip("GTMaterials: register CodeVein aka OreMixVeins");
OreDictionary.registerVein(new OreMixVein("lignite", [0], MaterialDictionary.dict.lignite, MaterialDictionary.dict.lignite, MaterialDictionary.dict.lignite, MaterialDictionary.dict.coal, 50, 130, 160, 8, 32));

OreDictionary.registerVein(new OreMixVein("coal", [0], MaterialDictionary.dict.coal, MaterialDictionary.dict.coal, MaterialDictionary.dict.coal, MaterialDictionary.dict.lignite, 50, 80, 80, 6, 32));

OreDictionary.registerVein(new OreMixVein( "magnetite",  [0], MaterialDictionary.dict.magnetite, MaterialDictionary.dict.magnetite, MaterialDictionary.dict.iron, MaterialDictionary.dict.vanadium_magnetite, 50, 120, 160, 3, 32));

OreDictionary.registerVein(new OreMixVein("gold", [0], MaterialDictionary.dict.magnetite, MaterialDictionary.dict.magnetite, MaterialDictionary.dict.vanadium_magnetite, MaterialDictionary.dict.gold, 60, 80, 160, 3, 32));

OreDictionary.registerVein(new OreMixVein( "iron", [0], MaterialDictionary.dict.brown_limonite, MaterialDictionary.dict.yellow_limonite, MaterialDictionary.dict.banded_iron, MaterialDictionary.dict.malachite, 10, 40, 120, 4, 24));

OreDictionary.registerVein(new OreMixVein( "cassiterite", [0], MaterialDictionary.dict.tin, MaterialDictionary.dict.tin, MaterialDictionary.dict.cassiterite, MaterialDictionary.dict.tin, 40, 120, 50, 5, 24));

OreDictionary.registerVein(new OreMixVein( "tetrahedrite", [0], MaterialDictionary.dict.tetrahedrite, MaterialDictionary.dict.tetrahedrite, MaterialDictionary.dict.copper, MaterialDictionary.dict.stibnite, 80, 120, 70, 4, 24));

OreDictionary.registerVein(new OreMixVein( "copper", [0], MaterialDictionary.dict.chalcopyrite, MaterialDictionary.dict.iron, MaterialDictionary.dict.pyrite, MaterialDictionary.dict.copper, 10, 30, 80, 4, 24));

OreDictionary.registerVein(new OreMixVein( "bauxite", [0], MaterialDictionary.dict.bauxite, MaterialDictionary.dict.bauxite, MaterialDictionary.dict.aluminium, MaterialDictionary.dict.ilmenite, 50, 90, 80, 4, 24));

OreDictionary.registerVein(new OreMixVein( "salts", [0], MaterialDictionary.dict.rock_salt, MaterialDictionary.dict.salt, MaterialDictionary.dict.lepidolite, MaterialDictionary.dict.spodumene, 50, 60, 50, 3, 24));

OreDictionary.registerVein(new OreMixVein( "redstone", [0], MaterialDictionary.dict.redstone, MaterialDictionary.dict.redstone, MaterialDictionary.dict.ruby, MaterialDictionary.dict.cinnabar, 10, 40, 60, 3, 24));

OreDictionary.registerVein(new OreMixVein( "soapstone", [0], MaterialDictionary.dict.soapstone, MaterialDictionary.dict.talc, MaterialDictionary.dict.glauconite, MaterialDictionary.dict.pentlandite, 10, 40, 40, 3, 16));

OreDictionary.registerVein(new OreMixVein( "nickel", [0], MaterialDictionary.dict.garnierite, MaterialDictionary.dict.nickel, MaterialDictionary.dict.cobaltite, "pentlandite", 10, 40, 40, 3, 16));

OreDictionary.registerVein(new OreMixVein( "platinum", [0], MaterialDictionary.dict.cooperite, MaterialDictionary.dict.palladium, MaterialDictionary.dict.platinum, MaterialDictionary.dict.iridium, 40, 50, 5, 3, 16));

OreDictionary.registerVein(new OreMixVein("pitchblende", [0], MaterialDictionary.dict.pitchblende, MaterialDictionary.dict.pitchblende, MaterialDictionary.dict.uraninite, MaterialDictionary.dict.uraninite, 10, 40, 40, 3, 16));

OreDictionary.registerVein(new OreMixVein( "uranium", [0], MaterialDictionary.dict.uraninite, MaterialDictionary.dict.uraninite, MaterialDictionary.dict.uranium, MaterialDictionary.dict.uranium, 20, 30, 20, 3, 16));

OreDictionary.registerVein(new OreMixVein( "monazite", [0], MaterialDictionary.dict.bastnasite, MaterialDictionary.dict.bastnasite, MaterialDictionary.dict.monazite, MaterialDictionary.dict.neodymium, 20, 40, 30, 3, 16));

OreDictionary.registerVein(new OreMixVein( "molybdenum", [0], MaterialDictionary.dict.wulfenite, MaterialDictionary.dict.molybdenite, MaterialDictionary.dict.molybdenum, MaterialDictionary.dict.powellite, 20, 50, 5, 3, 16));

OreDictionary.registerVein(new OreMixVein( "tungstate", [0], MaterialDictionary.dict.scheelite, MaterialDictionary.dict.scheelite, MaterialDictionary.dict.tungstate, MaterialDictionary.dict.lithium, 20, 50, 10, 3, 16));

OreDictionary.registerVein(new OreMixVein( "sapphire", [0], MaterialDictionary.dict.almandine, MaterialDictionary.dict.pyrope, MaterialDictionary.dict.sapphire, MaterialDictionary.dict.green_sapphire, 10, 40, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "manganese", [0], MaterialDictionary.dict.grossular, MaterialDictionary.dict.spessartine, MaterialDictionary.dict.pyrolusite, MaterialDictionary.dict.tantalite, 20, 30, 20, 3, 16));

OreDictionary.registerVein(new OreMixVein( "quartz", [0], MaterialDictionary.dict.quartzite, MaterialDictionary.dict.barite, MaterialDictionary.dict.certus_quartz, MaterialDictionary.dict.certus_quartz, 40, 80, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "diamond", [0], MaterialDictionary.dict.graphite, MaterialDictionary.dict.graphite, MaterialDictionary.dict.diamond, MaterialDictionary.dict.coal, 5, 20, 40, 2, 16));

OreDictionary.registerVein(new OreMixVein( "olivine", [0], MaterialDictionary.dict.bentonite, MaterialDictionary.dict.magnesite, MaterialDictionary.dict.olivine, MaterialDictionary.dict.glauconite, 10, 40, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "apatite", [0], MaterialDictionary.dict.apatite, MaterialDictionary.dict.apatite, MaterialDictionary.dict.phosphorus, MaterialDictionary.dict.pyrochlore, 40, 60, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "galena", [0], MaterialDictionary.dict.galena, MaterialDictionary.dict.galena, MaterialDictionary.dict.silver, MaterialDictionary.dict.lead, 30, 60, 40, 5, 16));

OreDictionary.registerVein(new OreMixVein( "lapis", [0], MaterialDictionary.dict.lazurite, MaterialDictionary.dict.sodalite, MaterialDictionary.dict.lapis, MaterialDictionary.dict.calcite, 20, 50, 40, 5, 16));

OreDictionary.registerVein(new OreMixVein( "beryllium", [0], MaterialDictionary.dict.beryllium, MaterialDictionary.dict.beryllium, MaterialDictionary.dict.emerald, MaterialDictionary.dict.thorium, 5, 30, 30, 3, 16));

setLoadingTip("GTTool: register tool");
ToolDictionary.registerType({name: "hammer", blockTypes: ["stone"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "file", blockTypes: ["stone"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "axe", blockTypes: ["wood"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "hoe", blockTypes: ["stone"], damage: 1, flag: 0});
ToolDictionary.registerType({name: "pickaxe", blockTypes: ["stone"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "shovel", blockTypes: ["dirt"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "sword", blockTypes: ["fibre", "plant"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "mortar", blockTypes: ["fibre", "plant"], damage: 0, flag: 0});
ToolDictionary.registerType({name: "screwdriver", blockTypes: ["stone"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "wirecutter", blockTypes: ["stone"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "wrench", blockTypes: ["stone"], damage: 1, flag: 0});


/*ToolDictionary.registerType("file");
ToolDictionary.registerType("axe", ["wood"]);
ToolDictionary.registerType("hoe");
ToolDictionary.registerType("pickaxe", ["stone"]);
ToolDictionary.registerType("shovel", ["dirt"]);
ToolDictionary.registerType("sword");
ToolDictionary.registerType("mortar", null, ToolDictionary.WHITELIST.MATERIAL([MaterialDictionary.dict["bronze"], MaterialDictionary.dict["iron"], MaterialDictionary.dict["steel"], MaterialDictionary.dict["wroughtiron"]]));
ToolDictionary.registerType("screwdriver");
ToolDictionary.registerType("wirecutter", ["wire"]);
ToolDictionary.registerType("wrench");*/

ToolDictionary.registerMaterial({material: MaterialDictionary.dict["_NULL"], material2: MaterialDictionary.dict["_NULL"], durability: 100, 
    level: 0,
    miningspeed: 0.5,
    attackdamage: 1,
    enchantability: 0, flag: 0});
ToolDictionary.registerMaterial({material: MaterialDictionary.dict["flint"], material2: MaterialDictionary.dict["copper"], durability: 6400, 
    level: 1,
    miningspeed: 2.5,
    attackdamage: 5,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["iron"], material2: MaterialDictionary.dict["copper"], durability: 25600, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["steel"], material2: MaterialDictionary.dict["copper"], durability: 51200, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["bronze"], material2: MaterialDictionary.dict["copper"], durability: 19200, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["wroughtiron"], material2: MaterialDictionary.dict["copper"], durability: 38400, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["diamond"], material2: MaterialDictionary.dict["copper"], durability: 128000, 
    level: 3,
    miningspeed: 8,
    attackdamage: 7,
    enchantability: 0, flag: 0});
    
    
    
/*ToolDictionary.registerMaterial(MaterialDictionary.dict["flint"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["steel"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["iron"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["bronze"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["wroughtiron"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["diamond"], "stick");*/
ToolDictionary.addToCreative();

invertedIDs.invertIDs();

for(let id in MaterialDictionary.data) {
        //Logger.Log(item.data, "zaer");
        if(invertedIDs.isNumericIDisItemID(id)) {
Item.registerIconOverrideFunction(invertedIDs.itemID[id], function(item){
  return MaterialDictionary.getTexture(item);
});
Item.registerNameOverrideFunction(invertedIDs.itemID[id], function(item){
    let material = MaterialDictionary.data[item.id][item.data].material;
  let form = MaterialDictionary.data[item.id][item.data].form;
  
   if(form == undefined) return "unknown";
   if(material == undefined) return "unknown " + form;
   return material.name[0].toUpperCase() + material.name.substring(1) + " " + form + "\n" + material.formulatext;
});
}}

Item.registerIconOverrideFunction(ItemID.gtmetatool01, function(item) {
if(ToolDictionary.getTypeByData(item.data) == null) {
  return "unknown";
}
let w = ToolDictionary.getTypeByData(item.data).name;

  if(item.extra != undefined) {
    if(item.extra.getString("name") != undefined) {
       //if(item.extra.getNumber("damage") < MaterialDictionary.durability & item.extra.getNumber("damage") > MaterialDictionary.durability / 5 * 4)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 * 4 & item.extra.getNumber("damage") > MaterialDictionary.durability / 5 * 3)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 * 3 & item.extra.getNumber("damage") > MaterialDictionary.durability / 5 * 2)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 * 2 & item.extra.getNumber("damage") > MaterialDictionary.durability / 5)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 & item.extra.getNumber("damage") > 0)
      //android.view.Bitmap
      
return {name: item.extra.getString("name") + "_" + w};
        
      } else {
return {name: "unknown_" + w};
    }
  } else {
    return {name: "unknown_" + w};
  }
});
Item.registerNameOverrideFunction(ItemID.gtmetatool01, function(item) {
  if(ToolDictionary.getTypeByData(item.data) == null) {
    return "unknown";
  }
  if(item.extra != undefined) {
    if(item.extra.getString("name") != undefined) {
      return ToolDictionary.getTypeByData(item.data).name;    
    } else {
      return "Unknown " + ToolDictionary.getTypeByData(item.data).name;
    }
  } else {
    return "Unknown " + ToolDictionary.getTypeByData(item.data).name;  
  }
});

IDRegistry.genItemID("gtdebug");
Item.createItem("gtdebug", "Debug Scanner",  {name: "debug_scanner", meta: 0}, {});
Item.setCategory(ItemID.gtdebug, Native.ItemCategory.TOOL);
Item.setAllowedInOffhand(ItemID.gtdebug, true);
//for debugging
/*Item.registerUseFunction(ItemID.gtdebug, function (coords, item, block, isExternal) {
  if(TileEntity.isTileEntityBlock(block.id)) {
    if(TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.pipe != null) {
      let type = null;
      if(TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.pipe == true) {
        type = "pipe"
      } else {
        type = "machine"
      }
      Game.message("id:" + block.id + "\n" + "data:" + block.data + "\n" + "GT_Machine" + "\n" + type + "\n temperature: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.temperature + "\n progress: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.progress);
      if(type == "pipe") Game.message("steam: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.amount + "\n type:" + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.typeLiquid);
      if(type == "machine") Game.message("steam: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).liquidStorage.getAmount("steam"));
    }
  }
});*/

var testUiScreen = new UI.Window({
     location: {
          x: 0, 
          y: 0,
          width: UI.getScreenHeight(), 
          height: UI.getScreenHeight(), 
          scrollWidth:UI.getScreenHeight(),
          scrollHeight:UI.getScreenHeight()
     },
     params: {
          // стилизация (изменение стандартных текстур)
     },
     drawing: [/* элементы отрисовки фона */],
     elements: {
    "give": {type: "button", x: 32, y: 32, bitmap: "diamond", bitmap2: "diamond", scale: 2, clicker: {
			onClick: function() {
			  for(let i = 0; i < OreDictionary.countByID; i++) {
          for(let j = 0; j < OreDictionary.stones.length; j++) {
              World.setBlock(coords.x + j, coords.y + i, coords.z, BlockID.gtblockores0, i * OreDictionary.stones.length + j);
          }
        }
     }
}}}});



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
    	"slot0": {type: "slot", x: 467, y: 146, size: 60},
		"slot1": {type: "slot", x: 537, y: 146, size: 60},
		"slot2": {type: "slot", x: 607, y: 146, size: 60},
		"slot3": {type: "slot", x: 467, y: 214, size: 60},
		"slot4": {type: "slot", x: 537, y: 214, size: 60},
		"slot5": {type: "slot", x: 607, y: 214, size: 60},
		"slot6": {type: "slot", x: 467, y: 283, size: 60},
		"slot7": {type: "slot", x: 537, y: 283, size: 60},
		"slot8": {type: "slot", x: 607, y: 283, size: 60},
		"resultSlot": {type: "slot", x: 698, y: 212, size: 60, clicker: {
				//При обычном клике
				onClick: function(position, container, tileEntity) {
					//Пробуем провести крафт
					let result = Recipes.provideRecipe(container, prefix);
					//Если получилось
					if (result) {
					//Добавляем результат в инвентарь
						Player.getInventory().addItem(result.id, result.count, result.data);
					}
				},
				onLongClick: function(position, container, tileEntity) {
					this.onClick(position, container, tileEntity);
				}
			}
		},
  }
});

IDRegistry.genBlockID("cheetahtable");
Block.createBlock("cheetahtable", [{name: "table of testers", texture: [["cobblestone", 0]], inCreative: true}]);
TileEntity.registerPrototype(BlockID.cheetahtable, {
  useNetworkItemContainer: true,
  init: function() {
    
  },
  tick: function() {
    Logger.Log("zakotyui", "ass");
    let rec = Recipes.provideRecipe(this.container, "workbench");
    if(rec) {
      this.container.setSlot("recipeSlot", rec.id, rec.count, rec.data);
    } else {
      this.container.setSlot("recipeSlot", 0, 0, 0);
    }
  },
  destroy: function() {
    
  },
  client: {
    load: function() {},
  },
  getScreenName: function(player, coords) {
      return "workbench"
    },
    // это событие вызывается на стороне клиента, this в данном случае не определен, по переданному имени, которое вернул метод getScreenName, возвращает окно, которое нужно открыть
    getScreenByName: function(screenName) {
      Logger.Log("vg", uiw);
      return uiw;
    },
});

