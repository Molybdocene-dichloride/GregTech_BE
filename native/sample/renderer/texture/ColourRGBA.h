#pragma once
#include <string>
#include "com/mojang/minecraftpe/client/renderer/texture/TickingTexture.h"

class ColourRGBA {
public:
	int r:
	int g:
	int b:
	int a:
	ColourRGBA();
	ColourRGBA(ColourRGBA colour);
	virtual void pack();
	virtual static void multiply(int c1, int c2);
}