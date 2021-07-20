#pragma once
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\BlockPos.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\Block.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\Actor.h>

class BlockSource {
    public:
	void setBlock(BlockPos const&, Block const&, int, ActorBlockSyncMessage const*);
};