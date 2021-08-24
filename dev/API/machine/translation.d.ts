declare class PrefixPostfixTranslator {
    _pointer: number;
    constructor(pre: String, post: String);
    translateToCurrent(key: String): String;
    translate(lang: String, key: String): String;
}
