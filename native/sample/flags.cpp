#include <string>
#include <sstream>
#include <stdarg.h>

long long recepiee(long long id) {
	return id << 16LL;
}
long long createFlag(long long id) {
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
	}
	/* завершение */
	va_end(argptr);
	return vac;
}
short hasFlag(long long flags, long long generationFlag) {
   return (flags & generationFlag) >= generationFlag;
}