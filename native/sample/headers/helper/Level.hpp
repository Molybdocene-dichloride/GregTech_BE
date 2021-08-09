#pragma once

#include <helper\mce.hpp>
class Level {
    public:
    TickingArea getTickingArea(mce::UUID const&) const;
    int getSeed();
};