#pragma once

#include <gsl/pointers>
class BlockLegacy;
class Block {
    public:
    int getRuntimeId() const;
	Block(unsigned short, gsl::not_null<BlockLegacy*>);
};