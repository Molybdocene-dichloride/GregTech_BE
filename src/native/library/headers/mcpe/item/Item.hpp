#pragma once

//#include <stl/string>
class Item {
    public:
    char filler0[64-4]; //4
	short itemId; //64
	char filler1[98-66]; // 66
	short flags; // 98
	char filler3[168-100]; // 100
	virtual ~Item();
    //Item(std::__ndk1::string const&, short);
};