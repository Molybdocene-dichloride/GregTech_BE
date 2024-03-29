#pragma once
#include <string>
#include <vector>
#include <gsl/pointers>
#include <mcpe/ptrs.hpp>

class BlockLegacy {
    public:
    char filler[212];
    char id;
    short getBlockItemId() const;
    bool isSlabBlock() const;
    bool isSolid() const;
    std::string getCommandName() const;
    std::string getRawNameId() const;
};
class Block {
    public:
    unsigned char data;
    char filler[5];
    WeakPtr<BlockLegacy> legacy;
    BlockLegacy* getBlockLegacy() const;
    /*BlockLegacy* getBlockLegacy() {
        Logger::debug("paasdd", patch::to_string<bool>(legacy != nullptr).c_str());
        return legacy; 
    };*/
    Block(unsigned short, gsl::not_null<BlockLegacy*>);
    unsigned char getVariant() const;
    bool isSlabBlock() const;
    bool isSolid() const;
    short getRuntimeId() const;
    std::string getRawNameId() const;
    bool hasRuntimeId() const;
};
static_assert(offsetof(Block, data) == 0, "Block data");
static_assert(offsetof(BlockLegacy, id) == 212, "Block id");

static_assert(offsetof(Block, legacy) == 8, "Block legacy");