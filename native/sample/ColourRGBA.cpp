#include "GCAnimatedTexture.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureGroup.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureData.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlas.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlasTextureItem.h"
#include "com/mojang/minecraftpe/world/level/block/Block.h"

ColourRGBA::ColourRGBA() {
	this.colour = colour;
}
ColourRGBA::ColourRGBA(ColourRGBA colour) {
	this.colour = colour;
}
void ColourRGBA::pack() {
	return (this.r & 0xFF) << 24 | (this.g & 0xFF) << 16 | (this.b & 0xFF) << 8 | (this.a & 0xFF);
}
void ColourRGBA::multiply(int c1, int c2) {
	if(c1 == -1) return c2;
        if(c2 == -1) return c1;
        int r = (((c1 >>> 24) * (c2 >>> 24)) & 0xFF00) << 16;
        int g = (((c1 >> 16 & 0xFF) * (c2 >> 16 & 0xFF)) & 0xFF00) << 8;
        int b = ((c1 >> 8 & 0xFF) * (c2 >> 8 & 0xFF)) & 0xFF00;
        int a = ((c1 & 0xFF) * (c2 & 0xFF)) >> 8;
        return r|g|b|a;
	
}