#pragma once
#include <helper\BlockPos.hpp>
#include <helper\IBlockWorldGenAPI.hpp>
#include <helper\RenderParams.hpp>

class OreFeature {
	public:
	void place(IBlockWorldGenAPI&, BlockPos const&, Random&, RenderParams&);
};