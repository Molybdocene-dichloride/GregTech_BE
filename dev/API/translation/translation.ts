class PrefixPostfixTranslator {
  private _pointer: number;
  constructor(pre: String, post: String = "name") {
    this._pointer = LocalizationSystem._createNativeTranslatorObj({pre: pre, post: post});
  }
  translateToCurrent(key: String) : String {
    if (!(typeof key === 'string' || key instanceof String)) {
      Debug.error("error: Translation key must be String");
      return "";
    } else {
      return LocalizationSystem._translateToCurrent({_pointer: this._pointer, key: key});
    }
  }
  /*translateToCurrentFormatted(key: String) : String {
    return LocalizationSystem._translateToCurrent(str);
  }*/
  
  translate(lang: String, key: String) : String {
    if(!(typeof lang === 'string' || lang instanceof String)) {
      Debug.error("error: Translation lang must be String");
      return "";
    } else if(!(typeof key === 'string' || key instanceof String)) {
      Debug.error("error: Translation key must be String");
      return "";
    } else {
      return LocalizationSystem._translate({_pointer: this._pointer, lang: lang, key: key});
    }
  }
  /*translateFormatted(lang: String, key: String) : String {
    return LocalizationSystem._translateToCurrent(str);
  }*/
}

const ItemTranslator = new PrefixPostfixTranslator("item");
const TileTranslator = new PrefixPostfixTranslator("tile");

function loadUsingBuildConfig(): void {
    for(let i = 0; i < __mod__.buildConfig.resourceDirs.size(); i++) {
        Logger.Log(__mod__.buildConfig.resourceDirs.get(i).resourceType, "ссяв");
        if(__mod__.buildConfig.resourceDirs.get(i).resourceType == "resource") {
            Logger.Log(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path, "pound");
            if(FileTools.isExists(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path)) {
                Logger.Log(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/", "pAZ");
                if(FileTools.isExists(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/")) LocalizationSystem.loadTranslationDir({path: __mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/"});
            }
        }
    }
}
namespace langMap {
	de = "de_DE";
	en = "en_US";
	es = "es_ES";
	fi = "fi_FI";
	fr = "fr_FR";
	ja = "ja_JP";
	pt = "pt_BR";
	ro = "ro_RO";
	ru = "ru_RU";
	zh = "zn_CN";
	uk = "uk_UA";
}
function getFullLanguage(2code: string) {
	return langMap[2code] || "en_US";
}

function loadUsingBuildConfig() {
    for (var i = 0; i < __mod__.buildConfig.resourceDirs.size(); i++) {
        if (__mod__.buildConfig.resourceDirs.get(i).resourceType == "resource") {
            if (FileTools.isExists(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path)) {
                Logger.Log(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/", "pAZ");
                if (FileTools.isExists(__mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/"))
                    LocalizationSystem.loadTranslationDir({ path: __mod__.dir + __mod__.buildConfig.resourceDirs.get(i).path + "lang/" });
            }
        }
    }
}
function addInnerCoreTranslation(key: string) {
	let trans = {};
	for(let i in langMap) {
		trans[i] = LocalizationSystem.translate({lang: langMap[i], key: key});
	}
    Translation.addTranslation(key, trans);
}
