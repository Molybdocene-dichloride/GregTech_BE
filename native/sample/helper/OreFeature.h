#pragma once
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\BlockPos.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\IBlockWorldGenAPI.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\RenderParams.h>

class OreFeature {
	public:
	void place(IBlockWorldGenAPI&, BlockPos const&, Random&, RenderParams&);
};