#pragma once
#include <helper\BlockPos.hpp>
#include <helper\Block.hpp>
#include <helper\Actor.hpp>

class BlockSource {
    public:
	void setBlock(BlockPos const&, Block const&, int, ActorBlockSyncMessage const*);
    Block* getBlock(BlockPos const&) const;
};