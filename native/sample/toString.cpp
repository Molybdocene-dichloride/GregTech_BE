#include <string>
#include <sstream>
#include <toString.h>
#include <helper\ChunkBlockPos.h>
namespace patch {
    template<typename T> std::string to_string(const T& n) {
        std::ostringstream stm;
        stm << n;
        return stm.str();
    }
}
//crutch for template class
void crutch() {
    patch::to_string<size_t>(0);
    patch::to_string<int>(0);
    patch::to_string<unsigned char>(0);
    patch::to_string<uintptr_t>(0);
    patch::to_string<unsigned int>(0);
    patch::to_string<unsigned short>(0);
     patch::to_string<unsigned long>(0);
    patch::to_string<short>(0);
    patch::to_string<long>(0);
    patch::to_string<char>(0);
    //patch::to_string<ChunkLocalHeight>(CCC);
    patch::to_string<float>(0.0f);
    std::string b = patch::to_string<bool>(0);
    patch::to_string<void const*>((void const*) &b);
}