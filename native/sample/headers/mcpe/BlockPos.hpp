#pragma once

#include <mcpe\ChunkBlockPos.hpp>

class Rotation;
class Mirror;
class SubChunkPos;
struct BlockPos;
class Vec3 {
	public:
    float x, y, z;
	public:
	Vec3(BlockPos const&);
};
class ChunkPos {
	public:
    int chunkXPos, chunkZPos;
	ChunkPos(Vec3 const&);
	ChunkPos(BlockPos const&);
	BlockPos getMiddleBlockPosition(int) const;
};
class ChunkBlockPos;
class BlockPos {
	public:
	//char filler_BlockPos[UNKNOW_SIZE];
	double x, y, z;
	public:
	BlockPos(Vec3 const&);
	BlockPos(ChunkPos const&, int);
	BlockPos(SubChunkPos const&, int);
	BlockPos(ChunkPos const&, ChunkBlockPos const&, short);
	BlockPos(float, float, float);
	BlockPos(double, double, double);
	void relative(unsigned char, int) const;
	void randomFloat() const;
	void randomSeed() const;
	void neighbor(unsigned char) const;
	std::string toString() const;
	void center() const;
	void transform(Rotation, Mirror, Vec3 const&) const;
	public:
	static BlockPos * ZERO;
	static BlockPos * MIN;
	static BlockPos * MAX;
	static BlockPos * ONE;
};