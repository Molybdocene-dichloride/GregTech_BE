#pragma once
#include <string>
#include "com/mojang/minecraftpe/client/renderer/texture/TickingTexture.h"

class GTPipeline {
	short getSizeOfFrame();
protected:
	std::vector<IVertexOperation> ops0:
	
	//maintexture - all operations write here
	TextureData mainTexture;
	int frameCount;
	int currentFrame;
	int pixelCount;
	char* image;
	bool isHD;
	int currentTick;
	int speed;

public:
	GTPipeline();
	virtual void addPipelineNode(); //unused
	virtual void addOperation(IVertexOperation op);
	virtual void add(vector<IVertexOperation> ops);
	virtual void add(GTPipeline pl);
	virtual void add(GTPipelineBuilder pl);
	virtual void rebuild();
	virtual void render();
};