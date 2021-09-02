#pragma once
#include <logger.h>
#include <mod.h>
#include <symbol.h>
#include <hook.h>

#include <mcpe/item/ItemStack.hpp>
#include <mcpe/block/Liquid.hpp>

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
		}; //CustomLiquidMaterial, Water or Lava only
		CustomLiquidMaterial(MaterialType type, Material::Settings settings, float f0) : Material(type, settings, f0) {

		};
		short getMaxSpread() {};
		short getViscosity() {};
	};
	class CustomLiquidBlock : public LiquidBlockStatic {
		CustomLiquidBlock(std::string const& name) : CustomLiquidBlock(name, *BlockRegistry::getBlockById(8).getMaterial()) {};
		CustomLiquidBlock(std::string const& name, Material const& material) : BlockLegacy(name, material) {}; //CustomLiquidMaterial
		_getFlow(LiquidBlock* liquid, BlockSource& source, const BlockPos& pos) {
		
		}
		getSpread(BlockSource& source, const BlockPos& pos) {
			
		}
		getTickDelay(BlockSource& source) {
			return material.getViscosity();
		}
		tick(BlockSource& source, BlockPos const& pos, Random& rand) {
		
		}
	};
}
