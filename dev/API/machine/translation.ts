class PrefixPostfixTranslator {
  Translator(pre, post) {
    LocalizationSystem.createNativeObj(pre, post);
  }
  translateToCurrent(str) : String {
    return LocalizationSystem.translateToCurrent(str);
  }
  translateToCurrentFormatted(prefix, str) : String {
    return LocalizationSystem.translateToCurrent(str);
  }
  
  translate(str) : String {
    return LocalizationSystem.translateToCurrent(str);
  }
  translateFormatted(prefix, str) : String {
    return LocalizationSystem.translateToCurrent(str);
  }
  
  translateAll(str) : String {
    return LocalizationSystem.translateToAll(str);
  }
  translateAllFormatted(prefix, str) : String {
    return LocalizationSystem.translateToAll(str);
  }
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