class PrefixPostfixTranslator {
  private _pointer: number;
  constructor(pre: string | String, post: string | String = "name") {
    this._pointer = LocalizationSystem._createNativeTranslatorObj({pre: pre, post: post});
  }
  translateToCurrent(key: string | String) : string {
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
  
  translate(lang: string | String, key: string | String) : string {
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

namespace langMap {
	let de = "de_DE";
	let en = "en_US";
	let es = "es_ES";
	let fi = "fi_FI";
	let fr = "fr_FR";
	let ja = "ja_JP";
	let pt = "pt_BR";
	let ro = "ro_RO";
	let ru = "ru_RU";
	let zh = "zn_CN";
	let uk = "uk_UA";
}
function getFullLanguage(two_code: string) {
	return langMap[two_code] || "en_US";
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
