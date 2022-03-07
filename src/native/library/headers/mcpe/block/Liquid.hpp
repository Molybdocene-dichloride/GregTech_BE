#pragma once
#include <mcpe/BlockSource.hpp>
#include <mcpe/BlockPos.hpp>
#include <mcpe/Block.hpp>
#include <mcpe/Random.hpp>

class LiquidBlock : public BlockLegacy {
    LiquidBlock();
    _getFlow(LiquidBlock* liquid, BlockSource& source, const BlockPos& pos);
	//getSpread(BlockSource& source, const BlockPos& pos);
	getTickDelay(BlockSource& source);
	tick(BlockSource& source, BlockPos const& pos, Random& rand);
};
class LiquidBlockStatic : public LiquidBlock {
    LiquidBlockStatic();
};