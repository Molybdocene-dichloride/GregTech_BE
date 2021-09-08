#include <stdio.h>

#include <map>

#include <mcpe/item/ItemStack.hpp>
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
    std::__ndk1::string translate(Localization* lang, std::__ndk1::string key) {
        return lang->_getStrings()[key];
    }
    //std::__ndk1::string translateFormatted(std::__ndk1::string CODE, std::__ndk1::string key) {
    //I18n::getLocaleFor(CODE)->get(key, std::__ndk1::vector<String>())
    //}
    std::__ndk1::string translate(std::__ndk1::string CODE, std::__ndk1::string key) {
        if(custom.find(CODE) == custom.end() || custom[CODE].find(key) == custom[CODE].end()) return I18n::getLocaleFor(CODE)->_getStrings()[key];
        Logger::debug(custom[CODE][key].c_str(), "sain");
        return custom[CODE][key];
    }
    void insert(Localization* lang, std::__ndk1::string key, std::__ndk1::string val) {
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> ma;
        if(custom.find(lang->getFullLanguageCode()) == custom.end()) custom.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>>(lang->getFullLanguageCode(), ma));
        custom[lang->getFullLanguageCode()].insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(key, val));
        if(lang->getFullLanguageCode() == LocalizationSystem::getCurrentLanguage() || lang->getFullLanguageCode() == std::__ndk1::string("en_US")) lang->_getStrings()[key] = val;
    }
    void insert(std::__ndk1::string CODE, std::__ndk1::string key, std::__ndk1::string val) {
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> ma;
        if(custom.find(CODE) == custom.end()) custom.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>>(CODE, ma));
        custom[CODE].insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(key, val));
        if(CODE == LocalizationSystem::getCurrentLanguage() || CODE == std::__ndk1::string("en_US")) I18n::getLocaleFor(CODE)->_getStrings()[key] = val;
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
    std::__ndk1::string translateToCurrent(std::__ndk1::string key) {   
        if(custom.find(I18n::mCurrentLanguage->getFullLanguageCode()) == custom.end() || custom[I18n::mCurrentLanguage->getFullLanguageCode()].find(key) == custom[I18n::mCurrentLanguage->getFullLanguageCode()].end()) return I18n::getCurrentLanguage()->_getStrings()[key];
        Logger::debug(custom[I18n::mCurrentLanguage->getFullLanguageCode()][key].c_str(), "sain");
        return custom[I18n::mCurrentLanguage->getFullLanguageCode()][key];
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

    PrefixPostfixTranslator::PrefixPostfixTranslator(std::__ndk1::string pre, std::__ndk1::string post) {
        this->pre = pre;
        this->post = post;

        LocalizationSystem::trmap.insert(std::__ndk1::pair<std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>, PrefixPostfixTranslator*>(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(this->pre, this->post), this));
    }
    std::__ndk1::string PrefixPostfixTranslator::translateToCurrent(std::__ndk1::string key) {
        Logger::debug("89feh", (pre + "." + key + "." + post).c_str());
        std::__ndk1::string str = pre + "." + key;
        if(!post.empty()) str += "." + post;
        return LocalizationSystem::translateToCurrent(str);
    }
    std::__ndk1::string PrefixPostfixTranslator::translateToCurrentFormatted(std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
        return patch::to_formatedString(LocalizationSystem::translateToCurrent(pre + "." + str + "." + post), format);
    }
        
    std::__ndk1::string PrefixPostfixTranslator::translate(Localization* lang, std::__ndk1::string key) {
        Logger::debug("89gh", (pre + "." + key + "." + post).c_str());
        std::__ndk1::string str = pre + "." + key;
        if(!post.empty()) str += "." + post;
        return LocalizationSystem::translate(lang, str);
    }
    std::__ndk1::string PrefixPostfixTranslator::translateFormatted(Localization* lang, std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
        return patch::to_formatedString(LocalizationSystem::translate(lang, pre + "." + str + "." + post), format);
    }

    std::__ndk1::string PrefixPostfixTranslator::translate(std::__ndk1::string CODE, std::__ndk1::string key) {
        Logger::debug("89eh", (pre + "." + key + "." + post).c_str());
        std::__ndk1::string str = pre + "." + key;
        if(!post.empty()) str += "." + post;
        return LocalizationSystem::translate(CODE, str);
    }
    std::__ndk1::string PrefixPostfixTranslator::translateFormatted(std::__ndk1::string CODE, std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
        return patch::to_formatedString(LocalizationSystem::translate(CODE, pre + "." + str + "." + post), format);
    }

    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> PrefixPostfixTranslator::translateToAll(std::__ndk1::string str) {
        return LocalizationSystem::translateToAll(pre + "." + str + "." + post);
    }
    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> PrefixPostfixTranslator::translateToAllFormatted(std::__ndk1::string str, std::__ndk1::vector<patch::ICell*> format) {
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> mp;
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string> bstr = LocalizationSystem::translateToAll(pre + "." + str + "." + post);
        std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>::iterator it;
        for(it = bstr.begin(); it != bstr.end(); ++it) {
            mp.insert(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(it->first, patch::to_formatedString(it->second, format)));
        }
        return mp;
    }
    PrefixPostfixTranslator::~PrefixPostfixTranslator() {
        LocalizationSystem::trmap.erase(std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>(this->pre, this->post));
    }

    std::__ndk1::map<std::__ndk1::pair<std::__ndk1::string, std::__ndk1::string>, PrefixPostfixTranslator*> trmap;
    
    PrefixPostfixTranslator* ItemTranslator = new PrefixPostfixTranslator("item");
    PrefixPostfixTranslator* TileTranslator = new PrefixPostfixTranslator("tile");
    PrefixPostfixTranslator* DamageTranslator = new PrefixPostfixTranslator("death", "");
    PrefixPostfixTranslator* ActionTranslator = new PrefixPostfixTranslator("action");
    PrefixPostfixTranslator* CommandsTranslator = new PrefixPostfixTranslator("commands");
    PrefixPostfixTranslator* OptionsTranslator = new PrefixPostfixTranslator("options");
    PrefixPostfixTranslator* AchievementTranslator = new PrefixPostfixTranslator("achievement");

    std::__ndk1::map<std::__ndk1::string, std::__ndk1::string>::iterator it;

    CustomLocalizationLoadingModule::CustomLocalizationLoadingModule(const char* id) : Module(id) {};
    void CustomLocalizationLoadingModule::initialize() {
        DLHandleManager::initializeHandle("libminecraftpe.so", "mcpe");
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

namespace FurnaceSystem {
    std::__ndk1::map<ItemStackInfo, ItemStackInfo> custom;
    void addFurnaceRecipes(ItemStackInfo& item1, ItemStackInfo& item2) {
		custom.insert(std::__ndk1::pair<ItemStackInfo, ItemStackInfo>(item1, item2));
	}
    void addFurnaceRecipes(ItemStack& item1, ItemStack& item2) {
		custom.insert(std::__ndk1::pair<ItemStackInfo, ItemStackInfo>(ItemStackInfo(item1), ItemStackInfo(item2)));
	}
    void addFurnaceRecipes(Item& item1, int data1, int count1, Item& item2, int data2, int count2) {
        custom.insert(std::__ndk1::pair<ItemStackInfo, ItemStackInfo>(ItemStackInfo(item1, data1, count1), ItemStackInfo(item2, data1, count1)));
	}
	void addFurnaceRecipes(int id1, int data1, int count1, int id2, int data2, int count2) {
        custom.insert(std::__ndk1::pair<ItemStackInfo, ItemStackInfo>(ItemStackInfo(id1, data1, count1), ItemStackInfo(id1, data1, count1)));
	}
    class GTFurnaceModule : public Module { //adding custom recipes to furnace
    public:
	GTFurnaceModule(const char* id): Module(id) {};
	    virtual void initialize() {	
        	HookManager::addCallback(SYMBOL("mcpe", "_ZNK7Recipes22getFurnaceRecipeResultERK13ItemStackBaseRK12HashedString"), LAMBDA((HookManager::CallbackController* controller, ItemStackBase const& item, HashedString const& prefix), {
				Logger::debug("gh", patch::to_string<bool>(controller->hasResult()).c_str());
                //Logger::debug("oop", patch::to_string<bool>(((ItemStackBase*)controller->getResult())->).c_str());
                //if(custom.find(item) != m.end()) {
					//return custom[item];
				//}
				//return controller->getResult();
				//return controller->call<ItemStackBase, ItemStackBase const&, HashedString>(item, prefix);
			}, ), HookManager::RETURN | HookManager::LISTENER | HookManager::CONTROLLER | HookManager::RESULT);
	    }
    };
}
