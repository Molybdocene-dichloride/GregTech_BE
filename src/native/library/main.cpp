#include <string>
#include <sstream>
#include <cmath>

#include <mod.h>
#include <symbol.h>
#include <hook.h>
#include <logger.h>
#include <nativejs.h>

#include <mcpe/common.hpp>
#include <mcpe/PerlinSimplexNoise.hpp>
#include <mcpe/LevelChunk.hpp>
//#include <mcpe\VanillaBlocks.h>
#include <mcpe/ChunkSource.hpp>
#include <mcpe/IBlockWorldGenAPI.hpp>
#include <mcpe/RenderParams.hpp>
#include <mcpe/NativeBlockSource.hpp>
#include <mcpe/Block.hpp>

#include <horizon/pool.h>
#include <innercore/block_registry.h>
#include <innercore/id_conversion_map.h>

#include <Localization.hpp>
#include <flags.hpp>
#include <toString.hpp>


std::vector<long>::iterator it;

std::vector<long> blockids;
float sizeid = 0;
std::map<float, long> iblockids;

std::vector<long> blockdatas;
float sizedata = 0;
std::map<float, long> iblockdatas;

std::map<float, std::shared_ptr<Block>> blks;
std::map<float, std::shared_ptr<Block>>::iterator cur;

namespace Stones {
	void ends() {
		//FurnaceSystem::addFurnaceRecipes

		Logger::debug("b", "gotoir");
		Logger::debug("v", patch::to_string<size_t>(blockids.size()).c_str());
		sizeid = 1.0f / blockids.size();
		sizedata = 1.0f / blockdatas.size();
		Logger::debug("jsd", patch::to_string<long>(blockids[7]).c_str());
		for(it = blockids.begin(); it != blockids.end(); ++it) {
			iblockids.insert(std::pair<float, long>(sizeid * (it - blockids.begin()), *it));
			iblockdatas.insert(std::pair<float, long>(sizedata * (it - blockids.begin()), blockdatas[it - blockids.begin()]));
			Logger::debug("nukew", patch::to_string<float>(sizeid * (it - blockids.begin())).c_str());

			Block* b = BlockRegistry::getBlockStateForIdData(*it, blockdatas[it - blockids.begin()]);
			std::shared_ptr<Block> bsh(b);
			Logger::debug("Ys", patch::to_string<long>(*it).c_str());
			Logger::debug("Es", patch::to_string<long>(blockdatas[it - blockids.begin()]).c_str());
			Logger::debug("s", patch::to_string<bool>(b == nullptr).c_str());
			blks.insert(std::pair<float, std::shared_ptr<Block>>(sizeid * (it - blockids.begin()), bsh));
			Logger::debug("zoolium", patch::to_string<void const*>((void const*) b).c_str());
		}
		Logger::debug("grt", patch::to_string<size_t>(blks.size()).c_str());
		Logger::debug("grt", patch::to_string<size_t>(iblockids.size()).c_str());
		Logger::debug("grt", patch::to_string<size_t>(iblockdatas.size()).c_str());
	}
}

long getNearest(long pos, short mode) {
	switch(mode) {
		case 0:
		return floor(pos / sizeid) * sizeid;
		case 1:
		return floor(pos / sizedata) * sizedata;
	}
	return 0;
}
bool ifLoaded = false;
void generate(long x, long z) {
	if(!ifLoaded) {
		Stones::ends();
		ifLoaded = true;
	}
	//BlockLegacy* stone = BlockRegistry::getBlockById(8);
	//Logger::debug("BGTY", patch::to_string<int>((int) stone->id).c_str());

	//BlockPos xc((float)x * 16 + 4, (float)43, (float)z * 16 + 4);
	//Block* b = BlockSourceProvider::getBlockSource().getBlock(xc);
	//Logger::debug("pexes", patch::to_string<uintptr_t>(reinterpret_cast<uintptr_t>(b)).c_str());
	//Logger::debug("jjsw", patch::to_string<int>((int)b->getVariant()).c_str());

	//BlockLegacy* bli = b->getBlockLegacy();
	//Logger::debug("vczx", patch::to_string<uintptr_t>(reinterpret_cast<uintptr_t>(bli)).c_str());
	//Logger::debug("bll", bli->id);
	/*for(int x = 0; x < 16; x++) {
		for(int y = 0; y < 170; y++) {
			for(int z = 0; z < 16; z++) {
				int xx = x * 16 + x;
				int zz = z * 16 + z;

				BlockPos xc((float) xx, (float) y, (float) zz);
				Block* b = BlockSourceProvider::getBlockSource().getBlock(xc);
				Logger::debug("pexes", patch::to_string<bool>(b != nullptr).c_str());
				Logger::debug("jjsw", patch::to_string<int>((int)b->getVariant()).c_str());

				BlockLegacy* bli = b->getBlockLegacy();
				//Logger::debug("vczx", patch::to_string<bool>(bli != nullptr).c_str());
				//Logger::debug("vaasdd", patch::to_string<short>(bli->id).c_str());
				//Logger::debug("bll", patch::to_string<short>(bl->getBlockItemId()).c_str());
				IdConversion::dynamicToStatic(bli->id, IdConversion::Scope::BLOCK);
				//delete xc;
				/*if(chunk.getBlock(*cbp).getRuntimeId() != VanillaBlocks::mStone->getRuntimeId()) continue;
				PerlinSimplexNoise* psn = new PerlinSimplexNoise(chunkSource.getLevel().getSeed(), 2);
				if(iblockids[getNearest(psn->getValue(*new Vec3(*new BlockPos(cp, *cbp, 256))), 0)] != 0 && iblockdatas[getNearest(psn->getValue(*new Vec3(*new BlockPos(cp, *cbp, 256))), 1)] != 0) BlockSourceProvider::getBlockSource().setBlock(*new BlockPos(chunk.getPosition().x + x, chunk.getPosition().y + y, chunk.getPosition().z + z), *blks[iblockids[getNearest(psn->getValue(*new Vec3(*new BlockPos(*cp, *cbp, 256))), 0)]], iblockdatas[getNearest(psn->getValue(*new Vec3(*new BlockPos(*cp, *cbp, 256))), 1)], nullptr);
			}
		}
	}*/
}
class GTOreGenerationDestroyerModule : public Module { //destroy vanilla ore generation
public:
	GTOreGenerationDestroyerModule(const char* id): Module(id) {};
	virtual void initialize() {	
        // any HookManager::addCallback calls must be in initialize method of a module
            // any other initialization also highly recommended to happen here
        DLHandleManager::initializeHandle("libminecraftpe.so", "mcpe");
		//if(ver == "114") {
        	/*HookManager::addCallback(SYMBOL("mcpe", "_ZN18OverworldDecorator12decorateOresEP11BlockSourceR6RandomRK8BlockPos"), LAMBDA((HookManager::CallbackController* controller), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);*/
			//Hook
			HookManager::addCallback(SYMBOL("mcpe", "_ZNK10OreFeature5placeER17IBlockWorldGenAPIRK8BlockPosR6RandomR12RenderParams"), LAMBDA((HookManager::CallbackController* controller, IBlockWorldGenAPI& gen, BlockPos const& pos, Random& rand, RenderParams& rend), {	
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);

			HookManager::addCallback(SYMBOL("mcpe", "_ZNK19NoSurfaceOreFeature5placeER17IBlockWorldGenAPIRK8BlockPosR6RandomR12RenderParams"), LAMBDA((HookManager::CallbackController* controller, IBlockWorldGenAPI& gen, BlockPos const& pos, Random& rand, RenderParams& rend), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);

			HookManager::addCallback(SYMBOL("mcpe", "_ZNK23LegacyEmeraldOreFeature5placeER11BlockSourceRK8BlockPosR6Random"), LAMBDA((HookManager::CallbackController* controller, IBlockWorldGenAPI& gen, BlockPos const& pos, Random& rand, RenderParams& rend), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	}
};
class GTPipelineRenderer : public Module { //destroy vanilla ore generation
public:
	GTPipelineRenderer(const char* id): Module(id) {};
	virtual void initialize() {	
        // any HookManager::addCallback calls must be in initialize method of a module
            // any other initialization also highly recommended to happen here
        DLHandleManager::initializeHandle("libminecraftpe.so", "mcpe");
        	HookManager::addCallback(SYMBOL("mcpe", "_ZN18OverworldDecorator12decorateOresEP11BlockSourceR6RandomRK8BlockPos"), LAMBDA((HookManager::CallbackController* controller), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	}
};

MAIN {
	Module* main_module = new GTOreGenerationDestroyerModule("gregtech.ore_generator_module");
}
// native js signature rules:
/* signature represents parameters and return type, RETURN_TYPE(PARAMETERS...) example: S(OI)
	return types:
		V - void      - return 0
		I - long int  - wrapIntegerResult
		F - double    - wrapDoubleResult
		S - string    - wrapStringResult
		O - object    - wrapObjectResult
	parameter types:
		I - int (4 bits) 
		L - long (8 bits)
		F - float (4 bits)
		D - double (8 bits)
		B - boolean (1 bit)
		C - char (1 bit)
	as seen, basic call functions cannot receive string and objects for sake of performance, so complex functions come in place
	in case of complex functions parameters are ignored
	JNIEnv* is always passed as first parameter
*/
