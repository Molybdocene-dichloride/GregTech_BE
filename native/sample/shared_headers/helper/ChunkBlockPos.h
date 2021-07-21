#pragma once

#include <helper\BlockPos.h>

class ChunkBlockPos {
public:
	//char filler_BlockPos[UNKNOW_SIZE];
	int x, y, z;
public:
	ChunkBlockPos(Vec3 const&);
	ChunkBlockPos(ChunkPos const&, int);
	ChunkBlockPos(float, float, float);
	ChunkBlockPos(double, double, double);
	void relative(unsigned char, int) const;
	void randomFloat() const;
	void randomSeed() const;
	void neighbor(unsigned char) const;
	std::string toString() const;
	void center() const;
	void transform(Rotation, Mirror, Vec3 const&) const;
public:
	static ChunkBlockPos * ZERO;
	static ChunkBlockPos * MIN;
	static ChunkBlockPos * MAX;
	static ChunkBlockPos * ONE;
};