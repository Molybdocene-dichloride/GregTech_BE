#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-fpermissive"

#include <string>
#include <sstream>
#include <cmath>
#include <android/log.h>

#include <mod.h>
#include <symbol.h>
#include <hook.h>
#include <logger.h>
#include <nativejs.h>


#include <flags.h>
#include <helper\common.h>
#include <helper\PerlinSimplexNoise.h>
#include <helper\LevelChunk.h>
#include <horizon\block.h>
#include <helper\VanillaBlocks.h>
#include <helper\ChunkSource.h>
#include <helper\IBlockWorldGenAPI.h>
#include <helper\RenderParams.h>
#include <helper\NativeBlockSource.h>
//#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\OreFeature.h>

namespace patch
{
    template<typename T> std::string to_string( const T& n )
    {
        std::ostringstream stm ;
        stm << n ;
        return stm.str() ;
    }
}
std::map<int, int>::iterator cur;
 std::vector<int>::iterator it;

std::vector<int> blockids;
int sizeid = 0;
std::map<int, int> iblockids;

std::vector<int> blockdatas;
int sizedata = 0;
std::map<int, int> iblockdatas;

std::map<int, Block*> blks;

int getNearest(int pos, short mode) {
	switch(mode) {
		case 0:
		return floor(pos / sizeid) * sizeid;
		case 1:
		return floor(pos / sizedata) * sizedata;
	}
	return 0;
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

			HookManager::addCallback(SYMBOL("mcpe", "_ZN21BiomeDecorationSystem8decorateER10LevelChunkR11BlockSourceR6RandomN3gsl4spanI22BiomeDecorationFeatureLin1EEE"), LAMBDA((HookManager::CallbackController* controller, ChunkSource& chunkSource, LevelChunk& chunk), {
				ChunkPos cp = chunk.getPosition();
				for(float x = 0; x < 16; x++) {
					for(float y = 0; y < 170; y++) {
						for(float z = 0; z < 16; z++) {
							ChunkBlockPos* cbp = new ChunkBlockPos(x, chunk.getHeightRange(), z);
							if(chunk.getBlock(*cbp).getRuntimeId() != VanillaBlocks::mStone->getRuntimeId()) continue;
							PerlinSimplexNoise* psn = new PerlinSimplexNoise(chunkSource.getLevel().getSeed(), 2);
							if(iblockids[getNearest(psn->getValue(*new Vec3(*new BlockPos(cp, *cbp, 256))), 0)] != 0 && iblockdatas[getNearest(psn->getValue(*new Vec3(*new BlockPos(cp, *cbp, 256))), 1)] != 0) BlockSourceProvider::getBlockSource().setBlock(*new BlockPos(chunk.getPosition().x + x, chunk.getPosition().y + y, chunk.getPosition().z + z), *blks[iblockids[getNearest(psn->getValue(*new Vec3(*new BlockPos(cp, *cbp, 256))), 0)]], iblockdatas[getNearest(psn->getValue(*new Vec3(*new BlockPos(cp, *cbp, 256))), 1)], nullptr);
						}
					}
				}
				//controller->prevent();
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
JS_MODULE_VERSION(Stones, 1);
JS_MODULE_VERSION(Flags, 1);

// exports module and function to javascript, now you can call WRAP_NATIVE("SampleNativeModule") and a module with single function "hello", receiving two numbers, will be returned
// signature I(LL) defines a method, receiving two ints, and returning long
JS_EXPORT(Stones, registerID, "V(II)", (JNIEnv* env, int id, int data) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	blockids.push_back(id);
	blockdatas.push_back(data);
	Logger::debug("j", "wew");
	blockdatas.size();
	blockids.size();
	return 0;
});
JS_EXPORT(Stones, ends, "V()", (JNIEnv* env) {
// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	Logger::debug("b", "gotoir");
	Logger::debug("v", blockids.size());
	sizeid = 1 / blockids.size();
	for(it = blockids.begin(); it != blockids.end(); it++) {
		Logger::debug("b", sizeid);
		iblockids.insert(std::pair<int, int>(sizeid * (it - blockids.begin()), *it));
		Logger::debug("b", *it);
		Block* b = BlockRegistry::getBlockById(*it);
		Logger::debug("a", static_cast<char>(b == nullptr));
		Block* ba = BlockRegistry::getBlockById(2);
		Logger::debug("asweq", static_cast<char>(ba == nullptr));
		//blks.insert(std::pair<int, Block*>(sizedata * (it - blockids.begin()), b));
	}
	sizedata = 1 / blockdatas.size();
	for(it = blockdatas.begin(); it != blockdatas.end(); it++) {
		iblockdatas.insert(std::pair<int, int>(sizedata * (it - blockdatas.begin()), *it));
	}
	return 0;
});
JS_EXPORT(Flags, hasFlag, "I(LL)", (JNIEnv* env, long long value1, long long value2) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	
	return NativeJS::wrapIntegerResult(hasFlag(value1, value2));
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