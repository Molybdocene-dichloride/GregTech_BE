var PrefixPostfixTranslator = /** @class */ (function () {
    function PrefixPostfixTranslator() {
    }
    PrefixPostfixTranslator.prototype.PrefixPostfixTranslator = function (pre, post) {
        this._pointer = LocalizationSystem._createNativeObj({ pre: pre, post: post });
    };
    PrefixPostfixTranslator.prototype.translateToCurrent = function (key) {
        return LocalizationSystem._translateToCurrent({ _pointer: this._pointer, key: key });
    };
    /*translateToCurrentFormatted(key: String) : String {
      return LocalizationSystem._translateToCurrent(str);
    }*/
    PrefixPostfixTranslator.prototype.translate = function (lang, key) {
        return LocalizationSystem._translate({ _pointer: this._pointer, lang: lang, key: key });
    };
    return PrefixPostfixTranslator;
}());
/*class TranslationBundle {
  unlocalized : String;
  TranslationBundle() {}
  TranslationBundle(unlocalized : String, localized : TranslationBundle) {
    set(unlocalized, localized);
  }
  add(localized : TranslationBundle) {
    //this.
    for(let yt in e) {
      this[yt] = e[yt];
    }
  }
  add(localized : TranslationPair) {
      this[localized.unlocalized] = localized;
      unlocalized
  }
  add(unlocalized : String, localized : String) {
      this[unlocalized] = new TranslationPair(unlocalized, localized);
  }
} & {
   [key: String]: TranslationPair
}

class TranslationLang {
  lang : String;
  TranslationLang() {}
  TranslationLang(unlocalized : String, localized : TranslationLang) {
    add(unlocalized, localized);
  }
  add(localized : TranslationLang) {
    //this.unlocalized = localized.unlocalized;
    for(let yt in e) {
      this[yt] = e[yt];
    }
  }
  add(localized : TranslationPair) {
      this[localized.unlocalized] = localized;
  }
  add(unlocalized : String, localized : String) {
      this[unlocalized] = new TranslationPair(unlocalized, localized);
  }
} & {
   [key: String]: TranslationPair
}

class TranslationPair {
  unlocalized : String;
  localized : String;
  lang : String;
  TranslationPair() {}
  TranslationPair(unlocalized : String, localized : String, lang: String) {
    set(unlocalized, localized);
    this.lang = lang;
  }
  set(unlocalized : String, localized : String) {
    this.unlocalized = unlocalized;
    this.localized = localized;
  }
}*/ 
