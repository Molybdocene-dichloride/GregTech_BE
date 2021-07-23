#pragma once

#include <helper\mce.h>
class Level {
    public:
    TickingArea getTickingArea(mce::UUID const&) const;
    int getSeed();
};