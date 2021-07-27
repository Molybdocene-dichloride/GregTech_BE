#include <string>
#include <sstream>
#include <android/log.h>
#include <stdarg.h>

namespace patch
{
    template < typename T > std::string to_string( const T& n )
    {
        std::ostringstream stm ;
        stm << n ;
        return stm.str() ;
    }
}

long long recepiee(long long id) {
	//std::cout << id << std::endl;
	__android_log_write(ANDROID_LOG_INFO, "tag here", patch::to_string(id).c_str());
	return id << 16LL;
}

long long createFlag(long long id) {
	//std::cout << id << std::endl;
	__android_log_write(ANDROID_LOG_INFO, "tag here", patch::to_string(id).c_str());
	return 1LL << id;
}
long long pack(int num, ...) {
	va_list argptr;
	long long vac = 0;
	/* инициализация argptr */
	va_start (argptr, num);
	for(; num; num--) {
		long long t = va_arg(argptr, long long);
		if(vac == 0) {
			vac = t;
		} else {
			vac = vac | t;
		}
__android_log_write(ANDROID_LOG_INFO, "Hexacarbonylvanadium", patch::to_string(t).c_str());
	}

	/* завершение */
	va_end(argptr);
	return vac;
}
short hasFlag(long long flags, long long generationFlag) {
   return (flags & generationFlag) >= generationFlag;
}