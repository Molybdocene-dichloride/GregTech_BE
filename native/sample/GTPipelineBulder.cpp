#include "GCAnimatedTexture.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureGroup.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureData.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlas.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlasTextureItem.h"
#include "com/mojang/minecraftpe/world/level/block/Block.h"

GTPipelineBuilder::GTPipelineBuilder() {
	
	}
	void GTPipelineBuilder::addOperation(IVertexOperation op) {
		ops.push_back(op);
		return this;
	}
	void GTPipeline::add(vector<IVertexOperation> ops) {
		this.ops.insert(std::end(this.ops), std::begin(ops), std::end(ops));
		return this;
	}
void GTPipeline::add(GTPipeline pl) {
		this.ops.insert(std::end(this.ops), std::begin(pl.ops), std::end(pl.ops));
		return this;
	}
void GTPipeline::add(GTPipelineBuilder pl) {
		this.ops.insert(std::end(this.ops), std::begin(pl.ops), std::end(pl.ops));
		return this;
	}
	void GTPipelineBuilder::build() {
		return new GTPipeline(ops);
	}