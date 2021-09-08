declare class PrefixPostfixTranslator {
    private _pointer;
    constructor(pre: string | String, post?: string | String);
    translateToCurrent(key: string | String): string;
    translate(lang: string | String, key: string | String): string;
}
declare const ItemTranslator: PrefixPostfixTranslator;
declare const TileTranslator: PrefixPostfixTranslator;
declare namespace langMap {
}
declare function getFullLanguage(two_code: string): any;
declare function loadUsingBuildConfig(): void;
declare function addInnerCoreTranslation(key: string): void;
