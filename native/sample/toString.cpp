#include <stl/sstream>

#include <logger.h>

#include <toString.hpp>

namespace patch {
    template<typename T> std::__ndk1::string to_string(const T& n) {
        std::__ndk1::ostringstream stm;
        stm << n;
        return stm.str();
    }
    template<typename T> std::__ndk1::wstring to_wstring(const T& n) {
        std::__ndk1::wostringstream stm;
        stm << n;
        return stm.str();
    }
    template<typename X> FormattingBase<X>::FormattingBase(X red) {
        this.red = red;
    };
    template<typename X> X FormattingBase<X>::getValue() {
        return red;
    };
    std::__ndk1::string to_formatedString(std::__ndk1::string str, std::__ndk1::vector<ICell*> format) {
        std::__ndk1::string str2 = "";
        size_t pos = 0;
        size_t count = 0;
        std::__ndk1::string::iterator e;
        bool d = false;
        for(e = str.begin(); e != str.end(); ++e) {
            if(d) { 
                if(*e == 's') {
                    if(FormattingBase<std::__ndk1::string>* v = dynamic_cast<FormattingBase<std::__ndk1::string>*>(format[count])) {
                        str2.append(str.substr(pos, std::__ndk1::distance(str.begin(), e - 2)));
                        str2.append(v->getValue());
                        pos = std::__ndk1::distance(str.begin(), e + 1);
                    } else {
                        Logger::error("error", "wrong type!");   
                    }
                } else if(*e == 'd') {
                    if(FormattingBase<long long>* v = dynamic_cast<FormattingBase<long long>*>(format[count])) {
                        str2.append(str.substr(pos, std::__ndk1::distance(str.begin(), e - 2)));
                        str2.append(patch::to_string<long long>(v->getValue()));
                        pos = std::__ndk1::distance(str.begin(), e + 1);
                    } else {
                        Logger::error("error", "wrong type!");    
                    }
                } else if(*e == 'f') {
                    if(FormattingBase<double>* v = dynamic_cast<FormattingBase<double>*>(format[count])) {
                        str2.append(str.substr(pos, std::__ndk1::distance(str.begin(), e - 2)));
                        str2.append(patch::to_string<double>(v->getValue()));
                        pos = std::__ndk1::distance(str.begin(), e + 1);
                    } else {
                        Logger::error("error", "wrong type!");    
                    }
                } else if(*e == 'b') {
                    if(FormattingBase<bool>* v = dynamic_cast<FormattingBase<bool>*>(format[count])) {
                        str2.append(str.substr(pos, std::__ndk1::distance(str.begin(), e - 2)));
                        str2.append(patch::to_string<bool>(v->getValue()));
                        pos = std::__ndk1::distance(str.begin(), e + 1);
                    } else {
                        Logger::error("error", "wrong type!");    
                    }
                }
                count++;
            }
            if(*e == '%') {
                d = true;
            } else {
                d = false;
            }
        }
        return str2;
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
    patch::to_string<float>(0.0f);
    std::__ndk1::string b = patch::to_string<bool>(0);
    patch::to_string<void const*>((void const*) &b);
}