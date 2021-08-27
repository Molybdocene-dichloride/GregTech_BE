#pragma once
#include <dirent.h>

#include <string>
#include <vector>

#include <stl/fstream>
//#include <stl/unordered_map>
#include <stl/string>
#include <stl/vector>
#include <stl/map>

#include <logger.h>
#include <mod.h>
#include <symbol.h>
#include <hook.h>

#include <innercore\item_registry.h>

#include <toString.hpp>

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
    std::__ndk1::string get(std::__ndk1::string&, std::vector<std::__ndk1::string> const&) const;
    std::__ndk1::string _getSimple(std::__ndk1::string) const;
	std::__ndk1::string getFullLanguageCode() const;
};
class I18n {
public:
    static Localization* getLocaleFor(std::__ndk1::string const&);
    //static Localization* get(std::__ndk1::string const&);
	static std::__ndk1::string get(std::__ndk1::string const&, std::vector<std::__ndk1::string> const&);
	static Localization* getCurrentLanguage();
    static void chooseLanguage(Localization const&);
    static void chooseLanguage(std::__ndk1::string const&);
	static std::__ndk1::vector<Localization*> mLanguages;
    static std::__ndk1::vector<std::__ndk1::string> mLanguageCodes;
    static std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getSupportedLanguageCodes();
	static Localization* mCurrentLanguage;
};
namespace LocalizationSystem {
    std::__ndk1::vector<Localization*> getLocalizations();
    Localization* getLocalization(std::__ndk1::string CODE);
    std::__ndk1::string getLanguage(std::__ndk1::string CODE);
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getLocalizationStrings(std::__ndk1::string CODE);
    std::__ndk1::string translate(Localization* lang, std::__ndk1::string str);
    std::__ndk1::string translate(std::__ndk1::string CODE, std::__ndk1::string str);
    void insert(Localization* lang, std::__ndk1::string str, std::__ndk1::string val);
    void insert(std::__ndk1::string CODE, std::__ndk1::string str, std::__ndk1::string val);
    Localization* getCurrentLocalization();
    std::__ndk1::string getCurrentLanguage();
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getCurrentLocalizationStrings();
    std::__ndk1::string translateToCurrent(std::__ndk1::string str);
    void insertToCurrent(std::__ndk1::string str, std::__ndk1::string val);
    void chooseLocalization(std::__ndk1::string code);
    void chooseLocalization(Localization const& localization);

    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAll(std::__ndk1::string str);

    void loadTranslations(std::__ndk1::string dir);
    void loadTranslationDir(std::__ndk1::string dir);

    extern std::__ndk1::string name_postfix_t;

    class PrefixPostfixTranslator {
        std::__ndk1::string pre;
        std::__ndk1::string post;
        public:
        PrefixPostfixTranslator(std::__ndk1::string pre, std::__ndk1::string post = name_postfix_t);
        std::__ndk1::string translateToCurrent(std::__ndk1::string str);
        std::__ndk1::string translateToCurrentFormatted(std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format);
        std::__ndk1::string translate(Localization* lang, std::__ndk1::string str);
        std::__ndk1::string translateFormatted(Localization* lang, std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format);
        std::__ndk1::string translate(std::__ndk1::string CODE, std::__ndk1::string str);
        std::__ndk1::string translateFormatted(std::__ndk1::string CODE, std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format);
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAll(std::__ndk1::string str);
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAllFormatted(std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format);
        ~PrefixPostfixTranslator();
    };

    extern std::__ndk1::map<std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>, PrefixPostfixTranslator*> trmap;
    
    extern PrefixPostfixTranslator* ItemTranslator;
    extern PrefixPostfixTranslator* TileTranslator;
    extern PrefixPostfixTranslator* DamageTranslator;
    extern PrefixPostfixTranslator* ActionTranslator;
    extern PrefixPostfixTranslator* CommandsTranslator;
    extern PrefixPostfixTranslator* OptionsTranslator;
    extern PrefixPostfixTranslator* AchievementTranslator;


    class CustomLocalizationLoadingModule : public Module { //load custom localization pairs to I18n
        public:
        CustomLocalizationLoadingModule(const char* id);
	    virtual void initialize();
    };
};