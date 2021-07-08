#pragma once
#include <string>
#include "com/mojang/minecraftpe/client/renderer/texture/TickingTexture.h"

class PipelineTickingTexture : public TickingTexture {
	short getSizeOfFrame();
	
protected:
	GTPipeline pipeline;

public:
	GCAnimatedTexture(TextureGroup&, const std::string&, const std::string&, int);

	virtual void tick();
};