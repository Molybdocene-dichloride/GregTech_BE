#include <string>
#include <vector>
#include <map>
#include <stdio.h>

#include <Localization.hpp>

namespace LocalizationSystem {
    std::__ndk1::vector<Localization*> getLocalizations() {
        return I18n::mLanguages;
    }
    Localization* getLocalization(std::__ndk1::string CODE) {
        return I18n::getLocaleFor(CODE);
    }
    std::__ndk1::string getLanguage(std::__ndk1::string CODE) {
        return I18n::getLocaleFor(CODE)->getFullLanguageCode();
    }
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getLocalizationStrings(std::__ndk1::string CODE) {
        return I18n::getLocaleFor(CODE)->_getStrings();
    }
    std::__ndk1::string translate(Localization* lang, std::__ndk1::string str) {
        return lang->_getStrings()[str];
    }
    std::__ndk1::string translate(std::__ndk1::string CODE, std::__ndk1::string str) {
         return I18n::getLocaleFor(CODE)->_getStrings()[str];
    }
    void insert(Localization* lang, std::__ndk1::string str, std::__ndk1::string val) {
        lang->_getStrings()[str] = val;
    }
    void insert(std::__ndk1::string CODE, std::__ndk1::string str, std::__ndk1::string val) {
         I18n::getLocaleFor(CODE)->_getStrings()[str] = val;
    }

    Localization* getCurrentLocalization() {
        return I18n::mCurrentLanguage;
    }
    std::__ndk1::string getCurrentLanguage() {
        return I18n::mCurrentLanguage->getFullLanguageCode();
    }
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getCurrentLocalizationStrings() {
        return I18n::mCurrentLanguage->_getStrings();
    }
    std::__ndk1::string translateToCurrent(std::__ndk1::string str) {   
        return I18n::getCurrentLanguage()->_getStrings()[str];
    }
    void insertToCurrent(std::__ndk1::string str, std::__ndk1::string val) {   
        I18n::getCurrentLanguage()->_getStrings()[str] = val;
    }

    void chooseLocalization(std::__ndk1::string code) {
        I18n::chooseLanguage(code);
    }
    void chooseLocalization(Localization const& localization) {
        I18n::chooseLanguage(localization);
    }
    //std::__ndk1::map<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>> memoized;
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAll(std::__ndk1::string str) {
        std::__ndk1::vector<Localization*>::iterator it;
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> vs;
        for(it = I18n::mLanguages.begin(); it != I18n::mLanguages.end(); ++it) {
            vs.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>((*it)->getFullLanguageCode(), (*it)->_getStrings()[str]));
        }
        std::__ndk1::vector<std::__ndk1::string>::iterator at;
        for(at = I18n::mLanguageCodes.begin(); at != I18n::mLanguageCodes.end(); ++at) {
            Logger::debug("derd", (*at).c_str());
             Logger::debug("uio", I18n::mLanguages[*at]->getFullLanguageCode().c_str());
        }
        return vs;
    }

    /*void loadTranslation(std::__ndk1::string file) {
        std::__ndk1::ifstream inf(file);
        if (inf != nullptr) {
            while (inf) {
		        std::__ndk1::string strInput;
		        std::__ndk1::getline(inf, strInput);

                std::__ndk1::string key = strInput.substr(0, strInput.find('=') - 1);
                std::__ndk1::string val = strInput.substr(strInput.find('=') + 1);
                Logger::debug("ytdd", key.c_str());
                Logger::debug("tydd", val.c_str());
                //lang->_getStrings()[str] = val;
	        }
        } else {
            Logger::error("error", file + "cannot load file");
        }
    }*/
    void loadTranslationDir(std::__ndk1::string dir) {
        //loadTranslation
    }
    std::__ndk1::string item = "item";
    std::__ndk1::string tile = "tile";
    std::__ndk1::string death = "death";
    std::__ndk1::string commands = "commands";
    std::__ndk1::string achievement = "achievement";
    std::__ndk1::string name_postfix_t = "name";

    template<std::__ndk1::string* pre, std::__ndk1::string* post = &name_postfix_t> class PrefixPostfixTranslator {};
    typedef PrefixPostfixTranslator<&item> ItemTranslator;
    typedef PrefixPostfixTranslator<&tile> TileTranslator;
    typedef PrefixPostfixTranslator<&death, nullptr> DamageTranslator;
    typedef PrefixPostfixTranslator<&death> ActionTranslator;
    typedef PrefixPostfixTranslator<&commands> CommandsTranslator;
    typedef PrefixPostfixTranslator<&death> OptionsTranslator;
    typedef PrefixPostfixTranslator<&achievement> AchievementTranslator;
}