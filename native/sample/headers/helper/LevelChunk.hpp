#pragma once

#include <helper\BlockPos.hpp>
#include <helper\Block.hpp>
#include <helper\Dimension.hpp>
class LevelChunk {
    public:
    Level getLevel() const;
    Dimension getDimension() const;
    Block getBlock(ChunkBlockPos const&) const;
    ChunkLocalHeight getHeightRange() const;
    ChunkPos* getPosition() const;
};