#pragma once
#include <string>
#include "com/mojang/minecraftpe/client/renderer/texture/TickingTexture.h"

class ColourMultiplier : public IVertexOperation {
protected:
	ColourRGBA colour:
public:
	ColourMultiplier(ColourRGBA colour);
	virtual void getColour():
	virtual void setColour(ColourRGBA colour):
	virtual void operate():
}