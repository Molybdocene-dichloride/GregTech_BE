#include <stdio.h>

#include <map>

#include <Localization.hpp>

namespace LocalizationSystem {
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>> custom;
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
    void insert(Localization* lang, std::__ndk1::string key, std::__ndk1::string val) {
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> ma;
        if(custom.find(lang->getFullLanguageCode()) == custom.end()) custom.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>>(lang->getFullLanguageCode(), ma));
        custom[lang->getFullLanguageCode()].insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(key, val));
        if(lang->getFullLanguageCode() == LocalizationSystem::getCurrentLanguage() || lang->getFullLanguageCode() == "en_US") lang->_getStrings()[key] = val;
    }
    void insert(std::__ndk1::string CODE, std::__ndk1::string key, std::__ndk1::string val) {
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> ma;
        if(custom.find(CODE) == custom.end()) custom.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>>(CODE, ma));
        custom[CODE].insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(key, val));
        if(CODE == LocalizationSystem::getCurrentLanguage() || CODE == "en_US") I18n::getLocaleFor(CODE)->_getStrings()[key] = val;
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
    void insertToCurrent(std::__ndk1::string key, std::__ndk1::string val) {
        custom[LocalizationSystem::getCurrentLanguage()].insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(key, val));  
        I18n::getCurrentLanguage()->_getStrings()[key] = val;
    }

    void chooseLocalization(std::__ndk1::string code) {
        I18n::chooseLanguage(code);
    }
    void chooseLocalization(Localization const& localization) {
        I18n::chooseLanguage(localization);
    }
    //std::__ndk1::map<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>> memoized;
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAll(std::__ndk1::string str) {
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> vs;
        std::__ndk1::vector<std::__ndk1::string>::iterator at;
        for(at = I18n::mLanguageCodes.begin(); at != I18n::mLanguageCodes.end(); ++at) {
            LocalizationSystem::chooseLocalization(*at);
            Logger::debug("derd", (*at).c_str());
            Logger::debug("uio", I18n::getLocaleFor(*at)->getFullLanguageCode().c_str());
            //Logger::debug("SSSA", I18n::getLocaleFor(*at)->_getStrings()[str].c_str());
            vs.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(I18n::getLocaleFor(*at)->getFullLanguageCode(), I18n::getLocaleFor(*at)->_getStrings()[str]));
        }
        return vs;
    }
    void loadTranslations(std::__ndk1::string file) {
        std::__ndk1::string lang = file.substr(file.find_last_of('/') + 1, file.find_last_of('.') - file.find_last_of('/') - 1);
        Logger::debug("zcatped", file.c_str());
        Logger::debug("ytderf", lang.c_str());
        Logger::debug("ytderswe", patch::to_string<size_t>(file.find_last_of('/') + 1).c_str());
        Logger::debug("ytderswe", patch::to_string<size_t>(file.find_last_of('.')).c_str());
        std::__ndk1::ifstream inf(file);

        std::__ndk1::string strInput;

        if (inf.is_open()) {
            while(std::__ndk1::getline(inf, strInput)) {

                std::__ndk1::string key = strInput.substr(0, strInput.find('='));
                std::__ndk1::string val = strInput.substr(strInput.find('=') + 1);
                //lang->_getStrings()[str] = val;

                LocalizationSystem::insert(lang, key, val);
	        }
        } else {
            Logger::error("error", (std::__ndk1::string("cannot load file ") + file).c_str());
        }
        inf.close();
    }
    void loadTranslationDir(std::__ndk1::string dir) {
        DIR* d = opendir(dir.c_str());
        struct dirent *inf;
        while((inf = readdir(d)) != false) {
            if(inf->d_name == "..") continue;
            if(inf->d_name == ".") continue;
            loadTranslations(dir + inf->d_name);
        }
        closedir(d);
    }
    std::__ndk1::string name_postfix_t = "name";

    class PrefixPostfixTranslator {
        std::__ndk1::string pre;
        std::__ndk1::string post;
        public:
        PrefixPostfixTranslator(std::__ndk1::string pre, std::__ndk1::string post = name_postfix_t) {
            this->pre = pre;
            this->post = post;
        }
        std::__ndk1::string translateToCurrent(std::__ndk1::string str) {
            return LocalizationSystem::translateToCurrent(pre + "." + str + "." + post);
        }
        std::__ndk1::string translateToCurrentFormatted(std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
            return patch::to_formatedString(LocalizationSystem::translateToCurrent(pre + "." + str + "." + post), format);
        }
        
        std::__ndk1::string translate(Localization* lang, std::__ndk1::string str) {
            return LocalizationSystem::translate(lang, pre + "." + str + "." + post);
        }
        std::__ndk1::string translateFormatted(Localization* lang, std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
            return patch::to_formatedString(LocalizationSystem::translate(lang, pre + "." + str + "." + post), format);
        }

        std::__ndk1::string translate(std::__ndk1::string CODE, std::__ndk1::string str) {
            return LocalizationSystem::translate(CODE, pre + "." + str + "." + post);
        }
        std::__ndk1::string translateFormatted(std::__ndk1::string CODE, std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
            return patch::to_formatedString(LocalizationSystem::translate(CODE, pre + "." + str + "." + post), format);
        }

        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAll(std::__ndk1::string str) {
            return LocalizationSystem::translateToAll(pre + "." + str + "." + post);
        }
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAllFormatted(std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
            std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> mp;
            std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> bstr = LocalizationSystem::translateToAll(pre + "." + str + "." + post);
            std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>::iterator it;
            for(it = bstr.begin(); it != bstr.end(); ++it) {
                mp.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(it->first, patch::to_formatedString(it->second, format)));
            }
            return mp;
        }
    };
    PrefixPostfixTranslator ItemTranslator("item");
    PrefixPostfixTranslator TileTranslator("tile");
    PrefixPostfixTranslator DamageTranslator("death", "");
    PrefixPostfixTranslator ActionTranslator("action");
    PrefixPostfixTranslator CommandsTranslator("commands");
    PrefixPostfixTranslator OptionsTranslator("options");
    PrefixPostfixTranslator AchievementTranslator("achievement");

    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>::iterator it;

    CustomLocalizationLoadingModule::CustomLocalizationLoadingModule(const char* id) : Module(id) {};
    void CustomLocalizationLoadingModule::initialize() {
        HookManager::addCallback(SYMBOL("mcpe", "_ZN4I18n14chooseLanguageERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE"), LAMBDA((HookManager::CallbackController* controller), {
			for(it = custom[LocalizationSystem::getCurrentLanguage()].begin(); it != custom[LocalizationSystem::getCurrentLanguage()].end(); ++it) {
                LocalizationSystem::insertToCurrent(it->first, it->second);
            }
            for(it = custom["en_US"].begin(); it != custom["en_US"].end(); ++it) {
                LocalizationSystem::insert("en_US", it->first, it->second);
            }
			return 0;
		}, ), HookManager::RETURN | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	}
}