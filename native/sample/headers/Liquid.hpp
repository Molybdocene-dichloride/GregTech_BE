#pragma once
#include <logger.h>
#include <mod.h>
#include <symbol.h>
#include <hook.h>

#include <mcpe/item/ItemStack.hpp>
#include <mcpe/block/Liquid.hpp>

namespace FurnaceSystem {
	std::__ndk1::map<ItemStack, ItemStack> custom;
	void addFurnaceRecipes(int id1, int data1, int count1, int id1, int data2, int count2) {
		Item* item1 = ItemRegistry::getItemById(id1);
		Item* item2 = ItemRegistry::getItemById(id2);
		addFurnaceRecipes(item1, data1, count1, item2, data2, count2);
	}
	void addFurnaceRecipes(Item item1, int data1, int count1, ItemStackBase item2, int data2, int count2) {
		ItemStack itemS1(item1, data1, count1);
		ItemStack itemS2(item2, data2, count2);
		addFurnaceRecipes(itemS1, itemS2);
	}
	void addFurnaceRecipes(ItemStack item1, ItemStack item2) {
		custom.insert(std::__ndk1::pair<ItemStack, ItemStack>(item1, item2));
	}
    class GTFurnaceModule : public Module { //adding custom recipes to furnace
    public:
	GTFurnace(const char* id): Module(id) {};
	    virtual void initialize() {	
        	HookManager::addCallback(SYMBOL("mcpe", "_ZNK7Recipes22getFurnaceRecipeResultERK13ItemStackBaseRK12HashedString"), LAMBDA((HookManager::CallbackController* controller, ItemStackBase const& item, HashedString const& prefix), {
				//controller->prevent();
				if(custom.find(item) != m.end()) {
					return custom[item];
				}
				//return controller->getResult();
				return controller->call<ItemStackBase>(item, prefix);
			}, ), HookManager::RETURN | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	    }
    };
};
namespace LiquidSystem {
	CustomLiquidMaterial* toCLM(Material* mat) {
		if(CustomLiquidMaterial* v = dynamic_cast<CustomLiquidMaterial*>(mat)) {
			return v;
		} else if(mat.type == MaterialType::Water || mat.type == MaterialType::Lava) {
			return new CustomLiquidMaterial(mat);
		}
	}
	class CustomLiquidMaterial : public Material {
		CustomLiquidMaterial(Material& mat) : CustomLiquidMaterial(mat.type, Settings::Default, mat.getTranslucency()) {
			material = toCLM();
		}; //CustomLiquidMaterial, Water or Lava only
		CustomLiquidMaterial(MaterialType type, Material::Settings settings, float f0) : Material(type, settings, f0) {

		};
		short getMaxSpread() {};
		short getViscosity() {};
	};
	class CustomLiquidBlock : public LiquidBlockStatic {
		CustomLiquidBlock(std::string const& name) : CustomLiquidBlock(name, *BlockRegistry::getBlockById(8).getMaterial()) {};
		CustomLiquidBlock(std::string const& name, Material const& material) : BlockLegacy(name, material) {}; //CustomLiquidMaterial
		_getFlow(LiquidBlock* liquid, BlockSource& source, const BlockPos& pos) {}
		getSpread(BlockSource& source, const BlockPos& pos) {}
		getTickDelay(BlockSource& source) {
			return material.getViscosity();
		}
		tick(BlockSource& source, BlockPos const& pos, Random& rand) {}
	};
}