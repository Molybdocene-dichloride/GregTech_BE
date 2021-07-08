#include "GCAnimatedTexture.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureGroup.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureData.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlas.h"
#include "com/mojang/minecraftpe/client/renderer/texture/TextureAtlasTextureItem.h"
#include "com/mojang/minecraftpe/world/level/block/Block.h"

PipelineTickingTexture::PipelineTickingTexture(GTPipeline pipeline, const std::string& main_texture):
	TickingTexture(Block::mTerrainTextureAtlas->getTextureItem(main_texture)[0], 1) {
	this.pipeline = pipeline;
	
	/*TextureData& data = textures.getTextureData(png);
	isHD = data.width > 16;
	// Multiply by 4 for RGBA
	pixelCount = data.width * data.height * 4;
	image = new char[pixelCount];

	memcpy(image, data.pixels, pixelCount);
	frameCount = data.height / data.width;
	currentFrame = 0;
	currentTick = 0;
	speed = ticks;*/
}

void PipelineTickingTexture::tick() {
	this.pipeline.render(this.frameBuffer);
	/*if(currentTick < speed) {
		currentTick++;
		return;
	}
	
	currentTick = 0;
	
	memcpy(frameBuffer, image + (currentFrame * getSizeOfFrame()), getSizeOfFrame());
	++currentFrame;

	if(currentFrame >= frameCount)
		currentFrame = 0;*/
}

short PipelineTickingTexture::getSizeOfFrame() {
	return 1024 * (((char) isHD) + 1);
}



/*
GLuint texture;
glGenTextures(1, &texture);
glBindTexture(GL_TEXTURE_2D, texture);
glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 64, 64, 0, GL_RGBA, GL_UNSIGNED_BYTE, image);
glVertexAttribPointer(2, 4, GL_FLOAT, GL_FALSE, 8 * sizeof(float), (void*)(6 * sizeof(float)));
glEnableVertexAttribArray(2);
glBindTexture(GL_TEXTURE_2D, texture);
glBindVertexArray(VAO);
glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

GLuint texture;
//glGenTextures(1, &texture);
glBindTexture(GL_TEXTURE_2D, texture);
glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, 64, 64, 0, GL_RGBA, GL_UNSIGNED_BYTE, image);
*/