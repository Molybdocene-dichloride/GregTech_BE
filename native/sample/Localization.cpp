#include <string>
#include <vector>
#include <map>

#include <Localization.hpp>

namespace LocalizationSystem {
    std::__ndk1::vector<Localization*> getLocalizations() {
        return I18n::mLanguages;
    }
    Localization* getLocalization(std::__ndk1::string CODE) {
        return I18n::getLocaleFor(CODE);
    }
    std::__ndk1::string getLanguage(std::__ndk1::string CODE) {
        //Localization* ths = nullptr;
        return I18n::getLocaleFor(CODE)->getFullLanguageCode();
        /*for(short i = I18n::mLanguages.begin(); i < I18n::mLanguages.end(); ++i) {
            if(*it->getFullLanguageCode() == CODE) {
                ths = *it;
            }
        }*/
    }
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getLocalizationStrings(std::__ndk1::string CODE) {
        //Localization* ths = nullptr;
        return I18n::getLocaleFor(CODE)->_getStrings();
        /*for(short i = I18n::mLanguages.begin(); i < I18n::mLanguages.end(); ++i) {
            if(*it->getFullLanguageCode() == CODE) {
                ths = *it;
            }
        }*/
    }
    //std::string translate(Localization* lang, std::string str) {   
    //}
    //std::string translate(std::string lang, std::string str) {
    //}

    Localization* getCurrentLocalization() {
        return I18n::mCurrentLanguage;
    }
    std::__ndk1::string getCurrentLanguage() {
        Logger::debug("dd", patch::to_string<bool>(I18n::getCurrentLanguage()).c_str());
        return I18n::mCurrentLanguage->getFullLanguageCode();
    }
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>& getCurrentLocalizationStrings() {
        return I18n::mCurrentLanguage->_getStrings();
    }
    /*std::string translateToCurrent(std::string str) {   
        return I18n::getCurrentLanguage()->_getStrings();
    }*/

    void chooseLanguage(std::__ndk1::string code) {
        I18n::chooseLanguage(code);
    }
    void chooseLanguage(Localization const& localization) {
        I18n::chooseLanguage(localization);
    }
    /*std::vector<std::string> getStringTranslations(std::string str) {
        std::vector<std::string> vs;
        for(short i = I18n::mLanguages.begin(); i < I18n::mLanguages.end(); ++i) {
            vs.push_back(*it->)
        }
        return vs;
    }*/
}