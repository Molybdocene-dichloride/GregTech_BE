#pragma once

#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\ChunkBlockPos.h>

class PerlinSimplexNoise {
    public:
	PerlinSimplexNoise(unsigned int, int);
    float getValue(Vec3 const&);
};