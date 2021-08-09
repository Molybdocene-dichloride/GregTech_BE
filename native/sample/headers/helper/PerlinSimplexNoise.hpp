#pragma once

#include <helper\ChunkBlockPos.hpp>

class PerlinSimplexNoise {
    public:
	PerlinSimplexNoise(unsigned int, int);
    float getValue(float, float) const;
    float getValue(Vec3 const&) const;
};