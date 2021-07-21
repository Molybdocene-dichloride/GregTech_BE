#pragma once

#include <helper\ChunkBlockPos.h>

class PerlinSimplexNoise {
    public:
	PerlinSimplexNoise(unsigned int, int);
    float getValue(Vec3 const&);
};