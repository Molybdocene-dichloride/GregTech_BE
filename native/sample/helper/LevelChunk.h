#pragma once

#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\BlockPos.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\Block.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\Dimension.h>
class LevelChunk {
    public:
    Vec3 getPosition();
    Dimension getDimension();
    Block getBlock(ChunkBlockPos const&) const;
};