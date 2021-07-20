#pragma once
struct BlockID {
	unsigned char value;
	static const BlockID AIR;

	BlockID();
	BlockID(unsigned char);
	BlockID(const BlockID&);

	bool operator==(unsigned char);
	bool operator==(BlockID);
	BlockID& operator=(const unsigned char&);
	operator unsigned char();
	operator int();
};
class Block {
    public:
    static Block* mStone;
    static Block* mBlocks[65535];
    BlockID blockId;
};