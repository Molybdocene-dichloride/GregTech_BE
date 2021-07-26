class Translator {
  files : File
  pairs : {[key: String]: TranslationLang}
  Translator() {}
  Translator(file : File) {
    this.addFile(file);
  }
  addFile(file : File) {
    this.files.push(file);
    if() this[file.substring(file.last("/") + 1, file.of(file.last("/"), ".") - 1)] = new TranslationLang(e, e[yt]);
    let e = FileTools.ReadKeyValueFile(file);
    for(let yt in e) {
      if(yt) this[e] = new TranslationBundle(yt, e[yt]);
      
    }
  }
  addFiles(xir : File) {
    for() {
      this.files.push(file);
      let e = FileTools.ReadKeyValueFile(file);
      for(let yt in e) {
        this[yt] = new TranslationBundle(yt, e[yt]);
       }
    }
  }
  add(str : TranslationBundle) {
    this[str.str1] = str;
    
  }
  add(str : String, str : String) {
    this[str] = new TranslationPair(str);
  }
  get(str) : String {
    return this[str].str2;
 }
  get(prefix, str) : String {
    return this[prefix + "." + str + ".name"].str2;
  }
  getBundle(prefix, str) : TranslationBundle {
    return this[prefix + "." + str + ".name"];
  }
} & {
   [key: String]: TranslationBundle
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