#pragma once
#include <mcpe\BlockPos.hpp>
#include <mcpe\IBlockWorldGenAPI.hpp>
#include <mcpe\RenderParams.hpp>

class OreFeature {
	public:
	void place(IBlockWorldGenAPI&, BlockPos const&, Random&, RenderParams&);
};