#include <string>
#include <vector>
#include <map>
#include <stdio.h>
#include <android/log.h>

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
        Logger::debug("ytderf", lang.c_str());
        Logger::debug("ytderswe", patch::to_string<size_t>(file.find_last_of('/') + 1).c_str());
        Logger::debug("ytderswe", patch::to_string<size_t>(file.find_last_of('.')).c_str());
        std::__ndk1::ifstream inf(file);

        std::__ndk1::string strInput;

        std::__ndk1::ofstream fout(file + "gq");
        if (inf.is_open()) {
            while(std::__ndk1::getline(inf, strInput)) {

                std::__ndk1::string key = strInput.substr(0, strInput.find('='));
                std::__ndk1::string val = strInput.substr(strInput.find('=') + 1);
                //lang->_getStrings()[str] = val;
                fout << key.c_str();
                fout << val.c_str();
                fout << "\n";


                LocalizationSystem::insert(lang, key, val);
	        }
        } else {
            Logger::error("error", (std::__ndk1::string("cannot load file ") + file).c_str());
        }
        inf.close();
        fout.close();
    }
    void loadTranslationDir(std::__ndk1::string dir) {
        struct dirent *inf;
        DIR* d = opendir(dir.c_str());
        while((inf = readdir(d)) != false) {
            //readdir(d);
            loadTranslations(inf->d_name);
        }
        closedir(d);
    }
    std::__ndk1::string item = "item";
    std::__ndk1::string tile = "tile";
    std::__ndk1::string death = "death";
    std::__ndk1::string action = "action";
    std::__ndk1::string commands = "commands";
    std::__ndk1::string options = "options";
    std::__ndk1::string achievement = "achievement";
    std::__ndk1::string name_postfix_t = "name";

    template<std::__ndk1::string* pre, std::__ndk1::string* post = &name_postfix_t> class PrefixPostfixTranslator {
        std::__ndk1::string translateToCurrent(std::__ndk1::string str) {
            LocalizationSystem::translateToCurrent(*pre + str + *post);
        }
        std::__ndk1::string translate(Localization* lang, std::__ndk1::string str) {
            LocalizationSystem::translate(lang, *pre + str + *post);
        }
        std::__ndk1::string translate(std::__ndk1::string CODE, std::__ndk1::string str) {
            LocalizationSystem::translate(CODE, *pre + str + *post);
        }
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> translateToAll(std::__ndk1::string str) {
            LocalizationSystem::translateToAll(*pre + str + *post);
        }
    };
    typedef PrefixPostfixTranslator<&item> ItemTranslator;
    typedef PrefixPostfixTranslator<&tile> TileTranslator;
    typedef PrefixPostfixTranslator<&death, nullptr> DamageTranslator;
    typedef PrefixPostfixTranslator<&action> ActionTranslator;
    typedef PrefixPostfixTranslator<&commands> CommandsTranslator;
    typedef PrefixPostfixTranslator<&options> OptionsTranslator;
    typedef PrefixPostfixTranslator<&achievement> AchievementTranslator;

    class CustomLocalizationLoader : public Module { //load custom localization pairs to I18n
        public:
	    GTPipelineRenderer(const char* id): Module(id) {};
	    virtual void initialize() {	
            // any HookManager::addCallback calls must be in initialize method of a module
            // any other initialization also highly recommended to happen here
            DLHandleManager::initializeHandle("libminecraftpe.so", "mcpe");
        	HookManager::addCallback(SYMBOL("mcpe", "_ZN18OverworldDecorator12decorateOresEP11BlockSourceR6RandomRK8BlockPos"), LAMBDA((HookManager::CallbackController* controller), {
				controller->prevent();
				return 0;
			}, ), HookManager::CALL | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	    }
    };
}