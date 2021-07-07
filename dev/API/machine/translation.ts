namespace TranslationDictionary {
  add(str : String) {
    this[str] = new TranslationPair();
  }
  add(str : String, str : String) {
    this[str] = new TranslationPair(str);
  }
  add(str : String, str : TranslationPair) {
    this[str] = str;
  }
  getByPrefix(prefix, str) {
    return this[prefix + "." + str + ".name"];
  }
} & {
   [key: string]: String
}

interface ITranslator {
  prefix
  get(str) {
    TranslationDictionary.getByPrefix(prefix)
  }
}