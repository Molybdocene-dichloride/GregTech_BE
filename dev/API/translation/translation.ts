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

let ItemTranslator = new PrefixPostfixTranslator("item");
let TileTranslator = new PrefixPostfixTranslator("tile");