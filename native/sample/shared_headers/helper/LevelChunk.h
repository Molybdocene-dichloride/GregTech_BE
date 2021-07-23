#pragma once

#include <helper\BlockPos.h>
#include <helper\Block.h>
#include <helper\Dimension.h>
class LevelChunk {
    public:
    Level getLevel() const;
    Dimension getDimension() const;
    Block getBlock(ChunkBlockPos const&) const;
    ChunkLocalHeight getHeightRange() const;
    ChunkPos getPosition() const;
};