#pragma once
#include <mcpe/item/Item.hpp>

class ItemStackBase {};
class ItemStack : public ItemStackBase {
    ItemStack(Item, int, int);
};