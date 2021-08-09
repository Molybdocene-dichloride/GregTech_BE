#pragma once
#include <string>
#include <vector>
#include <logger.h>
#include <toString.hpp>

#include <stl/string>
#include <stl/vector>
#include <stl/map>
class HashedString {
    public:
    const char* c_str() const;
};
class Localization {
public:
	char filler[4];
	std::__ndk1::string fullLanguageCode; // 4 - getFullLanguageCode from 1.13.0.6
	std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> strings; // 8 - _getStrings from 1.13.0.6
	std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& _getStrings() const;
    std::__ndk1::string _getSimple(std::__ndk1::string) const;
	std::__ndk1::string getFullLanguageCode() const;
};
class I18n {
public:
    static Localization* getLocaleFor(std::__ndk1::string const&);
    static Localization* get(std::__ndk1::string const&);
	static std::__ndk1::string get(std::__ndk1::string const&, std::vector<std::__ndk1::string> const&);
	static Localization* getCurrentLanguage();
    static void chooseLanguage(Localization const&);
    static void chooseLanguage(std::__ndk1::string const&);
	static std::__ndk1::vector<Localization*> mLanguages;
	static Localization* mCurrentLanguage;
};
namespace LocalizationSystem {
    std::__ndk1::vector<Localization*> getLocalizations();
    Localization* getLocalization(std::__ndk1::string CODE);
    std::__ndk1::string getLanguage(std::__ndk1::string CODE);
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getLocalizationStrings(std::__ndk1::string CODE);
    //std::string translate(Localization* lang, std::string str) {   
    //}
    //std::string translate(std::string lang, std::string str) {
    //}
    Localization* getCurrentLocalization();
    std::__ndk1::string getCurrentLanguage();
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getCurrentLocalizationStrings();
    /*std::string translateToCurrent(std::string str) {   
        return I18n::getCurrentLanguage()->_getStrings();
    }*/
    void chooseLanguage(std::__ndk1::string code);
    void chooseLanguage(Localization const& localization);
};