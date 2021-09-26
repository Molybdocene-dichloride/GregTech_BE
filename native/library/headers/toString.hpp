#pragma once
#include <stl/string>
#include <stl/vector>

namespace patch {
    template<typename T> std::__ndk1::string to_string(const T& n);
    template<typename T> std::__ndk1::wstring to_wstring(const T& n);
    class ICell {virtual ~ICell() = default;};
    template<typename X> class FormattingBase : public ICell {
        X red;
        public:
        FormattingBase(X red);
        X getValue();
        ~FormattingBase();
    };
    std::__ndk1::string to_formatedString(std::__ndk1::string str, std::__ndk1::vector<ICell*> format);
}