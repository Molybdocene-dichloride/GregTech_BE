var PrefixPostfixTranslator = /** @class */ (function () {
    function PrefixPostfixTranslator(pre, post) {
        if (post === void 0) { post = "name"; }
        this._pointer = LocalizationSystem._createNativeTranslatorObj({ pre: pre, post: post });
    }
    PrefixPostfixTranslator.prototype.translateToCurrent = function (key) {
        var r = key instanceof String;
        if (!(typeof key === 'string' || key instanceof String)) {
            Debug.error("error: Translation key must be String");
            return "";
        }
        else {
            return LocalizationSystem._translateToCurrent({ _pointer: this._pointer, key: key });
        }
    };
    /*translateToCurrentFormatted(key: String) : String {
      return LocalizationSystem._translateToCurrent(str);
    }*/
    PrefixPostfixTranslator.prototype.translate = function (lang, key) {
        if (!(typeof lang === 'string' || lang instanceof String)) {
            Debug.error("error: Translation lang must be String");
            return "";
        }
        else if (!(typeof key === 'string' || key instanceof String)) {
            Debug.error("error: Translation key must be String");
            return "";
        }
        else {
            return LocalizationSystem._translate({ _pointer: this._pointer, lang: lang, key: key });
        }
    };
    return PrefixPostfixTranslator;
}());
var ItemTranslator = new PrefixPostfixTranslator("item");
var TileTranslator = new PrefixPostfixTranslator("tile");
var langMap;
(function (langMap) {
    var de = "de_DE";
    var en = "en_US";
    var es = "es_ES";
    var fi = "fi_FI";
    var fr = "fr_FR";
    var ja = "ja_JP";
    var pt = "pt_BR";
    var ro = "ro_RO";
    var ru = "ru_RU";
    var zh = "zn_CN";
    var uk = "uk_UA";
})(langMap || (langMap = {}));
function getFullLanguage(two_code) {
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
function addInnerCoreTranslation(key) {
    var trans = {};
    for (var i in langMap) {
        trans[i] = LocalizationSystem.translate({ lang: langMap[i], key: key });
    }
    Translation.addTranslation(key, trans);
}
