#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-fpermissive"

#include <string>
#include <sstream>
#include <cmath>

#include <mod.h>
#include <symbol.h>
#include <hook.h>
#include <logger.h>
#include <nativejs.h>

#include <toString.h>
#include <flags.h>

#include <helper\common.h>
#include <helper\PerlinSimplexNoise.h>
#include <helper\LevelChunk.h>
#include <helper\VanillaBlocks.h>
#include <helper\ChunkSource.h>
#include <helper\IBlockWorldGenAPI.h>
#include <helper\RenderParams.h>
#include <helper\NativeBlockSource.h>
#include <helper\block.h>
#include <horizon\pool.h>
#include <innercore\block_registry.h>
#include <innercore\id_conversion_map.h>

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
		// for different return types you must call appropriate NativeJS::wrap... functions
		// if you function is void, use return 0;
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
namespace Scientific {
	namespace TemperaturePoints { //for Kelvin's
		long double NO = -0.1;
		long double ABSOLUTE_ZERO = 0; //temperature couldn't and impossible be same or lower!
		long double CELCIUS_ZERO = 273.15;
  		long double PLANK = 1.4167841616e32; //events for same and higher temperature is unknown and indescribable (Quantum gravity is not fully developed), is couldn't to use.
  		long double kelvinsToCelsius(long double point) {
    		return point + 273.15;
		}
  		long double celsiusToKelvins(long double point) {
    		return point - 273.15;
  		}
	} 
	namespace Plank { //Plank values enum
		long double CONST = 6.62607015e-34;
		long double TEMPERATURE = 1.4167841616e32; //events for same and higher temperature is unknown and indescribable (Quantum gravity is not fully developed), is couldn't to use.
		long double DENSITY = 5.1550e96; //
		long double MASS = 2.176e-8; //
		long double CHARGE = 2.5e-8; //
		long double LENGTH = 1.6162551818e-35; //
		long double TIME = 5.391161313e-19; //
		long double PRESSURE = 4.63309e113; //
	} //d0bed0b1d0b8d0b0d0bd20d182d0b5d0b1d18f
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
	BlockLegacy* stone = BlockRegistry::getBlockById(8);
	Logger::debug("BGTY", patch::to_string<int>((int) stone->id).c_str());

	BlockPos xc((float)x * 16 + 4, (float)43, (float)z * 16 + 4);
	Block* b = BlockSourceProvider::getBlockSource().getBlock(xc);
	Logger::debug("pexes", patch::to_string<uintptr_t>(reinterpret_cast<uintptr_t>(b)).c_str());
	Logger::debug("jjsw", patch::to_string<int>((int)b->getVariant()).c_str());

	BlockLegacy* bli = b->getBlockLegacy();
	Logger::debug("vczx", patch::to_string<uintptr_t>(reinterpret_cast<uintptr_t>(bli)).c_str());
	Logger::debug("bll", bli->id);
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

// entry point for a native library
// only one MAIN {} allowed per library
MAIN {
	// create all modules
	Module* main_module = new GTOreGenerationDestroyerModule("destroy_ore");
}

// module version defines version of next functions, that belong to this module
// if several modules with one name is loaded and several same functions registered, only function with highest version is registered
// this is required in case of libraries
JS_MODULE_VERSION(Scientific, 1);
JS_MODULE_VERSION(Stones, 1);
JS_MODULE_VERSION(Flags, 1);

// exports module and function to javascript, now you can call WRAP_NATIVE("SampleNativeModule") and a module with single function "hello", receiving two numbers, will be returned
// signature I(LL) defines a method, receiving two ints, and returning long
JS_EXPORT(Stones, registerID, "V(II)", (JNIEnv* env, long id, long data) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	Logger::debug("j", "wew");
	Logger::debug("j", patch::to_string<long>(id).c_str());
	Logger::debug("jf", patch::to_string<long>(data).c_str());
	
	blockids.push_back(id);
	blockdatas.push_back(data);
	Logger::debug("sj", patch::to_string<size_t>(blockids.size()).c_str());
	Logger::debug("fgj", patch::to_string<size_t>(blockdatas.size()).c_str());
	return 0;
});
JS_EXPORT(Scientific, NO, "F()", (JNIEnv* env) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapDoubleResult(Scientific::TemperaturePoints::NO);
});
JS_EXPORT(Flags, hasFlag, "I(LL)", (JNIEnv* env, long long value1, long long value2) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(hasFlag(value1, value2));
});
JS_EXPORT(Flags, generate, "V(II)", (JNIEnv* env, long x, long z) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	generate(x, z);
	return 0;
});
JS_EXPORT(Flags, createFlag, "I(L)", (JNIEnv* env, long long value1) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(createFlag(value1));
});
JS_EXPORT(Flags, recepiee, "I(L)", (JNIEnv* env, long long value1) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(recepiee(value1));
});
JS_EXPORT(Flags, pack2, "I(LL)", (JNIEnv* env, long long value1, long long value2) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(2, value1, value2));
});
JS_EXPORT(Flags, pack3, "I(LLL)", (JNIEnv* env, long long value1, long long value2, long long value3) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(3, value1, value2, value3));
});
JS_EXPORT(Flags, pack4, "I(LLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(4, value1, value2, value3, value4));
});
JS_EXPORT(Flags, pack5, "I(LLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(5, value1 , value2 , value3 , value4 , value5));
});
JS_EXPORT(Flags, pack6, "I(LLLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5, long long value6) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(6, value1 , value2 , value3 , value4 , value5 , value6));
});
JS_EXPORT(Flags, pack7, "I(LLLLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5, long long value6, long long value7) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(7, value1 , value2 , value3 , value4 , value5 , value6 , value7));
});
JS_EXPORT(Flags, pack8, "I(LLLLLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5, long long value6, long long value7, long long value8) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(8, value1 , value2 , value3 , value4 , value5 , value6 , value7 , value8));
});
JS_EXPORT(Flags, pack9, "I(LLLLLLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5, long long value6, long long value7, long long value8, long long value9) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(9, value1 , value2 , value3 , value4 , value5 , value6 , value7 , value8, value9));
});
JS_EXPORT(Flags, pack10, "I(LLLLLLLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5, long long value6, long long value7, long long value8, long long value9, long long value10) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(10, value1 , value2 , value3 , value4 , value5 , value6 , value7 , value8, value9, value10));
});
JS_EXPORT(Flags, pack11, "I(LLLLLLLLLLL)", (JNIEnv* env, long long value1, long long value2, long long value3, long long value4, long long value5, long long value6, long long value7, long long value8, long long value9, long long value10, long long value11) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	return NativeJS::wrapIntegerResult(pack(11, value1, value2, value3, value4, value5, value6 , value7 , value8, value9, value10, value11));
});
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
#pragma GCC diagnostic pop