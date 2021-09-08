#pragma once

#include <mcpe/BlockPos.hpp>
#include <mcpe/Block.hpp>
#include <mcpe/Dimension.hpp>
class LevelChunk {
    public:
    Level getLevel() const;
    Dimension getDimension() const;
    Block getBlock(ChunkBlockPos const&) const;
    ChunkLocalHeight getHeightRange() const;
    ChunkPos* getPosition() const;
};
