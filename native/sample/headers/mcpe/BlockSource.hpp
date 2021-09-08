#pragma once
#include <mcpe/BlockPos.hpp>
#include <mcpe/Block.hpp>
#include <mcpe/Actor.hpp>

class BlockSource {
    public:
	void setBlock(BlockPos const&, Block const&, int, ActorBlockSyncMessage const*);
    Block* getBlock(BlockPos const&) const;
};
