#pragma once
#include <string>
#include <vector>

class Localization {
public:
	char filler[4];
	std::string fullLanguageCode; // 4 - getFullLanguageCode from 1.13.0.6
	std::map<std::string, std::string> strings; // 8 - _getStrings from 1.13.0.6
	std::map<std::string, std::string>& _getStrings() const;
	std::string getFullLanguageCode() const;
};
class I18n {
public:
	static std::string get(std::string const&, std::vector<std::string> const&);
	static Localization* getCurrentLanguage();
    static void chooseLanguage(Localization const&);
    static void chooseLanguage(std::string)
	static std::vector<Localization*> mLanguages;
	static Localization* mCurrentLanguage;
};
namespace LocalizationSystem {
    std::vector<Localization*> getLocalizations() {
        return I18n::mLanguages;
    }
    std::vector<Localization*> getLocalization(std::string CODE) {
        Localization* ths = nullptr;
        for(short i = I18n::mLanguages.begin(); i < I18n::mLanguages.end(); ++i) {
            if(*it->getFullLanguageCode() == CODE) {
                ths = *it;
            }
        }
        return ths;
    }
    std::vector<Localization*> getLanguage(std::string CODE) {
        Localization* ths = nullptr;
        for(short i = I18n::mLanguages.begin(); i < I18n::mLanguages.end(); ++i) {
            if(*it->getFullLanguageCode() == CODE) {
                ths = *it;
            }
        }
        return ths->getFullLanguageCode();
    }
    std::vector<Localization*> getLocalizationStrings(std::string CODE) {
        Localization* ths = nullptr;
        for(short i = I18n::mLanguages.begin(); i < I18n::mLanguages.end(); ++i) {
            if(*it->getFullLanguageCode() == CODE) {
                ths = *it;
            }
        }
        return ths->_getStrings();
    }
    Localization* getCurrentLocalization() {
        return I18n::getCurrentLanguage();
    }
    std::string getCurrentLanguage() {
        return I18n::getCurrentLanguage()->getFullLanguageCode();
    }
    std::map<std::string, std::string>& getCurrentLocalizationStrings() {
        return I18n::getCurrentLanguage()->_getStrings();
    }
    void chooseLanguage(std::string code) {
        I18n::chooseLanguage(code);
    }
    void chooseLanguage(Localization const& localization) {
        I18n::chooseLanguage(localization);
    }
    std::map<std::string, std::string>& getCurrentLanguageStrings() {
        return I18n::getCurrentLanguage()->_getStrings();
    }
    //std::string translate(Localization* lang, std::string str) {   
    //}
    //std::string translate(std::string lang, std::string str) {
    //}
    //std::vector<Localization*> getStringTranslations(std::string str) {
    //}
}