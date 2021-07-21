#pragma once
#include <helper\BlockPos.h>
#include <helper\IBlockWorldGenAPI.h>
#include <helper\RenderParams.h>

class OreFeature {
	public:
	void place(IBlockWorldGenAPI&, BlockPos const&, Random&, RenderParams&);
};