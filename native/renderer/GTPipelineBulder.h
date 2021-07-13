#pragma once
#include <string>
#include "com/mojang/minecraftpe/client/renderer/texture/TickingTexture.h"

class GTPipelineBuilder {
protected:
	std::vector<IVertexOperation> ops:

public:
	GTPipelineBuilder();
	virtual void addPipelineNode(); //unused
	virtual void addOperation(IVertexOperation op);
	virtual void add(vector<IVertexOperation> ops);
	virtual void add(GTPipeline pl);
	virtual void add(GTPipelineBuilder pl);
	virtual void build();
};