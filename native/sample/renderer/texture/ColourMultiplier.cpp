#include "GCAnimatedTexture.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureGroup.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureData.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlas.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlasTextureItem.h"
#include "com/mojang/minecraftpe/world/level/block/Block.h"

ColourMultiplier::ColourMultiplier(ColourRGBA colour) {
	this.colour = colour;
	this.packed = colour.pack();
}
void ColourMultiplier::getColour() {
	return colour;
}
void ColourMultiplier::setColour(ColourRGBA colour) {
	this.colour = colour;
	this.packed = colour.pack();
}
void ColourMultiplier::operate(char[] texture, int pixelCount) {
	for(int i = 0; i < pixelCount / 4; i++) {
		(texture + i * 4)* = ColourRGBA.multiply((texture + i * 4)* | (texture + i * 4 + 1)* | (texture + i * 4 + 2)* | (texture + i * 4 + 3)* , this.packed);
	}
}