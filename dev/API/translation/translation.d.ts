declare class PrefixPostfixTranslator {
    private _pointer;
    constructor(pre: String, post?: String);
    translateToCurrent(key: String): String;
    translate(lang: String, key: String): String;
}
declare let ItemTranslator: PrefixPostfixTranslator;
declare let TileTranslator: PrefixPostfixTranslator;
