var PrefixPostfixTranslator = /** @class */ (function () {
    function PrefixPostfixTranslator(pre, post) {
        if (post === void 0) { post = "name"; }
        this._pointer = LocalizationSystem._createNativeTranslatorObj({ pre: pre, post: post });
    }
    PrefixPostfixTranslator.prototype.translateToCurrent = function (key) {
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
