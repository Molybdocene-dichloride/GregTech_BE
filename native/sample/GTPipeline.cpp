#include "GCAnimatedTexture.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureGroup.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureData.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlas.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlasTextureItem.h"
#include "com/mojang/minecraftpe/world/level/block/Block.h"

GTPipeline::GTPipeline(const std::string& main_texture) {
		pixelCount = main_texture.width * main_texture.height * 4;
		image = new char[pixelCount];
		memcpy(image, main_texture.pixels, pixelCount);
	}

	void GTPipeline::addOperation(IVertexOperation op) {
		ops.push_back(op);
	}
void GTPipeline::add(vector<IVertexOperation> ops) {
		this.ops.insert(std::end(this.ops), std::begin(ops), std::end(ops));
	}
void GTPipeline::add(GTPipeline pl) {
		this.ops.insert(std::end(this.ops), std::begin(pl.ops), std::end(pl.ops));
	}
void GTPipeline::add(GTPipelineBuilder pl) {
		this.ops.insert(std::end(this.ops), std::begin(pl.ops), std::end(pl.ops));
	}
	void GTPipeline::rebuild() {
		
	}
	void GTPipeline::render(frameBuffer) {
		for(std::vector<IVertexOperation>::iterator it = this.ops.begin(); it != this.ops.end(); ++it) {
    			*it->operate(image, pixelCount);
		}
		
		memcpy(frameBuffer, image);
	}