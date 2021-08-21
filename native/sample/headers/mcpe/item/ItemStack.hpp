#pragma once
#include <mcpe/item/Item.hpp>

class ItemStackBase {
    ItemStackBase(Item const&);
    ItemStackBase(Item const&, int);
    ItemStackBase(Item const&, int, int);
};
class ItemStack : public ItemStackBase {
    ItemStack(Item const&);
    ItemStack(Item const&, int);
    ItemStack(Item const&, int, int);
};