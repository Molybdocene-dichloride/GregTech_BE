#pragma once

#include <helper\BlockPos.h>
#include <helper\Block.h>
#include <helper\Dimension.h>
class LevelChunk {
    public:
    Vec3 getPosition();
    Dimension getDimension();
    Block getBlock(ChunkBlockPos const&) const;
};