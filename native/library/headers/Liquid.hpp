#pragma once
#include <logger.h>
#include <mod.h>
#include <symbol.h>
#include <hook.h>

#include <mcpe/item/ItemStack.hpp>
#include <mcpe/block/Liquid.hpp>

namespace LiquidSystem {
  std::__ndk1::unorderedmap<unsigned int, CustomLiquidMaterial*> custom;
	void enableInfinitySources(std::__ndk1::string id) {
		custom[BlockRegistry::Pool->get(id.c_str())].enableInfinitySources();
	}
	void enableInfinitySources(unsigned int id) {
		custom[id].enableInfinitySources();
	}
	void disableInfinitySources(std::__ndk1::string id) {
		custom[BlockRegistry::Pool->get(id.c_str())].disableInfinitySources();
	}
	void disableInfinitySources(unsigned int id) {
		custom[id].disableInfinitySources();
	}
	
	void registerLiquidBlock(CustomLiquidBlock* lblock, BlockProvider* pr) {
		BlockRegistry::registerBlock(lblock, pr);
	}
	
	CustomLiquidMaterial* toCLM(Material* mat) {
		if(CustomLiquidMaterial* v = dynamic_cast<CustomLiquidMaterial*>(mat)) {
			return v;
		} else if(mat.type == MaterialType::Water || mat.type == MaterialType::Lava) {
			return new CustomLiquidMaterial(mat);
		}
	}
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

class CustomLiquidMaterial : public Material {
		char FILLER[UNKNOWN_SIZE];
		private bool isInfinity;
		private short maxSpread;
		private short viscosity;
		CustomLiquidMaterial(Material& mat, isInfinity, maxSpread, viscosity) : CustomLiquidMaterial(mat.type, Settings::Default, mat.getTranslucency(), isInfinity, maxSpread, viscosity) {
			
		} //CustomLiquidMaterial, Water or Lava only
		CustomLiquidMaterial(MaterialType type, Material::Settings settings, float f0) : Material(type, settings, f0) {
			this.isInfinity = isInfinity;
			this.maxSpread = maxSpread;
			this.viscosity = viscosity;
		}
		
		Vec3 _getFlow(LiquidBlock* liquid, BlockSource& source, const BlockPos& pos) {
			
		}
		Vec3 getSpread(BlockSource& source, const BlockPos& pos) {
			
		}
		int getTickDelay(BlockSource& source) {
			return material.getViscosity();
		}
		void tick(BlockSource& source, BlockPos const& pos, Random& rand) {
			
		}
		bool isInfinitySourcesEnabled() {
			return isInfinity;
		};
		void enableInfinitySources() {
			isInfinity = true;
		};
		void disableInfinitySources() {
			isInfinity = false;
		};
		short getMaxSpread() {
			return maxSpread;
		};
		short getViscosity() {
			return viscosity;
		};
	};
	class CustomLiquidBlock : public LiquidBlockStatic {
		CustomLiquidBlock(std::string const& name, CustomLiquidMaterial const& material) : BlockLegacy(name, material) {}; //CustomLiquidMaterial
		Vec3 _getFlow(LiquidBlock* liquid, BlockSource& source, const BlockPos& pos) {
			return this->getMaterial()._getFlow();
		}
		Vec3 getSpread(BlockSource& source, const BlockPos& pos) {
			return this->getMaterial().getSpread();
		}
		int getTickDelay(BlockSource& source) {
			return this->getMaterial().getViscosity();
		}
		void tick(BlockSource& source, BlockPos const& pos, Random& rand) {
			this->getMaterial().tick();
		}
	};
