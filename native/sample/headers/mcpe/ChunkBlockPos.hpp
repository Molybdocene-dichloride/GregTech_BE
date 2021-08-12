#pragma once

#include <mcpe\BlockPos.hpp>
class ChunkLocalHeight {};
class ChunkBlockPos {
public:
	//char filler_BlockPos[UNKNOW_SIZE];
	int x, y, z;
public:
	ChunkBlockPos();
	ChunkBlockPos(BlockPos const&, short);
	ChunkBlockPos(unsigned char, ChunkLocalHeight, unsigned char);
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