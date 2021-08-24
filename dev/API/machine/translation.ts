class PrefixPostfixTranslator {
  private _pointer: number;
  constructor(pre: String, post: String = ".name") {
    this._pointer = LocalizationSystem._createNativeTranslatorObj({pre: pre, post: post});
  }
  translateToCurrent(key: String) : String {
    return LocalizationSystem._translateToCurrent({_pointer: this._pointer, key: key});
  }
  /*translateToCurrentFormatted(key: String) : String {
    return LocalizationSystem._translateToCurrent(str);
  }*/
  
  translate(lang: String, key: String) : String {
    return LocalizationSystem._translate({_pointer: this._pointer, lang: lang, key: key});
  }
  /*translateFormatted(lang: String, key: String) : String {
    return LocalizationSystem._translateToCurrent(str);
  }*/
}

let ItemTranslator = new PrefixPostfixTranslator("item");
let TileTranslator = new PrefixPostfixTranslator("tile");

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