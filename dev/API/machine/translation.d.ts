declare class PrefixPostfixTranslator {
    _pointer: number;
    PrefixPostfixTranslator(pre: String, post: String): void;
    translateToCurrent(key: String): String;
    translate(lang: String, key: String): String;
}
