#include <hook.h>
#include <mod.h>

#include <string>
#include <sstream>
#include <android/log.h>

#include <symbol.h>
#include <nativejs.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\shared_headers\flags.h>
#include <C:\Users\111\Desktop\projects\innercore-mod-toolchain-master\toolchain-mod\src\native\sample\helper\common.h>
//Log
//std::cout << "HOOK" << std::endl;

namespace patch
{
    template < typename T > std::string to_string( const T& n )
    {
        std::ostringstream stm ;
        stm << n ;
        return stm.str() ;
    }
}
std::string ver = "";

class GTOreGenerationDestroyerModule : public Module { //destroy vanilla ore generation
public:
	GTOreGenerationDestroyerModule(const char* id): Module(id) {Logger::message("edrop", id);};
	virtual void initialize() {	
        // any HookManager::addCallback calls must be in initialize method of a module
            // any other initialization also highly recommended to happen here
        DLHandleManager::initializeHandle("libminecraftpe.so", "mcpe");
		Logger::message("edropew", patch::to_string(Common::getGameVersionString()).c_str());
		Logger::message("edropew", patch::to_string(Common::getGameDevVersionString()).c_str());
		Logger::message("edropew", patch::to_string(Common::getGameVersionStringNet()).c_str());
		if(ver == "114") {
        	HookManager::addCallback(SYMBOL("mcpe", "_ZN18OverworldDecorator12decorateOresEP11BlockSourceR6RandomRK8BlockPos"), LAMBDA((HookManager::CallbackController* controller), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
			
		} else if(ver == "16201") {
			HookManager::addCallback(SYMBOL("mcpe", "_ZN18OverworldDecorator12decorateOresEP11BlockSourceR6RandomRK8BlockPos"), LAMBDA((HookManager::CallbackController* controller), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
		}
	}
};

class GTPipelineRenderer : public Module { //destroy vanilla ore generation
public:
	GTPipelineRenderer(const char* id): Module(id) {};
	virtual void initialize() {	
        // any HookManager::addCallback calls must be in initialize method of a module
            // any other initialization also highly recommended to happen here
        DLHandleManager::initializeHandle("libminecraftpe.so", "mcpe");
		if(ver == "114") {
        	HookManager::addCallback(SYMBOL("mcpe", "_ZN18OverworldDecorator12decorateOresEP11BlockSourceR6RandomRK8BlockPos"), LAMBDA((HookManager::CallbackController* controller), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
		}
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
JS_MODULE_VERSION(MCVersion, 1)
JS_MODULE_VERSION(Flags, 1)

// exports module and function to javascript, now you can call WRAP_NATIVE("SampleNativeModule") and a module with single function "hello", receiving two numbers, will be returned
// signature I(LL) defines a method, receiving two ints, and returning long
JS_EXPORT(MCVersion, sendPart1, "V(I)", (JNIEnv* env, int value1) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	ver = patch::to_string(value1).c_str();
	return 0;
});
JS_EXPORT(MCVersion, sendPart2, "V(I)", (JNIEnv* env, int value1) {
	// for different return types you must call appropriate NativeJS::wrap... functions
	// if you function is void, use return 0;
	ver += patch::to_string(value1).c_str();
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