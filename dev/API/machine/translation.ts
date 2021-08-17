class PrefixPostfixTranslator {
  obj: number,
  PrefixPostfixTranslator(pre, post) {
    LocalizationSystem._createNativeObj({pre: pre, post: post});
  }
  translateToCurrent(str) : String {
    return LocalizationSystem._translateToCurrent({_pointer: , str});
  }
  /*translateToCurrentFormatted(prefix, str) : String {
    return LocalizationSystem._translateToCurrent(str);
  }*/
  
  translate(str) : String {
    return LocalizationSystem._translateToCurrent({str});
  }
  /*translateFormatted(prefix, str) : String {
    return LocalizationSystem._translateToCurrent(str);
  }*/
}

class TranslationBundle {
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
}