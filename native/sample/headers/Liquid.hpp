#pragma once
#include <logger.h>
#include <mod.h>
#include <symbol.h>
#include <hook.h>

#include <mcpe/item/ItemStack.hpp>
#include <mcpe/block/Liquid.hpp>

namespace LiquidSystem {
	void enableInfinitySources() {
		
	}
	void disableInfinitySources() {
		
	}
	
	CustomLiquidMaterial* toCLM(Material* mat) {
		if(CustomLiquidMaterial* v = dynamic_cast<CustomLiquidMaterial*>(mat)) {
			return v;
		} else if(mat.type == MaterialType::Water || mat.type == MaterialType::Lava) {
			return new CustomLiquidMaterial(mat);
		}
	}
	class CustomLiquidMaterial : public Material {
		CustomLiquidMaterial(Material& mat) : CustomLiquidMaterial(mat.type, Settings::Default, mat.getTranslucency()) {
		}; //CustomLiquidMaterial, Water or Lava only
		CustomLiquidMaterial(MaterialType type, Material::Settings settings, float f0) : Material(type, settings, f0) {

		};
		short getMaxSpread() {};
		short getViscosity() {};
	};
	class CustomLiquidBlock : public LiquidBlockStatic {
		CustomLiquidBlock(std::string const& name) : CustomLiquidBlock(name, *BlockRegistry::getBlockById(8).getMaterial()) {};
		CustomLiquidBlock(std::string const& name, Material const& material) : BlockLegacy(name, material) {}; //CustomLiquidMaterial
		Vec3 _getFlow(LiquidBlock* liquid, BlockSource& source, const BlockPos& pos) {
			
		}
		Vec3 getSpread(BlockSource& source, const BlockPos& pos) {
			
		}
		int getTickDelay(BlockSource& source) {
			return material.getViscosity();
		}
		void tick(BlockSource& source, BlockPos const& pos, Random& rand) {
			
		}
	};
	
	class GTLiquidModule : public Module { //change behaviour of Water &/| Lava &/| provide custom liquid managers
		public:
		GTLiquidModule(const char* id): Module(id) {};
	    virtual void initialize() {	
        	HookManager::addCallback(SYMBOL("mcpe", "_ZNK7Recipes22getFurnaceRecipeResultERK13ItemStackBaseRK12HashedString"), LAMBDA((HookManager::CallbackController* controller, ItemStackBase const& item, HashedString const& prefix), {
				Logger::debug("gh", patch::to_string<bool>(controller->hasResult()).c_str());
                //Logger::debug("oop", patch::to_string<bool>(((ItemStackBase*)controller->getResult())->).c_str());
                //if(custom.find(item) != m.end()) {
					//return custom[item];
				//}
				//return controller->getResult();
				//return controller->call<ItemStackBase, ItemStackBase const&, HashedString>(item, prefix);
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
			
			HookManager::addCallback(SYMBOL("mcpe", "_ZNK7Recipes22getFurnaceRecipeResultERK13ItemStackBaseRK12HashedString"), LAMBDA((HookManager::CallbackController* controller, ItemStackBase const& item, HashedString const& prefix), {
				Logger::debug("gh", patch::to_string<bool>(controller->hasResult()).c_str());
                //Logger::debug("oop", patch::to_string<bool>(((ItemStackBase*)controller->getResult())->).c_str());
                //if(custom.find(item) != m.end()) {
					//return custom[item];
				//}
				//return controller->getResult();
				//return controller->call<ItemStackBase, ItemStackBase const&, HashedString>(item, prefix);
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
			
			HookManager::addCallback(SYMBOL("mcpe", "_ZNK7Recipes22getFurnaceRecipeResultERK13ItemStackBaseRK12HashedString"), LAMBDA((HookManager::CallbackController* controller, ItemStackBase const& item, HashedString const& prefix), {
				Logger::debug("gh", patch::to_string<bool>(controller->hasResult()).c_str());
                //Logger::debug("oop", patch::to_string<bool>(((ItemStackBase*)controller->getResult())->).c_str());
                //if(custom.find(item) != m.end()) {
					//return custom[item];
				//}
				//return controller->getResult();
				//return controller->call<ItemStackBase, ItemStackBase const&, HashedString>(item, prefix);
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
			
			HookManager::addCallback(SYMBOL("mcpe", "_ZNK7Recipes22getFurnaceRecipeResultERK13ItemStackBaseRK12HashedString"), LAMBDA((HookManager::CallbackController* controller, ItemStackBase const& item, HashedString const& prefix), {
				Logger::debug("gh", patch::to_string<bool>(controller->hasResult()).c_str());
                //Logger::debug("oop", patch::to_string<bool>(((ItemStackBase*)controller->getResult())->).c_str());
                //if(custom.find(item) != m.end()) {
					//return custom[item];
				//}
				//return controller->getResult();
				//return controller->call<ItemStackBase, ItemStackBase const&, HashedString>(item, prefix);
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	    }
    };
}
