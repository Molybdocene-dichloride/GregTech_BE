#pragma once
#include <helper\BlockPos.h>
#include <helper\Block.h>
#include <helper\Actor.h>

class BlockSource {
    public:
	void setBlock(BlockPos const&, Block const&, int, ActorBlockSyncMessage const*);
    Block* getBlock(BlockPos const&) const;
};